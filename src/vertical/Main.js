import React, { useState } from 'react';

import Header from './Header';
import Body from './Body';

import './Main.css';

function Main() {
  const [ isOpen, setIsOpen ] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header isOpen={isOpen} toggle={toggle} />
      <Body isOpen={isOpen} />
    </>
  )
}

export default Main;
