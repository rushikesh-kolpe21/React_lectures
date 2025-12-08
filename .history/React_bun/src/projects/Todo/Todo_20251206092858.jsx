import {useEffect, useState} from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";

export const Todo = ()=> {

    
    const [todoList, setTodoList] = useState ([]); // Initial empty array for todo items
    const [dateTime, setDateTime] = useState ();

    // Handle form submission
    const handleFormSubmit = (inputData) => {
        const {id, content, checked} = inputData;
         // validation 
         // 1) If inputData is empty, do nothing
        if(!content) return; // If inputData is empty, do nothing]

        //2) If inputData already exists in todoList, do nothing
        // if(todoList.includes(inputData)) {
        //     alert("Todo item already exists!");
        //     return;
        // };

        const ifTodoContentMatched = todoList.find((item) => item.content === content);
        if(ifTodoContentMatched) {
            alert("Todo item already exists!");
            return;
        } 
        setTodoList((prevTodoList) => [...prevTodoList, {id:id, content:content, checked:checked}]);
    
    }

   
    // Handle delete button
    const handleDelButton = (index) => {
        console.log("Delete button clicked");
        const updatedTodoList = todoList.filter((item, idx)=> idx !== index);
        setTodoList(updatedTodoList);
    }

    // Handle clear all button
    const handleClearAll=()=>{
        setTodoList([]); // Clear the entire todo list by setting it to an empty array
    }


     //TODO DATE - TIME
    useEffect(()=> {
        const intervalId = setInterval(() => {
            const now  = new Date();
            const formattedDateTime = now.toLocaleString();
            setDateTime(formattedDateTime);
         }, 1000);
        
         return ()=> clearInterval(intervalId); // Cleanup interval on component unmount
    }, [] ); 
    

    return (
        <section>
           <header>
            <h1>Todo List</h1>
            <TodoDateTime dateTime={dateTime} />
           </header>
           <section> 
           
           
           <TodoForm onAddTodo={handleFormSubmit} />

            <ul>
                {todoList.map((currTodo, index)=>{
                    return(
                        <TodoList key={index} currTodo={currTodo} index={index}  handleDelButton={handleDelButton} />
                    )
                })}
                <button onClick={handleClearAll}>Clear All</button>
            </ul>
           </section>
        </section>
    )
}