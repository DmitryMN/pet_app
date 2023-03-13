import React from 'react';
import FruitItem from './FruitItem';
import { Reorder, AnimatePresence } from 'framer-motion';


const Fruit = ({ fruits, setFruits, removeFruit }) => {
    return (
        <Reorder.Group as='ol' axys='y' values={fruits} onReorder={setFruits}>
            <AnimatePresence>
                {fruits.map(fruit => <FruitItem key={fruit.id} fruit={fruit} removeFruit={removeFruit}/>)}
            </AnimatePresence>
        </Reorder.Group>
    )
}


export default Fruit;