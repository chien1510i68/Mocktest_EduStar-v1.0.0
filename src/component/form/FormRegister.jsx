import { Button, ConfigProvider, Form, Input, notification } from "antd";
import React, { useContext, useState } from "react";
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
  return (
    <Form
    name="nest-messages"
    onFinish={onFinish}
    layout="vertical"
    className=" w-[60%] px-[10%] py-[3%] bg-[#fff] rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
    validateMessages={validateMessages}
    >
      <ConfigProvider
      theme={{
        token:{
          colorPrimary:"#fb9400"
        }
      }}
      >
      <Form.Item>
       <h2 className="text-[#fb9600] font-bold text-center phone:text-base tablet:text-lg laptop:text-xl uppercase">
          Đăng ký thi thử {isOpenModalConfirm}
        </h2>
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
           },
         ]}
        >
          <Input className="border border-[#fb9400] hover:border-[#fb9400] hover:shadow-md"/>
        </Form.Item>

       <Form.Item
         name="email"
         label={
           <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
             Email
           </span>
         }
         rules={[
           {
             required: true,
           },
         ]}
       >
         <Input className="border border-[#fb9400] hover:border-[#fb9400] hover:shadow-md"/>
       </Form.Item>


        <Form.Item
          name="phoneNumber"
          label={
            <span className="text-[#808080] font-normal phone:text-xs tablet:text-sm">
              Số Điện Thoại
            </span>
          }
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="border border-[#fb9400] hover:border-[#fb9400] hover:shadow-md"/>
        </Form.Item>

        <Form.Item>
         <Button
         onClick={() => {}}
           className="bg-[#fb9400]  mx-auto block border border-[#fb9400] text-white font-bold  hover:border-[#fb9400] hover:!text-white hover:shadow-md"
           htmlType="submit"
         >
           Đăng ký
         </Button>
       </Form.Item>
      </ConfigProvider>
      </Form>

    //   <Form.Item
    //     name="email"
    //     label={
    //       <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
    //         Email
    //       </span>
    //     }
    //     rules={[
    //       {
    //         type: "email",
    //         required: true,
    //       },
    //     ]}
    //   >
    //      <h2 className="text-slate-300 font-normal text-left phone:text-sm tablet:">
    //         Email{" "}
    //       </h2> 

    //      <Input 
    //     className="border border-[#fb9400] hover:border-[#fb9400]"/> 
    //     <Input
    //               className="border-[#fb9400]  hover:!border-[#fb9400] hover:shadow-md"
    //               // prefix={<img src={svgCallFormInput} />}
    //               placeholder="email"
    //               // style={{
    //               //   width: 486,
    //               // }}
    //             />
    //   </Form.Item>
    //   <Form.Item
    //     name="username"
    //     label={
    //       <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
    //         Username
    //       </span>
    //     }
    //     rules={[
    //       {
    //         required: true,
    //       },
    //     ]}
    //   >
    //     <Input className="border border-[#fb9400] hover:border-[#fb9400]" />
    //   </Form.Item>
    //   <Form.Item
    //     name="phoneNumber"
    //     label={
    //       <span className="text-[#808080] font-normal text-left phone:text-xs tablet:text-sm">
    //         Phone number
    //       </span>
    //     }
    //     rules={[
    //       {
    //         required: true,
    //       },
    //     ]}
    //   >
    //     <Input className="border border-[#fb9400] hover:border-[#fb9400]"/>
    //   </Form.Item>

    //   <Form.Item>
    //     <Button
    //       className="bg-[#fb9400] mx-auto block border border-[#fb9400] text-white font-bold  hover:border-[#fb9400] hover:text-red"
    //       htmlType="submit"
    //     >
    //       Đăng ký thi thử miễn phí
    //     </Button>
    //   </Form.Item>
    //   <h2 className="text-[#fb9400] text-center">
    //     Nếu bạn đã có tài khoản vui lòng đăng nhập{" "}
    //     <Link to={""} className="text-[#ff735e]">
    //       tại đây{" "}
    //     </Link>{" "}
    //     hoặc{" "}
    //     <Link to={""} className="text-[#ff735e]">
    //       Quay lại trang chủ tại đây{" "}
    //     </Link>
    //   </h2>
    // </Form> 

  );
}

export default FormRegister;
