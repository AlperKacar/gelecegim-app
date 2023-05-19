import React from 'react'
import { Container } from '../Ilan-ComponentCss/KategoriFavCss'
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
function KategoriFav() {
  return (
    <Container>
    <div className='main-div'>
        <ul className='span-container'>
    <li className='kategori'><Link className='li-link' to="/"><MdArrowRight className='arrow'/>Spor</Link></li>
    <li className="brans"><Link className='li-link' to="/"><MdArrowRight className='arrow'/>Basketbol</Link></li>
    <li className='favori'><Link className='li-link' to="/">Favorilerim</Link></li>
    </ul>
    </div>
    </Container>
  )
}

export default KategoriFav