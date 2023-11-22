import { Col, Modal, Row } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function ModalCofirmInfor() {
    const {data , dispatch} = useContext(AppContext)
    const {isOpenModalConfirm} = data
    
  
  const handleOk = () => {
    dispatch({type : "closeModalConfirm"})
  };
  const handleCancel = () => {
    dispatch({type : "closeModalConfirm"})
  };
  return (
    <>
      
      <Modal className='text-center' open={isOpenModalConfirm} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <h2 className="text-zinc-900 font-medium text-center phone:text-base tablet:text-lg laptop:text-xl">
          Thông tin đăng ký
        </h2>
       <p className='px-[6%] mt-2 phone:text-xs tablet:text-sm laptop:text-base'>Vui lòng ghi nhớ thông tin đăng nhập bên dưới hoặc truy cập email đăng ký để xem lại.</p>
        <Row>
            <Col></Col>
        </Row>
      
      </Modal>
    </>
  );
}

export default ModalCofirmInfor;