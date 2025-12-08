import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {

    const [inputData, setInputData] = useState("");

     // Handle input change
    const handleInputChange = (event)=>{
        setInputData(event.target.value);// inputData state ko new data (user ne jo type kiya) se update kar raha hai.
    };

    // Handle form submission
    const handleFormSubmit = ( event) => {
        onAddTodo(inputData);
    }

    return (
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
        </section>
    ); 
}