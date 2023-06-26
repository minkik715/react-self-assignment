import React, {useMemo, useState} from 'react';
import ToDoBox from "./components/ToDoBox";
import ToDoHeader from "./components/ToDoHeader";
import ToDoInputSection from "./components/ToDoInputSection";
import Wrapper from "./components/Wrapper";

function App() {

    const [toDos, setToDos] = useState([]);

    const addTodo = (toDo) => {
        setToDos([toDo, ...toDos])
    }

    const getCompletedToDo = toDos.filter((todo) =>{
        return todo.completed
    })

    const getRemainToDo = toDos.filter((todo) =>{
        return !todo.completed
    })

    useMemo(() => getCompletedToDo, [toDos]);
    useMemo(() => getRemainToDo, [toDos]);


    return (
        <Wrapper>
            <ToDoHeader>My Todo List</ToDoHeader>
            <ToDoInputSection size={toDos.length} addToDo={addTodo}></ToDoInputSection>
            {
                getRemainToDo.reverse().map((toDo) => {
                    return <ToDoBox key={toDo.id} todos={toDos} id={toDo.id} content={toDo.content} title={toDo.title} completed={toDo.completed} setToDos={setToDos} ></ToDoBox>

                })
            }
            <hr/>
            {
                getCompletedToDo.reverse().map((toDo) => {
                    return <ToDoBox key={toDo.id}  todos={toDos} id={toDo.id} content={toDo.content} title={toDo.title} completed={toDo.completed} setToDos={setToDos}></ToDoBox>

                })
            }
        </Wrapper>
    );
}

export default App;