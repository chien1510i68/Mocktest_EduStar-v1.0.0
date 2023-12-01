// import React from "react";
import { Button, ConfigProvider, Form, Input, Space, notification } from "antd";
import React , { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { getExamByType } from "../api/exam";

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
    // navigate("/exam/26f94768-5b8e-414b-b966-59f37fdf1a16");
    // navigate("/exam/all", );
    getExamByType("vstep_b1" , true).then((res) =>{
      // console.log(res?.data?.body);
      if(res?.data?.body?.success === true){
        console.log(res?.data?.body?.data?.items);
        navigate("/exam/all" , {state : res?.data?.body?.data?.items});
      }
    })
  };
  
const [submittable, setSubmittable] = React.useState(false);
  return (
    // <Form
    // name="nest-messages"
    // onFinish={onFinish}
    // className="max-w-screen-lg mx-auto"
    // layout="vertical"
    // autoComplete="off"
    // validateMessages={validateMessages}
    // >
    //   <ConfigProvider
    //   theme={{
    //     token:{
    //       colorPrimary:"#fb9400"
    //     }
    //   }}
    //   >
    //   <Form.Item>
    //    <h2 className="text-[#fb9600] font-bold text-center phone:text-base tablet:text-lg laptop:text-xl uppercase">
    //       Đăng ký thi thử {isOpenModalConfirm}
    //     </h2>
    //    </Form.Item>

    //     <Form.Item
    //      name="UserName"
    //       label={
    //        <span className="text-[#808080] font-normal ml-auto text-left phone:text-xs tablet:text-sm">
    //           Họ Và Tên
    //        </span>
    //      }
    //       rules={[
    //        {
    //          required: true,
    //        },
    //      ]}
    //     >
    //       <Input className="border border-[#fb9400] hover:border-[#fb9400] hover:shadow-md"/>
    //     </Form.Item>

    //    <Form.Item
    //      name="email"
    //      label={
    //        <p className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
    //          Email
    //        </p>
    //      }
    //      rules={[
    //        {
    //          required: true,
    //        },
    //      ]}
    //    >
    //      <Input className="border border-[#fb9400] hover:border-[#fb9400] hover:shadow-md"/>
    //    </Form.Item>

    //     <Form.Item
    //       name="phoneNumber"
    //       label={
    //         <p className="text-[#808080] font-normal phone:text-xs tablet:text-sm">
    //           Số Điện Thoại
    //         </p>
    //       }
    //       rules={[
    //         {
    //           required: true,
    //         },
    //       ]}
    //     >
    //       <Input className="border border-[#fb9400] hover:border-[#fb9400] hover:shadow-md"/>
    //     </Form.Item>

    //     <Form.Item>
    //      <Button
    //      onClick={() => {}}
    //        className="bg-[#fb9400]  mx-auto block border border-[#fb9400] text-white font-bold  hover:border-[#fb9400] hover:!text-white hover:shadow-md"
    //        htmlType="submit"
    //      >
    //        Đăng ký
    //      </Button>
    //    </Form.Item>
    //   </ConfigProvider>
    //   </Form>

    <Button type="primary" htmlType="submit" disabled={!submittable}>
    Submit
  </Button>
);
};
const App = () => {
const [form] = Form.useForm();
return (
  <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
    <Form.Item
      name="name"
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="age"
      label="Age"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    {/* <Form.Item>
      <Space>
        <SubmitButton form={form} />
        <Button htmlType="reset">Reset</Button>
      </Space>
    </Form.Item> */}
  </Form>
  );
}

export default FormRegister;
