import styled from "styled-components";

export const Profile = styled.div`
  display: flex;

  .profile-h2 {
    margin: 20px;
  }
  .profile-form {
    margin: 80px -80px;
    max-width: 700px;
    max-height: 600px;
    background-color: #f1f1f1;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 3px #cdcdcd;
  }
  .text {
    font-size: medium;
    width: 500px;
  }
  .margin-20px {
    margin: 20px;
  }
  .form-margin {
    display: flex;
    justify-content: space-between;
  }
  .split-profile-info {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .profile-upload {
    margin-right: 20px;
  }
  .form-button {
    margin: 20px 20px 0 0;
  }
  .flex-jc-end {
    display: flex;
    justify-content: end;
  }
  .flex-jc-center {
    display: flex;
    justify-content: center;
  }
  .form-input:disabled {
    color: black;
    background-color: #f1f1f1;
    border: none;
    font-size: large;
  }
  .form-input {
    font-size: large;
  }
  .form-edit-input {
    margin-top: 15px;
    height: 40px;
  }
  .display-flex {
    display: flex;
    grid-gap: 10px;
  }
  .display-none {
    display: none;
  }
  .show-hide-trigger {
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    top: 27px;
    right: 9px;
    background: url(https://s0.shbdn.com/assets/images/password_hide:4e3854c839e1974448171eaef3866837.png)
      no-repeat;
    -webkit-background-size: 21px 18px;
    -moz-background-size: 21px 18px;
    background-size: 21px 18px;
  }
  .hide-show-trigger {
    position: absolute;
    top: 27px;
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
  .show-hide-button {
    cursor: pointer;
    user-select: none;
  }
`;
