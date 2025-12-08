export const TodoList=({key, currTodo, index, handleDelButton})=>{
    return (
        <li>{currTodo}
                         <button onClick={() => handleDelButton(index)}>Del</button></li>
    );
}