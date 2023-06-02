import styled from "styled-components";

export const IlanMain = styled.div`
  width: 100%;

  .container {
    width: 1150px;
    margin: 0 auto;
  }
  .baslik-div {
    width: 100%;
    padding-bottom: 6px;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 10px;
    color: #333;
  }
  .baslik {
    height: 18px;
    font-size: 18px;
    padding: 15px 0 12px;
    max-width: 710px;
    display: inline-block;
  }
  .baslik-yani {
    font-size: 11px;
    float: right;
    margin-top: 3px;
    width: 300px;
    list-style: none;
  }

  .fav-ekle {
    padding-top: 10px;
    float: left;
    width: 130px;
    margin-right: 10px;
  }

  .yazdir {
    padding-top: 10px;
    float: left;
    margin-right: 13px;
  }
  .sosyal-medya {
    padding-top: 10px;
    float: left;
  }
  .ilan-link {
    padding-left: 17px;
    text-decoration: none;
    float: left;
    color: #00339f;
  }
  .ilan-link-disabled {
    visibility: hidden;
  }
  .yildiz-icon {
    color: #8398ac;
    font-size: 15px;
    position: relative;
    right: 3px;
    top: 2px;
  }
  .yazdir-icon {
    color: #8398ac;
    font-size: 15px;
    position: relative;
    right: 4px;
    top: 3px;
  }
  .foto-bilgi-hizala {
    display: flex;
    width: 100%;
  }
  .aciklama-div{
    
  }
`;
