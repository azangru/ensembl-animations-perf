import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';

import pluto from './pluto.jpg';

const Stage = (props) => {
  const classes = classNames(
    'stage',
    {'stage-with-image': props.content === 'image'}
  )

  const initialConfig = props.animation === 'optimized'
    ? { }
    : { width: 'calc(-36px + 100vw )' }

  const [animation, setAnimation] = useSpring(() => ({
    config: { tension: 280, friction: 45 },
    ...initialConfig
  }));

  useEffect(() => {
    if (props.animation === 'optimized') {
      return;
    }

    const getBrowserWidth = (): string => {
      if (props.isOpen) {
        return 'calc(41px + 0vw)';
      } else if (!props.isFull) {
        return 'calc(-356px + 100vw)';
      } else {
        return 'calc(-36px + 100vw)';
      }
    };
    setAnimation({
      width: getBrowserWidth()
    });
  }, [props.animation, props.isOpen, props.isFull, setAnimation]);

  return props.animation === 'optimized' ? (
    <div className={classes}>
      <img src={pluto} alt="pluto" />
    </div>
  ) : (
    <animated.div style={animation} className={classes}>
      <img src={pluto} alt="pluto" />
    </animated.div>
  );
};

export default Stage;
