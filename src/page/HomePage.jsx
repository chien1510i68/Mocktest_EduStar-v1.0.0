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

  const src = "https://youtube.com";
  return (
    <div>
      <AppMenu />
      <div className="my-20">
        <div className="max-w-screen-sm my-6 text-center mx-auto justify-center text-3xl font-bold">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/na80LQCX1KU"
            title="Amazing Animated Logo Intro Video -  Black And White Animation Intro Template"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <Image src={iconLogo} fill alt="" />
          <p className=" my-4">
            Địa điểm thích hợp nhất để luyện thi các chứng chỉ Tiếng Anh{<br />}{" "}
            Quốc tế
          </p>
        </div>

        <div className="grid tablet:grid-cols-2 mobile:grid-cols-span-1 max-w-screen-lg mx-auto justify-center">
          <div className="col-span-1 shadow-xl shadow-[#c0c0c0] p-6 rounded-2xl m-6">
            <img src={imgToeic} alt="" />
            <h2 className="text-xl font-bold my-6">
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
            title="THI TIẾNG ANH TOEIC"
            placement="left"
            closable={false}
            onClose={onCloseDrawerToeic}
            visible={openDrawerToeic}
          >
            <div className="mb-6 flex items-center justify-between"></div>
            <p>- Điểm số: TOEIC L&R có tổng cộng 200-990 điểm.</p>
            <p>- TOEIC S&W có tổng cộng 0-200 điểm.</p>
            <p>
              - TOEIC L&R kiểm tra khả năng hiểu và sử dụng tiếng Anh trong ngữ
              cảnh làm việc, gồm có hiểu nghe, đọc và giải quyết vấn đề.
            </p>
            <p>
              - TOEIC S&W kiểm tra khả năng sử dụng tiếng Anh trong việc trình
              bày ý và viết bài.
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
                onClick={() => {
                  navigate("/toeic");
                }}
              >
                Thi thử TOEIC
              </Button>
            </ConfigProvider>
          </Drawer>
          <div className="col-span-1 shadow-xl shadow-[#c0c0c0] p-6 rounded-2xl m-6">
            <img src={imgVstep} alt="" />
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
            title="THI TIẾNG ANH VSTEP"
            placement="right"
            closable={false}
            onClose={onCloseDrawerVstep}
            visible={openDrawerVstep}
          >
            <p>
              VSTEP – bài thi đánh giá năng lực tiếng Anh theo Khung năng lực
              ngoại ngữ 6 bậc cho Việt Nam. Vậy cấu trúc đề thi VSTEP như thế
              nào? Cùng PREP.VN tìm hiểu bài thi VSTEP 4 kỹ năng: Reading,
              Listening, Writing, Speaking dưới đây nhé!
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
