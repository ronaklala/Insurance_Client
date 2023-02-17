import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Insurance from "./Components/Insurance";
import SingleAgent from "./Components/SingleAgent";
import Applications from "./Components/Applications";
import rootreducer from "./reducers/user";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: rootreducer });
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/Agent/:id/:name" element={<SingleAgent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
