import {useState} from "react";

export const Todo = ()=> {

    const [inputData, setInputData] = useState("");

    // Handle input change
    const handleInputChange = (event)=>{
        setInputData(event.target.value);// inputData state ko new data (user ne jo type kiya) se update kar raha hai.
    }
    return (
        <section>
           <header>
            <h1>Todo List</h1>
           </header>
           <section>
            <form >
                <div>
                    <input
                    type="text"
                    placeholder="Add your new todo"
                    value= {inputData} // for give react control on input field
                    onChange={handleInputChange}
                    />
                    <button type="submit">Add Task</button>
                </div>
            </form>
           </section>
        </section>
    )
}