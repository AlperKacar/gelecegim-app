import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import logosrc from "../images/Gelecegim_Logo.png";
import { IoSearchSharp } from "react-icons/io5";
const Head = styled.div`
  width: 100%;
  height: 57.9px;
  display: grid;
  background-color: #3f475f;
`;
const Navbar = styled.div`
  margin: 0 auto;
  width: 1115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Search = styled.input`
  font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
    sans-serif;
  font-size: 11px;
  width: 243px;
  height: 26px;
  border-radius: 3px;
`;
const Li = styled.li`
  color: white;
  padding-left: 10px;
  display: flex;
  align-items: center;
  float: left;
`;
const Logom = styled.img`
  width: 160px;
  height: 34px;
`;
const Searchicon = styled.div`
  margin: 0;
  padding: 0;
  float: left;
  display: flex;
  position: relative;
  right:310px;
`;
function Header() {
  return (
    <Head>
      <Navbar>
        <Logom src={logosrc} alt="selam" />

        <Search
          id="searchText"
          placeholder="Kelime, ilan no veya kurum adı ile ara"
        />
        <Searchicon>
          <IoSearchSharp />
        </Searchicon>

        <ul>
        <Link to="auth/login">Giriş Yap</Link>

        <Link to="auth/signup">Hesap Aç</Link>
        </ul>
      </Navbar>
    </Head>
  );
}
export default Header;
