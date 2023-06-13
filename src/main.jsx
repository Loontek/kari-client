import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import UserStore from "./store/UserStore.js";

const root = document.getElementById('root')

export const Context = createContext(null)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{
        user: new UserStore()
      }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
