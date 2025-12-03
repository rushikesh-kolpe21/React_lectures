import { useState } from "react"



export const DericedState = () => {
    const [users, setUsers] = useState(
    [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 19 },
]);

console.log(users.length);
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((currUser, index)=>{
                    return(
                        <h2 key={index}>User name : {currUser.name} and {currUser.age} year old</h2>
                    )
                })}
            </ul>
        </div>
    )
}