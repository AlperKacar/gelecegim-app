import styled from "styled-components";

export const Container=styled.div`

section {
  padding: 2rem 0;
}

label {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dotted black;
  border-radius: 20px;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  font-size: large;
}

label span {
  font-weight: lighter;
  font-size: small;
  padding-top: 0.5rem;
}

.input {
  display: none;
}

img {
  padding: 0;
  margin: 0;
}

.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.image {
  margin: 1rem 0.5rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.image button {
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  border: none;
  color: white;
  background-color: lightcoral;
}

.image button:hover {
  background-color: red;
}

.image p {
  padding: 0 0.5rem;
  margin: 0;
}

.upload-btn {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  width: 10rem;
  height: 3rem;
  color: white;
  background-color: green;
}

label:hover,
.upload-btn:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.error {
  text-align: center;
}

.error span {
  color: red;
}
  
  
  
  `