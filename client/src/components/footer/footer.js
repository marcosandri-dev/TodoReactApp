import React from "react";
import fb from "./iconaFB.png";
import ln from "./iconaIN.png";
import tw from "./iconaTW.png";

const Footer = () => {
  const icons = [fb, ln, tw];
  return (
    <footer className="w-100 position-absolute">
      <div className="pt-2 pb-2 pl-3 pr-2 row justify-content-between no-gutters ">
        <div className="col-7 pt-1">
          <h5>Marco Sandri - webdev </h5>
        </div>
        <div className="col-5 text-right">
          {icons.map(icon => (
            <img className="mr-3" src={icon} style={{ width: "40px" }} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
