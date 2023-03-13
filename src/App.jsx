import React, { useState } from 'react';
import './App.css';
import Fruit from './components/Fruit';
import FruitForm from './components/FruitForm';


const listFruit = [
  { id: 1, title: 'apple', comleted: false },
  { id: 2, title: 'pinapple', comleted: false },
  { id: 3, title: 'orange', comleted: false },
  { id: 4, title: 'melon', comleted: false }
]

const App = () => {

  const [fruits, setFruits] = useState(listFruit);

  const removeFruit = (id) => {
    setFruits(fruits.filter(fr => fr.id !== id));
  } 


  return (
    <div className="App">
      <FruitForm setFruit={setFruits}/>
      <Fruit fruits={fruits} setFruits={setFruits} removeFruit={removeFruit}/>
    </div>
  );
}

export default App;
