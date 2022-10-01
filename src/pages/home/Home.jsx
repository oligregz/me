import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./style.css";

function Home() {
  return (
  <div className="homePage">
    <Header />
    <div className="case">
      <div className="meHome">
        <p className="txt" id="oi">Hey ___________</p>
        <p className="txt" id="eu">EU SOU O GREGZ</p>
        <p className="txt" id="dev">DESENVOLVEDOR <br></br> FULLSTACK</p>
      </div> 
      <Footer />
    </div>
  </div>
  )
}

export default Home;
