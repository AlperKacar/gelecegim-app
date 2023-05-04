import styled from "styled-components";

export const KullaniciMenu = styled.div`
  .navLink {
    font-size: 11px;
    padding-left: 3px;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
  .border {
    padding-left: 3px;
    border-left: 1px solid gray;
  }
  .pr-10 {
    padding-right: 10px;
  }
  .pl-10 {
    padding-left: 10px;
  }
  .kurum-kayit {
    margin-left: 20px;
    font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
      sans-serif;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 1px 1px 0 #29619b;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
      0 2px 2px -1px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    color: white;
    background-color: rgb(72, 154, 241);
    width: 140px;
    height: 35px;
    border: none;
  }
  .ul-div {
    display: flex;
    align-items: center;
  }
  .kurum-kayit:hover {
    background-color: #3388e3;
  }
  a {
    text-decoration: none;
    color: white;
  }

  .namesurname {
    color: #ebebeb;
    cursor: pointer;
    font-size: 11.3px;
    letter-spacing: 0.4px;
    font-weight: bold;
    text-shadow: 1px 1px 0 #2f3339;

  }
  .namesurname:hover {
    text-decoration: underline;
    
  }
  .down-arrow {
    color: #b5c9ff;
    display: flex;
    width: 20px;
    height: 22px;
    position: relative;
    right: 7px;
  }
  .alt-li {
    font-size: 17px;
  }
  @media screen and (max-width: 720px) {

    
    display: none;
   } 


`;
