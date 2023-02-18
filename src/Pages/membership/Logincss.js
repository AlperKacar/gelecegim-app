import styled from "styled-components";

export const LoginDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

.Login{
width: 350px;
height: 480px;
background-color: #fff;
border: 1px solid #dbdbdb;
}
.Login-boyut{
    display: grid;
    place-items: center;
} 
.img-logo{
    margin: 30px;
    background-image: url(https://s0.shbdn.com/assets/images/header_2x:e128c32e6c3632344852d5d52f683bba.png);
    height: 34px;
    width: 160px;
    background-position: -245px 0;
    background-size: 405px 222px;
    text-indent: -9999px;
}
.Input-div{
    margin: 30px 30px 15px ;
}
.input-tasarım{
    width: 100%;
    height: 35px;
    font-size: 15px;
    padding: 3px 18px 0 ; 
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    :focus {
      border: 1px solid black
    }
    :valid{
    padding: 10px 18px 0 ;
    }
   
}
.input-text{
    position: relative;
    bottom: 28px;
    left: 18px;
    font-size: 15px;
    color: #8e8e8e;
    pointer-events: none;
    background-color: transparent;

}
.input-tasarım:valid + .input-text{
    transition: 500ms;
    bottom: 48px;
    background-color: white;
    left: 13px;
    padding: 0 5px;
    margin: -5px;
  } 
.Button{
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border: none;
    background-color: yellow;
    font-size: large;
}
.Or-div{
    display: flex;
    align-items: center;
    margin: 10px;
    width: 90%;
}
.Or-div-div{
    margin: 25px;
    height: 1px;
    background-color: #cacaca;
    flex: 1 1 0%;
}
.Or-span{
    color: #aaa;

    font-size: 15px;
	font-weight: 500;
}
.Facebook-login{
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;    
    column-gap: 5px;
    font-size: 18px;
    text-decoration: none;
}
.Forgot-password{
    margin-top: 20px;
    text-decoration: none;
    font-size: small;
}
.Sign-up-boyut{
    margin-top: 15px;
    width: 350px;
    height: 60px;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
}
.signup-login{
    text-decoration: none;
    font-size: 15px;
    color: blue;
    margin-left: 5px;
}
`