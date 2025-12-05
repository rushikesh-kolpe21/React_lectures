export const Todo = ()=> {
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
                    />
                    <button type="submit">Add Task</button>
                </div>
            </form>
           </section>
        </section>
    )
}