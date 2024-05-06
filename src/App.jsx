import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Banner from "./components/banners/Banners";
// import Main from "./components/main/Main";
// import { BANNER_DATA } from "./static/listData";
// import Banner from "./components/banner/Banner"; 

function App() {

  return (
     <>
       <Header />
        <Main />
        <Banner />
     </>
  );
}

export default App;
