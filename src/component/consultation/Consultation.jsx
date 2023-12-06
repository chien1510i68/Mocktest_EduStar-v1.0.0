import React from "react";
import { Button, ConfigProvider, Form, Input } from "antd";
import svgAccounFormInput from "../../vector/svgAccountForm.svg";
import svgCallFormInput from "../../vector/svgCallForm.svg";
import svgEmailFormInput from "../../vector/svgEmailForm.svg";
import svgContentFormInput from "../../vector/svgContentForm.svg";
import InputElement from "../inputElement/Input";

const Consultation = () => {
  const validateMessages = {
    required: "Trường thông tin bắt buộc!",
    types: {
      email: "Dữ liệu đã nhập không phải Email!",
      // eslint-disable-next-line no-template-curly-in-string
      number: "Dữ liệu đã nhập không phải số!",
    },
  };
 
  const onFinish = (values) => {
    // Gửi dữ liệu lên server khi form được submit
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
  };

  const sendData = (data, onFinish) => {
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
    <>
      <div className="max-w-[1200px] mx-auto justify-center px-5">
        <div className="text-center mx-auto  my-6">
          <span className="text-[#fb9400] font-bold text-3xl sm:border-b-2 border-[#fb9400] p-2">
            Đăng ký nhận tư vấn
          </span>
        </div>
        <Form name="myForm" onFinish={onFinish} validateMessages={validateMessages}>
          <div className="grid grid-cols-2 sm:gap-24 gap-8 mt-5">
            <div className="col-span-1">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Vui lòng điền họ tên!" }]}
              >
                <InputElement
                  prefix={<img src={svgAccounFormInput} alt=""/>}
                  placeholder="Họ và Tên"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ required: true, message: "Vui lòng điền email!", type: "email" }]}
              >
                {/* <Input
                  className="border-[#fb9400] hover:!border-[#fb9400]"
                  prefix={<img src={svgEmailFormInput} alt=""/>}
                  placeholder="Email"
                /> */}
                <InputElement
                prefix={<img src={svgEmailFormInput} alt=""/>}
                placeholder="Email"
              />
              </Form.Item>
            </div>

            <div className="col-span-1 gap-5">
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: "Vui lòng điền số điện thoại!" },
                  {pattern: /^\d+$/, message: "Vui lòng chỉ nhập số!"},
                  {max: 10, message: "Số điện thoại chỉ được phép nhập 10 số"},
                  {min:10,message: "Số điện thoại chỉ được phép nhập 10 số"}
                ]}
              >
                
                {/* <Input
                  className="border-[#fb9400] hover:!border-[#fb9400]"
                  prefix={<img src={svgCallFormInput} alt=""/>}
                  placeholder="Số điện thoại"
                /> */}
                <InputElement
                  prefix={<img src={svgCallFormInput} alt=""/>}
                  placeholder="Số điện thoại"
                />
              </Form.Item>

              <Form.Item
                name="content"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng điền nội dung cần tư vấn!",
                  },
                ]}
              >
                {/* <Input
                  className="border-[#fb9400] hover:!border-[#fb9400]"
                  prefix={<img src={svgContentFormInput} alt=""/>}
                  placeholder="Nội dung tư vấn"
                /> */}
                <InputElement
                  prefix={<img src={svgContentFormInput} alt=""/>}
                  placeholder="Nội dung tư vấn"
                />
              </Form.Item>
            </div>
          </div>

          <div className="mx-auto items-center">
            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-[#fb9400] text-white font-bold mx-auto justify-center block hover:!border-[#fb9400] hover:!text-white"
              >
                gửi thông tin
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};
export default Consultation;

// import React from 'react';
// import { Form, Input, Button } from 'antd';

// const Consultation = () => {

//   };

//   return (

//   );
// };

// export default Consultation;
