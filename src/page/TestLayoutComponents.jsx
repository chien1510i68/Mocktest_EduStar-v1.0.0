import React, { useState, useEffect } from "react";
import account from "../vector/account_circle.svg";
import imgLogo from "../image/logoMenu.png";
import { Menu } from "antd";
import { Col, Row } from "antd";
import MenuComponent from "../component/header/HeaderMenuComponent";

const ResponsiveMenu = () => {
  return (
    <>
      <div className="w-full top-0 fixed bg-white z-10 shadow-lg">
        <div className="max-w-[1240px] mx-auto ">
          <Row>
            <Col span={4}>
              <img src={imgLogo} className="h-[46px]" alt="" />
            </Col>
            <Col span={16}>
              <MenuComponent />
            </Col>
            <Col span={4}>
              <Menu mode="horizontal">
                <Menu.SubMenu
                  mode="inline"
                  key="SubMenu"
                  // icon:<img src="/static/icons/BH_tainan.svg"  height={20} style={{margin:"0 12px 0 0" ,paddingTop:10 ,float:"left"}}/>,
                  icon={
                    <img
                      src={account}
                      alt=""
                      style={{ paddingTop: 10, float: "left" }}
                    />
                  }
                ></Menu.SubMenu>
              </Menu>
            </Col>
          </Row>
        </div>
        {/* <div>
          <img src={imgLogo} className="h-[46px]" alt="" />
          <MenuComponent />
          {/* <img src={account} alt="" /> 
          <Menu mode="horizontal">
            <Menu.SubMenu
              mode="inline"
              key="SubMenu"
              // icon:<img src="/static/icons/BH_tainan.svg"  height={20} style={{margin:"0 12px 0 0" ,paddingTop:10 ,float:"left"}}/>,
              icon={
                <img
                  src={account}
                  alt=""
                  style={{ paddingTop: 10, float: "left" }}
                />
              }
            ></Menu.SubMenu>
          </Menu>
        </div> */}
      </div>
    </>
  );
};

export default ResponsiveMenu;
