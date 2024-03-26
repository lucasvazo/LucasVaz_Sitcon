import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import ListProceduresPage from "../pages/ListProceduresPage/ListProceduresPage";
  
  export const pagesRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      children: [{
        path: "/procedures",
        element: <ListProceduresPage/>
      }]
    },
  ]);