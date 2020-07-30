import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { useSelector } from 'react-redux';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  const num = useSelector(state=>state.cake.numOfCakes)
  return (
    <div className="app">
      <UserContainer/>
      <NewCakeContainer/>
     <CakeContainer/>
     <IceCreamContainer/>
    </div>
  );
}

export default App;
