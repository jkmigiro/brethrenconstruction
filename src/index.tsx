import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, RouterProvider, Routes, ScrollRestoration} from "react-router-dom";
import Main from "./Main";
import About from "./about/About";
import ContactUs from "./contact/ContactUs";
import NotFound from "./NotFound";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<Main/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<ContactUs/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
