import React, {useState} from "react";
import './App.css';
import Card from "./components/card/card"
import mock_data from './assets/mock-data.json'

function App() {
  const num = 0
  return (
    <div className="App">
      <ul>
        {mock_data.map(it => <Card title={it.title} text={it.text} likes={it.likes}/>)}
      </ul>
    </div>
  );
}

export default App;
