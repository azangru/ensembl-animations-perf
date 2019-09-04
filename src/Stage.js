import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSpring, animated } from 'react-spring';

import pluto from './pluto.jpg';

const Stage = (props) => {

  return props.animation === 'optimized' ?
    <StaticStage {...props} /> :
    <WidthChangingStage {...props} />;
};

const WidthChangingStage = (props) => {
  const classes = classNames(
    'stage',
    {'stage-with-image': props.content === 'image'}
  );

  const [animation, setAnimation] = useSpring(() => ({
    config: { tension: 280, friction: 45 },
    width: 'calc(-36px + 100vw )'
  }));

  useEffect(() => {
    const getWidth = (): string => {
      if (props.isOpen) {
        return 'calc(41px + 0vw)';
      } else if (!props.isFull) {
        return 'calc(-356px + 100vw)';
      } else {
        return 'calc(-36px + 100vw)';
      }
    };
    setAnimation({
      width: getWidth()
    });
  }, [props.animation, props.isOpen, props.isFull, setAnimation]);

  return (
    <animated.div style={animation} className={classes}>
      <img src={pluto} alt="pluto" />
    </animated.div>
  );
};

const StaticStage = (props) => {
  const classes = classNames(
    'stage',
    {'stage-with-image': props.content === 'image'}
  );

  return (
    <div className={classes}>
      <img src={pluto} alt="pluto" />
    </div>
  );
};

export default Stage;
