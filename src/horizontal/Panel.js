import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import kitten from './kitten.jpg';

const Panel = (props) => {
  return props.animation === 'optimized' ?
    <TransformAnimatedPanel {...props}/> :
    <WidthAnimatedPanel {...props} />;
};

const WidthAnimatedPanel = (props) => {
  const [animation, setAnimation] = useSpring(() => ({
    config: { tension: 280, friction: 45 },
    left: 'calc(-356px + 100vw)'
  }));

  useEffect(() => {
    const getBrowserWidth = () => {
      if (props.isOpen) {
        return 'calc(41px + 0vw)';
      } else if (!props.isMinimized) {
        return 'calc(-356px + 100vw)';
      } else {
        return 'calc(-36px + 100vw)';
      }
    }
    setAnimation({
      left:  getBrowserWidth()
    });
  }, [props.isOpen, props.isMinimized, setAnimation]);

  return (
    <animated.div style={animation} className="panel">
      <div className="panel-main">
        I am panel
      </div>
      <PanelExtension />
    </animated.div>
  );
};

const TransformAnimatedPanel = (props) => {
  const [animation, setAnimation] = useSpring(() => ({
    config: { tension: 280, friction: 45 },
    transform: 'translateX(0vw)'
  }));

  useEffect(() => {
    const getTransform = () => {
      if (props.isOpen) {
        return 'translateX(-100vw))';
      } else if (!props.isMinimized) {
        return 'translateX(0)';
      } else {
        return 'translateX(356px)';
      }
    }
    setAnimation({
      transform:  getTransform()
    });
  }, [props.isOpen, props.isMinimized, setAnimation]);

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
