import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import RevealBar from './RevealBar';


const Header = (props) => {
  const [ animation, setAnimation ] = useSpring(() => ({
    height: '0px'
  }));

  useEffect(() => {
    const height = props.isOpen ? '50px' : '0px';
    setAnimation({ height });
  }, [props.isOpen, setAnimation])

  return (
    <header className="header-vertical">
      <button onClick={props.toggle}>Toggle</button>
      <animated.div style={animation}>
        <RevealBar />
      </animated.div>
    </header>
  );
}

export default Header;
