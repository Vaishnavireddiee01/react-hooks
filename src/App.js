import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>class counter</h1>
      <ClassCounter />
      <h1>Hook counter</h1>
      <HookCounter />
    </div>
  );
}

export default App;
