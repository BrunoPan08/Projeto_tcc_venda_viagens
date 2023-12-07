import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context/stateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0)
  }, [])
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill/>
        </p>
        <h2>Agradecemos pelo seu pedido e boa viagem!</h2>
        <Link href="/">
          <button type='button' width="300px" className='btn'>
            Retorna para a página principal
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success