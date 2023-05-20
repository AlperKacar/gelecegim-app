import styled from "styled-components";

export const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: grid;
  place-items: center;
  background-color: #081229;

  .Login {
    width: 350px;
    max-height: 455px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
  }
  .Forgot {
    width: 388px;
    height: 552px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    align-items: stretch;
  }
  .forgot-form-button {
    margin-top: 15px;
    width: 250px;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }
  .forgot-link {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    border-left-width: 0;
    border-top-left-radius: 2px;
    color: rgb(38, 38, 38);
    display: inline;
    text-align: center;
    cursor: pointer;
    outline-style: none;
    position: relative;
    text-decoration: none;
    left: 108px;
    top: 7px;
  }
  .forgot-link:hover {
    color: #bfbfbf;
  }
  .forgot-giris-div {
    border-top: 1px solid rgb(219, 219, 219);

    display: flex;
    background-color: #fafafa;
    width: 388px;
    height: 44px;
    position: absolute;
    bottom: -76px;
    right: -58px;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .forgot-giris-link {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    border-left-width: 0;
    border-top-left-radius: 2px;
    color: rgb(38, 38, 38);
    display: inline;
    text-align: center;
    cursor: pointer;
    outline-style: none;
    position: relative;
    text-decoration: none;
    left: 141px;
    top: 9px;
  }
  .forgot-giris-link:hover {
    color: #bfbfbf;
  }
  .or-divider {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 0 1em;
  }
  .or-divider::before {
    content: "";
    height: 0.125em;
    background: black;
    flex: 1;
    margin: 0 0.25em 0 0;
  }
  .or-divider::after {
    content: "";
    height: 0.125em;
    background: black;
    flex: 1;
    margin: 0 0 0 0.25em;
  }
  .forgot-form-button:disabled {
    background-color: #4cb5f9;
    color: white;
  }
  .Login-boyut {
    display: grid;
    place-items: center;
  }
  .Singup-boyut {
    margin: -106px 5px 5px;
    display: grid;
    place-items: center;
  }
  .img-logo {
    margin: 30px 0 10px 0;
    background-color: yellow;
    width: 136px;
    height: 34px;
  }
  .Input-div {
    margin: 30px 30px -5px;
    position: relative;
  }
  .Input-div-row {
    display: flex;
    gap: 25px;
  }

  .ant-input {
    width: 100%;
    font-size: 15px;
    padding: 3px 35px 0 18px;
    outline: none;
    margin-right: 45px;
    height: 35px !important;
    padding: 3px 35px 0 18px !important;
  }
  .input-text {
    height: 1px;
    display: flex;
    align-items: center;
    bottom: 39px;
    background-color: white;
    left: 13px;
    padding: 0 5px;
    margin: -5px;
    position: absolute;
    pointer-events: none;
    color: black;
    font-size: 15px;
  }

  .form-input {
    margin-top: 15px;
  }
  .Form-button {
    display: grid;
    place-items: center;
  }
  .Button {
    margin-top: 15px;
  }

  .Or-div {
    display: flex;
    align-items: center;
    width: 90%;
  }
  .Or-div-div {
    margin: 30px 20px;
    height: 1px;
    background-color: #cacaca;
    flex: 1 1 0%;
  }
  .Or-span {
    color: #aaa;

    font-size: 15px;
    font-weight: 500;
  }
  .Facebook-login {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    font-size: 18px;
    text-decoration: none;
  }
  .Forgot-password {
    margin: 10px 0;
    text-decoration: none;
    font-size: small;
  }
  .Sign-up-boyut {
    border-radius: 10px;
    margin-top: 20px;
    width: 350px;
    height: 60px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .signup-login {
    text-decoration: none;
    font-size: 15px;
    color: blue;
    margin-left: 5px;
  }
  .show-hide-trigger {
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    top: 24px;
    right: 9px;
    background: url(https://s0.shbdn.com/assets/images/password_hide:4e3854c839e1974448171eaef3866837.png)
      no-repeat;
    -webkit-background-size: 21px 18px;
    -moz-background-size: 21px 18px;
    background-size: 21px 18px;
  }
  .hide-show-trigger {
    position: absolute;
    top: 24px;
    right: 9px;
    width: 21px;
    height: 18px;
    display: block;
    background: url(https://s0.shbdn.com/assets/images/password_show:893e09be95762713a91c214a7514aacf.png)
      no-repeat;
    -webkit-background-size: 21px 16px;
    -moz-background-size: 21px 16px;
    background-size: 21px 16px;
  }
  .cheachbox {
    display: flex;
    padding: 0 0 10px 0;
  }
  .cheachboxtext {
    font-size: small;
    margin-left: 10px;
    pointer-events: none;
  }
  .displaycentercenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-div {
    margin-left: 44px;
    display: flex;
    margin-bottom: 16px;
    text-align: center;
    justify-content: flex-start;
    margin-right: 44px;
  }
  .text {
    font-size: 14px;
    line-height: 18px;
    margin-top: 5px;
    text-align: center;
    font-weight: 400;
  }
  @media screen and (max-width: 720px) {
    overflow: hidden;
    .Sign-up-boyut {
      width: 100%;
    }
    .Login {
      width: 100%;
    }
    .Form-boyut {
      width: 90%;
    }
    .Input-div {
      width: 90%;
    }
  }
`;
