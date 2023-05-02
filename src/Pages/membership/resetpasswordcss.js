import styled from "styled-components";
export const Body = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #081229;

  .main-div {
    width: 388px;
    height: 520px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 6px;
    align-items: stretch;
  }
  .info {
    padding-top: 50px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 45px;
    margin-right: 45px;
  }

  .Baslik {
    padding-bottom: 20px;
    line-height: 20px;
    color: rgb(0, 0, 0);
    text-align: center;
    font-weight: 600;
    position: relative;
    display: block;
    font-size: 16px;
  }
  .text {
    font-size: 14px;
    line-height: 19px;
    margin-top: 10px;
    text-align: center;
    font-weight: 400;
  }
  .form-div {
    padding-top: 10px;
    margin: 55px;
  }

  .form-input {
    display: flex;
    width: 280px;
    height: 43px;

    border-radius: 4px;
  }
  .reset-button {
    margin-top: 15px;
    width: 280px;
    height: 38px;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
  }

  .reset-button:disabled {
    background-color: #4cb5f9;
    color: white;
  }
  .Form-button {
    display: flex;
    justify-content: center;
  }
`;
