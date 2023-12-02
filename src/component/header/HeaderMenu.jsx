import imgLogo from "../../image/Logo.png";
import iconMenu from "../../vector/Ellipsis.svg"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const AppHeader = () => {
  return (
    <div>
      <div className="z-10 w-full bg-[#f3f4f6] bg-opacity-50  justify-between flex items-center px-10 fixed top-0">
        <Link to="https://edustar.com.vn/">
          <img src={imgLogo} alt="logo" className=" w-44" />
        </Link>
        <Menu mode="horizontal" className="block ml-auto">
          <Menu.SubMenu
            key="home"
            icon={<img src={iconMenu} width={4} height={4}/>}
            className="!bg-[#f9f9fa] bg-opacity-50 !p-0 !m-0 block"
          >
            <Menu.Item key="Vstep">
              <Link to="/vstep">Thi thử VSTEP</Link>
            </Menu.Item>
            <Menu.Item key="Toeic">
              <Link to="/toeic">Thi thử TOEIC</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </div>
  );
};

export default AppHeader;
