import React from 'react';
import styled from "styled-components";


const StyledForm = styled.form`
display:flex;
/* position:relative; */
align-items:center;
justify-content:center;
margin:50px 0px;

`
const Input = styled.input `
min-height: 2rem;
background-color:#AFA9B0;
border-radius:5px;
color:black;
font-size:1.2rem;

letter-spacing:1px;
padding:5px;
width:250px;

&:focus {
    outline:0;
    background:white;
}
`
const StyledSelect = styled.select `
border-radius:5px;
margin:10px;
letter-spacing:1px;
background-color:#AFA9B0;
font-family: "Poppins", sans-serif;
cursor: pointer;

&:focus{
    outline:none;
    background-color:white;
}
`
const StyledButtons = styled.button`
font-size:1.2rem;
min-height:2rem;
cursor: pointer;
transition: all 0.3s ease;
background-color:lightgray;
border-radius:2px;
background-color:#AFA9B0;
border:none;
color:black;
margin:0px 5px;

&:hover {
    background-color:darkgray;
    color:white;
}
&:focus {
outline:0;
background-color:#221D24;
}
`;
const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    //get the value of what you typing
const InputTextHandler = (e) => {
    setInputText(e.target.value)
}

const submitToDoHandler =(e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        {text:inputText, completed:false, id: Math.random() * 1000}]);
        setInputText("");
};

const statusHandler = (e) => {
    setStatus(e.target.value)
}
    return(
        <StyledForm>
            <Input value={inputText} onChange={InputTextHandler}type="text" />
            <StyledButtons onClick={submitToDoHandler} type="submit"> 
                +
            </StyledButtons>
            <div> 
                <StyledSelect onChange={statusHandler} name="todos">
                    <option value="all">All</option>
                    <option value="complete">Completed</option>
                    <option value="uncomplete">Uncompleted</option>
                </StyledSelect>
            </div>
        </StyledForm>
    )
}

export default Form;