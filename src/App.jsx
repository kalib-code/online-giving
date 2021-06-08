import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainScreen from "./screens/MainScreen"
import EwalletScreen from "./screens/EwalletScreen"


function App() {
  return (
    <Router>
    <div className=" flex container mx-auto justify-center h-screen items-center">
    <div className="items-center justify-center border-1 shadow-lg border-gray-100 p-3.5 md:w-1/2 h-auto content-between w-4/5">
      <div className=" flex flex-col w-full items-center justify-center ">
        <img className=" w-40 h-40" src="./image/destiny.jpg"/>
        <h1>Destiny City Church</h1>
        </div>
      <Switch>
              <Route exact path='/' component={ MainScreen } />
              <Route path='/payments/' component={ EwalletScreen } />   
          </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
