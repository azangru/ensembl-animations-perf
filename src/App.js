import React, { useState } from 'react';

import Horizontal from './horizontal/Main';
import Vertical from './vertical/Main';

import './App.css';

function App() {
  const [ content, setContent ] = useState(null);

  const chooseHorizontal = () => {
    setContent('horizontal');
  }

  const chooseVertical = () => {
    setContent('vertical');
  }

  const selectors = (
    <>
      <span onClick={chooseHorizontal}>
        Horizontal
      </span>
      <span onClick={chooseVertical}>
        Vertical
      </span>
    </>
  )

  if (content === 'horizontal') {
    return <Horizontal />
  } else if (content === 'vertical') {
    return <Vertical />
  } else {
    return selectors
  }
}

export default App;
