import { Button, ConfigProvider, Modal } from "antd";
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router";

function ModalNextSection({ handleChangeType, isContinue }) {
  const { data, dispatch } = useContext(AppContext);
  const navigate = useNavigate()
  const { isOpenModalNextSection, setChangeTimeSection } = data;

  const handleOk = () => {
    // setIsModalOpen(false);
    handleChangeType();
    console.log("setChangeTimeSection", setChangeTimeSection);
    dispatch({type : "setChangeTimeSection" ,payload : true})
    
    
    // console.log("OK");
  };
  const handleCancel = () => {
    // setIsModalOpen(false);
    dispatch({ type: "closeModalNextSection" });
  };
  return (
    <div>
      <Modal footer={null} open={isOpenModalNextSection} onCancel={handleCancel}>
        <h2 className="font-medium text-center text-xl text-orange-400">
          Move on to the next test{" "}
        </h2>
        <p className="my-4 text-center font-normal">
          When you move to the next test section, you will not be able to return
          to previous test sections{" "}
        </p>
        <div className="flex justify-end gap-5">
          {isContinue === true && (
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "transparent",
                },
              }}
            >
              <Button
                className="bg-[#eca52b] text-white hover:!text-white hover:!border-[#eca52b] hover:shadow-md"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                className="bg-lime-800 text-white hover:!text-white hover:!border-lime-800 hover:shadow-md"
                onClick={handleOk}
              >
                Confirm
              </Button>
            </ConfigProvider>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ModalNextSection;
