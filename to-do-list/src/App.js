import React, {useState} from 'react';
import ToDoBox from "./components/ToDoBox";
import ToDoHeader from "./components/ToDoHeader";
import ToDoInputSection from "./components/ToDoInputSection";


function App() {

    const [toDos, setToDos] = useState([]);

    const addTodo = (toDo) => {
        setToDos([toDo, ...toDos])
    }

    return (
        <div>
            <ToDoHeader>My Todo List</ToDoHeader>
            <ToDoInputSection addToDo={addTodo}></ToDoInputSection>
            {
                toDos.reverse().map((toDo) => {
                    return <ToDoBox content={toDo.content} title={toDo.title}></ToDoBox>

                })
            }
        </div>
    );
}

export default App;