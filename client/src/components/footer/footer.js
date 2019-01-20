import React from "react";
import fb from "./iconaGH.png";
import ln from "./iconaIN.png";
import tw from "./iconaTW.png";

const Footer = () => {
  const links = [
    { link: "https://github.com/marcosandri-dev", icon: fb },
    { link: "https://www.linkedin.com/in/marco-sandri-aa9476110/", icon: ln },
    { link: "https://twitter.com/marcosandri_dev", icon: tw }
  ];
  return (
    <footer className="w-100 position-absolute">
      <div className="pt-2 pb-2 pl-3 pr-2 row justify-content-between no-gutters ">
        <div className="col-12 col-sm-7 pt-1 footer-rows">
          <h5>Marco Sandri - Full Stack Developer </h5>
        </div>
        <div className="col-12 col-sm-5 text-right footer-rows">
          {links.map(link => (
            <a href={link.link} target="_blank">
              <img className="mr-4" src={link.icon} style={{ width: "40px" }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
