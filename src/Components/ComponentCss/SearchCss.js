import styled from "styled-components";

const Searchdiv = styled.div`
  display: flex;
  width: 275px;
  height: 26px;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 3px;
`;
const Search = styled.input`
  font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
    sans-serif;
  font-size: 11px;
  width: 243px;
  height: 26px;
  border-radius: 1px;
  background-color: #2f3546;
  border: 0px;
`;
const Searchicon = styled.div`
  float: right;
  position: relative;
  right: 20px;
  top: 1.4px;

  &:hover {
    background-color: blue; //deneme
  }
`;
export default { Searchdiv, Search, Searchicon };
             