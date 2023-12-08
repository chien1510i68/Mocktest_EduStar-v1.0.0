import { Button, notification } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { getDetailExamById } from "../api/exam";
import ModalConfirmSubmit from "../modal/ModalConfirmSubmit";
import ModalNextSection from "../modal/ModalNextSection";
import FormQuestionDemo from "./FormQuestionDemo";
import { useNavigate, useParams } from "react-router";

function PageDemo(props) {
  const { data, dispatch } = useContext(AppContext);
  const { typeSection } = data;
  const [listening, setListening] = useState(null);
  const [reading, setReading] = useState(null);
  const [writing, setWriting] = useState(null);
  const [speaking, setSpeaking] = useState(null);
  const navigate = useNavigate()
  const [section, setSection] = useState(null);
  const [firstReading, setFirstReading] = useState(null);
  const [firstWriting, setFirstWriting] = useState(null);
  const [firstSpeaking, setFirstSpeaking] = useState(null);
  const [type, setType] = useState(typeSection);
  const [isContinue, setIsContinue] = useState(false);
  const [totalChoice, setTotalChoice] = useState(0);
  const [listSection ,setListSection] = useState([])
  const [time, setTime] = useState(40);
  const { examId } = useParams();
  const{typeInSection} = useParams()

  const [key, setKey] = useState(null);
  const handleGetData = async () => {
    const res = await getDetailExamById(examId);
    try {
      console.log(res?.data?.sections);
      const listListening = res?.data?.sections.filter(
        (i) => i.type === "listening"
      );
      setSection(listListening?.length > 0 ? listListening[0] : null);
      setKey(listListening?.length > 0 ? listListening[0]?.id : null);
      setListening(listListening);



      const sectionList = res?.data?.sections.filter((i) => i.type === typeInSection)
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
        (i) => i.type === "writing"
      );
      setFirstSpeaking(listSpeaking?.length > 0 ? listSpeaking[0] : null);
      setSpeaking(listSpeaking);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
    localStorage.setItem("timeSection", JSON.stringify(45));
    // localStorage.setItem("typeSection", JSON.stringify("listening"));
   
  }, []);

  const handleShowSection = (data, type) => {
    console.log("data is :", data);
    setSection(data);
    setType(type);
    setKey(data.id);
  };
  const handleConfirmNextSection = () => {
    if (type !== "writing") {
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
        navigate(`/exam/${examId}/reading`)
        setSection(firstReading);
        setTime(45);
        setKey(firstReading?.id);
        localStorage.setItem("timeSection", JSON.stringify(60));
        localStorage.setItem("typeSection", JSON.stringify("reading"));
        
        dispatch({ type: "setChangeTimeSection" ,payload : true});
        setType("reading");
        break;
        case "reading":
        navigate(`/exam/${examId}/writing`)
        setSection(firstWriting);
        setTime(60);
        localStorage.setItem("timeSection", JSON.stringify(60));
        dispatch({ type: "setChangeTimeSection" ,payload : true});
        localStorage.setItem("typeSection", JSON.stringify("writing"));
        
        setKey(firstWriting?.id);
        setType("writing");
        break;
        case "writing":
        navigate(`/exam/${examId}/speaking`)
        localStorage.setItem("timeSection", JSON.stringify(15));
        dispatch({ type: "setChangeTimeSection" ,payload : true});
        localStorage.setItem("typeSection", JSON.stringify("speaking"));

        setTime(10);
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
      <div className="">
        <div className="pb-[5%]">
          <FormQuestionDemo type={type} time={time} section={section} />
          {/* {handleTest} */}
        </div>

        <div className="w-[100vw]">
          <div className="w-full py-2 bg-slate-600 z-20 flex gap-5 justify-center fixed bottom-0">
            <ButtonGroup className="grid">
              <div className="flex">
                {listening &&
                  listening?.map((item, index) => (
                    <Button
                      className={`text-xs mx-[1px] ${
                        key === item.id ? "text-slate-200  bg-orange-500" : ""
                      }`}
                      onClick={
                        typeInSection === "listening"
                          ? () => handleShowSection(item, "listening")
                          : null
                      }
                    >
                      PART {index + 1}
                    </Button>
                  ))}
              </div>
              <h2 className="mx-auto mt-2 font-medium"> Listening</h2>
            </ButtonGroup>
            <ButtonGroup className="grid">
              <div className="flex">
                {
                  reading &&
                    reading?.map((item, index) => (
                      <Button
                        className={`text-xs mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        }`}
                        onClick={
                          typeInSection === "reading"
                            ? () => handleShowSection(item, "reading")
                            : null
                        }
                      >
                        PART {index + 1}
                      </Button>
                    ))
                  //   <h2>test</h2>
                }
              </div>
              <h2 className="mx-auto mt-2 font-medium"> Reading</h2>
            </ButtonGroup>
            <ButtonGroup className="grid">
              <div className="flex">
                {
                  writing &&
                    writing?.map((item, index) => (
                      <Button
                        className={`text-xs mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        }`}
                        onClick={
                          typeInSection === "writing"
                            ? () => handleShowSection(item, "writing")
                            : null
                        }
                      >
                        PART {index + 1}
                      </Button>
                    ))
                  //   <h2>test</h2>
                }
              </div>
              <h2 className="mx-auto mt-2 font-medium"> Writing</h2>
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
            <Button
              className= {`block bg-[#fb9400]  text-white hover:!border-[#fb9400] hover:!text-white ${(type === "writing") ? "hidden" : ""}`}
              onClick={handleConfirmNextSection}
            >
              {type !== "writing" ? "Next" : ""}
            </Button>
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
