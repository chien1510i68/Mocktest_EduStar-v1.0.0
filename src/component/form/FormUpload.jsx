

import { ProFormUploadButton } from "@ant-design/pro-components";
import React, { useContext, useState } from "react";
import { Button, message, notification } from "antd";
import { createFile } from "../api/exam";
import { AppContext } from "../AppContext";

function FormUpload(props) {
  const [listFile, setListFile] = useState([]);
  const [fieldFile, setFieldFile] = useState("");
  const { data, dispatch } = useContext(AppContext);
  const { fileInDescription } = data;

  const MAX_FILE_SIZE_MB = 10; // Giới hạn kích thước file (MB)

  const handleUpload = async (file) => {
    const allowedFileTypes = ["audio/mp3", "video/mp4"]; // Định dạng file cho phép

    // Kiểm tra định dạng file
    if (!allowedFileTypes.includes(file.file.type)) {
      notification.error({ message: "File không có định dạng yêu cầu" });
      return;
    }

    // Kiểm tra kích thước file
    if (file.file.size / 1024 / 1024 > MAX_FILE_SIZE_MB) {
      notification.error({ message: `File vượt quá kích thước cho phép (${MAX_FILE_SIZE_MB}MB)` });
      return;
    }

    // Tiến hành upload file
    const res = await createFile(file.file);
    console.log("res: ", res?.data?.data);

    if (res?.data?.success) {
      setListFile([...listFile, { url: res?.data?.data?.downloadUrl }]);
      setFieldFile(res?.data?.data?.downloadUrl);
      dispatch({ type: "fileInDescription", payload: res?.data?.data?.downloadUrl });
      notification.success({ message: "Tải file lên thành công" });
    } else {
      notification.error({ message: "Tải file lên không thành công!" });
    }
  };

  const listFileRemoved = () => {
    setListFile(null);
    notification.success({ message: "Xoá thành công" });
  };

  const handleTest = () => {
    console.log(fileInDescription);
  };

  return (
    <div className="mx-3 md:mx-5 my-5">
      <ProFormUploadButton
        name="image"
        title="Click to upload"
        fileList={listFile}
        transform={(value) => {
          return {
            image: fieldFile || "",
          };
        }}
        fieldProps={{
          listType: "picture-card",
          method: "POST",
          name: "file",
          customRequest: handleUpload,
          multiple: true,
          onRemove: listFileRemoved,
          openFileDialogOnClick: true,
          onChange: (file) => {
            console.log("file:: ", file);
          },
        }}
      />
    </div>
  );
}

export default FormUpload;
