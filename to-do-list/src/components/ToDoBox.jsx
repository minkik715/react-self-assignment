import React from 'react';
import styled from "styled-components";
import ToDoButton from "./ToDoButton";

const Box = styled.div`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  margin: 30px;
  border: solid 2px darkseagreen;
  border-radius: 5px;
  width: 300px;
  height: 150px;
`

const Title = styled.div`
  font-size: 30px;
  font-family: "Helvetica Neue", serif;
`

const Content = styled.div`
  margin: 20px 0 0;
  font-size: 20px;
  font-family: "Helvetica Neue", serif;
`

const getButton = (completed) => {
    if (completed) {
        return <button>취소하기</button>
    } else {
        return <button>완료하기</button>
    }
}


function ToDoBox({todos, title, content, completed, setToDos, id}) {
    return (
        <Box>
            <div>
                <Title>{title}</Title>
                <Content>{content}</Content>
                <ToDoButton  id={id} completed={completed} setToDos={setToDos} todos={todos}></ToDoButton>
                &nbsp;&nbsp;
                <ToDoButton id={id} setToDos={setToDos} todos={todos}></ToDoButton>
            </div>
        </Box>
    );
}

export default ToDoBox;