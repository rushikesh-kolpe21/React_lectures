import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {

    const [inputData, setInputData] = useState({}); // Initial empty state for input data"");

     // Handle input change
    const handleInputChange = (event)=>{
        const value = event.target.value;
        setInputData({id: value, content: value, checked: false});// inputData state ko new data (user ne jo type kiya) se update kar raha hai.
    };

    // Handle form submission
    const handleFormSubmit = ( event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        onAddTodo(inputData);
        setInputData(""); // Clear the input field after submission

    }

    //  // Handle button submit
    // const onBtnSubmit = (event) => {
    //      event.preventDefault();
    //     setInputData(""); // Clear the input field after submission
        
    // }


    return (
        <section>
             <form onSubmit={handleFormSubmit} >
                <div>
                    <input
                    type="text"
                    placeholder="Add your new todo"
                    value= {inputData.content || ""} // for give react control on input field and set value from state
                    onChange={handleInputChange}
                    />
                    <button  type="submit">Add Task</button>
                </div>
            </form>
        </section>
    ); 
}