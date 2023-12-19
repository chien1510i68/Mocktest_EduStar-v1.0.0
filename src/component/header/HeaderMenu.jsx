import imgLogo from "../../image/logoMenu.png";
import { Link, useNavigate } from "react-router-dom";
import account from "../../vector/account_circle.svg";
import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import ModalConsulutation from "../modal/ModalConsulutation";
import {
  Menu,
  notification,
  Button,
  Modal,
  Drawer,
  ConfigProvider,
  theme,
  Form,
  message,
} from "antd";
import Cookies from "js-cookie";
import { Col, Row } from "antd";
import { getListExamByServiceUser } from "../api/exam";

import InputComponent from "../inputComponent/InputComponent";
import { render } from "react-dom";

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
      label: <Link to={"https://edustar.com.vn/"}>trang chủ</Link>,
    },

    {
      label: "thi thử",
      children: [
        {
          key: 2,
          label: (
            <Link to={"https://mocktest.edustar.com.vn/toeic"}>
              Thi thử TOEIC
            </Link>
          ),
        },

        {
          key: 3,
          label: (
            <Link to={"https://mocktest.edustar.com.vn/vstep"}>
              Thi thử VSTEP
            </Link>
          ),
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
              label: (
                <Link to={"https://edustar.com.vn/vstep/luyen-thi-b1"}>
                  Luyện thi VSTEP B1
                </Link>
              ),
            },
            {
              key: 5,
              label: (
                <Link to={"https://edustar.com.vn/vstep/luyen-thi-b2"}>
                  Luyện thi VSTEP B2
                </Link>
              ),
            },
          ],
        },

        {
          key: 6,
          label: (
            <Link to={"https://edustar.com.vn/toeic"}>Luyện thi TOEIC</Link>
          ),
        },

        {
          key: 7,
          label: (
            <Link to={"https://edustar.com.vn/ielts"}>Luyện thi IELTS</Link>
          ),
        },

        {
          label: "Luyện thi APTIS",
          children: [
            {
              key: 8,
              label: (
                <Link to={"https://edustar.com.vn/aptis/luyen-thi-b1"}>
                  Luyện thi APTIS B1
                </Link>
              ),
            },

            {
              key: 9,
              label: (
                <Link to={"https://edustar.com.vn/aptis/luyen-thi-b2"}>
                  Luyện thi APTIS B2
                </Link>
              ),
            },
          ],
        },

        {
          key: 10,
          label: (
            <Link to={"https://edustar.com.vn/englishacademic"}>
              Anh ngữ học thuật
            </Link>
          ),
        },
      ],
    },

    {
      key: 11,
      label: (
        <Link to={"https://edustar.com.vn/test-schedule"}>lịch thi vstep</Link>
      ),
    },

    {
      key: 12,
      label: (
        <Link to={"https://edustar.com.vn/study-schedule"}>lịch ôn tập</Link>
      ),
    },

    {
      key: 13,
      label: <Link to={"https://edustar.com.vn/new"}>tin tức</Link>,
    },

    {
      key: 14,
      label: "đăng ký tư vấn",
    },
  ];

  const showModalConsulutation = () => {
    alert();
  };
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const drawerTitle = (
    <div>
      <img src={imgLogo} alt="" style={{ height: 60 }} />
    </div>
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
  });
  const handleMenuClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalOk = () => {
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
        message.success('Data submitted successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        message.error('Failed to submit data');
      });

    setModalVisible(false);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const modalStyle = {
    background: '#fb9400', // Màu nền
    color: '#ffff', // Màu chữ
  };
  // const iconSize = 30;
  return (
    <div className="w-full top-0 fixed bg-white z-10 shadow-lg">
      <div className="max-w-[1240px] mx-auto ">
        <Row>
          {isSmallScreen ? (
            <>
              <Col xs={8} sm={8} md={8} lg={2} xl={20}>
                <>
                  <Button
                    // onClick={onClick}
                    onClick={showDrawer}
                    style={{
                      height: "46px",
                      color: "#fb9400",
                      display: isSmallScreen ? "block" : "none",
                      borderStyle: "none",
                    }}
                    className="mx-auto justify-center"
                  >
                    <MenuOutlined />
                  </Button>
                  <Drawer
                    title={drawerTitle}
                    // title={{<img src={imgLogo} className="h-[46px] mx-auto justify-center" alt=""}}

                    placement="left"
                    onClose={onClose}
                    open={open}
                  >
                    <Menu
                      className="mx-auto justify-center uppercase font-bold text-[#515151] !border-none"
                      style={{
                        display: isSmallScreen ? "block" : "none",
                      }}
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      mode="inline"
                      items={listMenuItem}
                      onClick={(props) => {
                        if (props.key == 14) {
                          handleMenuClick();
                        }
                      }}
                    />

                    <Modal
                     visible={modalVisible}
                     onCancel={handleModalCancel}
                     onOk={handleModalOk}
                     formData={formData}
                     handleInputChange={handleInputChange}
                     okButtonProps={{ style: modalStyle }}
                     okText="Gửi thông tin"
                     cancelText="Hủy"
                    >
                      <p className="text-[#fb9400] text-center font-bold text-2xl">
                        Đăng ký tư vấn
                      </p>
                      {/* <ModalConsulutation /> */}
                    </Modal>
                  </Drawer>
                </>
              </Col>
              <Col xs={8} sm={8} md={8} lg={20} xl={2}>
                <img
                  src={imgLogo}
                  className="h-[46px] mx-auto justify-center"
                  alt=""
                />
              </Col>
              <Col xs={8} sm={8} md={8} lg={2} xl={2}>
                <Menu
                  mode="horizontal"
                  className="border-none mx-auto justify-center"
                >
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
                        <h2 onClick={handleSubmitExamByService}>
                          Bài thi dành riêng
                        </h2>
                      </Menu.Item>
                    )}
                  </Menu.SubMenu>
                </Menu>
              </Col>
            </>
          ) : (
            <>
              <Col xs={8} sm={8} md={8} lg={2} xl={2}>
                <img
                  src={imgLogo}
                  alt=""
                  className="h-[46px] mx-auto justify-center"
                />
              </Col>
              <Col xs={8} sm={8} md={8} lg={20} xl={20}>
                <Menu
                  mode={isSmallScreen ? "" : "horizontal"}
                  style={{ display: isSmallScreen ? "none" : "block" }}
                  onClick={(props) => {
                    if (props.key == 14) {
                      handleMenuClick();
                    }
                  }}
                  className="text-[#515151] border-none mx-auto text-center uppercase font-bold hover:!border-[#fb9400]"
                  items={listMenuItem}
                />
                <Modal
                     visible={modalVisible}
                     onCancel={handleModalCancel}
                     onOk={handleModalOk}
                     formData={formData}
                     handleInputChange={handleInputChange}
                    >
                  <p className="text-[#fb9400] text-center font-bold text-2xl">
                    Đăng ký tư vấn
                  </p>
                  <ModalConsulutation />
                </Modal>
              </Col>
              <Col xs={8} sm={8} md={8} lg={2} xl={2}>
                <Menu
                  mode="horizontal"
                  className="border-none mx-auto justify-center"
                >
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
                        <h2 onClick={handleSubmitExamByService}>
                          Bài thi dành riêng
                        </h2>
                      </Menu.Item>
                    )}
                  </Menu.SubMenu>
                </Menu>
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AppHeader;
