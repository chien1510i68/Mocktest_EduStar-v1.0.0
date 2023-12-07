import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import LayoutItem1 from "./layout/layoutItem1";
import LayoutItem2 from "./layout/layoutItem2";
import FormQuestion2 from "../component/form/FormQuestion2";

export default function Tab1({ listItem }) {
  const onChange = (key) => {
    console.log(key);
  };
  const [listening, setListListening] = useState([]);
  const [reading, setReading] = useState([]);
  useEffect(() => {
    setListListening(listItem?.filter((item) => item.type === "listening"));
    setReading(listItem?.filter((item) => item.type === "reading"));
  }, []);

  const items = [
    {
      key: "1",
      label: "Listening",
      children: <FormQuestion2 type="listening" time={80} data={listening} />,
    },
    {
      key: "2",
      label: "Reading",
      children: <FormQuestion2 type="listening" time={80} data={reading} />,
    },
  ];

  console.log("listItem", listItem);

  return (
    <>
      <div>
        <Tabs
          tabPosition="bottom"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
        <p>Listening</p>
      </div>
      {/* <div>
        <Tabs
          tabPosition="bottom"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div> */}
    </>
  );
}
