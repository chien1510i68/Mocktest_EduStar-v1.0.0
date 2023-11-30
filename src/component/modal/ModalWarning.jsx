import { Button, Modal } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { MdCancel } from "react-icons/md";

function ModalWarning(props) {
  const { data, dispatch } = useContext(AppContext);
  const { isModalWarning } = data;
  return (
    <div>
      <Modal open={isModalWarning} footer={null} className="h-[40vh]"  onCancel={() => {
            dispatch({ type: "closeModalWarning" });
          }}>
        <div className="h-[50%] ">

        <MdCancel className="text-9xl mx-auto text-red-600"/>
        <h2 className="text-xl text-center my-3 font-medium ">Không có bài thi nào để hiển thị </h2>
        </div>
       
        <Button
          onClick={() => {
            dispatch({ type: "closeModalWarning" });
          }}
          className="block ml-auto"
        >
          Thoát
        </Button>
       
       
      </Modal>
    </div>
  );
}

export default ModalWarning;
