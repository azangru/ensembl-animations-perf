import React from 'react';

const Header = (props) => {

  const handleAnimationChange = (event) => {
    props.onAnimationChange(event.target.value)
  };

  const contentSelector = (
    <select onChange={props.onContentChange}>
      {
        props.contentTypes.map(contentType => {
          const extraProps = contentType === props.selectedContent ? { selected: true } : {};
          return (
            <option {...extraProps}>{contentType}</option>
          );
        })
      }
    </select>
  );

  const animationSelector = (
    <select onChange={handleAnimationChange}>
      {
        props.animationTypes.map(animationType => {
          const extraProps = animationType === props.selectedAnimation ? { selected: true } : {};
          return (
            <option {...extraProps}>{animationType}</option>
          );
        })
      }
    </select>
  );

  return (
    <header className="header">
      { contentSelector }
      { animationSelector }
      <button onClick={props.onToggleOpen}>
        Toggle open
      </button>
    </header>
  );
};

export default Header;
