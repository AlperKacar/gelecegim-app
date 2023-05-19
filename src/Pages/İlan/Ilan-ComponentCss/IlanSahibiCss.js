import styled from "styled-components";

export const IlanSahibiDiv = styled.div`
  width: 292px;
  margin-left: auto;

  .main {
    border: 1px solid #dbdbdb;
    padding: 3px;
    color: #333;
    margin-bottom: 12px;
  }
  .ic-div {
    background: #efefef;
    padding: 12px 14px;
  }
  .ad-soyad {
    font-size: 14px;
    font-weight: bold;
    text-shadow: 1px 1px 0 #fff;
  }
  .kayit-tarihi {
    font-size: 11px;
    color: #808080;
    padding: 10px 0 0;
    margin-bottom: 6px;
    text-shadow: 1px 1px 0 #fff;
  }
  .iletisim {
    margin-top: 10px;
    background: #fff;
    margin-bottom: 5px;
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    padding: 0 12px;
    font-size: 14px;
    box-shadow: 1px 2px 3px #ccc;
    background-color: #f5f5f5;
    background-repeat: repeat-x;
    padding: 10px 7px;
  }

  .hangi {
    width: 27px;
    display: inline-block;
    font-weight: bold;
  }
  .bilgi {
    width: 153px;
    text-align: right;

    font-size: 13px;
    float: right;
  }
  .mesaj-gonder {
    text-align: center;
  }
  .mesaj {
    display: inline-block;
    padding: 8px 0;
    font-size: 11px;
    text-shadow: 1px 1px 0 #fff;
    color: #039;
    text-decoration: none;
    outline: 0;
  }
  .mesaj:hover {
    text-decoration: underline;
  }
  .uyari {
    margin-top: 15px;
    border: 1px solid #dbdbdb;
    padding: 13px 16px 8px 16px;
    color: #666;
    outline: 10px solid #fff;
  }
  .uyari-baslik {
    font-weight: 600;
    color: #333;
    padding-left: 30px;
    font-size: 13px;
    line-height: 21px;
    position: relative;

    bottom: 27px;
  }
  .icon {
    color: green;
    font-size: 25px;
  }
  .uyari-p {
    position: relative;
    bottom: 10px;
    font-size: 11px;
  }
`;
