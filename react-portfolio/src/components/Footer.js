import React from "react";
import githubIcon from "../img/github_icon.png";
import linkedInIcon from "../img/linkedin_icon.png";
import gmailIcon from "../img/gmail_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/zmzhong1">
        <img
          className="gitHub"
          src={githubIcon}
          style={{ height: 35 }}
          alt="Github account"
        ></img>
      </a>
      <a href="https://www.linkedin.com/in/zhao-ming-zhong/">
        <img
          className="linkedIn"
          src={linkedInIcon}
          style={{ height: 35 }}
          alt="LinkedIn Account"
        ></img>
      </a>
      <a href="mailto: zmzhong1215@gmail.com">
        <img
          className="gmail"
          src={gmailIcon}
          style={{ height: 35 }}
          alt="Gmail Account"
        ></img>
      </a>
    </div>
  );
}
