import styled from "styled-components";

export const PhotoDiv = styled.div`
  text-shadow: 1px 1px #fff;
  width: 528px;
  margin-right: 30px;

  .frame-main {
    width: 528px;
    height: 396px;
   
  }
  .main-img{
    width: 528px;
    height: 396px;
  }
  .side-img{
    width: 100px;
    height:75px;
  }
  .frame-side {
    display: flex;
    width: 100px;
    height: 75px;
    margin-right: 5px;
    background-color: #d7d7d7;
  }
  .frame-side:focus {
    border: 1px solid #417abb;

  }

  .buyuk-video-buton {
    width: 528px;
    height: 33px;
    border-bottom: 1px solid #d7d7d7;
    padding-top: 9px;
    text-shadow: 1px 1px 0 #fff;
    text-align: center;
    display: flex;
    background-color: #ededed;
    list-style: none;
    font-size: 12px;
  }
  li {
    display: block;
    width: 50%;
  }
  li:first-child {
    border-right: 1px solid #ddd;
  }
  li:nth-child(2) {
    border-left: 1px solid #fff;
  }
  .buyukFotoLink {
    color: #039;
    text-decoration: none;
    padding-left: 1 px;
    font-weight: bold;
    overflow: hidden;
    display: inline-block;
    position: relative;
  }
  .search-icon {
    color: #039;
    width: 20px;
    height: 17px;
  }
  .videoLink {
    font-weight: bold;
    padding-left:1px;
    position: relative;
    color: #039;
    text-decoration: none;
    bottom: 3px;
  }
  .play-icon {
    color: #039;
    width: 20px;
    height: 17px;
  }
  .side-container {
    border: 1px solid #dbdbdb;
    border-top:none;
    width: 528px;
    height: 120px;
    display: flex;
    flex-direction: row;
    padding: 3px;
    overflow-x: auto;
    overflow: hidden;
  }
  .alt-satir{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .buttons{
    width: 100px;
    display:inline;
    position: relative;
    left: 229px;
    bottom: 35px;
  }
  .sayfa-geri{
    width: 28px;
    height:28px;
    border: 2px solid #a3a0a0;
    border-radius: 8px;
    margin-right: 10px;
  }
  .sayfa-ileri{
    width: 28px;
    height:28px;
    border: 2px solid #a3a0a0;
    border-radius: 8px;
    margin-left:10px
  }
  .button-icons{
    font-size: 18px;
    position: relative;
    top: 0;
    bottom: 0;
    
  }
`;
