import styled from "styled-components";

export const Searchdiv = styled.div`
  display: flex;
  width: 330px;
  height: 26px;
  align-items: center;
  justify-content: center;
  position: relative;

  .Search {
    padding-left: 10px;
    font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
      sans-serif;
    font-size: 11px;
    width: 290px;
    height: 36px;
    border-radius: 3px;
    background-color: #2f3546;
    border: 0px;
    &:focus {
      background-color: white;
      outline: none;
    }
  }
  .Arama{
    display: none;
  }
  .Search-icon {
    color: gray;
    width: 38px;
    height: 36px;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 38px;
    border-top-right-radius:3px;
    border-bottom-right-radius: 3px;
  }
  .Search:focus~.Search-icon {
    background-color: #5490f0;
    color: white;
  }
  .icon-boyut {
    font-size: 20px;
  }
  .Search-icon-mobile{
    display: none;
  }

  @media screen and (max-width: 720px) {

    .Search {
      
      display: none;
    }
    .Arama{
    display: block;
    font-size: 16px;
    color: #fff;
    position: absolute;
    right:45vw;
    font:16px "Lucida Grande","Lucida Sans","Lucida Sans Unicode",Roboto,sans-serif;
    font-weight: bold;
    
    }
    .Search-icon {
      display: none;
      width: 35px;
      height: 35px;
      
      position: absolute;
      right: 5px;
      
      
    }
    .icon-boyut {
      color: white;
      font-size: 24px;
    }
    .Search-icon-mobile{
      display: block;
      width: 35px;
      height: 35px;
      display: flex;
      position: absolute;
      right: 5px;
      align-items: center;
    justify-content: center;
    }
    
  }
`;
