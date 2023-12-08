import { Button, ConfigProvider, Modal, notification } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { createResponseUser } from "../api/exam";

function ModalConfirmSubmit() {
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalSubmit } = data;
  const { examId } = useParams();
  const navigate = useNavigate()
  const handleCancel = () => {
    dispatch({ type: "closeModalSubmit" });
  };
  const handleOk = () => {
    // notification.success({ message: "Thanh cong" });
    dispatch({ type: "closeModalSubmit" });
    let responselistening = JSON.parse(
      localStorage.getItem("responselistening")
    );
    let responsereading = JSON.parse(localStorage.getItem("responsereading"));
    let responsewriting = JSON.parse(localStorage.getItem("responsewriting"));
    responselistening = responselistening === null ? [] : responselistening;
    responsereading = responsereading === null ? [] : responsereading;
    responsewriting = responsewriting === null ? [] : responsewriting;

    const dataUser = {
        responselistening : responselistening ,
        responsereading : responsereading ,
        email : JSON.parse(localStorage.getItem("email")),
        responsewriting : responsewriting ,
        exam_id: examId,
        
    }
    // console.log(dataUser);
    createResponseUser(dataUser).then((res) =>{
      if(res?.data?.success === true){
        // notification.success({message : "Thanh cong"})
        console.log(res?.data?.data);
        navigate("/result" ,{state : res?.data?.data})
        
      }
      // console.log(res?.data);
    })

  };
  const handleTest = () =>{
    localStorage.setItem("timeLeft" ,JSON.stringify(0))
  }
  return (
    <div>
      <Modal open={isOpenModalSubmit} footer={null} maskClosable={true}>
        <h2 className="font-medium text-base text-center text-red-800">
          Are you sure you want to submit your assignment?
        </h2>
        <p className="text-center my-2">
          Note: This function submits the entire test including all 4 skills{" "}
        </p>

        <div className="flex justify-end gap-4">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "tranparent",
              }
            }}
          >
            <Button onClick={ handleTest}>Click</Button>
            <Button onClick={handleCancel} className="bg-[#fb9400] text-white hover:!text-white hover:!border-[#fb9400] hover:shadow-md">
              Cancel
            </Button>
            <Button className="bg-lime-800 text-white hover:!text-white hover:!border-lime-800 hover:shadow-md" onClick={handleOk}>
              Agree
            </Button>
          </ConfigProvider>
        </div>
      </Modal>
    </div>
  );
}

export default ModalConfirmSubmit;
