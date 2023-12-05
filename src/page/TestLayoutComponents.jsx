// import Feedback from "../component/feedback/Feedback";
import svgAccounFormInput from "../vector/svgAccountForm.svg";
import InputElement from "../component/inputElement/Input";
import SlideComponent from "../component/feedback/Feedback";
import Intro from "../component/intro/Intro";

const TestLayOut = () => {
  return (
    <>
      <div className="max-w-lg mx-auto justify-center">
        <SlideComponent />
        <Intro />
        <InputElement
          placeholder="Họ và tên"
          prefix={<img src={svgAccounFormInput} alt="" />}
        />
      </div>
    </>
  );
};

export default TestLayOut;
