import { ConfigProvider, Input } from "antd";

const InputElement = (prop) => {
  return (
    <>
      <ConfigProvider
        theme={{
            token: {
                colorPrimary: "#fb9400",
                placeholder: "#808080"
            }
        }}
      >
        <Input
          className="border-[#fb9400] hover:shadow-md placeholder-red-500"
          prefix={prop.prefix}
          placeholder={prop.placeholder}
        />
      </ConfigProvider>
    </>
  );
};

export default InputElement;
