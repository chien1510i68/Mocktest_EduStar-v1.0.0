import imgLogo from "../../vector/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AlignRightOutlined } from "@ant-design/icons";
import { Menu, notification } from "antd";
import Cookies from "js-cookie";
import { getListExamByServiceUser } from "../api/exam";

const AppHeader = () => {
  const navigate = useNavigate();
  const [listExam , setListExam] = useState([])
  const handleSubmitExamByService = () => {
    const id = Cookies.get("id");
    getListExamByServiceUser(id)
      .then((res) => {
        
        if (res.data.success === true) {
          // notification.success({ message: "Thành công " });
          navigate("/exam/all", { state: res.data.data.items });
        }
        // if(res)
        console.log(res.data.data.items);
      })
      .catch((err) => {
        console.log(err.response.data);
        if(err.response.data.success === false){
          notification.error({message : err.response.data.error.message});
        }
      });
  };
  
  const valueJwt = Cookies.get("jwt");
  
  // const iconSize = 30;
  return (
    <div>
      <div className="z-10 w-full bg-[#f3f4f6] justify-between flex items-center px-10 sm:px-28 fixed top-0">
        <Link to="https://edustar.com.vn/" className="flex">
          <img src={imgLogo} alt="logo" className="w-[50px] my-2" />
          <p className="text-2xl my-auto text-[#f69050]">EduStar</p>
        </Link>
        <Menu mode="horizontal" className="block ml-auto">
          <Menu.SubMenu
            title={
                <AlignRightOutlined />
            }
            key="home"
            className="opacity-0 !p-0 !m-0 block bg-[#f3f4f6] hover:!bg-[#f3f4f6] h-full"
          >
            <Menu.Item key="Vstep">
              <Link to="/vstep">Thi thử VSTEP</Link>
            </Menu.Item>
            <Menu.Item key="Toeic">
              <Link to="/toeic">Thi thử TOEIC</Link>
            </Menu.Item>
            {valueJwt !== "undefined" && (
              <Menu.Item key="Toeic">
                <h2 onClick={handleSubmitExamByService}>Bài thi dành riêng</h2>
              </Menu.Item>
            )}
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default AppHeader;
