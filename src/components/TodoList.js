import React from 'react';
import Todo from './Todo'
import styled from "styled-components";


const StyledUL = styled.ul`
`
const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">

            <StyledUL>
                {filteredTodos.map((todo) => {
                    return (
                        < Todo
                            text={todo.text}
                            todo={todo}
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id} 
                            />
                    );
                })}
            </StyledUL>
        </div>
    )
}
export default TodoList;