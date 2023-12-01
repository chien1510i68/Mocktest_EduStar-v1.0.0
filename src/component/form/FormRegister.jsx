import { Button, ConfigProvider, Form, Input, notification } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { getExamByType } from "../api/exam";


function FormRegister({ type }) {
  const navigate = useNavigate();
  const { data, dispatch } = useContext(AppContext);
  const { isOpenModalConfirm } = data;
  const validateMessages = {
    // eslint-disable-next-line no-template-curly-in-string
    // required: " Vui lòng nhập ${label}!",
    types: {
      email: "${label} không hợp lệ!",
      // eslint-disable-next-line no-template-curly-in-string
      number: "${label} is not a valid!",
    },
  };
  const onFinish = (values) => {
    // dispatch({type : "openModalConfirm"})
    console.log(values, isOpenModalConfirm);
    localStorage.setItem("email", JSON.stringify(values.email));
    localStorage.setItem("phoneNumber", JSON.stringify(values.phoneNumber));
    localStorage.setItem("username", JSON.stringify(values.username));
    notification.success({ message: "Your account has been saved" });
    
    getExamByType(type, true).then((res) => {
      // console.log(res?.data?.body);
      if (res?.data?.body?.success === true) {
        console.log(res?.data?.body?.data?.items);
        navigate("/exam/all", { state: res?.data?.body?.data?.items });
      }
    });
  };

  const validatePhone = (value) => {
    // const isNumber = /^[0-9]*$/;
    //   if (!isNumber.test(value)) {
    //     callback('Vui lòng nhập số!');
    //   } else {
    //     callback();
    //   }

    if(value && typeof value === "string") {
      if(!/^0/.test(value)) {
        value = "0" + value;
        console.log(value);
      }
      return value.trim()
    }
    return value;

  };

  // const handleSubmit = () => {
  //   getAllExam()
  //   .then((res) => {

  //   })
  // }

  return (
    
    <Form
      layout="vertical"
      onFinish={onFinish}
      className=" w-[60%] px-[10%] py-[3%] bg-[#fff] rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      validateMessages={validateMessages}
    >
      <Form.Item
        name="email"
        label={
          <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
          {" "}
          Email
        </span>
        }
        rules={[
          {
            message: 'Vui lòng nhập giá trị!',
            required: true,
          },
        ]}
      >
       

        {/* <Input className="border border-[#fb9400] hover:border-[#fb9400]" /> */}
        <Input
          className="border-[#fb9400]  hover:!border-[#fb9400] hover:shadow-md"
          // prefix={<img src={svgCallFormInput} />}
          placeholder="Vui lòng nhập email"
          // style={{
          //   width: 486,
          // }}
        />
      </Form.Item>
      <Form.Item
        name="UserName"
        label={
          <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
            Họ Và Tên
          </span>
        }
       
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập giá trị!',
          },
        ]}
      >
        <Input className="border border-[#fb9400] hover:border-[#fb9400]"  placeholder="Vui lòng nhập họ và tên" />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label={
          <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
            Phone number
          </span>
        }
        rules={[
          { required: true, message: 'Vui lòng nhập giá trị!' },
          {pattern: /^\d+$/, message: "Vui lòng chỉ nhập số!3322232"},
          {max: 10, message: "Số điện thoại chỉ được phép nhập 10 số"},
          {min:10,message: "Số điện thoại chỉ được phép nhập 10 số"}
          // { validator: validateNumber },
        ]}
      >
        <Input
        type="text" className="border border-[#fb9400] hover:border-[#fb9400]" placeholder="Vui lòng nhập số điện thoại"
        // onChange={checkNumber}
        // style={{
        //   width: 500,
        // }}
      />
      </Form.Item>

      <Form.Item>
        <ConfigProvider
          theme={{
            token:{
              colorPrimary: "tranparent",
            }
          }}
        >

        <Button
          className="mx-auto bg-[#fb9400] text-white block border-none font-bold hover:!text-white hover:!border-[#fb9400]"
          htmlType="submit"
          onClick={() => navigate("/vstep")}
          >
          Đăng ký thi thử miễn phí
        </Button>
          </ConfigProvider>
      </Form.Item>
      <h2 className="text-[#fb9400] text-center">
        Nếu bạn đã có tài khoản vui lòng đăng nhập{" "}
        <Link to={""} className="text-[#ff735e]">
          tại đây{" "}
        </Link>{" "}
        hoặc{" "}
        <Link to={""} className="text-[#ff735e]">
          Quay lại trang chủ tại đây{" "}
        </Link>
      </h2>
    </Form>
  );
}

export default FormRegister;
