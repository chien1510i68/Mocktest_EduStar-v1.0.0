import { Image } from "antd";
import imageObject from "../../image/OBJECTS.png";
import exam1 from "../../image/exam_1.png";
import onlineTest from "../../image/online_test_1.png";
import image1 from "../../image/image1.png";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const BeforeExam = () => {
  const navigate = useNavigate();
  const { examId ,timeExam ,typeExam} = useParams();
  // const {  } = useParams();
  useEffect(() => {
    localStorage.setItem("typeSection", JSON.stringify("listening"));
    localStorage.setItem("responseUsers", JSON.stringify([]));

    localStorage.setItem(
      "timeSection",
      JSON.stringify(timeExam === "minitest" ? 25 : 45)
    );
    // localStorage.setItem("timeSection" ,JSON.stringify(11))
    localStorage.removeItem("timeLeft");
    localStorage.removeItem("responsewriting");
    localStorage.removeItem("responselistening");
    localStorage.removeItem("responsereading");
    localStorage.removeItem("typeSection");
  }, []);
  return (
    <>
      <div className="bg-#fdf8ee max-w-screen-lg mx-auto">
        <div className="grid tablet:grid-cols-2 mobile:grid-cols-1 gap-4 m-10">
          <div className="row-span-5 col-span-1 p-5 relative hidden sm:block">
            <div className="sm:absolute bottom-0">
              <Image src={imageObject} alt="" />
            </div>
          </div>
          <div className="row-span-1 col-span-1 my-auto">
            <p className="font-bold sm:font-normal">
              Để việc thi diễn ra suôn sẻ hãy kiểm tra tai nghe/loa trước khi
              nhận đề
            </p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-row mt-5 px-5">
            <div className="h-14 p-2 rounded-lg bg-[#e5e5e5] basis-1/6">
              <img className="h-10 mx-auto" src={onlineTest} alt="" />
            </div>
            <div className="mx-5 basis-5/6">
              <p className="font-bold uppercase">Cấu trúc bài thi</p>
              <p>Kỹ năng Nghe - 3 phần (47 phút)</p>
              <p>Kỹ năng Đọc - 4 phần (60 phút)</p>
              <p>Kỹ năng Viết - 2 phần (60 phút)</p>
            </div>
          </div>
          <div className="row-span-1 col-span-1 flex flex-row mt-5 px-5">
            <div className="h-14 p-2 rounded-lg bg-[#e5e5e5] basis-1/6">
              <img className="h-10 mx-auto" src={image1} alt="" />
            </div>
            <div className="ml-5 basis-5/6">
              <p className="font-bold uppercase">kiểm tra âm thanh</p>
              <p>Mở loa hoặc đeo tay nghe để nghe một đoạn audio bên dưới</p>

              <audio controls className="w-full rounded-3xl shadow-lg bg-white">
                <source
                  src="https://luyenthivstep.vn/public/audio/audioTest.mp3"
                  type="audio/mp3"
                />
              </audio>
              {/* <script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js"></script> */}
            </div>
          </div>

          <div className="row-span-1 col-span-1 flex flex-row mt-5 px-5 pb-5 border-b-2 border-[#fb9400]">
            <div className="h-14 p-2 rounded-lg bg-[#e5e5e5] basis-1/6">
              <img className="h-10 mx-auto" src={exam1} alt="" />
            </div>
            <div className="ml-5 basis-5/6">
              <p className="font-bold uppercase">lưu ý</p>
              <p>
                -- Khi hết thời gian của từng kỹ năng, hệ thống sẽ tự động
                chuyển sang kỹ năng tiếp theo. Thí sinh không thể thao tác được
                với kỹ năng đã làm trước đó.
              </p>
              <p>
                -- Để chuyển part hay kỹ năng, thí sinh click vào nút "Tiếp tục"
              </p>
            </div>
          </div>
          <div className="row-span-1 col-span-1">
            <button
              onClick={() => navigate(`/exam/${examId}/listening` ,{state : typeExam})}
              className="bg-[#fb9400] w-full p-2 text-white font-bold uppercase rounded-md shadow-md shadow-[#bebbb3] hover:bg-yellow-500"
            >
              thi thử
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BeforeExam;
