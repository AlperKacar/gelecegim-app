import styled from "styled-components";

export const LoginDiv = styled.div`
width: 100%;
height: 100%;
position: fixed;
display: grid;
place-items: center;
background-color: #081229;

.Login{
width: 350px;
max-height: 455px;
background-color: #fff;
border: 1px solid #dbdbdb;
border-radius: 10px;
}
.Login-boyut{

    display: grid;
    place-items: center;
}
.Singup-boyut{
    margin: -106px 5px 5px ;
    display: grid;
    place-items: center;

}
.img-logo{
    margin:30px 0 10px 0; 
    background-color: yellow;
    width: 136px;
    height: 34px;
}
.Input-div{
    margin: 30px 30px -5px ;
    position: relative;
}
.Input-div-row{
    display: flex;
    gap: 25px;
}


.ant-input{
    width: 100%;
    font-size: 15px;
    padding: 3px 35px 0 18px; 
    outline: none;
    margin-right: 45px;
    height: 35px !important;
    padding: 3px 35px 0 18px !important; 
}
.input-text{
    bottom: 29px;
    background-color: white;
    left: 13px;
    padding: 0 5px;
     margin: -5px; 
    position: absolute;
    pointer-events: none;
    color: black;
    font-size: 15px;
}


.form-input{
    margin-top: 15px;
}
.Form-button{
    display: grid;
    place-items: center;
    
}
.Button{
    margin-top: 15px;
}

.Or-div{
    display: flex;
    align-items: center;
    width: 90%;
}
.Or-div-div{
    margin: 30px 20px;
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
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;    
    column-gap: 5px;
    font-size: 18px;
    text-decoration: none;
}
.Forgot-password{
    margin: 10px 0; 
    text-decoration: none;
    font-size: small;
}
.Sign-up-boyut{
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
.signup-login{
    text-decoration: none;
    font-size: 15px;
    color: blue;
    margin-left: 5px;
}
.show-hide-trigger{
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    top: 24px;
    right: 9px;
    background: url(https://s0.shbdn.com/assets/images/password_hide:4e3854c839e1974448171eaef3866837.png) no-repeat;
    -webkit-background-size: 21px 18px;
    -moz-background-size: 21px 18px;
    background-size: 21px 18px;
}
.hide-show-trigger{
    position: absolute;
    top: 24px;
    right: 9px;
    width: 21px;
    height: 18px;
    display: block;
    background: url(https://s0.shbdn.com/assets/images/password_show:893e09be95762713a91c214a7514aacf.png) no-repeat;
    -webkit-background-size: 21px 16px;
    -moz-background-size: 21px 16px;
    background-size: 21px 16px;
}
.cheachbox{
    display: flex;
    padding: 0 0 10px 0;

}
.cheachboxtext{
    font-size: small;
    margin-left: 10px;
    pointer-events: none;
}
.displaycentercenter{
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 720px) {
    overflow: hidden;
    .Sign-up-boyut{
    width: 100%;
}
.Login{
    width: 100%;
}  
.Form-boyut{
    width: 90%;
}
.Input-div{
    width: 90%;
} 
}

`