import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import MocktestPage from "./page/MocktestPage";
import ExamResult from "./page/ExamResult";
import Vstep from "./page/Vstep";
import Toeic from "./page/Toeic";
import BeforeExam from "./component/beforeExam/BeforeExam";

export const router = createBrowserRouter([
  {
    path : "/" ,
    element : <HomePage/>
  },
  
  {
    path : "/mocktest/:examId",
    element : <MocktestPage/>
  },
  
  {
    path : "/result",
    element : <ExamResult />
  },
  
  {
    path : "/vstep",
    element : <Vstep />
  },
  
  {
    path : "/toeic",
    element : <Toeic />
  },
  
  {
    path : "/beforeExam",
    element : <BeforeExam />
  },

]);
