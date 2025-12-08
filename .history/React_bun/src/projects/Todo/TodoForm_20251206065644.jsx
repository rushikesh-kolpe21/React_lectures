export const TodoForm = ({inputData, handleInputChange, handleFormSubmit}) => {
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