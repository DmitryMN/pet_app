import React, { useState } from 'react';

const FruitForm = ({ setFruit }) => {

    const [fruitName, setFruitName] = useState('');

    const handlerChangeFruitName = (e) => {
        setFruitName(e.target.value);
    }

    const addNewFruit = (e) => {
        e.preventDefault();
        const newFruit = {
            id: Date.now(),
            title: fruitName,
            comleted: false,
        }
        setFruit((prevFruit) => [
            ...prevFruit,
            newFruit
        ]); 
    }

    return (
        <form onSubmit={addNewFruit}>
            <input type="text" value={fruitName} placeholder='please enter fruit name' onChange={handlerChangeFruitName}/>
            <input type={'submit'} value='Send' />
        </form>
    )
}


export default FruitForm;