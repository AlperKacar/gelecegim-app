import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2f2f2;
  height: 27px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.06),
    1px 0 2px 0 rgba(0, 0, 0, 0.08);

  .main-div {
    width: 1150px;
    margin: 0 auto;
  }
  .span-container {
    padding-top: 3px;
    margin: auto;
    line-height: 15px;
    list-style: none;
    font-size: 11px;
  }

  .kategori {
    float: left;
    margin-right: 15px;
  }
  .brans {
    float: left;
    margin-right: 15px;
  }
  .li-link {
    text-decoration: none;
    color: #00339f;
  }
  .li-link:hover {
    text-decoration: underline;
  }
  .arrow {
    font-size: 15px;
    position: relative;
    top: 3px;
  }
  .favori {
    margin-right: 50px;
    float: right;
    padding-top: 3px;
  }
`;
