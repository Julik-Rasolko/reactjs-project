import React, {useState} from "react";
import './App.css';
import Card from "./components/card/card"
import mockData from './assets/mock-data.json'

function App() {
  const num = 0
  return (
    <div className="App">
      <ul>
        {mockData.map(it => <Card 
          title={it.title} 
          text={it.text} 
          likes={it.likes}
        />)}
      </ul>
    </div>
  );
}

export default App;
