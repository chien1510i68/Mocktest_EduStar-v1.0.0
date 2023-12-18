
import { Button, Form, Input, Modal } from "antd";
import InputComponent from "../inputComponent/InputComponent"
import { useState } from "react";

const FormRegister = ({ visible, onCancel, onOk, formData, handleInputChange }) => {

  return (
    <Modal
    title="Your Modal Title"
    visible={visible}
    onCancel={onCancel}
    onOk={onOk}
  >
    {/* Nội dung của Modal */}
    <Input
      placeholder="Field 1"
      value={formData.field1}
      onChange={(e) => handleInputChange('field1', e.target.value)}
    />
    <Input
      placeholder="Field 2"
      value={formData.field2}
      onChange={(e) => handleInputChange('field2', e.target.value)}
    />
    <Input
      placeholder="Field 3"
      value={formData.field3}
      onChange={(e) => handleInputChange('field3', e.target.value)}
    />
    <Input
      placeholder="Field 4"
      value={formData.field4}
      onChange={(e) => handleInputChange('field4', e.target.value)}
    />
  </Modal>
  );
}

export default FormRegister;
