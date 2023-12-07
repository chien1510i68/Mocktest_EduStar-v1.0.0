import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { getDetailExamById } from "../api/exam";
import ModalConfirmSubmit from "../modal/ModalConfirmSubmit";
import ModalNextSection from "../modal/ModalNextSection";
import FormQuestionDemo from "./FormQuestionDemo";
import { useParams } from "react-router";

function PageDemo(props) {
  const { data, dispatch } = useContext(AppContext);
  const { typeSection } = data;
  const [listening, setListening] = useState(null);
  const [reading, setReading] = useState(null);
  const [writing, setWriting] = useState(null);
  const [speaking, setSpeaking] = useState(null);
  const [section, setSection] = useState(null);
  const [firstReading, setFirstReading] = useState(null);
  const [firstWriting, setFirstWriting] = useState(null);
  const [firstSpeaking, setFirstSpeaking] = useState(null);
  const [type, setType] = useState(typeSection);
  const [isContinue, setIsContinue] = useState(false);
  const [totalChoice, setTotalChoice] = useState(0);
  const [time, setTime] = useState(40);
  const {examId} = useParams()

  const [key, setKey] = useState(null);
  const handleGetData = async () => {
    const res = await getDetailExamById(examId);
    try {
      console.log(res?.data?.sections);
      const listListening = res?.data?.sections.filter(
        (i) => i.type === "listening"
      );
      setSection(listListening?.length > 0 ? listListening[0] : null);
      setKey(listListening?.length > 0 ? listListening[0]?.id : null)
      setListening(listListening);

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
    localStorage.setItem("timeSection", JSON.stringify(time));
  }, []);

  const handleShowSection = (data, type) => {
    console.log("data is :", data);
    setSection(data);
    setType(type);
    setKey(data.id);
  };

  const showHandleSave = () => {
    alert("bài thi đã được lưu!")
  }

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
  // const handleChangeType = () => {
  //   switch (type) {
  //     case "listening":
  //       setSection(firstReading);
  //       break;
  //     case "reading":
  //       setSection(firstWriting);
  //       break;
  //       case "writing" :
  //         setSection(firstSpeaking)
  //         break
  //     default:
  //       return null;
  //   }

  //   // setSection(
  //   //   type === "listening"
  //   //     ? firstReading
  //   //     : type === "reading"
  //   //     ? firstWriting
  //   //     : null
  //   // );
  //   // setSection((type === "reading") ? firstWriting : null)
  //   setType(
  //     type === "listening" ? "reading" : type === "reading" ? "writing" : ""
  //   );
  //   const answerUser = JSON.parse(localStorage.getItem("responseUsers"));
  //   localStorage.setItem(`response${type}`, JSON.stringify(answerUser));
  //   localStorage.removeItem("responseUsers");
  //   dispatch({ type: "closeModalNextSection" });
  //   if (type === "reading") {
  //     setSection(firstReading);
  //   }
  //   console.log(firstReading);
  // };
  const handleChangeType = () => {
    switch (type) {
      case "listening":
        setSection(firstReading);
        setKey(firstReading?.id)
        setType("reading");
        break;
      case "reading":
        setSection(firstWriting);
        setKey(firstWriting?.id)
        setType("writing");
        break;
      case "writing":
        setSection(firstSpeaking);
        setType(""); // or set to the appropriate value
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
  
  useEffect(() => {
    setTime((prevTime) => {
      const newTime =
        type === "listening"
          ? 40
          : type === "reading"
          ? 25
          : type === "writing"
          ? 15
          : 10;
      localStorage.setItem("timeSection", JSON.stringify(newTime));
    });
  }, [type]);

  return (
    <>
      <div className="my-3">
        <div className="pb-[5%]">
          <FormQuestionDemo type={type} time={time} section={section} />
          {/* {handleTest} */}
        </div>

        <div className="">
          <div className="w-full py-2 bg-slate-600 px-3 flex gap-5 justify-center fixed bottom-0">
            <ButtonGroup className="grid">
              <div className="md:flex hidden">
                {listening &&
                  listening?.map((item, index) => (
                    <Button
                      className={`text-xs mx-[1px] ${
                        key === item.id ? "text-slate-200 bg-orange-500" : ""
                      }`}
                      onClick={
                        type === "listening"
                          ? () => handleShowSection(item, "listening")
                          : null
                      }
                    >
                      PART {index + 1}
                    </Button>
                  ))}
              </div>
              <h2 className="md:flex hidden mx-auto mt-2 font-medium"> Listening</h2>
            </ButtonGroup>
            <ButtonGroup className="grid">
              <div className="md:flex hidden">
                {
                  reading &&
                    reading?.map((item, index) => (
                      <Button
                        className={`text-xs mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        }`}
                        onClick={
                          type === "reading"
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
              <h2 className="md:flex hidden mx-auto mt-2 font-medium"> Reading</h2>
            </ButtonGroup>
            <ButtonGroup className="grid">
              <div className="md:flex hidden">
                {
                  writing &&
                    writing?.map((item, index) => (
                      <Button
                        className={`text-xs mx-[1px] ${
                          key === item.id ? "text-slate-200  bg-orange-500" : ""
                        }`}
                        onClick={
                          type === "writing"
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
              <h2 className="md:flex hidden mx-auto mt-2 font-medium"> Writing</h2>
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
              className=" block bg-[#fb9400]  text-white hover:!border-[#fb9400] hover:!text-white"
              onClick={handleConfirmNextSection}
            >
              {type !== "writing" ? "Next" : "Save and Submit"}
            </Button>
            <Button 
            className=" block bg-[#fb9400]  text-white hover:!border-[#fb9400] hover:!text-white"
            onClick={showHandleSave}
            >
              save
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
