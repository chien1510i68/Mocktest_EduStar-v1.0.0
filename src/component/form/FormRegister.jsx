import { Button, Form, notification } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { getExamByType } from "../api/exam";
import InputComponent from "../inputComponent/InputComponent"

function FormRegister(props) {
  const navigate = useNavigate();
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalConfirm } = data;
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    // required: "${label} is required!",
    required: "Trường thông tin bắt buộc!",
    types: {
      email: "Dữ liệu đã nhập không phải Email!",
      // eslint-disable-next-line no-template-curly-in-string
      number: "Dữ liệu đã nhập không phải số!",
    },
  };
  const onFinish = (values) => {
    // dispatch({type : "openModalConfirm"})
    console.log(values, isOpenModalConfirm);
    localStorage.setItem("email", JSON.stringify(values.email));
    localStorage.setItem("phoneNumber", JSON.stringify(values.phoneNumber));
    localStorage.setItem("username", JSON.stringify(values.username));
    notification.success({ message: "Your account has been saved" });
    // navigate("/exam/26f94768-5b8e-414b-b966-59f37fdf1a16");
    // navigate("/exam/all", );
    sendData(values, (error, responseData) => {
      if (error) {
        console.error("Lỗi khi gửi dữ liệu:", error);
      } else {
        console.log(
          "Dữ liệu đã được gửi thành công. Phản hồi từ máy chủ:",
          responseData
        );
      }
    });
    getExamByType("vstep_b1", true).then((res) => {
      // console.log(res?.data?.body);
      if (res?.data?.body?.success === true) {
        console.log(res?.data?.body?.data?.items);
        navigate("/exam/all", { state: res?.data?.body?.data?.items });
      }
    });
  };

  const sendData = (data, onFinish) => {
    
// https://api.edustar.com.vn/consulting/registration
    // fetch("http://localhost:8000/blogs", {
    fetch("https://api.edustar.com.vn/consulting/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => onFinish(null, responseData))
      .catch((error) => onFinish(error.message || "Có lỗi khi gửi dữ liệu"));
  };

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      layout="vertical"
      className="w-[60%] px-[10%] py-[3%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      validateMessages={validateMessages}
      //   className="bg-[#2c7be5]"
    >
      {/* <h2 className="text-white">{isOpenModalConfirm} aaaa</h2> */}
      <Form.Item>
        <h2 className="text-[#fb9400] font-bold text-center phone:text-base tablet:text-lg laptop:text-xl">
          Đăng ký thi thử {isOpenModalConfirm}
        </h2>
      </Form.Item>
      <label htmlFor="userName"> Họ Và Tên</label>
      <Form.Item
        name="username"
        id="userName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputComponent />
      </Form.Item>

      <label htmlFor="email">Email</label>
      <Form.Item
        name="email"
        id="email"
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

        <InputComponent />
      </Form.Item>

      <label htmlFor="phoneNumber"> Số Điện Thoại</label>
      <Form.Item
        name="phoneNumber"
        id="phoneNumber"
        rules={[
          // {
          //   required: true,
          // },
          { required: true, message: "Trường thông tin bắt buộc!" },
          { pattern: /^\d+$/, message: "Vui lòng chỉ nhập số!" },
          { max: 10, message: "Số điện thoại chỉ được phép nhập 10 số" },
          { min: 10, message: "Số điện thoại chỉ được phép nhập 10 số" },
        ]}
      >
        <InputComponent />
      </Form.Item>

      <Form.Item>
        <Button
          // ml-auto
          className="bg-[#fb9400] text-white font-bold mx-auto justify-center block hover:!border-[#fb9400] hover:!text-white"
          htmlType="submit"
        >
          Đăng ký thi thử
        </Button>
      </Form.Item>
      <h2 className="text-[#fb9400] text-center">
        Nếu bạn đã có tài khoản vui lòng đăng nhập hoặc{" "}
        <Link to={"https://edustar.com.vn/"} className="text-gray-600">
          Quay lại trang chủ tại đây{" "}
        </Link>
      </h2>
    </Form>
  );
}

export default FormRegister;
