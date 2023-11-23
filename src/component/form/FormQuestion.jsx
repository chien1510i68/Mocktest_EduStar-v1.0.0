import { Button, Checkbox, Form, Input, Radio, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function FormQuestion({ type, time, data }) {
  const [userChoices, setUserChoices] = useState([]);
  const [formData, setFormData] = useState({});

  const isQuestionInType = (questionId) => {
    return userChoices.some((choice) => choice.questionId === questionId);
  };

  const handleOptionChange = (questionId, answerKey, text) => {
    const newUserChoices = [
      ...userChoices.filter((choice) => choice.questionId !== questionId),
      { questionId, answerKey: [answerKey], value: text }, 
    ];
    setUserChoices(newUserChoices);
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
    setFormData({ ...formData, [questionId]: value });
    const newUserChoices = [
      userChoices &&
        userChoices?.filter((choice) => choice.questionId !== questionId),
      { questionId, answerKey: null, value: value },
    ];
    setUserChoices(newUserChoices);
    console.log(userChoices[type]);
  };
  const items = data?.map((section , index) => ({
    key: section?.id,
    label: (<>
        <h2>PART {index+1}</h2>
    </>),

    children: (
      <>
        <div className="text-right">
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
        </div>

        <div>
          {section?.description?.startsWith("https") ? (
            <ReactAudioPlayer
              muted={true}
              autoPlay={true}
              controls
              className="my-5"
            >
              <source src={section.description} type="audio/mp3" />
            </ReactAudioPlayer>
          ) : (
            <h2 className="font-medium text-lg">
              Require: {section?.description}
            </h2>
          )}
          {section?.file?.startsWith("https") && (
            <audio controls muted={true} className="my-5">
              <source src={section.file} type="audio/mp3" />
            </audio>
          )}
          <Form layout="vertical">
            {section?.questions.map((question, questionIndex) => (
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
      </>
    ),
  }));
  useEffect(() =>{
    setUserChoices([])
  },[type])

  return (
    <div>
        <Button onClick={() => console.log(userChoices)}>Click</Button>
      <h2>

        {time} --- {type}
      </h2>
      <Tabs
        tabPosition="bottom"
        centered={true}
        type="card"
        defaultActiveKey="1"
        items={items}
        // onChange={onChange}
      />
    </div>
  );
}

export default FormQuestion;
