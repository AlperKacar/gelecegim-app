import styled from "styled-components";

export const Searchdiv = styled.div`
  display: flex;
  width: 330px;
  height: 26px;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 3px;

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

  .Search-icon {
    width: 38px;
    height: 36px;
    text-align: center;
    line-height: 43px;
    position: relative;
    right: 32px;
  }
  .Search:focus + .Search-icon {
    background-color: #5490f0;
    color: white;
  }
  .icon-boyut {
    font-size: 20px;
  }
`;
