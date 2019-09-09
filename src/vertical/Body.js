import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import Pixi from './Pixi';

const Body = (props) => {
  const [ animation, setAnimation ] = useSpring(() => ({
    height: 'calc(100% - 23px - 0px)'
  }));

  useEffect(() => {
    const height = props.isOpen ? 'calc(100% - 23px - 50px)' : 'calc(100% - 23px - 0px)';
    setAnimation({ height });
  }, [props.isOpen, setAnimation])

  return (
    <animated.div style={animation} className="body-vertical">
      <Pixi />
    </animated.div>
  );
}

export default Body;
