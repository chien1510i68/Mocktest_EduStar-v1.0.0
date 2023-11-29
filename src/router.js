import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./page/RegisterPage";
import MocktestPage from "./page/MocktestPage";
import ResultsPage from "./page/ResultsPage";
import PageShowListExam from "./page/PageShowListExam";
import ExamResult from "./page/ExamResult";
import Vstep from "./page/Vstep";
import Toeic from "./page/Toeic";
import BeforeExam from "./component/beforeExam/BeforeExam";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
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
]);
