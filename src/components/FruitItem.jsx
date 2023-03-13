import React from 'react'
import { Reorder } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        height: 0,
    },
    animate: {
        opacity: 1,
        height: 'auto',
    },
    exit: {
        opacity: 0,
        height: 0,
    }
}


const FruitItem = ({fruit, removeFruit}) => {

    const removeHandler = (id) => {
        removeFruit(id);
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Reorder.Item
                className='fruit_item'
                value={fruit}
                whileDrag={{
                    scale: 1.1,
                }}
                {...variants}>
                {fruit.title}
            </Reorder.Item>
            <button onClick={() => removeHandler(fruit.id)}>Remove</button>
        </div>
    )
}


export default FruitItem;