
import styled from "styled-components"


export const Head = styled.div`
  width: 100%;
  height: 57.9px;
  background-color: #3f475f;
  display: grid;
  

  .Navbar{
  width:1115px;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  margin:0 auto;
  
  }

 .Logom{
  background-color: yellow;
  width: 160px;
  height: 34px;
  
 } 

.navLink{
  font-size: 12px;
  padding-left:3px;
  text-decoration: none;
  color: white;
  
}

.border{
  
  padding-left:3px;
  border-left: 1px solid gray;
  
  
}
.pr-2{
  padding-right: 3px;
}

.kurum-kayit{
  font-family: "Lucida Grande","Lucida Sans","Lucida Sans Unicode",Roboto,sans-serif;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-shadow: 1px 1px 0 #29619b;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1), 0 2px 2px -1px rgba(0,0,0,0.15);
  border-radius:2px;
  color: white;
  background-color:rgb(72,154,241);
  width: 140px;
  height: 35px;
  border: none;
}
.kurum-kayit:hover{
  background-color: #3388e3;
}

`;





