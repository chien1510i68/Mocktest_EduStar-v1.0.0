import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import MocktestPage from "./page/MocktestPage";

export const router = createBrowserRouter([
  {
    path : "/" ,
    element : <HomePage/>
  },{
    path : "/mocktest/:examId",
    element : <MocktestPage/>
  },{
    
  }
  
]);
