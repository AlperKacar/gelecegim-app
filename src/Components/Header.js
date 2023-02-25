import React from "react";
import reslog from "../images/pngwing.com (1).png";
import logosrc from "../images/revize3.png";
import { Head } from "./ComponentCss/HeaderCss";
import Search from "./Search";

import { Menu } from "./Menu";

function Header() {
  return (
    <Head>
      <div className="Navbar">
        
        <img className="reslog" src={reslog} alt="responsive logo" />
        <img className="Logom" src={logosrc} alt="selam" />
        <Search />
        <Menu />
      </div>
    </Head>
  );
}

export default Header;
