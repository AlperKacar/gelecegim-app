import {useState} from 'react'
import IlanKategori from './IlanVerComponents/IlanKategori'
import { Container } from './IlanVerCss'
import IlanVerStepBar from './IlanVerComponents/IlanVerStepBar'
import IlanBilgileri from './IlanVerComponents/IlanBilgileri'
function IlanVer() {
  const [secilen, setSecilen] = useState();
  const [show,setShow]=useState(true);
  
  return (
    
    <Container>
     
    <div className="main">
    <div className="ic-div">
    <IlanVerStepBar/> 
    <div className="border-div">
      <div className="modern-category-select">
      {show?
    (
    <>    
    <h3 className='kategori-sec-baslik'>Adım Adım Kategori Seç </h3>
    <IlanKategori setSecilen={setSecilen} setShow={setShow}/>
    </>

    ):
    <>
    <h3 className="kategori-sec-baslik">İlan Detayları</h3>
    <IlanBilgileri secilen={secilen}/>
  
    </>
    }
    
    

    </div>
    </div>
    </div>
    </div>
    </Container>
  )
}

export default IlanVer
