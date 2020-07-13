import React from 'react';
import './App.css';
import './compo/Home'
import './compo/Login'
import './compo/Temp'
import Home from './compo/Home';
import Login from './compo/Login';
import SignUp from './compo/SignUp'
import Temp from './compo/Temp';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <Login/> */}
     <SignUp/>
     {/* <Temp color="yellow" /> */}
    </div>
  );
}

export default App;
