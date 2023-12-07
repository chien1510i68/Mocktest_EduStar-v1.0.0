// import Feedback from "../component/feedback/Feedback";
import svgAccounFormInput from "../vector/svgAccountForm.svg";
import InputComponent from "../component/inputComponent/InputComponent";
import SlideComponent from "../component/feedback/FeedbackComponent";

const TestLayOut = () => {
  return (
    <>
      <div className=" mx-auto justify-center">
        <SlideComponent />
        <InputComponent
          placeholder="Họ và tên"
          prefix={<img src={svgAccounFormInput} alt="" />}
        />
      </div>
    </>
  );
};

export default TestLayOut;
