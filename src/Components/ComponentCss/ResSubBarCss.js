import styled from "styled-components";

export const ResSub = styled.div`
  display: none;
  
  @media screen and (max-width: 720px) {
   display: flex;
    width: 100%;

    .sub-bar{
        width: 100%;
        position:fixed;
        bottom: 0;
        z-index: 2;
    }
    .sub-ul{
        
        background-color: #f7f7f7;
        height: 60px;
        display: flex;
        
        align-items: center;
        list-style: none;
    }
    .sub-li{
        height:45px;
        align-items: center;
        display: grid;
        font-size: 12px;
        width: 25%;
        border-right: 1px solid;
        justify-content: center;
      
    }
    .icon{
      font-size:23px;
      width: 100%;
      justify-content: center;
      color: black;
    }
    .link{
      color: #333;
      
      display: grid;
      text-decoration: none;
      align-items: center;
      font-size: 12px;
      justify-content: center;
      align-items: center;
    }
    .sub-li:last-child{
      border-right: none;
    }
  }
`;
