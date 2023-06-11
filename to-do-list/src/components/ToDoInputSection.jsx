import React, {useState} from 'react';
import styled from "styled-components";

const TodoInput = styled.input`
  display: inline;
  margin: 10px;
`

const TodoWrapper = styled.div`
    margin: 20px 20px 20px 0px;
  background-color: #61dafb;
`

const Button = styled.button`
`

function ToDoInputSection({addToDo}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const contentOnChange = (event) => {
        setContent(event.target.value)
    }

    const titleOnChange = (event) => {
        setTitle(event.target.value)
    }

    const handOnChange = () => {
        addToDo({title, content, completed : false})
        setTitle("")
        setContent("")
    }

    return (
        <TodoWrapper>
            제목: <TodoInput type="text" value={title} onChange={titleOnChange}></TodoInput>
            내용: <TodoInput type="text" value={content} onChange={contentOnChange} ></TodoInput>
            <Button onClick={handOnChange}>추가하기</Button>
        </TodoWrapper>
    )
}


export default ToDoInputSection;