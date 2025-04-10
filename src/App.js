import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';

import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';

import EffectClassCounterOne from './components/EffectClassCounterOne';
import EffectHookCounterOne from './components/EffectHookCounterOne';
import './App.css';
function App() {
  return (
    <div className="App">
      <h3>class counter</h3>
      <ClassCounter />
      <h3>Hook counter</h3>
      <HookCounter />
      <h4>HookCounterTwo</h4>
      <HookCounterTwo />
      <h4>ClassCounterTwo</h4>
      <ClassCounterTwo />
      <h4>usestate with objects</h4>
      <HookCounterThree />
      <h4>usestate with array</h4>
      <HookCounterFour />

      <h4>EffectClassCounterOne</h4>
      <EffectClassCounterOne />
      <h4>EffectHookCounterOne</h4>
      <EffectHookCounterOne />
    </div>
  );
}

export default App;
