import React from "react";
import github from "../assets/github.png"

const Footer = () => {
  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        Image: <a href="https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_d._%C3%84._066.jpg">The Fight Between Carnival and Lent by Pieter Brueghel the Elder</a>, Public domain, via Wikimedia Commons
      </div>
      <div className="mdl-mini-footer__right-section">
        <img className="git-logo" src={github} alt="github logo" />
        Created by<a href="https://github.com/beejathon"> Bee-jay Paiz</a> as part of <a href="https://www.theodinproject.com/">The Odin Project</a> Javascript curriculum
      </div>
    </footer>
  )
}

export default Footer;