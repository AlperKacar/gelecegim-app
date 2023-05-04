import styled from "styled-components";

export const PhotoDiv = styled.div`
  width: 528px;
  margin-right: 30px;
  .frame-main {
    width: 100%;
    height: 396px;
    border: 3px solid black;
  }

  .frame-side {
    width: 100px;
    height: 75px;
    border: 2px solid black;
  }

  .buyuk-video-buton {
    width: 100%;
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
    padding-left: 22px;
    font-weight: bold;
    overflow: hidden;
    display: inline-block;
    position: relative;
  }
  .search-icon {
    width: 20px;
    height: 17px;
  }
  .videoLink {
    font-weight: bold;
    padding-left: 23px;
    position: relative;
    color: #039;
    text-decoration: none;
  }
  .play-icon {
    width: 20px;
    height: 17px;
  }
`;
