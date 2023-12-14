import { Button, Checkbox, ConfigProvider, Form, Input, Radio } from "antd";
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

function FormQuestionDemo({ type, section }) {
  // console.log("totalChoice",totalChoice);
  const [userChoices, setUserChoices] = useState([]);
  const [formData, setFormData] = useState({});
  const { data1, dispatch } = useContext(AppContext);
  const [totalChoice, setTotalChoice] = useState(1);

  const handleCheckListChoice = (section) => {
    const localData = JSON.parse(localStorage.getItem("responseUsers"));
    const listQues = section?.questions;
    const commonElements = localData?.filter((itemA) =>
      listQues?.some((itemB) => itemB.id === itemA.questionId)
    );
    const numberOfCommonElements = commonElements?.length;
    console.log(numberOfCommonElements); // Kết quả: 2
    return numberOfCommonElements; // Trả về giá trị để sử dụng ở nơi khác
  };

  const handleOptionChange = (questionId, answerKey, text) => {
    const newUserChoices = [
      ...userChoices.filter((choice) => choice.questionId !== questionId),
      { questionId, answerKey: [answerKey], value: text },
    ];
    setUserChoices(newUserChoices);

    const updatedTotalChoice = handleCheckListChoice(section);
    if (!isNaN(updatedTotalChoice)) {
      setTotalChoice(updatedTotalChoice);
      console.log(updatedTotalChoice);
    }

    localStorage.setItem("responseUsers", JSON.stringify(newUserChoices));
  };

  const handleOptionChangeMultiChoice = (questionId, checkedValues, text) => {
    const newUserChoices = [
      ...userChoices?.filter((choice) => choice.questionId !== questionId),
      { questionId, answerKey: checkedValues, value: null },
    ];
    setUserChoices(newUserChoices);
    localStorage.setItem("responseUsers", JSON.stringify(newUserChoices));
  };
  const handleQuestionEssay = (questionId, value) => {
    // console.log(questionId, value);
    const newUserChoices = [
      ...userChoices?.filter((choice) => choice.questionId !== questionId),
      { questionId, value: value },
    ];
    setUserChoices(newUserChoices);

    localStorage.setItem("responseUsers", JSON.stringify(newUserChoices));
  };
  const handleSubmit = () => {
    dispatch({ type: "openModalSubmit" });
  };
  useEffect(() => {
    if (isNaN(totalChoice)) {
      setTotalChoice(0);
      console.log(0);
    } else {
      // Chỉ gọi setTotalChoice khi người dùng thực hiện hành động
      const choice = handleCheckListChoice(section);
      console.log(choice);
      setTotalChoice(choice);
    }
    // console.log("Render ...");
  }, [section, userChoices]); // Thêm userChoices vào dependency để cập nhật khi userChoices thay đổi

  return (
    <div>
      <>
        <div className="flex justify-between">
          <div>
            {type === "listening" ? (
              <div className="flex gap-3 items-center">
                <FaHeadphones className="text-[#fb9400] font-bold text-2xl" />
                <h2 className="font-bold text-[#fb9400] ">LISTENING</h2>
              </div>
            ) : type === "reading" ? (
              <div className="flex gap-3 items-center">
                <IoBook className="text-orange-500 font-bold text-2xl" />
                <h2 className="font-bold text-orange-500 ">READING</h2>
              </div>
            ) : type === "wiriting" ? (
              <div className="flex gap-3 items-center">
                <TfiWrite className="text-orange-500 font-bold text-2xl" />
                <h2 className="font-bold text-orange-500 ">WRITING</h2>
              </div>
            ) : (
              <div className="flex gap-3 items-center">
                <PiSpeakerHighFill className="text-orange-500 font-bold text-2xl" />
                <h2 className="font-bold text-orange-500 ">SPEAKING</h2>
              </div>
            )}
          </div>
          <Count2/>

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
                className="bg-[#fb9400] text-white font-bold hover:!text-white hover:!border-[#fb9400]"
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
                className={`font-medium text-lg leading-relaxed overflow-auto px-[5%] ${
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
            <Form layout="vertical">
              {section?.questions?.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <h2 className="font-medium text-base">
                    Question {questionIndex + 1} : {question.content}
                    {question?.description?.startsWith("https") && (
                      <audio muted={true} controls>
                        <source src={question.description} type="audio/mp3" />
                      </audio>
                    )}
                  </h2>
                  {question.questionType === "Single_answer" && (
                    <Form.Item className="mx-10" key={question.id}>
                      <Radio.Group
                        className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:gap-x-40"
                        onChange={(e) =>
                          handleOptionChange(question.id, e.target.value, null)
                        }
                        value={
                          userChoices.find(
                            (choice) => choice.questionId === question.id
                          )?.answerKey[0]
                        }
                      >
                        {question?.listAnswer.map((item) => (
                          <Radio
                            key={item.answerKey}
                            className="col-span-1 my-2"
                            value={item.answerKey}
                          >
                            {item.answer}
                          </Radio>
                        ))}
                      </Radio.Group>
                    </Form.Item>
                  )}
                  {question.questionType === "Multi_answer" && (
                    <Form.Item className="mx-10" key={question.id}>
                      <Checkbox.Group
                        onChange={(checkedValues) => {
                          handleOptionChangeMultiChoice(
                            question.id,
                            checkedValues,
                            null
                          );
                        }}
                      >
                        {question?.listAnswer.map((item) => (
                          <Checkbox
                            className="col-span-1 my-2"
                            value={item.answerKey}
                          >
                            {item.answer}
                          </Checkbox>
                        ))}
                      </Checkbox.Group>
                    </Form.Item>
                  )}
                  {question.questionType === "Essay_answers" && section?.type === "writing" && (
                    <Form.Item
                      name={question.id}
                      label="Plase input your answer "
                      rules={[
                        {
                          required: true,
                          message: "Please input your answer",
                        },
                      ]}
                    >
                      <Input.TextArea
                        showCount
                        maxLength={200}
                        rows={5}
                        onChange={(e) =>
                          handleQuestionEssay(question.id, e.target.value)
                        }
                      />
                    </Form.Item>
                  )}


                  {
                    section && section?.type === "speaking" && (
                      <FormUpload/>
                    )
                  }
                </div>
              ))}
            </Form>
          </div>
        </div>
      </>
    </div>
  );
}

export default FormQuestionDemo;
