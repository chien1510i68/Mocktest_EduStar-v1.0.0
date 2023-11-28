import request from "./request.js";

export const getSectionByExamIdAndType = (data) => {
  return request.post("client/exam/detail", data);
};
export const createUserResponse = (data) => {
  return request.post("client/response/add", data);
};
export const getExamByType = (type , isFree)=>{
    return request.get(`client/exam/type/${type}/${isFree}`)
}
