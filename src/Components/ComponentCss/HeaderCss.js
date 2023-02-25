import styled from "styled-components";

export const Head = styled.div`
  width: 100%;
  height: 57.9px;
  background-color: #3f475f;
  display: grid;
  
  .reslog {
    display: none;
  }

  .Navbar {
    width: 1115px;
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    margin: 0 auto;
  }

  .Logom {
    background-color: #ffe800;
    width: 135px;
    height: 34px;
  }
  @media screen and (max-width: 720px) {
    background-color: #32628d;
    height: 50px;
    width: 100%;
    position: fixed;
    z-index: 999999;
    .Navbar {
      width: 100%;
      justify-content: flex-end;
    }
    .Logom {
      display: none;
    }
    .reslog {
      background-color: #ffe800;
      display: block;
      position: absolute;
      left: 16px;
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
  }
`;
