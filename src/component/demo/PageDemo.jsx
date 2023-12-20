import { Button, notification } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { getDetailExamById } from "../api/exam";
import ModalConfirmSubmit from "../modal/ModalConfirmSubmit";
import ModalNextSection from "../modal/ModalNextSection";
import FormQuestionDemo from "./FormQuestionDemo";
import { useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";

function PageDemo(props) {
  const { data, dispatch } = useContext(AppContext);
  const { typeSection } = data;
  const location = useLocation();
  const typeExam = location.state;
  const [listening, setListening] = useState(null);
  const [reading, setReading] = useState(null);
  const [writing, setWriting] = useState(null);
  const [speaking, setSpeaking] = useState(null);
  const navigate = useNavigate();
  const [section, setSection] = useState(null);
  const [firstReading, setFirstReading] = useState(null);
  const [firstWriting, setFirstWriting] = useState(null);
  const [firstSpeaking, setFirstSpeaking] = useState(null);
  const [type, setType] = useState(typeSection);
  const [isContinue, setIsContinue] = useState(false);
  // const [totalChoice, setTotalChoice] = useState(0);
  // const [listSection ,setListSection] = useState([])
  const [timeExam, setTimeExam] = useState("test");
  // const [time, setTime] = useState(40);
  const { examId } = useParams();
  const { typeInSection } = useParams();

  const [key, setKey] = useState(null);
  const handleGetData = async () => {
    const res = await getDetailExamById(examId);
    try {
      console.log(res?.data?.timeExam);
      setTimeExam(res?.data?.timeExam);
      // localStorage.setItem("timeSection", JSON.stringify( (res?.data?.timeExam === "minitest") ? 25 :45));
      // notification.success({message : "1"})

      const listListening = res?.data?.sections.filter(
        (i) => i.type === "listening"
      );
      setSection(listListening?.length > 0 ? listListening[0] : null);
      setKey(listListening?.length > 0 ? listListening[0]?.id : null);
      setListening(listListening);

      const sectionList = res?.data?.sections.filter(
        (i) => i.type === typeInSection
      );
      setSection(sectionList?.length > 0 ? sectionList[0] : null);
      setKey(sectionList?.length > 0 ? sectionList[0]?.id : null);

      const listReading = res?.data?.sections.filter(
        (i) => i.type === "reading"
      );
      setFirstReading(listReading?.length > 0 ? listReading[0] : null);
      setReading(listReading);

      const listWriting = res?.data?.sections.filter(
        (i) => i.type === "writing"
      );
      setFirstWriting(listWriting?.length > 0 ? listWriting[0] : null);
      setWriting(listWriting);

      const listSpeaking = res?.data?.sections.filter(
        (i) => i.type === "speaking"
      );
      setFirstSpeaking(listSpeaking?.length > 0 ? listSpeaking[0] : null);
      setSpeaking(listSpeaking);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
    const time = timeExam === "minitest" ? 25 : 45;
    localStorage.setItem("timeSection", JSON.stringify(time));
    // const time = ;
    // const time
    // localStorage.setItem("typeSection", JSON.stringify("listening"));
  }, []);

  const handleShowSection = (data, type) => {
    console.log("data is :", data);
    setSection(data);
    setType(type);
    setKey(data.id);
  };
  const handleConfirmNextSection = () => {
    if (type !== "speaking") {
      setIsContinue(true);
      dispatch({ type: "openModalNextSection" });
    } else {
      const answerUser = JSON.parse(localStorage.getItem("responseUsers"));
      localStorage.setItem(`responsewriting`, JSON.stringify(answerUser));
      localStorage.removeItem("responseUsers");
      dispatch({ type: "openModalSubmit" });
    }
  };
  const handleChangeType = () => {
    switch (type) {
      case "listening":
        navigate(`/exam/${examId}/reading`);
        setSection(firstReading);
        const time =
          timeExam === "minitest" ? 30 : typeExam === "TOEIC" ? 75 : 60;
        localStorage.setItem(
          "timeSection",
          JSON.stringify(timeExam === "minitest" ? 30 : time)
        );
        setKey(firstReading?.id);
        localStorage.setItem("typeSection", JSON.stringify("reading"));

        dispatch({ type: "setChangeTimeSection", payload: true });
        setType("reading");
        break;

      case "reading":
        navigate(`/exam/${examId}/writing`);
        setSection(firstWriting);

        localStorage.setItem(
          "timeSection",
          JSON.stringify(timeExam === "minitest" ? 20 : 60)
        );
        dispatch({ type: "setChangeTimeSection", payload: true });
        localStorage.setItem("typeSection", JSON.stringify("writing"));

        setKey(firstWriting?.id);
        setType("writing");
        break;

      case "writing":
        navigate(`/exam/${examId}/speaking`);
        localStorage.setItem("timeSection", JSON.stringify(13));
        dispatch({ type: "setChangeTimeSection", payload: true });
        localStorage.setItem("typeSection", JSON.stringify("speaking"));
        setKey(firstSpeaking?.id);

        setSection(firstSpeaking);
        setType("speaking"); // or set to the appropriate value
        break;
      default:
        return null;
    }

    const answerUser = JSON.parse(localStorage.getItem("responseUsers"));
    localStorage.setItem(`response${type}`, JSON.stringify(answerUser));
    localStorage.removeItem("responseUsers");
    dispatch({ type: "closeModalNextSection" });
    console.log(firstReading);
  };

  return (
    <>
      <div>
        <div className="pb-[5%] max-w-[1200px] mx-auto justify-center">
          <FormQuestionDemo type={type} section={section} typeExam={typeExam} />
          {/* {handleTest} */}
        </div>

        <div className="w-full">
          <div className="w-full py-2 bg-slate-600 flex gap-5 justify-center fixed bottom-0">
            <ButtonGroup
              className={`grid ${
                type === "listening" ? "" : "hidden xl:block"
              }`}
            >
              <div className="flex">
                {listening &&
                  listening?.map((item, index) => (
                    <Button
                      className={`text-xs flex px-2 md:px-3 sm:font-bold mx-[1px] item-center ${
                        key === item.id ? "text-slate-200  bg-orange-500" : ""
                      } ${type === "listening" ? "flex" : "hidden xl:flex"}`}
                      onClick={
                        typeInSection === "listening"
                          ? () => handleShowSection(item, "listening")
                          : null
                      }
                    >
                      <p className="md:block hidden">PART</p> {index + 1}
                    </Button>
                  ))}
              </div>
              <h2 className="text-center mt-2 font-medium"> Listening</h2>
            </ButtonGroup>
            <ButtonGroup
              className={`grid ${type === "reading" ? "" : "hidden xl:block"}`}
            >
              <div className="flex">
                {
                  reading &&
                    reading?.map((item, index) => (
                      <Button
                        className={`text-xs flex px-2 md:px-3 sm:font-bold mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        } ${type === "reading" ? "flex" : "hidden xl:flex"}`}
                        onClick={
                          typeInSection === "reading"
                            ? () => handleShowSection(item, "reading")
                            : null
                        }
                      >
                        <p className="md:block hidden">PART</p> {index + 1}
                      </Button>
                    ))
                  //   <h2>test</h2>
                }
              </div>
              <h2 className="text-center mt-2 font-medium"> Reading</h2>
            </ButtonGroup>
            <ButtonGroup
              className={`grid ${type === "writing" ? "" : "hidden xl:block"}`}
            >
              <div className="flex">
                {
                  writing &&
                    typeExam !== "TOEIC" &&
                    writing?.map((item, index) => (
                      <Button
                        className={`text-xs flex px-2 md:px-3 sm:font-bold mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        } ${type === "writing" ? "" : "hidden xl:flex"}`}
                        onClick={
                          typeInSection === "writing"
                            ? () => handleShowSection(item, "writing")
                            : null
                        }
                      >
                        <p className="md:block hidden">PART</p> {index + 1}
                      </Button>
                    ))
                  //   <h2>test</h2>
                }
              </div>
              <h2
                className={`text-center mt-2 font-medium ${
                  typeExam === "TOEIC" ? "hidden" : ""
                }`}
              >
                {" "}
                Writing
              </h2>
            </ButtonGroup>
            <ButtonGroup
              className={`grid ${type === "speaking" ? "" : "hidden xl:block"}`}
            >
              <div className="flex">
                {
                  speaking &&
                    typeExam !== "TOEIC" &&
                    speaking?.map((item, index) => (
                      <Button
                        className={`text-xs flex px-2 md:px-3 sm:font-bold mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        } ${type === "speaking" ? "" : "hidden xl:flex"}`}
                        onClick={
                          typeInSection === "speaking"
                            ? () => handleShowSection(item, "speaking")
                            : null
                        }
                      >
                        <p className="md:block hidden">PART</p> {index + 1}
                      </Button>
                    ))
                  //   <h2>test</h2>
                }
              </div>
              <h2
                className={`text-center mt-2 font-medium ${
                  typeExam === "TOEIC" ? "hidden" : ""
                }`}
              >
                {" "}
                Speaking
              </h2>
            </ButtonGroup>
            {/* <ButtonGroup className="grid">
              <div className="flex">
                {
                  speaking &&
                    speaking?.map((item, index) => (
                      <Button
                        className={`text-xs mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        }`}
                        onClick={
                          type === "writing"
                            ? () => handleShowSection(item, "speaking")
                            : null
                        }
                      >
                        PART {index + 1}
                      </Button>
                    ))
                  //   <h2>test</h2>
                }
              </div>
              <h2 className="mx-auto mt-2 font-medium"> Speaking</h2>
            </ButtonGroup> */}

            <div className="flex gap-2">
              <Button
                className={`block bg-[#fb9400] border-slate-600 text-white hover:!border-[#fb9400] hover:!text-white ${
                  (type !== "speaking" && type === "VSTEP") ||
                  (type === "reading" && typeExam === "TOEIC")
                    ? "hidden"
                    : ""
                }`}
                onClick={() =>
                  notification.success({ message: "Saved your answers " })
                }
              >
                {/* {type !== "speaking" ? "Save" : ""} */}
                Save
              </Button>
              <Button
                className={`block bg-[#fb9400] border-slate-600 text-white hover:!border-[#fb9400] hover:!text-white ${
                  (type !== "speaking" && type === "VSTEP") ||
                  (type === "reading" && typeExam === "TOEIC")
                    ? "hidden"
                    : ""
                }`}
                onClick={handleConfirmNextSection}
              >
                {type !== "speaking" ? "Next" : ""}
              </Button>
            </div>
          </div>
        </div>

        <ModalNextSection
          handleChangeType={handleChangeType}
          isContinue={isContinue}
        />
        <ModalConfirmSubmit />
      </div>
    </>
  );
}

export default PageDemo;
