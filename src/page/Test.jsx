import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import FormQuestion2 from "../component/form/FormQuestion2";
import { getDetailExamById } from "../component/api/exam";
const { TabPane } = Tabs;

const Test = () => {
  // const [activeKey, setActiveKey] = useState("1");
  const [listening, setListening] = useState([]);
  const [reading, setReading] = useState([]);
  const handleGetData = () => {
    getDetailExamById("26f94768-5b8e-414b-b966-59f37fdf1a16").then((res) => {
      console.log(res?.data?.sections);
      setListening(res?.data?.sections.filter((i) => i.type === "listening"));
      setReading(res?.data?.sections.filter((i) => i.type === "reading"));
    });
  };
  useEffect(() => {
    handleGetData();
  }, []);

  const items = [
    {
      key: "1",
      label: "Tab 1  ",
      children: <FormQuestion2 type={"listening"} time={40} data={listening} />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <FormQuestion2 type={"reading"} time={40} data={listening} />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: <FormQuestion2 type={"listening"} time={40} data={listening} />,
    },
  ];

  const renderTabBar = (props, DefaultTabBar) => (
    <div className="text-left w-[] bg-slate-500 ">
      <DefaultTabBar {...props} />
      <h2>this is the text</h2>
    </div>
  );

  return (
    <Tabs
      defaultActiveKey={"1"}
      items={items}
      // renderTabBar={renderTabBar}
    ></Tabs>
  );
};

export default Test;
