import React, { useState, useEffect } from "react";
import { Menu } from "antd";

const MenuComponent = () => {
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
        setIsMobile(window.innerWidth <= 1205); // Thay đổi giới hạn kích thước tùy vào yêu cầu của bạn
      };
  
      // Lắng nghe sự kiện thay đổi kích thước màn hình
      window.addEventListener("resize", handleResize);
  
      // Kiểm tra kích thước màn hình khi component được render
      handleResize();
  
      // Hủy lắng nghe khi component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <Menu
            mode={isMobile ? "horizontal" : "horizontal"}
            style={{ display: isMobile ? "none" : "block" }}
            onClick={(e) => {
              if (e.key == 14) {
                // showModalRegisterAcc();
              }
            }}
            className={`text-[#515151] border-none uppercase font-bold `}
            items={listMenuItem}
          />
    )
}

export default MenuComponent;