import { Button, Modal, notification } from "antd";
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
          <Button onClick={handleCancel} className="bg-red-800 text-gray-300">
            Cancel
          </Button>
          <Button className="bg-lime-800 text-gray-200" onClick={handleOk}>
            Agree
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalConfirmSubmit;
