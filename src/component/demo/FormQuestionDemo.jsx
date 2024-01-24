import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Image,
  Input,
  Radio,
  notification,
} from "antd";
import React, { useContext, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Count from "../Count";
import { PiSpeakerHighFill } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { IoBook } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { AppContext } from "../AppContext";
import Count2 from "../Count2";
import FormUpload from "../form/FormUpload";
import ShowQuestion from "./ShowQuestion";
import { handleCheckListChoice } from "./handleLogicQuestion";

function FormQuestionDemo({ type, section, typeExam }) {
  // console.log("totalChoice",totalChoice);
  // const [userChoices, setUserChoices] = useState([]);
  // const [formData, setFormData] = useState({});
  const { data, dispatch } = useContext(AppContext);
  const [totalChoice, setTotalChoice] = useState(1);
 const handleSetTotalChoice = (value) =>{
  setTotalChoice(value)
 }
  
 

  // const handleOptionChange = (questionId, answerKey, text) => {
  //   const newUserChoices = [
  //     ...userChoices.filter((choice) => choice.questionId !== questionId),
  //     { questionId, answerKey: [answerKey], value: text },
  //   ];
  //   setUserChoices(newUserChoices);

  //   const updatedTotalChoice = handleCheckListChoice(section);
  //   if (!isNaN(updatedTotalChoice)) {
  //     setTotalChoice(updatedTotalChoice);
  //     console.log(updatedTotalChoice);
  //   }

  //   localStorage.setItem("responseUsers", JSON.stringify(newUserChoices));
  // };

  // useEffect(() =>{
  
  // },[])
  
  const handleSubmit = () => {
    dispatch({ type: "openModalSubmit" });
  };
  useEffect(() => {
    // notification.success({message : handleCheckListChoice(section)})
    setTotalChoice(handleCheckListChoice(section))
  }, [section, JSON.parse(localStorage.getItem("responseUsers"))]); // Thêm userChoices vào dependency để cập nhật khi userChoices thay đổi

  return (
    <div>
      <>
        <div className="flex justify-between mx-2 my-5">
          <div>
            {type === "listening" ? (
              <div className="flex gap-3 items-center">
                <FaHeadphones className="text-[#fb9400] font-bold text-2xl" />
                <h2 className="font-bold text-[#fb9400] sm:flex hidden">
                  LISTENING
                </h2>
              </div>
            ) : type === "reading" ? (
              <div className="flex gap-3 items-center">
                <IoBook className="text-orange-500 font-bold text-2xl" />
                <h2 className="font-bold text-orange-500 sm:flex hidden">
                  READING
                </h2>
              </div>
            ) : type === "writing" ? (
              <div className="flex gap-3 items-center">
                <TfiWrite className="text-orange-500 font-bold text-2xl" />
                <h2 className="font-bold text-orange-500 sm:flex hidden">
                  WRITING
                </h2>
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <PiSpeakerHighFill className="text-orange-500 font-bold text-2xl" />
                <h2 className="font-bold text-orange-500 sm:flex hidden">
                  SPEAKING
                </h2>
              </div>
            )}
          </div>
          <Count2 />

          <div className="flex items-center gap-5">
            <div>
              <h2 className="py-1 px-10 rounded-lg font-medium text-[#fff] bg-orange-300">
                {totalChoice} / {section?.questions?.length}
              </h2>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "tranparent",
                },
              }}
            >
              <Button
                className="bg-[#fb9400] text-white font-bold hover:!text-white hover:!border-[#fb9400] "
                onClick={handleSubmit}
              >
                {" "}
                SUBMIT{" "}
              </Button>
            </ConfigProvider>
          </div>
        </div>

        <div className={type === "reading" ? "grid grid-cols-2 gap-3" : ""}>
          <div className={type === "reading" ? "col-span-1" : ""}>
            {section?.description?.startsWith("https") ? (
              <ReactAudioPlayer
                muted={true}
                // autoPlay={true}
                disableSeek={true}
                className="my-5"
                src={section.description}
              ></ReactAudioPlayer>
            ) : (
              <h2
                className={`font-medium text-lg leading-relaxed overflow-auto  ${
                  type === "reading" ? "h-[100vh]" : ""
                } `}
              >
                Require: {section?.description}
              </h2>
            )}
          </div>
          <div
            className={
              type === "reading"
                ? "col-span-1 overflow-auto h-[100vh] px-[5%]"
                : ""
            }
          >
            {section?.file?.startsWith("https") && (
              <ReactAudioPlayer
                src={section.file}
                controls
                disablePlay={true}
                disablePause={true}
                disableSeek={true}
                className="my-5"
              />
            )}
            <Form layout="vertical" className="mb-14">
              {section?.questions?.map((question, questionIndex) => (
               
                <ShowQuestion
                  question={question}
                  questionIndex={questionIndex}
                  handleSetTotalChoice={(value)=>handleSetTotalChoice(value)}
                  key={question?.id}

                  // handleOptionChange={handleOptionChange}
                  // userChoices={userChoices}
                  // handleOptionChangeMultiChoice={handleOptionChangeMultiChoice}
                  section={section}
                  // handleQuestionEssay={handleQuestionEssay}
                />
              ))}
            </Form>
          </div>
        </div>
      </>
    </div>
  );
}

export default FormQuestionDemo;
