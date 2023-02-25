import styled from "styled-components";

export const Foot = styled.div`
    border-top: 1px solid #dfdfdf;
    padding-top: 28px;
    padding-bottom:28px;
    background-color: #f9f9f9;
  .container{

    width: 1000px;
    
    margin: auto;
  }
  ul{
    list-style: none;
  }
  .row{
    display: flex;
    
  }
  .footer-ul{
   width:250px;
    padding: 0 15px;
  }
  .footer-kategori{
    color: #555;
    font-size:14px;
    text-transform: capitalize;
    margin-bottom: 30px;
  }

  a{
    text-decoration: none;
    font-size:11px;
    color: #888;
    line-height: 20px;
    cursor: pointer;
    outline:0;
    font-family: "Lucida Grande","Lucida Sans","Lucida Sans Unicode",Roboto,sans-serif;
  }
  a:hover{
    text-decoration: underline;

  }
`;
