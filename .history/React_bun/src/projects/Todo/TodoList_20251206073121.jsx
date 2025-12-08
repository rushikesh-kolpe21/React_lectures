export const TodoList=()=>{
    return (
        <li key={index}>{currTodo}
                         <button onClick={() => handleDelButton(index)}>Del</button></li>
    );
}