import { Checkbox, Form, Image, Input, Radio } from "antd";
import React, { useContext, useEffect, useState } from "react";
import FormUpload from "../form/FormUpload";
import {
  checkValue,
  handleCheckListChoice,
  handleOptionChange,
} from "./handleLogicQuestion";
import { AppContext } from "../AppContext";

function ShowQuestion({
  question,
  questionIndex,
  handleSetTotalChoice,
 
  section,
}) {
  const [option, setOption] = useState(Number(checkValue(question.id)));
  //   const {data, dispatch} = useContext(AppContext);
  const [totalChoice, setTotalchoice] = useState(0);

  return (
    <div>
      <div key={question?.id}>
        <h2 className="font-medium sm:mx-10 mx-5 text-base">
          Question {questionIndex + 1} : {question.content}
          {question?.description?.includes(".mp3") && (
            <audio muted={true} controls>
              <source src={question.description} type="audio/mp3" />
            </audio>
          )}
        </h2>
        <div className="flex items-center justify-center">
          {question?.description?.includes(".png") && (
            <Image src={question.description} className="mx-auto block " />
          )}
        </div>

        {(question.questionType === "Single_answer" ||
          question.questionType === "single_answer") && (
          <Form.Item className="mx-10" key={question.id}>
            <Radio.Group
              className="grid phone:grid-cols-1 tablet:grid-cols-2 laptop:gap-x-40"
              onChange={(e) => {
                handleOptionChange(question.id, e.target.value, null);
                setOption(e.target.value);
                handleSetTotalChoice(handleCheckListChoice(section));
              }}
              value={option}
            >
              {question?.listAnswer.map((item, index) => (
                <Radio
                  key={item.answerKey}
                  className="col-span-1 my-2"
                  value={item.answerKey}
                >
                  {index === 0
                    ? "A. "
                    : index === 1
                    ? "B. "
                    : index === 2
                    ? "C. "
                    : "D. "}
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
                handleOptionChange(question.id, checkedValues, null);
                handleSetTotalChoice(handleCheckListChoice(section));
              }}
            >
              {question?.listAnswer.map((item) => (
                <Checkbox className="col-span-1 my-2" value={item.answerKey}>
                  {item.answer}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
        )}
        {
          // question.questionType === "Essay_answers" &&
          section?.type === "writing" && (
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
                onChange={(e) => {
                  handleOptionChange(question.id, null, e.target.value);
            
                }}
              />
            </Form.Item>
          )
        }

        <div className="mx-auto text-center">
          {section && section?.type === "speaking" && <FormUpload />}
        </div>
      </div>
    </div>
  );
}

export default ShowQuestion;
