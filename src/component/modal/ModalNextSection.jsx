import { Button, Modal } from "antd";
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

function ModalNextSection({ handleChangeType, isContinue }) {
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalNextSection } = data;

  const handleOk = () => {
    // setIsModalOpen(false);
    handleChangeType();
    console.log("OK");
  };
  const handleCancel = () => {
    // setIsModalOpen(false);
    dispatch({ type: "closeModalNextSection" });
  };
  return (
    <div>
      <Modal footer={null} open={isOpenModalNextSection}>
        <Button
          onClick={() => {
            console.log(isContinue);
          }}
        >
          Click me
        </Button>

        <h2 className="font-medium text-center text-xl text-orange-400">
          Move on to the next test{" "}
        </h2>
        <p className="my-4 text-center font-normal">
          When you move to the next test section, you will not be able to return
          to previous test sections{" "}
        </p>
        <div className="flex justify-end gap-5">
          {isContinue === true && (
            <Button
              className="bg-[#d95c5c] text-slate-950"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
          <Button className="bg-lime-800 text-slate-300" onClick={handleOk}>
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalNextSection;
