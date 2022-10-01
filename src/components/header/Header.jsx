import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import './style.css';

function Header() {

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className="caseButtons">
        <Button
          value="HOME"
          onClick={ () => {
            console.log("homeButton");
            navigate("/");
          } }
          className="btn homeButton"
        />
        <Button
          value="BIO"
          onClick={ () => {
            console.log("bioButton");
            navigate("/bio");
          } }
          className="btn bioButton"      
        />
        <Button
          value="PROJECTS"
          onClick={ () => {
            console.log("projectsButton");
            navigate("/projects");
          } }
          className="btn projectsButton"
        />
      </div>
    </div>
  )
}

export default Header
