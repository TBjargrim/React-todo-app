import React from 'react'
import styled from "styled-components";

//Styling
//Add completed with a check or a line over and opacity

const StyledListItem = styled.div `
display:flex;
align-items:center;
justify-content:center;

`

const StyledLI = styled.li`
color:white;
padding-left:10px;
padding-top:10px;
list-style:none;
letter-spacing:1px;
border: 1px solid #57475C;
background-color:#57475C;
width:40%;
height:40px;
margin:5px;
border-radius:2px;

&:hover {

  
}
`;

const StyledButtonsDelete = styled.button`
display:flex;
align-items:center;
justify-content:center;
background-color:lightgray;
border-radius:2px;
width:50px;
height:20px;
border:none;
color:black;
text-transform:uppercase;
font-size:0.6rem;
margin:5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {   
    color:white;
    outline:0;
    background-color:#8B3846;
}

`;

const StyledButtonsDone = styled.button`
display:flex;
align-items:center;
justify-content:center;
background-color:lightgray;
border-radius:2px;
width:50px;
height:20px;
border:none;
color:black;
text-transform:uppercase;
font-size:0.6rem;
margin:5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
    background-color:darkgray;
    color:white;
}
&:focus {
outline:0;
background-color:#517881;
}
`;

const Todo = ({ text, todo, todos, setTodos}) => {
//Events
const deleteHandler =() => {
setTodos(todos.filter((el) => el.id !== todo.id));

};

const completeHandler = () => {
setTodos(todos.map(item => {
    if(item.id === todo.id){
        return {
            //...add all the proparties in the object but 
            //just modify the.item.complited, swop it around with !
            ...item,completed: !item.completed
        }
    }
return item;
}))

}

    return(
        <StyledListItem>
            <StyledLI className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</StyledLI>
           
            <StyledButtonsDone onClick={completeHandler}>Done</StyledButtonsDone>
            <StyledButtonsDelete onClick={deleteHandler}>Delete </StyledButtonsDelete>
        </StyledListItem>
    )
}

export default Todo;