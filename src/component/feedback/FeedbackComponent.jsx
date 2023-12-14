import React from "react";
import avatar1 from "../../image/iconFeedback/Image1.png";
import avatar2 from "../../image/iconFeedback/Image2.png";
import avatar3 from "../../image/iconFeedback/Image3.png";
import avatar4 from "../../image/iconFeedback/Image4.png";
import avatar5 from "../../image/iconFeedback/Image5.png";
import avatar6 from "../../image/iconFeedback/Image6.png";
import avatar7 from "../../image/iconFeedback/Image7.png";
import avatar8 from "../../image/iconFeedback/Image8.png";
import avatar9 from "../../image/iconFeedback/Image9.png";
import SlidesToShow from "../carousel/CarouselComponent";

const UserFeedback = () => {
  const slides = [
    {
      image: avatar1,
      name: "Hoàng Văn An",
      // caption: "Feedback caption 1",
      content:
        "Tôi rất hài lòng với trung tâm tiếng Anh này vì cách giảng dạy chuyên nghiệp và hiệu quả. Giáo viên tận tâm và luôn tạo điều kiện thuận lợi cho sự học tập của học viên.",
    },
    {
      image: avatar2,
      name: "Lê Thị Hoa",
      // caption: "Feedback caption 2",
      content:
        "Khóa học ở đây rất linh hoạt với lịch học phù hợp với các đối tượng học viên. Điều này giúp tôi quản lý thời gian học tập hiệu quả hơn.",
    },
    {
      image: avatar3,
      name: "Nguyễn Hoàng Linh",
      // caption: "Feedback caption 3",
      content:
        "Môi trường học tập tại trung tâm rất tích cực và sôi động. Các hoạt động ngoại khóa và sự tương tác giữa học viên thường xuyên được tổ chức, tạo điều kiện cho việc học tập thêm phần thú vị.",
    },
    {
      image: avatar4,
      name: "Nguyen Lan Anh",
      // caption: "Feedback caption 1",
      content:
        "Tôi ấn tượng với việc sử dụng công nghệ trong giảng dạy tại trung tâm. Các phần mềm và ứng dụng học tập giúp tăng cường kỹ năng ngôn ngữ một cách hiệu quả.",
    },
    {
      image: avatar5,
      name: "Trần Đình Trọng",
      // caption: "Feedback caption 2",
      content:
        "Hệ thống đánh giá và phản hồi từ giáo viên rất chi tiết và hữu ích. Điều này giúp tôi hiểu rõ hơn về những điểm mạnh và điểm cần cải thiện của mình trong quá trình học.",
    },
    {
      image: avatar6,
      name: "Nguyễn Văn Quyết",
      // caption: "Feedback caption 3",
      content:
        "Trung tâm có thư viện sách phong phú và nguồn tài nguyên học tập đa dạng. Điều này giúp tôi mở rộng vốn từ vựng và kiến thức ngôn ngữ một cách toàn diện.",
    },
    {
      image: avatar7,
      name: "Nguyễn Hoài Nam",
      // caption: "Feedback caption 1",
      content:
        "Học phí ở đây rất hợp lý so với chất lượng giáo dục được cung cấp. Tôi cảm thấy đây là một đầu tư đáng giá cho sự phát triển cá nhân của mình.",
    },
    {
      image: avatar8,
      name: "Lưu Thúy Hằng",
      // caption: "Feedback caption 2",
      content:
        "Quá trình học tập không chỉ tập trung vào ngữ pháp mà còn kết hợp với các hoạt động thực tế, giúp tăng cường khả năng sử dụng ngôn ngữ trong các tình huống thực tế.",
    },
    {
      image: avatar9,
      name: "Trương Mỹ Linh",
      // caption: "Feedback caption 3",
      content:
        "Hệ thống tư vấn và hỗ trợ học viên tại trung tâm rất chuyên nghiệp. Tôi luôn có thể tìm kiếm sự giúp đỡ khi cần thiết và nhận được hỗ trợ nhanh chóng.",
    },
  ];
  return (
    <div className=" justify-center my-10 mx-auto max-w-[1200px] px-5">
      <div className=" text-center my-5">
        <span className=" max-w-[1200] text-[#fb9400] font-bold text-3xl border-b-2 py-2 border-[#fb9400]">
          Đánh giá của học viên
        </span>
      </div>
      <SlidesToShow slides={slides} />
    </div>
  );
};

export default UserFeedback;
