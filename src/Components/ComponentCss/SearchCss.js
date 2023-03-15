import styled from "styled-components";

export const Searchdiv = styled.div`
  display: flex;

  .Searchbar-div {
    display: flex;
  }
  .Search {
    border-radius: 3px;
    background-color: #2f3546;
    border: none;
    padding-left: 7px;

    width: 290px;
    height: 36px;
    font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
      sans-serif;
    font-size: 11px;

    ::placeholder {
      color: #97a0a1;
    }
    &:focus {
      ::placeholder {
        color: #3a3535;
      }

      background-color: white;
      outline: none;
    }
  }
  .Arama {
    display: none;
  }
  .Search-icon {
    color: gray;
    width: 38px;
    height: 36px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 38px;

    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .Search:focus ~ .Search-icon {
    background-color: #448cd6;
    color: white;
    &:hover {
      background-color: #3c7cbe;
    }
  }
  .icon-boyut {
    font-size: 20px;
  }
  .Search-icon-mobile {
    display: none;
  }
  .Search-cancel-iconx {
    display: none;
  }
  .Search-cancel-icon {
    color: #5490f0;
    position: absolute;
    top: 14px;
    margin-left: -15px;

    font-size: 23px;
    &:hover {
      color: #82ddfb;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 720px) {
    .Searchbar-div {
      display: none;
    }

    .Arama {
      display: flex;
      width: auto;
      height: auto;
      justify-content: center;
      align-items: center;
      position: relative;
      right: 40vw;
      bottom: 1px;
      font-size: 16px;
      color: #fff;

      font: 16px "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
        sans-serif;
      font-weight: bold;
    }
    /* .Search-icon {
      display: none;
      width: 35px;
      height: 35px;

      position: absolute;
      right: 5px;
    } */
    .icon-boyut {
      color: white;
      font-size: 24px;
    }
    .Search-icon-mobile {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 6px;
      top: 9px;
    }
  }
`;
