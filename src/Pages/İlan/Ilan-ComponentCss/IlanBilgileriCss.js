import styled from "styled-components";

export const Container = styled.div`
  width: 262px;
  margin-right: 13px;
  .fiyat {
    font-size: 14px;
    color: #039;
    padding-bottom: 20px;
    font-weight: 600;
  }
  .konum {
    font-size: 12px;
    color: #039;
    padding: 3px 10px 10px 0;
    border-bottom: 1px solid #dedede;
  }

  .bilgiler {
    
    list-style: none;
    padding-top: 4px;
  }
  .il {
    padding-right: 3px;
  }
  li {
    border-bottom: 1px dotted #ccc;
    padding: 5px 0;
  }
  .kriterler {
    font-weight: 600;
    font-size: 13px;
    padding-right: 10px;
    float: left;
    width: 148px;
  }
  .cevaplar {
    padding-left: 15px;
    font-size: 12px;
    width: 130px;
  }
  .ilan {
    color: #f00;
  }
  .dengele {
    position: relative;
    bottom: 3px;
  }
`;
