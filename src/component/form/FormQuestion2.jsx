import {
  BackTop,
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Radio,
  Tabs,
} from "antd";
import React, { useContext, useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaHeadphones } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { PiSpeakerHighFill } from "react-icons/pi";
import { TfiWrite } from "react-icons/tfi";
import { AppContext } from "../AppContext";
import Count from "../Count";
function FormQuestion2({ type, time, data }) {
  const [userChoices, setUserChoices] = useState([]);
  const [formData, setFormData] = useState({});
  const { data1, dispatch } = useContext(AppContext);
  const [totalChoice, setTotalChoice] = useState(0);

  console.log("data in exam :", data);
  const handleCheckListChoice = (section) => {
    const choicesInLocalStorage = JSON.parse(
      localStorage.getItem("responseUsers")
    );
    const totalChoice = choicesInLocalStorage?.reduce((results, choice) => {
      if (
        section?.questions?.some(
          (question) => question.id === choice.questionId
        )
      ) {
        results.push(choice);
      }
      return results;
    }, []);

    console.log("totalChoice" ,totalChoice);
    return (totalChoice?.length + 1);
  };

  const isQuestionInType = (questionId) => {
    // setTotalChoice(totalChoice + 1 )
    const isSelected = userChoices.some(
      (choice) => choice.questionId === questionId
    );
    // if (isSelected) {
    //   setTotalChoice(totalChoice + 1);
    // }
    return isSelected;
    // return userChoices.some((choice) => choice.questionId === questionId);
  };

  const handleOptionChange = (section, questionId, answerKey, text) => {
    const newUserChoices = [
      ...userChoices.filter((choice) => choice.questionId !== questionId),
      { questionId, answerKey: [answerKey], value: text },
    ];
    setUserChoices(newUserChoices);

    setTotalChoice(handleCheckListChoice(section));

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
    console.log(questionId, value);
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
  // const handleCreateUserResponse = () => {};
  const items = data?.map((section, index) => ({
    key: section?.id,
    label: (
      <>
        <h2>PART {index + 1}</h2>
      </>
    ),

    children: (
      <>
        <div className="flex justify-between px-2">
          <div>
            {type === "listening" ? (
              <div className="flex gap-3 items-center">
                {/* <FaHeadphones className="text-[#fb9400] font-bold text-2xl" />
                <h2 className="font-bold text-[#fb9400] ">LISTENING</h2> */}
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
          <Count time={time} />
          <div className="flex items-center gap-5">
            {/* <div>
              {section?.questions?.map((question, questionIndex) => (
                <span
                  key={question.id}
                  className={`px-3 border border-slate-800 rounded-sm mr-1  ${
                    isQuestionInType(question.id) ? "bg-amber-600" : ""
                  }`}
                >
                  {questionIndex + 1}
                </span>
              ))}
            </div> */}
            <div>
              <Button className="py-1 flex px-10 rounded-lg font-medium text-[#fff] bg-orange-300">
                {totalChoice }  / {section?.questions.length}
              </Button>
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
              {section?.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="!mx-5">
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
                          handleOptionChange(
                            section,
                            question.id,
                            e.target.value,
                            null
                          )
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
                  {question.questionType === "Essay_answers" && (
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
                </div>
              ))}
            </Form>
          </div>
        </div>
      </>
    ),
  }));

  const onChange = (key) => {
    console.log(key);
    const currentSection = data.find((section) => section.id === key);
    setTotalChoice(handleCheckListChoice(currentSection));
  };
  useEffect(() => {
    setUserChoices([]);
  }, [type]);

  const renderTabBar = (props, DefaultTabBar) => (
    <div className="text-left w-[] bg-slate-500 ">
      <DefaultTabBar {...props} />
      <h2>{type}</h2>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={() => console.log(userChoices)}>Click</Button> */}

      {/* <h2>{totalChoice}</h2> */}
      <Tabs
        tabPosition="bottom"
        centered={true}
        type="card"
        defaultActiveKey="1"
        items={items}
        className="mt-5"
        onChange={onChange}
        renderTabBar={renderTabBar}
      />
      <BackTop />
    </div>
  );
}

export default FormQuestion2;
