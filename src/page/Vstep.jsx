import { Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
// import Competition from "../component/competition/Competition";
import Feedback from "../component/feedback/FeedbackComponent";
import Consultation from "../component/consultation/Consultation";
import Footer from "../component/footer/Footer";
import group from "../image/Group 5355.png";
import ImageBanner from "../image/banner_vstep.png";
import luuY from "../image/vstep_luu_y.png";
import AppMenu from "../component/header/HeaderMenu";
import { handleGetExamByType } from "../component/handlelogic/handleExam";
import { useContext } from "react";
import { AppContext } from "../component/AppContext";

function Vstep() {
  const navigate = useNavigate();
  const { data, dispatch } = useContext(AppContext);
  const handleNavigate = async () => {
    const phoneNumber = JSON.parse(localStorage.getItem("phoneNumber"));
    console.log("phoneNumber", phoneNumber);
    if (phoneNumber === null) {
      navigate("/register", { state: "vstep" });
    } else {
      const data = await handleGetExamByType("vstep");
      if (data?.data?.total === 0) {
        dispatch({ type: "openModalWarning" });
      } else {
        navigate("/exam/all", { state: data?.data?.items });
      }
    }
  };

  return (
    <div className="">
      <AppMenu />
      {/* <HeaderMenu /> */}
      {/* <h2>this is the text</h2> */}

      <div className="sm:pt-20 p-5 bg-[#FFF4E5] grid tablet:grid-cols-2 mobile:grid-cols-1 mt-10 gap-5 mb-5 items-center shadow-md">
        <div className="col-span-1 text-left tablet:ml-[10%] mobile:ml-2">
          <h2 className="text-slate-950 font-semibold text-3xl ">
            {" "}
            Thi thử VSTEP Online Miễn Phí{" "}
          </h2>

          <p className="text-left my-5">
            EduStar cung cấp miễn phí phần mềm thi trên máy tính, mô phỏng phần
            mềm thi chính thức của Bộ, hỗ trợ thí sinh nắm vững các chức năng
            của phần mềm & ôn luyện các bộ đề thi bám sát định dạng, giúp thí
            sinh tự tin trước khi bước vào các kỳ thi chính thức.
          </p>

          <div className="flex justify-start gap-2">
            <Button
              className="bg-[#fb9400] flex border-[#fff4e5] text-white font-bold hover:!bg-[#fb9400] hover:!text-white hover:!border-[#fb9400]"
              onClick={handleNavigate}
            >
              Thi thử miễn phí{" "}
              <svg
                className="my-auto mx-2 hidden sm:block"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0.847063V1.75991C1 1.82198 1.02612 1.8804 1.06896 1.91692L5.16088 5.37477L1.06896 8.83262C1.02612 8.86914 1 8.92756 1 8.98963V9.90248C1 9.98159 1.07732 10.0278 1.13271 9.98159L6.21207 5.69C6.39598 5.53421 6.39598 5.21533 6.21207 5.06075L1.13271 0.769167C1.07732 0.721699 1 0.76795 1 0.847063Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.25"
                />
              </svg>
            </Button>
            <Button
              className="flex border-[#fb9400] text-[#fb9400] font-bold hover:!bg-[#fb9400] hover:!text-white duration-50 hover:!border-[#fb9400]"
              onClick={handleNavigate}
            >
              Xem lịch thi thử VSTEP
              <svg
                className="my-auto ml-2 hover:fill-[#fff] hidden sm:block"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4 1.30476H11.25V0.144973C11.25 
                0.065238 11.1825 0 11.1 0H10.05C9.9675 0 9.9
                 0.065238 9.9 0.144973V1.30476H5.1V0.144973C5.1
                  0.065238 5.0325 0 4.95 0H3.9C3.8175 0 3.75 0.065238 3.75 0.144973V1.30476H0.6C0.268125 1.30476 0 1.5639 0 1.88465V13.9174C0 14.2382 0.268125 14.4973 0.6 14.4973H14.4C14.7319 14.4973 15 14.2382 15 13.9174V1.88465C15 1.5639 14.7319 1.30476 14.4 1.30476ZM13.65 13.1926H1.35V6.30634H13.65V13.1926ZM1.35 5.07407V2.60952H3.75V3.47936C3.75 3.5591 3.8175 3.62433 3.9 3.62433H4.95C5.0325 3.62433 5.1 3.5591 5.1 3.47936V2.60952H9.9V3.47936C9.9 3.5591 9.9675 3.62433 10.05 3.62433H11.1C11.1825 3.62433 11.25 3.5591 11.25 3.47936V2.60952H13.65V5.07407H1.35Z"
                  fill="#fb9400"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <img src={ImageBanner} alt=""/>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto justify-center px-3">
        <div className="mobile:my-5 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 justify-center py-10">
          <div className="col-span-1 text-left tablet:ml-[10%] mobile:ml-5 px-5">
            <p className="font-bold text-xl my-3">Lợi ích khi thi thử VSTEP</p>
            <p className="my-3">
              Thi thở VSTEP chính là bước quan trọng giúp bạn kiểm tra trình độ
              tiếng anh cũng như làm quen với đề thi thử VSTEP trước khi bước
              vào kỳ thi chính thức.
            </p>
            <ul className="">
              <li className="px-5 my-3 list-disc">
                Làm quen với giao diện, các chức năng của phần mềm thi trên máy
                tính.
              </li>
              <li className="px-5 my-3 list-disc">
                Nắm rõ được định dạng đề thi, các bước làm bài thi.
              </li>
              <li className="px-5 my-3 list-disc">
                Có ngay kết quả bài thi trắc nghiệm, tự đánh giá được năng lực
                hiện tại.
              </li>
              <li className="px-5 my-3 list-disc">
                Ôn luyện không giới hạn với kho đề thi khổng lồ được cập nhật
                mới thường xuyên khi đăng ký tài khoản
              </li>
              <li className="px-5 my-3 list-disc">
                Tương thích với mọi thiết bị: máy tính, điện thoại... Bạn có thể
                ôn luyện ở bất cứ đâu.
              </li>
              <li className="px-5 my-3 list-disc">
                Thông qua các bài thi thử, các bạn có thể tích lũy thêm kinh
                nghiệm làm bài, kiến thức mới, đa lĩnh vực
              </li>
              <li className="px-5 my-3 list-disc">
                Theo dõi lịch thi VSTEP được cập nhật nhanh nhất toàn quốc
              </li>
            </ul>
          </div>
          <div className="col-span-1 mx-auto ">
            <img src={group} alt=""/>
          </div>
        </div>

        <div className="mobile:my-5 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 justify-center px-5 py-10">
          <div className="col-span-1">
            <img src={luuY} alt=""/>
          </div>
          <div className="col-span-1 text-left tablet:ml-[10%] mobile:ml-2">
            <p className="text-xl font-bold my-3">
              Lưu ý khi làm đề thi thử VSTEP online
            </p>
            <p>
              Để việc ôn luyện đề thi Vstep online được hiệu quả tốt nhất có
              thể, học viên lưu ý những vấn đề sau đây:
            </p>
            <ul>
              <li className="px-5 my-3 list-disc">
                Học viên nên nghiêm túc và làm bài giống như khi thi thật, không
                sử dụng tài liệu trong quá trình làm bài.
              </li>
              <li className="px-5 my-3 list-disc">
                Làm bài nên sử dụng máy tính để bàn hoặc laptop để đạt hiệu qủa
                tốt nhất.
              </li>
              <li className="px-5 my-3 list-disc">
                Luyện nghe loa ngoài để làm quen dần với âm thanh và cải thiện
                trình độ nghe Vstep của mình.
              </li>
              <li className="px-5 my-3 list-disc">
                Làm đúng thời gian quy định
              </li>
              <li className="px-5 my-3 list-disc">
                Tập chung làm hết bài thi không bỏ dở giữa chừng.
              </li>
              <li className="px-5 my-3 list-disc">
                Sau khi thi kiểm tra lỗi sai, phân tích lỗi sai và tìm ra giải
                pháp cho câu hỏi.
              </li>
            </ul>
          </div>
        </div>

        <div className="mobile:my-5 mobile:grid-cols-1 gap-10 justify-center px-5 py-10">
          <div className=" tablet:ml-[5%] mobile:ml-2">
            <p className="font-bold text-xl my-3">
              Đối tượng cần chứng chỉ tiếng Anh VSTEP
            </p>
          </div>
          <div className="mobile:my-5 grid tablet:grid-cols-2 mobile:grid-cols-1 gap-10 justify-center py-10">
            <div className="col-span-1 text-left tablet:ml-[10%] mobile:ml-2 border-solid border-2 border-sky-500 rounded-3xl p-10">
              <ul className="pl-2">
                <li className="list-disc">
                  Học viên chuẩn bị bảo vệ thạc sỹ và chuẩn bị nộp hồ sơ NCS.
                </li>
                <li className="list-disc">
                  Học sinh, sinh vien các trường Đại học Cao Đẳng(B1).
                </li>
                <li className="list-disc">
                  Những bạn chuẩn bị thi thạc sỹ được miễn thi tiếng Anh đầu vào
                  nấu có chứng chỉ VSTEP B1.
                </li>
                <li className="list-disc">
                  Thi công chức hoặc đang là công chức hạng chuyên viên chính.
                </li>
              </ul>
              <p className="font-bold text-md">VSTEP B1</p>
            </div>
            <div className="border-solid border-2 border-sky-500 rounded-3xl p-10">
              <ul className="pl-2">
                <li className="list-disc">
                  Sinh viên hệ chất lượng cao thuộc các trường Đại học như Đại
                  học Quốc gia Hà Nội, Đại học Thương Mại,...
                </li>
                <li className="list-disc">
                  Giáo viên tiếng Anh cấp mầm non, tiểu học, trung học cơ sở.
                </li>
                <li className="list-disc">
                  Những người chuẩn bị làm đầu ra nghiên cứu sinh.
                </li>
                <li className="list-disc">
                  Thi chuyên viên, giảng viên cao cấp
                </li>
              </ul>
              <p className="font-bold text-md">VSTEP B2</p>
            </div>
          </div>
        </div>
      </div>

      <Consultation />
      {/* <Competition /> */}
      <Feedback />

      <Footer />
    </div>
  );
}

// export default MockTest;
export default Vstep;
