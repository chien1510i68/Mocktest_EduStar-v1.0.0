import request from "./request.js";

export const getSectionByExamIdAndType = (data) => {
  return request.post("client/exam/detail", data);
};
export const createUserResponse = (data) => {
  return request.post("client/response/add", data);
};
export const getExamByType = (type, isFree) => {
  return request.get(`client/exam/type/${type}/${isFree}`);
};

export const createResponseUser = (data) => {
  return request.post("client/response/add", data);
};
export const getListExamByServiceUser = (id) =>{
  return request.get(`mocktest/exam/examService/${id}`);
}

export const getDetailExamById = (id) =>{
  return request.get(`client/exam/${id}`);
}
export const createFile = (file) => {
  console.log("data res: ", file);
  const formData = new FormData();
  formData.append("file", file);
  return request.post("client/results/file/upload", formData);
};