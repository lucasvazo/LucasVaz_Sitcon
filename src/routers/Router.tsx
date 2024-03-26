import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import ListProceduresPage from "../pages/ListProceduresPage/ListProceduresPage";
import ScheduleProcedurePage from "../pages/ScheduleProcedurePage/ScheduleProcedurePage";
  
  export const pagesRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      children: [
        { 
          index: true, 
          element: <ListProceduresPage/> 
        },
        {
        path: "/procedures",
        element: <ScheduleProcedurePage/>
      }]
    },
  ]);