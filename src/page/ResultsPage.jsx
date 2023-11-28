import { Button, Col, Image, Row, Table } from "antd";
import React from "react";
import image from "../assets/image/ketquathi.png";
import { Avatar, List } from "antd";
const dataSource = [
  {
    key: "1",
    name: "Listening",
    point: 2,
  },
  {
    key: "1",
    name: "Reading",
    point: 2,
  },
  {
    key: "1",
    name: "Writing",
    point: 2,
  },
  {
    key: "1",
    name: "Speaking",
    point: 2,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Point",
    dataIndex: "point",
    key: "point",
  },
];
function ResultsPage(props) {
  return (
    <div className="bg-orange-100  h-[100vh]">
      <div className="my-auto pt-[10vh]">
        <div className="grid phone:grid-cols-1 tablet:grid-cols-2  laptop:grid-cols-3  ">
          <div className="phone:col-span-1 tablet:col-span-1 laptop:col-span-2 mx-auto">
            <Image src={image} preview={false} />
          </div>
          <div className="col-span-1 mx-auto my-auto w-full">
            <Table
              dataSource={dataSource}
              className="tablet:w-[60%] phone:w-full mx-auto"
              pagination={false}
              columns={columns}
              showHeader={false}
              title={() => (
                <>
                  <h2 className="text-center font-medium text-lg text-orange-500">
                    Điểm bài thi{" "}
                  </h2>
                </>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 pt-10">
          <Button className=" block ">Tiếp tục thi thử </Button>
          <Button className=" block ">Quay lại trang chính </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
