import React, { useEffect, useState } from "react";
import { getDetailExamById } from "../component/api/exam";

import Tab1 from "./Tab1";
import Tab2 from "./tab2";
import FormQuestion2 from "../component/form/FormQuestion2";
// import getDetailExamById from "../../src/component/api/exam"
function Test(props) {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    getDetailExamById("26f94768-5b8e-414b-b966-59f37fdf1a16")
      .then((res) => {
        console.log(res.data);
        setListItem(res?.data?.sections);
       
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

  return (
    <div className="">
      <Tab1 listItem={listItem}/>
      </div>
      
  );
}

export default Test;
