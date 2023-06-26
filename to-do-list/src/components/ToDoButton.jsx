import React from 'react';
import styled from "styled-components";




const Button = styled.button`
`

function ToDoButton({todos, id, completed = null, setToDos}){


    const getButton = (completed) => {
        if (completed === null){
            return <Button onClick={deleteTodo}>삭제하기</Button>
        }

        if (completed) {
            return <Button onClick={() => changeTodoStatus(false)}>취소하기</Button>
        } else {
            return <Button onClick={() => changeTodoStatus(true)}>완료하기</Button>
        }
    }

    const changeTodoStatus = (completed) => {
        console.log(id + " " + completed)
        console.log(setToDos)
        setToDos(
            todos.map((todo) =>{
                if(todo.id === id){
                    todo.completed = completed
                }
                return todo
            })
        )
    }

    const deleteTodo = () => {
        setToDos(
            todos.filter((todo) =>{
                return todo.id !== id
            })
        )
    }
    return(
        getButton(completed)
    )
}

export default ToDoButton;