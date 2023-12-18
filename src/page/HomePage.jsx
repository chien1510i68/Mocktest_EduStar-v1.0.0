import { ConfigProvider, Image } from "antd";
import { useNavigate } from "react-router-dom";
import imgToeic from "../image/imgToeic.png";
import imgVstep from "../image/imgVstep.png";
import AppMenu from "../component/header/HeaderMenu";
import AppFooter from "../component/footer/Footer";
import iconLogo from "../image/Logo.png";
import React, { useState } from "react";
import { Drawer, Button } from "antd";
const HomePage = () => {
  const navigate = useNavigate();

  const [openDrawerToeic, setopenDrawerToeic] = useState(false);
  const [openDrawerVstep, setopenDrawerVstep] = useState(false);

  const showDrawerToeic = () => {
    setopenDrawerToeic(true);
  };

  const showDrawerVstep = () => {
    setopenDrawerVstep(true);
  };

  const onCloseDrawerToeic = () => {
    setopenDrawerToeic(false);
  };

  const onCloseDrawerVstep = () => {
    setopenDrawerVstep(false);
  };

  // const src = "https://youtube.com";
  return (
    <div>
      <AppMenu />
      <div className="my-20 mx-auto justify-center">
        <div className="mx-auto justify-center max-w-[1200px] my-6 text-center ">
          {/* <iframe
          className="hidden sm:block"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/na80LQCX1KU"
            title="Amazing Animated Logo Intro Video -  Black And White Animation Intro Template"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}

          <img src={iconLogo} className="w-50 md:w-30" fill alt="" />
          <p className="px-2 max-w-[1200px] my-4 text-3xl font-bold">
            Địa điểm thích hợp nhất để luyện thi các chứng chỉ Tiếng Anh Quốc tế
          </p>
        </div>

        <div className="grid tablet:grid-cols-2 mobile:grid-cols-span-1 gap-16 max-w-[75%] mx-auto justify-center">
          <div className="col-span-1 shadow-xl shadow-[#c0c0c0] p-6 rounded-2xl border mx-2">
            <img src={imgToeic} alt="" className="mx-auto"/>
            <h2 className="text-xl font-bold py-6">
              Bài thi TOEIC là công cụ chuẩn cho phép đánh giá và so sánh được
              mặt bằng trình độ ngoại ngữ{" "}
            </h2>
            <p className="py-6">
              TOEIC hiện đang được sử dụng rộng rãi tại hơn 160 quốc gia trên
              thế giới với hơn 7 triệu bài thi/năm và là bài thi uy tín nhất
              được hơn 14.000 tổ chức sử dụng để đánh giá trình độ sử dụng tiếng
              Anh trong môi trường làm việc quốc tế. Tại Việt Nam, TOEIC đã và
              đang được sử dụng làm chuẩn đầu ra tại hơn 130 trường Đại học, Cao
              đẳng, hệ thống trường nghề và là tiêu chuẩn tuyển dụng và đánh giá
              tại gần 500 tập đoàn, tổng công ty, doanh nghiệp lớn trên toàn
              quốc
            </p>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "tranparent",
                },
              }}
            >
              <Button
                className="bg-[#fb9400] boder-none text-white hover:!border-[#fb9400] hover:!text-white"
                onClick={showDrawerToeic}
              >
                Xem chi tiết
              </Button>
            </ConfigProvider>

            <div className="flex gap-2"></div>
          </div>
          <Drawer
            title={
              <p className="text-[#fb9400] font-bold">THI TIẾNG ANH TOEIC</p>
            }
            placement="left"
            closable={false}
            onClose={onCloseDrawerToeic}
            visible={openDrawerToeic}
          >
            <p className="mt-6">
              TOEIC (viết tắt của Test of English for International
              Communication – Bài kiểm tra tiếng Anh giao tiếp quốc tế) là một
              bài thi nhằm đánh giá trình độ sử dụng tiếng Anh dành cho những
              người sử dụng tiếng Anh như một ngoại ngữ (không phải tiếng mẹ
              đẻ), đặc biệt là những đối tượng muốn sử dụng tiếng Anh trong môi
              trường giao tiếp và làm việc quốc tế. Kết quả của bài thi TOEIC
              phản ánh mức độ thành thạo khi giao tiếp bằng tiếng Anh trong các
              hoạt động như kinh doanh, thương mại, du lịch… Kết quả này có hiệu
              lực trong vòng 02 năm và được công nhận tại nhiều quốc gia trong
              đó có Việt Nam.
            </p>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "tranparent",
                },
              }}
            >
              <Button
                className="bg-[#fb9400] boder-none text-white my-5 hover:!border-[#fb9400] hover:!text-white"
                onClick={() => {
                  navigate("/toeic");
                }}
              >
                Thi thử TOEIC
              </Button>
            </ConfigProvider>
          </Drawer>
          <div className="col-span-1 shadow-xl shadow-[#c0c0c0] p-6 rounded-2xl border mx-2">
            <img src={imgVstep} alt="" className="mx-auto"/>
            <h2 className="text-xl font-bold my-6">
              Bài thi đánh giá năng lực tiếng anh theo khung năng lực Ngoại ngữ
              6 bậc của Việt Nam{" "}
            </h2>
            <p className="py-6">
              VSTEP được xây dựng nhằm trở thành một công cụ đánh giá năng lực
              tiếng Anh từ bậc 3 – 5 cho đối tượng sau trung học phổ thông, được
              sử dụng trong phạm vi toàn quốc và hướng tới được quốc tế công
              nhận. Đây cũng là mục tiêu của Đề án Ngoại ngữ 2020. VSTEP được áp
              dụng đối với cơ sở đào tạo ngoại ngữ, chương trình đào tạo ngoại
              ngữ, và người học ngoại ngữ trong hệ thống giáo dục quốc dân.
            </p>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "tranparent",
                },
              }}
            >
              <Button
                className="bg-[#fb9400] boder-none text-white hover:!border-[#fb9400] hover:!text-white"
                onClick={showDrawerVstep}
              >
                Xem chi tiết
              </Button>
            </ConfigProvider>
          </div>
          <Drawer
            title={
              <p className="text-[#fb9400] font-bold">THI TIẾNG ANH VSTEP</p>
            }
            placement="right"
            closable={false}
            onClose={onCloseDrawerVstep}
            visible={openDrawerVstep}
          >
            <p className="mt-6">
              VSTEP hướng đến nhiều đối tượng, chẳng hạn như chứng chỉ tiếng Anh
              B1 được yêu cầu đối với học sinh, sinh viên các trường đại học,
              cao đẳng; những ai chuẩn bị thi thạc sĩ nếu có chứng chỉ B1 sẽ
              được miễn thi tiếng Anh đầu vào; thi công chức, viên chức. Chứng
              chỉ B2 sẽ cần thiết cho giáo viên tiếng Anh mầm non, tiểu học,
              trung học cơ sở; đầu ra cao học và đầu vào nghiên cứu sinh; chuyên
              viên cao cấp. Đối với giáo viên tiếng Anh bậc trung học phổ thông
              và các giáo viên không chuyên ngữ tại các trường đại học, cao đẳng
              đạt được chứng chỉ C1.
            </p>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "tranparent",
                },
              }}
            >
              <Button
                className="bg-[#fb9400] boder-none my-5 text-white hover:!border-[#fb9400] hover:!text-white"
                onClick={() => {
                  navigate("/vstep");
                }}
              >
                Thi thử VSTEP
              </Button>
            </ConfigProvider>
          </Drawer>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};
export default HomePage;
