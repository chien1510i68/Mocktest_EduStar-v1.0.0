// import Feedback from "../component/feedback/Feedback";
import svgAccounFormInput from "../vector/svgAccountForm.svg";
import InputElement from "../component/inputElement/Input";
import SlideComponent from "../component/feedback/FeedbackComponent";

const TestLayOut = () => {
  return (
    <>
      <div className=" mx-auto justify-center">
        <SlideComponent />
        <InputElement
          placeholder="Họ và tên"
          prefix={<img src={svgAccounFormInput} alt="" />}
        />
      </div>
    </>
  );
};

export default TestLayOut;
