import {useEffect, useState} from "react";
import { TodoForm } from "./TodoForm";

export const Todo = ()=> {

    
    const [todoList, setTodoList] = useState ([]); // Initial empty array for todo items
    const [dateTime, setDateTime] = useState ();

   

    // Handle form submission
    const handleFormSubmit = (inputData) => {
        
         // validation 
          // 1) If inputData is empty, do nothing
        if(!inputData) return; // If inputData is empty, do nothing]

        //2) If inputData already exists in todoList, do nothing
        if(todoList.includes(inputData)) {
            alert("Todo item already exists!");
            onBtnSubmit();
            return;
        };

        
        // Add the new todo item to the todoList
        setTodoList([...todoList, inputData]); // Spread operator se existing todoList ke sare items ko le raha hai aur usme naya inputData add kar raha hai.
       
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
            <h2>{dateTime}</h2>
           </header>
           <section>
           
           // Todo Form
           <TodoForm onAddTodo={handleFormSubmit} />

            <ul>
                {todoList.map((currTodo, index)=>{
                    return(
                        <li key={index}>{currTodo}
                         <button onClick={() => handleDelButton(index)}>Del</button></li>
                    )
                })}
                <button onClick={handleClearAll}>Clear All</button>
            </ul>
           </section>
        </section>
    )
}