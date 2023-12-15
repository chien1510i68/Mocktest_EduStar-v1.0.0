import imgLogo from "../../image/logoMenu.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import account from "../../vector/account_circle.svg";
import React, { useEffect, useState } from "react";
import { AlignRightOutlined } from "@ant-design/icons";
import { Menu, notification } from "antd";
import Cookies from "js-cookie";
import { List } from "antd";
import { getListExamByServiceUser } from "../api/exam";

const AppHeader = () => {
  const navigate = useNavigate();
  const [listExam, setListExam] = useState([]);
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
        if (err.response.data.success === false) {
          notification.error({ message: err.response.data.error.message });
        }
      });
  };

  const valueJwt = Cookies.get("jwt");

  const listMenuItem = [
    {
      key: 1,
      label: "trang chủ",
      url: "https://edustar.com.vn/",
    },

    {
      label: "thi thử",
      children: [
        {
          key: 2,
          label: "Thi thử TOEIC",
          url: "https://mocktest.edustar.com.vn/toeic",
        },

        {
          key: 3,
          label: "Thi thử VSTEP",
          url: "https://mocktest.edustar.com.vn/vstep",
        },
      ],
    },

    {
      label: "khóa học",
      children: [
        {
          label: "Luyện thi VSTEP",
          children: [
            {
              key: 4,
              label: "Luyện thi VSTEP B1",
              url: "https://edustar.com.vn/vstep/luyen-thi-b1",
            },
            {
              key: 5,
              label: "Luyện thi VSTEP B2",
              url: "https://edustar.com.vn/vstep/luyen-thi-b2",
            },
          ],
        },

        {
          key: 6,
          label: "Luyện thi TOEIC",
          url: "https://edustar.com.vn/toeic",
        },

        {
          key: 7,
          label: "Luyện thi IELTS",
          url: "https://edustar.com.vn/ielts",
        },

        {
          label: "Luyện thi APTIS",
          children: [
            {
              key: 8,
              label: "Luyện thi APTIS B1",
              url: "https://edustar.com.vn/aptis/luyen-thi-b1",
            },

            {
              key: 9,
              label: "Luyện thi APTIS B2",
              url: "https://edustar.com.vn/aptis/luyen-thi-b2",
            },
          ],
        },

        {
          key: 10,
          label: "Anh ngữ học thuật",
          url: "https://edustar.com.vn/englishacademic",
        },
      ],
    },

    {
      key: 11,
      label: "lịch thi vstep",
      url: "https://edustar.com.vn/test-schedule",
    },

    {
      key: 12,
      label: "lịch ôn tập",
      url: "https://edustar.com.vn/study-schedule",
    },

    {
      key: 13,
      label: "tin tức",
      url: "https://edustar.com.vn/new",
    },

    {
      key: 14,
      label: "đăng ký tư vấn",
      onclick: "",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const iconSize = 30;
  return (
    <div className="w-full top-0 fixed bg-white z-10 shadow-lg">
      <div className="max-w-[1200px] mx-auto justify-around flex">
        <img src={imgLogo} className="h-[46px]" alt="" />
        <Menu
          mode={isMobile ? "none" : "horizontal"}
          style={{ display: isMobile ? "none" : "block" }}
          onClick={(e) => {
            if (e.key == 14) {
              // showModalRegisterAcc();
            }
          }}
          className={`text-[#515151] border-none uppercase font-bold `}
          items={listMenuItem}
        />
        {/* <img src={account} alt="" /> */}
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
          >
            <Menu.Item key="Vstep">
              <Link>Đăng ký</Link>
            </Menu.Item>
            <Menu.Item key="Toeic">
              <Link>Đăng nhập</Link>
            </Menu.Item>
            {valueJwt !== "undefined" && valueJwt !== "null" && (
              <Menu.Item>
                <h2 onClick={handleSubmitExamByService}>Bài thi dành riêng</h2>
              </Menu.Item>
            )}
          </Menu.SubMenu>
        </Menu>
      </div>
      {/*<div className="z-10 w-full bg-[#f3f4f6] justify-between flex items-center px-10 sm:px-28 fixed top-0">
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
            {(valueJwt !== "undefined" && valueJwt !== "null") && (
              <Menu.Item key="Toeic">
                <h2 onClick={handleSubmitExamByService}>Bài thi dành riêng</h2>
              </Menu.Item>
            )}
          </Menu.SubMenu>
        </Menu> 
      </div>*/}
    </div>
  );
};

export default AppHeader;
