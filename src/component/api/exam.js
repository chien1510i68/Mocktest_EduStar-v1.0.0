import request from "./request.js";

export const getSectionByExamIdAndType = (data) => {
  return request.post("client/exam/detail", data);
};
export const createUserResponse = (data) => {
  return request.post("client/response/add", data);
};
