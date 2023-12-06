import { getExamByType } from "../api/exam";

export const handleGetExamByType = async (type) => {
  try {
    const res = await getExamByType(type, true);
    console.log(res?.data?.body);
   
    return res?.data?.body || [];
  } catch (error) {
    console.log(error);
  }
};
