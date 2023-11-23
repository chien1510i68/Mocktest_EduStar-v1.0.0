import React, { useEffect, useState } from "react";
import FormQuestion from "../component/form/FormQuestion";
import { useParams } from "react-router-dom";
import { getSectionByExamIdAndType } from "../component/api/exam";
import { Button } from "antd";

function MocktestPage(props) {
  const [type, setType] = useState("listening");
  const [time, setTime] = useState(0);
  const { examId } = useParams();
  const [data, setData] = useState([]);

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

  const handleGetData = () => {
    // getSectionByExamIdAndType({ id: examId, type: type }).then((res) => {
    getSectionByExamIdAndType({
      id: examId,
      type: type,
    }).then((res) => {
      console.log(res?.data?.data?.items);
      setData(res?.data?.data?.items);
    });
  };
  const handleChangeType = () => {
    setType(
        type === "listening" ? "reading" : type === "reading" ? "writing" : "speaking"
      );
    const answerUser = JSON.parse(localStorage.getItem("responseUsers"))
    localStorage.setItem(`response${type}` , JSON.stringify(answerUser))
    localStorage.removeItem("responseUsers" )
   
    
    
  };
  useEffect(() => {
    handleTimeSection();
    handleGetData();
  }, [type]);
  return (
    <>
      <FormQuestion type={type} time={time} data={data} />
      {data && (
        <Button
          className="ml-auto block bg-orange-500 my-5"
          onClick={handleChangeType}
        >
          Tiếp theo
        </Button>
      )}
    </>
  );
}

export default MocktestPage;
