import React from "react";
import reslog from "../images/pngwing.com (1).png";
import logosrc from "../images/revize3.png";
import { Head } from "./ComponentCss/HeaderCss";
import Search from "./Search";

import { Menu } from "./Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Head>
      <div className="Navbar">
        <Link to="/">
        <img className="reslog" src={reslog} alt="responsive logo" />
        <img className="Logom" src={logosrc} alt="gelecegim" />
        </Link>
        <Search />
        <Menu />
      </div>
    </Head>
  );
}

export default Header;
