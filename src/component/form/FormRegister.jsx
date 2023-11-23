import { Button, Form, Input, notification } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

function FormRegister(props) {
  const navigate = useNavigate();
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalConfirm } = data;
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      // eslint-disable-next-line no-template-curly-in-string
      number: "${label} is not a valid number!",
    },
  };
  const onFinish = (values) => {
    // dispatch({type : "openModalConfirm"})
    console.log(values, isOpenModalConfirm);
    localStorage.setItem("email", JSON.stringify(values.email));
    localStorage.setItem("phoneNumber", JSON.stringify(values.phoneNumber));
    localStorage.setItem("username", JSON.stringify(values.username));
    notification.success({ message: "Your account has been saved" });
    navigate("/mocktest/26f94768-5b8e-414b-b966-59f37fdf1a16");
  };
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      layout="vertical"
      className=" w-[60%] px-[10%] py-[3%] rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#181a1b] opacity-90"
      validateMessages={validateMessages}
      //   className="bg-[#2c7be5]"
    >
      <h2 className="text-white">{isOpenModalConfirm} aaaa</h2>
      <Form.Item>
        <h2 className="text-slate-300 font-medium text-center phone:text-base tablet:text-lg laptop:text-xl">
          Đăng ký thi thử {isOpenModalConfirm}
        </h2>
      </Form.Item>
      <Form.Item
        name="email"
        label={
          <span className="text-slate-300 font-normal text-left phone:text-xs tablet:text-sm">
            Email
          </span>
        }
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        {/* <h2 className="text-slate-300 font-normal text-left phone:text-sm tablet:">
            Email{" "}
          </h2> */}

        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label={
          <span className="text-slate-300 font-normal text-left phone:text-xs tablet:text-sm">
            Username
          </span>
        }
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label={
          <span className="text-slate-300 font-normal text-left phone:text-xs tablet:text-sm">
            Phone number
          </span>
        }
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          className="bg-orange-400 ml-auto block hover:opacity-80"
          htmlType="submit"
        >
          Đăng ký thi thử miễn phí
        </Button>
      </Form.Item>
      <h2 className="text-slate-200 text-center">
        Nếu bạn đã có tài khoản vui lòng đăng nhập{" "}
        <Link to={""} className="text-cyan-600">
          tại đây{" "}
        </Link>{" "}
        hoặc{" "}
        <Link to={""} className="text-cyan-600">
          Quay lại trang chủ tại đây{" "}
        </Link>
      </h2>
    </Form>
  );
}

export default FormRegister;
