// src/components/Menu.js
import React, { useState } from "react";
import Model from "../component/modal/ModalConsulutation";
import { Menu } from "antd";

const Testlayout = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const handleItemClick = (model) => {
    setSelectedModel(model);
  };

  const handleCloseModal = () => {
    setSelectedModel(null);
  };
  const itemMenu = [
    {
      key: 1,
      label: "show modal",
    },

    {
      key: 2,
      label: "dont have",
    },
  ];

  return (
    <div>
      <Menu
        mode="horizontal"
        items={itemMenu}
        onClick={(props) => {
          if (props.key == 1) {
            handleItemClick();

            selectedModel && (
              <Model model={selectedModel} onClose={handleCloseModal} />
            );
          }
        }}
      />
    </div>
  );
};

export default Testlayout;
