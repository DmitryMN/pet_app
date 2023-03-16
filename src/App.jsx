import React, { useState, useRef } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { useMatchMedia } from './hooks/useMatchMedia';
import { useScrollBar } from './hooks/useScrollBar';

const initialTodos = [
  { id: 1, text: 'one' },
  { id: 2, text: 'two' },
]


const App = () => {

  const [todos, setTodos] = useState(initialTodos);

  const {isMobile} = useMatchMedia();

  const hasScroll = !isMobile && todos.length > 3;

  const todoWrapper = useRef(null);

  useScrollBar(todoWrapper, hasScroll);

  const setTodoCallBack = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text
    }
    setTodos((prev) => ([...prev, newTodo]));
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div style={{marginTop: '1rem', marginLeft: '10px', height: hasScroll ? '120px' : 'auto', minHeight: '120px', width: '200px'}} ref={todoWrapper}>
      <TodoForm setTodoCallBack={setTodoCallBack}/>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo}/>)}
    </div>
  );
}

export default App;
