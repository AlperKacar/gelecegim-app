import styled from "styled-components";

export const Foot = styled.div`
  border-top: 1px solid #dfdfdf;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #f9f9f9;

  .container {
    width: 1150px;

    margin: auto;
  }
  ul {
    list-style: none;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
  .footer-ul {
    // padding: 0 15px;
  }
  .footer-kategori {
    color: #555;
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    font-size: 11px;
    color: #888;
    line-height: 20px;
    cursor: pointer;
    outline: 0;
    font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
      sans-serif;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 720px) {
    display: none;
    .container {
      display: none;
    }
  }
`;
