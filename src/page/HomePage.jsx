import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormRegister from "../component/form/FormRegister";
import ModalCofirmInfor from "../component/modal/ModalCofirmInfor";

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#2c7be5] w-full h-[100vh] relative ">
          <FormRegister />
          <ModalCofirmInfor/>
      

      {/* <Button onClick={() => navigate("/mocktest/12")}>Click me</Button> */}
    </div>
  );
}

export default HomePage;
