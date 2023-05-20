import styled from "styled-components";

export const Head = styled.div`

  
background-color: #3f475f;
  
  .reslog {
    display: none;
  }

  .Navbar {
    
    width: 1150px;
    height: 57.9px;
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
    position: relative;
    top: 2px;
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
      width: 30px;
      height: 30px;
      background-color: #ffe800;
      display: block;
      position: absolute;
      left: 8px;
      top: 11px;
      
      border-radius: 5px;
    }
  }
`;
