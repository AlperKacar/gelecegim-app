import React from 'react'
import { Container } from '../Ilan-ComponentCss/IlanAciklamaCss'
import { Link } from 'react-router-dom'
function IlanAciklama(props) {
    const ilanAciklama=props.ilanDetay.ilan_aciklama
  return (
    <Container>
    <div className='aciklama-buton'>
        <ul className='aciklama-buton-ul'>
                <li className='aciklama-buton-li'><Link className='link'>İlan Detayları</Link></li>
                <li className='aciklama-buton-li'><Link className='link'>Konum Bilgisi</Link></li>
        </ul>
    </div>
    <div className="uibox">
        <div className="uiboxtitle">
            <h3 className='aciklama-baslik'>Açıklama</h3>
            </div>
            <div className="description">{ilanAciklama}</div>
                
                
    
    </div>
    </Container>
  )
}

export default IlanAciklama