import styled from "styled-components"

export const Container=styled.div`

display: flex;
height: 220px;

.yazi{
    font-size: 14px;
    width: 100%;
    left: 0;
    position: absolute;
    top: 66px;
    text-align: center;
    font-weight: bold;
    color: #333;
    line-height: 15px;
}

.Egitim{
    margin-left:0;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
    border-radius: 4px;
    width: 176px;
    height: 114px;
    float: left;
    margin-left: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    position: relative;

    
}
.Egitim:hover{
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);


}
.Egitim-color-bar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #fcae1a;
    border-radius: 4px;
    
}
.egitim-icon-div{
    width: 34px;
    height: 34px;
    border-radius: 20px;
    background-color:#fcae1a ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 24px;
    left: 72px;
}
.egitim-icon{
    display: flex;
    color: white;
    font-size: 22px;
}

.Spor{
    margin-left:0;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
    border-radius: 4px;
    width: 176px;
    height: 114px;
    float: left;
    margin-left: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    position: relative;

}
.Spor:hover{
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
}


.Spor-color-bar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #f32b2d;
    border-radius: 4px;
}
.spor-icon-div{
    width: 34px;
    height: 34px;
    border-radius: 20px;
    background-color:#f32b2d ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 24px;
    left: 72px;
}
.spor-icon{
    display: flex;
    color: white;
    font-size: 22px;

}
.Sanat-color-bar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #19bae8;
    border-radius: 4px;
}

.Sanat{
    margin-left:0;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.3);
    border-radius: 4px;
    width: 176px;
    height: 114px;
    float: left;
    margin-left: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    position: relative;
}
.Sanat:hover{
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
}
.sanat-icon-div{
    width: 34px;
    height: 34px;
    border-radius: 20px;
    background-color:#19bae8 ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 24px;
    left: 72px;
}
.sanat-icon{
    display: flex;
    color: white;
    font-size: 22px;
}

`
