import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import MocktestPage from "./page/MocktestPage";
import ResultsPage from "./page/ResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mocktest/:examId",
    element: <MocktestPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);
