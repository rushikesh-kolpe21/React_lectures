export const TodoList=({currTodo, index, handleDelButton})=>{
    return (
        <li key={index}>{currTodo}
                         <button onClick={() => handleDelButton(index)}>Del</button></li>
    );
}