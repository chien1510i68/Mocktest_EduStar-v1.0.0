import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../component/AppContext";
import { getSectionByExamIdAndType } from "../component/api/exam";
import FormQuestion from "../component/form/FormQuestion";
import ModalNextSection from "../component/modal/ModalNextSection";

function MocktestPage(props) {
  const [type, setType] = useState("listening");
  const [time, setTime] = useState(0);
  const { examId } = useParams();
  const [data1, setData1] = useState([]);
  const {data , dispatch} = useContext(AppContext)
  const {isOpenModalNextSection} = data
const [isContinue , setIsContinue] = useState(false)
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
      setData1(res?.data?.data?.items);
    });
  };
  const handleChangeType = () => {
    setType(
        type === "listening" ? "reading" : type === "reading" ? "writing" : "speaking"
      );
    const answerUser = JSON.parse(localStorage.getItem("responseUsers"))
    localStorage.setItem(`response${type}` , JSON.stringify(answerUser))
    localStorage.removeItem("responseUsers" )
    dispatch({type : "closeModalNextSection"})

  };

  const handleConfirmNextSection = () =>{
    setIsContinue(true)
    dispatch({type : "openModalNextSection"})

  }

  useEffect(() => {
    handleTimeSection();
    setIsContinue(false)
    handleGetData();
  }, [type]);
  return (
    <>
      <FormQuestion type={type} time={time} data={data1} />
      {data1 && (
        <Button
          className="ml-auto block bg-orange-500 my-5"
          onClick={handleConfirmNextSection}
        >
          Next
        </Button>
      )}
      <ModalNextSection handleChangeType={handleChangeType} isContinue={isContinue}/>
    </>
  );
}

export default MocktestPage;
