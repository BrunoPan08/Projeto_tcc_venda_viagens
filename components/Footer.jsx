import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Viagens Todos os direitos reservados</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer