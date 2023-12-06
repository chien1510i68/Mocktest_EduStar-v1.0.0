import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import MocktestPage from "./page/MocktestPage";
import ResultsPage from "./page/ResultsPage";
import PageShowListExam from "./page/PageShowListExam";
import ExamResult from "./page/ExamResult";
import Vstep from "./page/Vstep";
import Toeic from "./page/Toeic";
import BeforeExam from "./component/beforeExam/BeforeExam";
import HomePage from "./page/HomePage";
import Test from "./page/Test";
import TestLayoutComponents from "./page/TestLayoutComponents";

export const router = createBrowserRouter([{
path : "/" ,
element : <HomePage/>
},
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },

  {
    path: "/exam/:examId",
    element: <MocktestPage />,
  },

  {
    path: "/results",
    element: <ResultsPage />,
  },

  {
    path: "/result",
    element: <ExamResult />,
  },

  {
    path: "/vstep",
    element: <Vstep />,
  },

  {
    path: "/exam/all",
    element: <PageShowListExam />,
  },

  {
    path: "/toeic",
    element: <Toeic />,
  },

  {
    path: "/beforeExam/:examId",
    element: <BeforeExam />,
  },
  
  {
    path: "/testLayout",
    element: <TestLayoutComponents />,
  },
  
]);
