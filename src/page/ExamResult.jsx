import React from "react";
import { Image, Card, Space, Button, ConfigProvider } from "antd";
import imgResult from "../image/imgResult.png";
import { useLocation, useNavigate } from "react-router-dom";
const ExamResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;
  console.log("Danh sach cac du lieu la : ", data);
  return (
    <>
      <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 max-w-screen-lg mx-auto gap-10 px-2 sm:mt-5 justify-center">
        <div className="col-span-1 hidden sm:block relative">
          <div className="lg:absolute bottom-0">
            <Image width="200" src={imgResult} preview={false} />
          </div>
        </div>
        <div className="col-span-1 mx-auto my-5 justify-center">
          <Space>
            <Card style={{ width: 300 }}
              className="border-[#fb9400] shadow-lg"
              bodyStyle={{ padding: 0 }}
            >
              <div className="text-lg text-center font-bold border-[#fb9400] border-b pb-4 p-5">
                <p>Kết quả thi</p>
              </div>
              <div className="flex justify-between border-[#fb9400] border-b font-bold py-4 p-5">
                <p>Listening</p>
                <p className="text-[#fb9400] px-2">{data?.pointListening}/10</p>
              </div>
              <div className="flex justify-between font-bold border-[#fb9400] border-b py-4 p-5">
                <p>Reading</p>
                <p className="text-[#fb9400] px-2">{data?.pointReading}/10</p>
              </div>
              <div className="flex justify-between font-bold border-[#fb9400] border-b py-4 p-5">
                <p>Writing</p>
                <p className="text-[#fb9400] px-2">Chưa chấm</p>
              </div>
              <div className="flex justify-between font-bold border-[#fb9400] border-b py-4 p-5">
                <p>Speaking</p>
                <p className="text-[#fb9400] px-2">Chưa chấm</p>
              </div>
              <div className="flex justify-between font-bold border-[#fb9400] border-b py-4 p-5">
                <p>Tổng điểm</p>
                <p className="text-[#fb9400] px-2">{data?.totalPoint}</p>
              </div>
              <div className="gap-x-4 border-[#fb9400] p-5">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "transparent",
                    },
                  }}
                >
                  <Button 
                  onClick={() => {navigate("/vstep")}}
                  className="text-white border-[#fb9400] py-1 bg-[#fb9400] font-bold hover:!border-[#fb9400] hover:shadow-md hover:!text-white w-full">
                    Đóng
                  </Button>
                </ConfigProvider>
              </div>
            </Card>
          </Space>
        </div>
      </div>
    </>
  );
};
export default ExamResult;
