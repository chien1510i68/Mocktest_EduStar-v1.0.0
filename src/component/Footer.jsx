import React from "react";
import Logo from "../image/Logo.png";
import svgCall from "../vector/svgCall.svg";
import svgAddress from "../vector/svgAddress.svg";
import svgEmail from "../vector/svgEmail.svg";
import svgFacebook from "../vector/svgFacebook.svg";
import svgRadioButton from "../vector/radioButton.svg";
import { List } from "antd";

const AppFooter = () => {
  const serviceProcided = [
    "Luyện thi VSTEP",
    "Luyện thi APTIS",
    "Luyện thi TOEIC",
    "Luyện thi IELTS",
    "Luyện thi Anh ngữ học thuật",
  ];
  const workCalendar = [
    "Tư vấn 24/24",
    "Thi thử miễn phí",
    "Lịch ôn tập các chứng chỉ",
    "Lịch thi các trường Đại học",
  ];
  return (
    <footer className=" bg-gray-100 ">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="px-2">
          <a href="#!">
            <img src={Logo} alt="" />
          </a>
        </div>
        {/* end logo */}
        <div className="mx-auto grid tablet:grid-cols-3 mobile:grid-cols-1">
          <div className="col-span-1">
            <div className="grid grid-cols-8 py-5">
              <div className="col-span-1">
                <img src={svgCall} alt="" className="my-4" />
                <img src={svgAddress} alt="" className="my-4" />
                <img src={svgEmail} alt="" className="sm:mt-4 mt-10" />
                <img src={svgFacebook} alt="" className="my-4" />
              </div>
              <div className="col-span-2 font-bold text-[#515151]">
                <p className="my-3">Liên hệ</p>
                <p className="my-3">Địa chỉ</p>
                <p className="sm:mt-4 mt-10">Email</p>
                <p className="my-3">Facebook</p>
              </div>
              <div className="col-span-5 font-bold text-[#515151] mx-auto justify-center">
                <p className="my-3">+84 1234567890</p>
                <p className="my-3 overflow-hidden inline">Trung tâm Anh ngữ - HVNNVN</p>
                <p className="mt-4">edustar1910@gmail.com</p>
                <p className="my-3">Edustar</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <span className="font-bold text-lg text-[#f69050] border-b border-[#fb9400]">
              Dịch vụ
            </span>
            <List
              // header={<p className="text-[#f69050] font-bold text-xl border-b border-[#fb9400]">Dịch vụ</p>}
              //   bordered
              dataSource={serviceProcided}
              renderItem={(item) => (
                <List.Item className="!flex !justify-start !border-none !text-[#7b7b7b] !p-1 gap-4 sm:gap-2">
                  <img src={svgRadioButton} alt="" />
                  <span>{item}</span>
                </List.Item>
              )}
            />
          </div>
          <div className="col-span-1">
            <span className="text-lg text-[#f69050] border-b border-[#fb9400] font-bold">
              Lịch làm việc
            </span>
             <List
              dataSource={workCalendar}
              renderItem={(item) => (
                <List.Item className="!flex !justify-start !border-none !text-[#7b7b7b] !p-1">
                  <span>{item}</span>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      <nav className="flex flex-row justify-end p-3 bg-gray-200">
        <a href="#!" className="mr-5">
          <svg
            viewBox="0 0 48 48"
            className="h-4 w-6 rounded-md"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Color-"
              transform="translate(-200.000000, -160.000000)"
              fill="#4460A0"
            >
              <path
                d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                id="Facebook"
              ></path>
            </g>
          </svg>
        </a>
        <a href="#!" className="mr-5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-6 rounded-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="#006699" />
            <path
              d="M9.23928 16.8632V10.3801H7.08631V16.8632H9.23951H9.23928ZM8.16325 9.4951C8.91387 9.4951 9.38119 8.99727 9.38119 8.37513C9.36714 7.73881 8.91387 7.25488 8.17752 7.25488C7.44066 7.25488 6.95941 7.73881 6.95941 8.37507C6.95941 8.99721 7.42656 9.49504 8.14914 9.49504H8.16308L8.16325 9.4951ZM10.431 16.8632H12.5838V13.2431C12.5838 13.0496 12.5978 12.8556 12.6547 12.7174C12.8103 12.3301 13.1645 11.9292 13.7594 11.9292C14.5382 11.9292 14.85 12.5237 14.85 13.3953V16.8632H17.0027V13.146C17.0027 11.1547 15.9407 10.2281 14.5243 10.2281C13.363 10.2281 12.853 10.8778 12.5696 11.3202H12.5839V10.3803H10.4311C10.4592 10.9885 10.4309 16.8634 10.4309 16.8634L10.431 16.8632Z"
              fill="white"
            />
          </svg>
        </a>

        <a href="#!" className="mr-5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-6 rounded-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="h-6 w-6" rx="3.5" fill="white" stroke="#C4CFE3" />
            <path
              d="M6.0156 17.3512H8.23907V11.9514L5.06268 9.56909V16.3983C5.06268 16.9256 5.48991 17.3512 6.0156 17.3512Z"
              fill="#4285F4"
            />
            <path
              d="M15.8624 17.3512H18.0859C18.6132 17.3512 19.0388 16.924 19.0388 16.3983V9.56909L15.8624 11.9514"
              fill="#34A853"
            />
            <path
              d="M15.8624 7.8222V11.9515L19.0388 9.56921V8.29866C19.0388 7.12022 17.6936 6.44841 16.7518 7.15516"
              fill="#FBBC04"
            />
            <path
              d="M8.23907 11.9514V7.82214L12.0507 10.6809L15.8624 7.82214V11.9514L12.0507 14.8102"
              fill="#EA4335"
            />
            <path
              d="M5.06268 8.29866V9.56921L8.23907 11.9515V7.8222L7.34968 7.15516C6.4063 6.44841 5.06268 7.12022 5.06268 8.29866Z"
              fill="#C5221F"
            />
          </svg>
        </a>
        <a href="#!" className="mr-5">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-6 rounded-sm"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="#FF0000" />
            <path
              d="M18.6752 8.69898C18.5185 8.10989 18.0549 7.64516 17.4652 7.48589C16.3988 7.20007 12.1203 7.20007 12.1203 7.20007C12.1203 7.20007 7.84391 7.20007 6.77537 7.48589C6.18778 7.64298 5.72423 8.10771 5.56536 8.69898C5.28027 9.76807 5.28027 12.0001 5.28027 12.0001C5.28027 12.0001 5.28027 14.2321 5.56536 15.3012C5.72206 15.8903 6.1856 16.355 6.77537 16.5143C7.84391 16.8001 12.1203 16.8001 12.1203 16.8001C12.1203 16.8001 16.3988 16.8001 17.4652 16.5143C18.0528 16.3572 18.5163 15.8924 18.6752 15.3012C18.9603 14.2321 18.9603 12.0001 18.9603 12.0001C18.9603 12.0001 18.9603 9.76807 18.6752 8.69898Z"
              fill="white"
            />
            <path
              d="M10.7536 14.0575L14.3074 12.0001L10.7536 9.94262V14.0575Z"
              fill="#FF0000"
            />
          </svg>
        </a>
      </nav>
      {/* icons */}
    </footer>
  );
};

export default AppFooter;
