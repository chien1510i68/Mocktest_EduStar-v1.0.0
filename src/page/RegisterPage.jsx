// import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormRegister from "../component/form/FormRegister";
import ModalCofirmInfor from "../component/modal/ModalCofirmInfor";

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] relative ">
          <FormRegister />
          <ModalCofirmInfor/>
      

      {/* <Button onClick={() => navigate("/mocktest/05b61e04-f55b-4679-95c3-bc7f8b832db5")}>Click me</Button> */}
    </div>
  );
}

export default HomePage;
