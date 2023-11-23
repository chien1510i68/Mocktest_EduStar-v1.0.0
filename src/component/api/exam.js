
import request from "./request.js";

export const getSectionByExamIdAndType = (data) => {
    return request.post("client/exam/detail", data);
  
};