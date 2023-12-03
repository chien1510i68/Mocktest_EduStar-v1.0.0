import imgLogo from "../../image/Logo.png";
// import iconMenu from "../../vector/ellipsis.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AlignRightOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const AppHeader = () => {
  const iconSize = 30;
  return (
    <div>
      <div className="z-10 w-full bg-[#f3f4f6] bg-opacity-60  justify-between flex items-center px-10 fixed top-0">
        <Link to="https://edustar.com.vn/">
          <img src={imgLogo} alt="logo" className="w-44" />
        </Link>
        <Menu mode="horizontal" className="block ml-auto">
          <Menu.SubMenu
            title={<span><AlignRightOutlined/></span>}
            key="home"
            // icon={<EllipsisOutlined width={40} height={40} />}
            className="bg-[rgb(243,244,246)] bg-opacity-60 !p-0 !m-0 block"
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
