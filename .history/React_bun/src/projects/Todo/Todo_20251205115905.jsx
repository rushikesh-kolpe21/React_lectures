import {useState} from "react";

export const Todo = ()=> {

    const [inputData, setInputData] = useState("");
    const [todoList, setTodoList] = useState ([]); // Initial empty array for todo items


    // Handle input change
    const handleInputChange = (event)=>{
        setInputData(event.target.value);// inputData state ko new data (user ne jo type kiya) se update kar raha hai.
    };

    // Handle form submission
    const handleFormSubmit = ( event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted with data:", inputData);

        // Add the new todo item to the todoList
        setTodoList([...todoList, inputData]); // Spread operator se existing todoList ke sare items ko le raha hai aur usme naya inputData add kar raha hai.
        onBtnSubmit();
    }

    // Handle button submit
    const onBtnSubmit = () => {
        setInputData(""); // Clear the input field after submission
        inputData()
    }

    // Handle delete button
    const handleDelButton = (index) => {
        console.log("Delete button clicked");
        // Logic to delete the todo item will go here
        const updatedTodoList = todoList.filter((item, index) => index !== index);
        setTodoList(updatedTodoList);
    }


    return (
        <section>
           <header>
            <h1>Todo List</h1>
           </header>
           <section>
            <form onSubmit={handleFormSubmit} >
                <div>
                    <input
                    type="text"
                    placeholder="Add your new todo"
                    value= {inputData} // for give react control on input field and set value from state
                    onChange={handleInputChange}
                    />
                    <button onSubmit={onBtnSubmit} type="submit">Add Task</button>
                </div>
            </form>

            <ul>
                {todoList.map((currTodo, index)=>{
                    return(
                        <li key={index}>{currTodo} <button onClick={() => handleDelButton(index)}>Del</button></li>
                    )
                })}
            </ul>
           </section>
        </section>
    )
}