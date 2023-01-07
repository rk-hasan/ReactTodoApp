import React from 'react';

import Data from "./Data.json";
import Card from "./Components/Card";
import Login from "./Components/Login";
import { v4 as uuidv4 } from 'uuid';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App