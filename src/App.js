import './App.css';
import styled from 'styled-components'
import logo from './assets/logo.png'
import logo1 from './assets/karatahta.jpg'
import { BsSearch, BsPersonX , BsFillArrowUpCircleFill} from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { useState } from 'react';


const Header = styled.div`
position: fixed;
right: 0;
left: 0;  
top: 0;
z-index: 9999;
display: flex;
  background: rgba(255,0,0,0.8);
  align-items: center;
  margin: 0px;
justify-content: space-around;
height: 7vh;

 
  .logocontainer {
    flex: 0.3;

    max-width: 1000px;
  }


  .logoheader{

height: 30px;
width: 60px;
transition: 1000ms;
//transition-timing-function: cubic-bezier(0.3, 0.93, 0.6, -0.6);//
:hover{
height: 30px;
width: 100px;
}
  }


`

const Formsearch = styled.form`
flex: 1;
display: flex;
justify-content: space-between;
align-items: center;
padding:5px 30px;
position: fixed;
 .searchdiv{

}
.inputt{
  
  border-radius: 4px;
  padding: 7px 70px 7px 20px;
  border: none;
  :focus{
  background-color: tomato;
  margin-right: -30px;
  border: none;
}
}
.searchbox{
  display: none;

}

.inputt:focus + .searchbox{
  display: inline-block;
color: aqua;
}
`
const Logindiv = styled.div`
.bilogin{
  font-size:20;
  color:white;
  :hover{
    color: black;
  }
}
  
`
const Logingiris = styled.div`
position: fixed;
top: 0px;
right: 0px;
width: 300px;
background: black;
height: 100%;
transition: 1000ms;

.loginclose{
  font-size:20;
   color:white;
  
}
`

const Viewdiv = styled.div`
.Viewlogo {
display: flex;
height: 50vh;
width: 1500px;
background-size: center center;


}
`
const Konum = styled.a`
position:fixed;
bottom: 15px;
right: 15px;
line-height: 50px;
padding: 0 20px;
background-color: black;
color: #fff;
text-decoration: none;
`

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header >
      <div className='logocontainer'>
        <img className='logoheader' src={logo}/>
      </div>
      <Formsearch>
      <div className='searchdiv'>
        <input className='inputt' 
        type="text"  
        name="query_text" 
         placeholder="Kelime, ilan no veya kurum adı ile ara"
         title="Kelime, ilan no veya kurum adı ile ara"
        required="required" 
        autocomplete="off"/>

        <BsSearch className='searchbox'/>

      </div>
      </Formsearch>
      <Logindiv  onClick={()=> setVisible(true)}>
        <BiLogIn className='bilogin' />  
      </Logindiv>
      {visible && (
        <div onClick={()=> setVisible(false)}>
          <Logingiris>
          <BsPersonX className='loginclose'/>

          </Logingiris>  
        </div>
      )}
      </Header>
      <Viewdiv>
        <img className='Viewlogo' src={logo1}/>
      </Viewdiv>
      <Viewdiv>
        <img className='Viewlogo' src={logo1}/>
      </Viewdiv>
      <Viewdiv>
        <img className='Viewlogo' src={logo1}/>
      </Viewdiv>
      <Viewdiv>
        <img className='Viewlogo' src={logo1}/>
      </Viewdiv>
      <Konum href='/'><BsFillArrowUpCircleFill/></Konum>
    </>
  );
}

export default App;