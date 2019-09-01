import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import kitten from './kitten.jpg';

const Panel = (props) => {
  const initialConfig = props.animation === 'optimized'
    ? { transform: 'translateX(0vw)' }
    : { left: 'calc(-356px + 100vw)' }


  const [animation, setAnimation] = useSpring(() => ({
    config: { tension: 280, friction: 45 },
    ...initialConfig,
  }));

  useEffect(() => {
    const getBrowserWidth = () => {
      if (props.animation === 'optimized') {
        if (props.isOpen) {
          return 'translateX(-100vw))';
        } else if (!props.isMinimized) {
          return 'translateX(0)';
        } else {
          return 'translateX(356px)';
        }
      } else {
        if (props.isOpen) {
          return 'calc(41px + 0vw)';
        } else if (!props.isMinimized) {
          return 'calc(-356px + 100vw)';
        } else {
          return 'calc(-36px + 100vw)';
        }
      }
    };
    setAnimation({
      ...(props.animation === 'optimized' ? { transform: getBrowserWidth() } : { left:  getBrowserWidth() })
    });
  }, [props.animation, props.isOpen, props.isMinimized, setAnimation]);

  return (
    <animated.div style={animation} className="panel">
      <div className="panel-main">
        I am panel
      </div>
      <PanelExtension />
    </animated.div>
  );
};

const PanelExtension = () => (
  <div className="panel-extension">
    <img src={kitten} alt="kitten" />
  </div>
);

export default Panel;
