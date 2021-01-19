import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'


//Styled componant
const GlobalStyle = createGlobalStyle `
body {
  background-color:#3B2941;
}`
const BaseDiv = styled.div`
display:flex;
flex-direction:column;
margin:0px 50px;
`
const Styledh1 = styled.h1`
 text-align:center;
color:lightgray;
letter-spacing:2px;
text-transform:uppercase;

`


function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  
      useEffect(() => {
        getLocalTodos();
      },[]);
      useEffect(() => {
          filterHandler();
          saveLocalTodos();
      }, [todos, status]);

  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
      const saveLocalTodos = () => {
          localStorage.setItem("todos", JSON.stringify(todos))
      }
        const getLocalTodos = () => {
          if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
          } else {
            const todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal);
          }
        }
  return (
    <BaseDiv>
      <GlobalStyle />
      <Styledh1>Todo-list</Styledh1>
      <Form todos={todos} 
            setTodos={setTodos} 
            inputText={inputText}
            setInputText={setInputText} 
            setStatus={setStatus}
            />
      <TodoList 
      todos={todos} 
      setTodos={setTodos} 
      filteredTodos={filteredTodos} 
      />
    </BaseDiv>
  );
}

export default App;
