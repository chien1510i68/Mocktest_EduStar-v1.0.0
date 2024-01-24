export const handleOptionChange = (questionId, answerKey, value ,section) => {
  let listChoices = JSON.parse(localStorage.getItem("responseUsers"))??[];
  let totalChoice = JSON.parse(localStorage.getItem("totalChoice"));
  
  const response = listChoices?.find((item) => item?.questionId === questionId);
  if (response !== undefined) {
    let newResponse = listChoices.filter(
      (item) => item.questionId !== questionId
    );
    let data = [
      ...newResponse,
      { questionId: questionId, answerKey: [answerKey], value: value },
    ];
    localStorage.setItem("responseUsers", JSON.stringify(data));
  } else {
    let data = [
      ...listChoices,
      { questionId: questionId, answerKey: [answerKey], value: value },
    ];
    localStorage.setItem("responseUsers", JSON.stringify(data));
  }
  

  // localStorage.setItem("totalChoice", JSON.stringify(handleCheckListChoice(section)));
};

export const checkValue = (id) => {
  let listChoices = JSON.parse(localStorage.getItem("responseUsers"));
  const questionSaved = listChoices?.find(
    (item) => item && item.questionId === id
  );
  if (questionSaved !== undefined) {
    return questionSaved?.answerKey;
  } 
};
export const handleCheckListChoice = (section) => {
  const localData = JSON.parse(localStorage.getItem("responseUsers"));
  const listQues = section?.questions;
  const commonElements = localData?.filter((itemA) =>
    listQues?.some((itemB) => itemB.id === itemA.questionId)
  );
  const numberOfCommonElements = commonElements?.length;
  console.log(numberOfCommonElements);
  return numberOfCommonElements;
};

