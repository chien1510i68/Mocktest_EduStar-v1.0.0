import React, { useContext, useEffect, useState } from "react";
import { getDetailExamById } from "../api/exam";
import ButtonGroup from "antd/es/button/button-group";
import { Button, ConfigProvider } from "antd";
import FormQuestionDemo from "./FormQuestionDemo";
import { AppContext } from "../AppContext";
import ModalNextSection from "../modal/ModalNextSection";
import ModalConfirmSubmit from "../modal/ModalConfirmSubmit";

function PageDemo(props) {
  const { data, dispatch } = useContext(AppContext);
  const { typeSection } = data;
  const [listening, setListening] = useState(null);
  const [reading, setReading] = useState(null);
  const [writing, setWriting] = useState(null);
  const [section, setSection] = useState(null);
  const [type, setType] = useState(typeSection);
  const [isContinue, setIsContinue] = useState(false);
  const[totalChoice , setTotalChoice] = useState(0)

  const [key, setKey] = useState(null);
  const handleGetData = () => {
    getDetailExamById("26f94768-5b8e-414b-b966-59f37fdf1a16").then((res) => {
      console.log(res?.data?.sections);
      setListening(res?.data?.sections.filter((i) => i.type === "listening"));
      setReading(res?.data?.sections.filter((i) => i.type === "reading"));
      setWriting(res?.data?.sections.filter((i) => i.type === "writing"));
    });
  };
  useEffect(() => {
    handleGetData();
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
    setType(
      type === "listening" ? "reading" : type === "reading" ? "writing" : ""
    );
    const answerUser = JSON.parse(localStorage.getItem("responseUsers"));
    localStorage.setItem(`response${type}`, JSON.stringify(answerUser));
    localStorage.removeItem("responseUsers");
    dispatch({ type: "closeModalNextSection" });
  };


  
  return (
    <>
      <div className="">
        <div className="pb-[5%]">
          <FormQuestionDemo type={type} time={40} section={section} />
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
                        type === "listening"
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
              <h2 className="mx-auto mt-2 font-medium"> Writing</h2>
            </ButtonGroup>
            <Button
              className=" block bg-[#fb9400]  text-white hover:!border-[#fb9400] hover:!text-white"
              onClick={handleConfirmNextSection}
            >
              {typeSection !== "writing" ? "Next" : "Save and Submit"}
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
