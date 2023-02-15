import styled from "styled-components";

const Head = styled.div`
  width: 100%;
  height: 57.9px;

  background-color: #3f475f;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  justify-content: space-evenly;
`;
const Logom = styled.img`
  width: 160px;
  height: 34px;
  position: relative;
  top: 3px;
`;

const Li = styled.li`
  color: white;
  padding-left: 10px;
  display: flex;
  align-items: center;
  float: left;
  font-size: 12px;
  height: 25px;
`;

export default { Head, Navbar, Logom, Li };
