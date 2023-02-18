
import {css} from "styled-components";
import styled from "styled-components"
const Head = styled.div`
  width: 100%;
  height: 57.9px;
  background-color: #3f475f;
  display: grid;
  
`;
const Navbar = styled.div`
  width:1115px;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  margin:0 auto;
  
`;
const Logom = styled.img`
  background-color: yellow;
  width: 160px;
  height: 34px;
  
`;

const navLink=`
background-color: yellow;


`;

const propsSettings = (params) => css`
  ${params}
`;
const Extend={
  navLink:propsSettings(navLink),
};
export default { Head, Navbar, Logom,Extend};
