import React, { useState } from 'react'

const TodoForm = ({setTodoCallBack}) => {

  const [value, setValue] = useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <input value={value} type="text" placeholder='enter todo' onChange={changeValue} />
      <button onClick={() => setTodoCallBack(value)}>Add</button>
    </div>
  )
}

export default TodoForm;
