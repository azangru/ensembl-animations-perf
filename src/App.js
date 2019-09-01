import React, { useState } from 'react';

import Header from './Header';
import Panel from './Panel';
import Stage from './Stage';

import './App.css';

const contentTypes = [
  'image',
  'video'
];

const animationTypes = [
  'suboptimal',
  'optimized'
];

function App() {
  const [ content, setContent ] = useState(contentTypes[0]);
  const [ animation, setAnimation ] = useState(animationTypes[1]);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isFull, setIsFull ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <Header
        contentTypes={contentTypes}
        animationTypes={animationTypes}
        selectedContent={content}
        selectedAnimation={animation}
        onContentChange={(content) => setContent(content)}
        onAnimationChange={(animation) => setAnimation(animation)}
        onToggleOpen={toggleOpen}
      />
      <main>
        <Stage
          content={content}
          animation={animation}
          isOpen={isOpen}
          isFull={isFull}
        />
        <Panel
          animation={animation}
          isOpen={isOpen}
          isMinimized={isFull}
        />
      </main>
    </div>
  );
}

export default App;
