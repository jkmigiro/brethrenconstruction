import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Layout} from "antd";
import Nav from "./nav/Header";
import Main from "./Main";
import Foot from "./nav/Footer";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <Layout>
        <Nav/>
        <Outlet/>
        <Foot/>
    </Layout>
  );
}

export default App;
