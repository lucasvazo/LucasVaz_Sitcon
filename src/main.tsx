import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./routers/Router";
import ReactDOM from 'react-dom/client'
import React from 'react'
import './styles/global.css'
import './styles/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={pagesRouter} />
  </React.StrictMode>,
)
