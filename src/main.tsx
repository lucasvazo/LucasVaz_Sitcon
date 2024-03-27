import { RouterProvider } from "react-router-dom";
import { pagesRouter } from "./routers/Router";
import ReactDOM from 'react-dom/client'
import React from 'react'
import './styles/global.css'
import './styles/reset.css'
import SettingsContextProvider from "./contexts/SettingsContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingsContextProvider>
      <RouterProvider router={pagesRouter} />
    </SettingsContextProvider>
  </React.StrictMode>,
)
