import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="gmail redirect">
        <a href = "mailto:gregorysak90@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" />
        </a>
      </div>
      <div className="discord redirect">
        <a href="https://discord.gg/bdPmZC4T" target="blank">
          <img src="https://img.shields.io/badge/%3CServer%3E-%237289DA.svg?style=for-the-badge&logo=discord&logoColor=white" target="_blank" />
        </a>
      </div>
      <div className="linkedin redirect">
        <a href="https://br.linkedin.com/in/gregory-oliveira?trk=people-guest_people_search-card" target="_blank">
          <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
        </a>
      </div>
      <div className="github redirect">
      <a
        href="https://github.com/oligregz/"
        target="blank"
      >
        <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      </div>
    </footer>
  )
}

export default Footer