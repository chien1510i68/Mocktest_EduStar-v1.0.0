import { Button, ConfigProvider } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../component/AppContext";
import { getSectionByExamIdAndType } from "../component/api/exam";
import FormQuestion from "../component/form/FormQuestion";
import ModalNextSection from "../component/modal/ModalNextSection";
import ModalConfirmSubmit from "../component/modal/ModalConfirmSubmit";

function MocktestPage(props) {
  const [type, setType] = useState("listening");
  const [time, setTime] = useState(0);
  const { examId } = useParams();
  const [data1, setData1] = useState([]);
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalNextSection } = data;
  const [isContinue, setIsContinue] = useState(false);
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
      type === "listening" ? "reading" : type === "reading" ? "writing" : ""
    );
    const answerUser = JSON.parse(localStorage.getItem("responseUsers"));
    localStorage.setItem(`response${type}`, JSON.stringify(answerUser));
    localStorage.removeItem("responseUsers");
    dispatch({ type: "closeModalNextSection" });
  };

  const handleConfirmNextSection = () => {
    if (type !== "writing") {
      setIsContinue(true);
      dispatch({ type: "openModalNextSection" });
    }else{
      const answerUser = JSON.parse(localStorage.getItem("responseUsers"));
      localStorage.setItem(`responsewriting`, JSON.stringify(answerUser));
      localStorage.removeItem("responseUsers");
      dispatch({type : "openModalSubmit"})
    }
  };

  useEffect(() => {
    handleTimeSection();
    setIsContinue(false);
    handleGetData();
  }, [type]);
  return (
    <>
      <FormQuestion type={type} time={time} data={data1} />
      {data1 && (
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: "tranparent",
          }
        }}
        >
          <Button
          className="ml-auto block bg-[#fb9400] my-5 text-white hover:!border-[#fb9400] hover:!text-white"
          onClick={handleConfirmNextSection}
          >
            {
            ( type !== "writing" ) ? "Next": "Save and Submit"
            }
          </Button>
        </ConfigProvider>
        
      )}
      <ModalNextSection
        handleChangeType={handleChangeType}
        isContinue={isContinue}
      />
      <ModalConfirmSubmit />
    </>
  );
}

export default MocktestPage;
