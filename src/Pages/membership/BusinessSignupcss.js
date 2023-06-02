import styled from "styled-components";

export const BusinessSignupDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  .business-center-colum {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .taşanları-gizle {
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header-container-without-background {
    display: flex;
    justify-content: space-between;
    width: 900px;
    margin: 30px auto 15px;
  }
  .img-logo {
    background-color: yellow;
    width: 136px;
    height: 34px;
  }
  .corporate-info {
    display: flex;
    flex-direction: column;
  }
  .form-corporate {
    width: 900px;
    margin: 0 auto;
  }
  .registration-corporate {
    position: relative;
    background: #fff;
    border-radius: 3px;
    padding: 50px;
    color: #505050;
    border: 1px solid #dedede;
  }
  .form-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .section-border {
    width: 398.7px;
    border: solid #f2f2f2;
  }
  .left-section {
    border-width: 0 1px 0 0;
    padding-right: 48px;
  }
  .split-form {
    display: flex;
    gap: 25px;
  }
  .right-section {
    border-width: 0 0 0 1px;
    padding: 0 0 0 48px;
  }
  .form-radio {
    margin: 5px 0 45px 0;
  }
  .ant-input {
    width: 100%;
    font-size: 15px;
    padding: 3px 35px 0 18px;
    outline: none;
    margin-right: 45px;
    height: 35px !important;
    padding: 3px 35px 0 18px !important;
    border-radius: 1px !important;
  }

  .input-text {
    height: 1px;
    display: flex;
    align-items: center;
    bottom: 39px;
    background-color: white;
    left: 20px;
    padding: 0 5px;
    margin: -5px;
    position: absolute;
    pointer-events: none;
    color: black;
    font-size: 15px;
  }
  .ant-select-selector {
    width: 100% !important;
    height: 35px !important;
    margin-top: 15px !important;
    border-radius: 1px !important;
  }
  .ant-select-selection-search {
    position: unset !important;
  }
  .ant-select-arrow {
    margin-top: 0;
  }
  .ant-select-selection-item {
    position: absolute !important;
    padding: 5px;
  }
  .form-input {
    margin-top: 15px;
  }
  .show-hide-button {
    cursor: pointer;
    user-select: none;
  }
  .show-hide-trigger {
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    top: 24px;
    right: 16px;
    background: url(https://s0.shbdn.com/assets/images/password_hide:4e3854c839e1974448171eaef3866837.png)
      no-repeat;
    -webkit-background-size: 21px 18px;
    -moz-background-size: 21px 18px;
    background-size: 21px 18px;
  }
  .hide-show-trigger {
    position: absolute;
    top: 24px;
    right: 16px;
    width: 21px;
    height: 18px;
    display: block;
    background: url(https://s0.shbdn.com/assets/images/password_show:893e09be95762713a91c214a7514aacf.png)
      no-repeat;
    -webkit-background-size: 21px 16px;
    -moz-background-size: 21px 16px;
    background-size: 21px 16px;
  }
  .extra-text-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .kvkk {
    width: 350px;
    font-size: 10px;
  }
  .eula-and-button {
    width: 350px;
    display: flex;
  }
  .captcha-disclaimer {
    margin-top: 50px;
    font-size: 10px;
  }
  .redirect-to-login-register {
    position: absolute;
    margin-left: -50px;
  }
  .eula-area {
    font-size: 12px;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    position: unset;
    align-items: unset;
    justify-content: unset;

    .corporate-info {
      display: none;
    }
    .header-container-without-background {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .form-corporate {
      width: 95%;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .right-section {
      padding: 0;
    }
    .left-section {
      padding: 0;
    }
    .section-border {
      width: 100%;
      border: none;
    }
    .extra-text-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .kvkk {
      width: auto;
    }
    .sign-up-container {
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .eula-and-button {
      width: auto;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .redirect-to-login-register {
      margin-top: 50px;
      margin-left: 0;
    }
    .show-hide-trigger {
      top: 24px;
      right: 16px;
    }
    .hide-show-trigger {
      top: 24px;
      right: 16px;
    }
    .ant-form-item {
      width: 100%;
    }
    .Form-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .registration-corporate {
      padding: 20px;
    }
  }
`;
