import styled from "styled-components";

export const LoginDiv = styled.div`
width: 100%;
height: 100%;
position: fixed;
display: grid;
place-items: center;

.Login{
width: 350px;
max-height: 475px;
background-color: #fff;
border: 1px solid #dbdbdb;
}
.Login-boyut{
    display: grid;
    place-items: center;
}
.img-logo{
    margin: 30px;
    background-image: url(https://cdn.discordapp.com/attachments/1028416158874992760/1076499650678370304/Gelecegim-Deneme.png);
    height: 20px;
    width: 100px;
    background-color: black;
    text-indent: -9999px;
}
.Input-div{
    margin: 30px 30px 15px ;
    position: relative;
}
.Input-div-row{
    display: flex;
    gap: 10px;
}
.input-tasarım{
    width: 100%;
    height: 35px;
    font-size: 12px;
    padding: 3px 35px 0 18px; 
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    :focus {
      border: 1px solid black
    }
    :valid{
    padding: 3px 35px 0 18px;
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
    bottom: 48px;
    background-color: white;
    left: 13px;
    padding: 0 5px;
    margin: -5px;
  }
  .input-tasarım:focus + .input-text{
    color: black;
  }
.Button{
    width: 100%;
    height: 25px;
    border-radius: 5px;
    font-size: large;
    border: 1px solid #ccc;
    background: lightyellow;
    color: gray;
    :enabled{
        color: black;
        background-color: yellow;
        border: 1px solid #ccc;
    }
    :enabled:hover{
        
        box-shadow: 0 0 4px #7f8500;
        
    }
}
.Or-div{
    display: flex;
    align-items: center;
    margin: 10px;
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
    margin-top: 20px;
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
.show-hide-button{
    position: absolute;
    cursor: pointer;
    user-select: none;

}
.show-hide-trigger{
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    right: -262px;
    top: -49px;
    background: url(https://s0.shbdn.com/assets/images/password_hide:4e3854c839e1974448171eaef3866837.png) no-repeat;
    -webkit-background-size: 21px 18px;
    -moz-background-size: 21px 18px;
    background-size: 21px 18px;
}
.hide-show-trigger{
    position: absolute;
    width: 21px;
    height: 18px;
    display: block;
    right: -262px;
    top: -49px;
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
`