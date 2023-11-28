import { Button, Modal, notification } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function ModalConfirmSubmit() {
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalSubmit } = data;
  const handleCancel = () => {
    dispatch({ type: "closeModalSubmit" });
  };
  const handleOk = () => {
    // notification.success({ message: "Thanh cong" });
    dispatch({ type: "closeModalSubmit" });
    const responselistening = JSON.parse(
      localStorage.getItem("responselistening")
    );
    const responsereading = JSON.parse(localStorage.getItem("responsereading"));
    console.log("responselistening", responselistening);
    console.log("responsereading", responsereading);
    if (responselistening === null) {
      notification.error({
        message: "You need to complete the listening test",
      });
    } else if (responsereading === null) {
      notification.error({ message: "You need to complete the reading test" });
    }
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
