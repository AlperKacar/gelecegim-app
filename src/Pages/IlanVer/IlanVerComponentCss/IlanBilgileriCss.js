import styled from "styled-components";

export const Container = styled.div`
  .business-center-colum {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-corporate {
    width: 900px;
    margin: 0 auto;
  }

  .kvkk {
    width: 350px;
    font-size: 10px;
  }
  .baslik {
    width: 100%;
    height: 45px;
  }
  .inputs {
    width: 25%;
    height: 40px;
  }
  
  .selects {
    width: 25%;
  }
 
  .form-input {
    border: 1px solid #dedede;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 10px 5px 0;
    padding: 12px;
    font-size: 16px;
    float: left;
    border-radius: 2px;
    
  }
  .labels {
    margin-top: 9px;
    display: block;
    font-weight: bold;
    padding-bottom: 10px;
    color: #333;
    font-size: 12px;
    font-family: "Lucida Grande", "Lucida Sans", "Lucida Sans Unicode", Roboto,
      sans-serif;
    
  }
  .text-area {
    font-size: 14px;
  }
`;
