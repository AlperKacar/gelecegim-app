import styled from "styled-components";


export const Container=styled.div`
    padding-top: 35px;
    margin-bottom: 30px;

    .aciklama-buton{
    height: 37px;

}
.aciklama-buton-ul{
float: left;
width: 100%;
position: relative;
list-style: none;
    
}
.aciklama-buton-ul::before{
    
    position: absolute;
    width: 100%;
    height: 2px;
    z-index: 10;
    top: 30px;
    left: 0;
    content: " ";
    border-bottom: 2px solid #ffc000;
}
.aciklama-buton-li{

    height: 36px;
    float: left;
    margin-left: 10px;
}
.link{
    padding: 9px 17px 11px 17px;
    font-size: 14px;color: #333;
    border: 1px solid #ffc000;
    border-bottom: 0;
    background: #ffe700;
    background: -moz-linear-gradient(top,#ffe700 0,#ffc000 100%);
    background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#ffe700),color-stop(100%,#ffc000));
    background: -webkit-linear-gradient(top,#ffe700 0,#ffc000 100%);
    background: -o-linear-gradient(top,#ffe700 0,#ffc000 100%);
    background: -ms-linear-gradient(top,#ffe700 0,#ffc000 100%);
    
    background: linear-gradient(top,#ffe700 0,#ffc000 100%);
    zoom: 1;
    -webkit-box-shadow: inset 0 0 0 1px #fff599;
    -moz-box-shadow: inset 0 0 0 1px #fff599;
    box-shadow: inset 0 0 0 1px #fff599;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-topright: 8px;
    -moz-border-radius-bottomright: 0;
    -moz-border-radius-bottomleft: 0;
    -webkit-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0;
    text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
    text-decoration: none;
    cursor: default;
    font-family: 12px "Lucida Grande","Lucida Sans","Lucida Sans Unicode",Roboto,sans-serif;
    font-weight: bold;
    height: 15px;
}

.uibox{
    margin-bottom: 10px;
    clear: both;
    border: 1px solid #dedede;
    position: relative;
    overflow: hidden;
}
.uiboxtitle{
    border-bottom: 1px solid #dedede;
    padding: 6px 10px 7px 10px;
    background: #efefef;
    background: -moz-linear-gradient(top,#fff 0,#efefef 100%);
    background: -webkit-gradient(linear,left top,left bottom,color-stop(0%,#fff),color-stop(100%,#efefef));
    background: -webkit-linear-gradient(top,#fff 0,#efefef 100%);
    background: -o-linear-gradient(top,#fff 0,#efefef 100%);
    background: -ms-linear-gradient(top,#fff 0,#efefef 100%);
    background: linear-gradient(top,#fff 0,#efefef 100%);
}
.aciklama-baslik{
    font-size: 14px;
    font-weight: bold;
}
.description{
    min-height: 120px;
    word-wrap: break-word;
    line-height: 1.3em;
    font-size: 14px;
    padding: 15px;
    padding-bottom: 20px;
    color: #000;
    background-color: #fff;
    font-family:"Lucida Grande","Lucida Sans","Lucida Sans Unicode",Roboto,sans-serif;
    
    
}
`