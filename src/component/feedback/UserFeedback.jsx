import React from "react";
import avatar1 from "../../image/iconFeedback/Image1.png"
import avatar2 from "../../image/iconFeedback/Image2.png"
import avatar3 from "../../image/iconFeedback/Image3.png"
import avatar4 from "../../image/iconFeedback/Image4.png"
import avatar5 from "../../image/iconFeedback/Image5.png"
import avatar6 from "../../image/iconFeedback/Image6.png"
import avatar7 from "../../image/iconFeedback/Image7.png"
import avatar8 from "../../image/iconFeedback/Image8.png"
import avatar9 from "../../image/iconFeedback/Image9.png"
import SlidesToShow from "../carousel/Carousel";

const Feedback = () => {
  const slides = [
    {
      image: avatar1,
      name: "Nguyen Văn A",
      caption: "Feedback caption 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar2,
      name: "Nguyen Văn A",
      caption: "Feedback caption 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar3,
      name: "Nguyen Văn A",
      caption: "Feedback caption 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar4,
      name: "Nguyen Văn A",
      caption: "Feedback caption 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar5,
      name: "Nguyen Văn A",
      caption: "Feedback caption 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar6,
      name: "Nguyen Văn A",
      caption: "Feedback caption 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },{
      image: avatar7,
      name: "Nguyen Văn A",
      caption: "Feedback caption 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar8,
      name: "Nguyen Văn A",
      caption: "Feedback caption 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: avatar9,
      name: "Nguyen Văn A",
      caption: "Feedback caption 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
  ];
  return (
    <div className=" justify-center my-10 mx-auto max-w-[1200px]">
      <div className=" text-center">
        <span className=" text-[#fb9400] font-bold text-3xl border-b-2 py-2 border-[#fb9400]">
          Đánh giá của học viên
        </span>
      </div>
      <SlidesToShow slides={slides} />
    </div>
  );
};

export default Feedback;
