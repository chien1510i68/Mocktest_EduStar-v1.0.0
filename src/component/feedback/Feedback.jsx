import React from "react";
import iivietnam from "../../image/iiVietNam.png";
import hneu from "../../image/hnue.png";
import neu from "../../image/neu.png";
import SlidesToShow from "../carousel/Carousel";

const Feedback = () => {
  const slides = [
    {
      image: iivietnam,
      name: "Nguyen Văn A",
      caption: "Feedback caption 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: hneu,
      name: "Nguyen Văn A",
      caption: "Feedback caption 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
    {
      image: neu,
      name: "Nguyen Văn A",
      caption: "Feedback caption 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, iure assumenda nesciunt maiores culpa quam, totam dicta perferendis voluptatibus magni excepturi? Molestiae praesentium cumque aspernatur quam enim doloremque officiis eaque.",
    },
  ];
  return (
    <div className=" justify-center my-10 mx-auto">
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
