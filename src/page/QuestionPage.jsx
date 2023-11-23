import React, { useEffect, useState } from "react";
import FormQuestion from "../component/form/FormQuestion";

function QuestionPage(props) {
  const [type, setType] = useState("listenning");
  const [time, setTime] = useState(0);
  const handleTimeSection = () => {
    setTime(
      type === "listening"
        ? 45
        : type === "reading"
        ? 60
        : type === "writing"
        ? 60
        : 13
    );
  };
  const handleType = (type) => {
    setType(type);
  };
  useEffect(() => {
    handleTimeSection();
  }, [type]);
  return <>
    <FormQuestion handleType = {}/>
  </>;
}

export default QuestionPage;
