import { useState } from "react"

export const DericedState = () => {
    const [users, setUsers] = useState(
    [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 19 },
    { id: 5, name: 'Diana', age: 21 },
]);

// Derive state : total number of users
    const userCount = users.length;

    // Derive state :  average age of users
    const averageAge = users.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;
 
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
            <h2>Total Users: {userCount}</h2>
            <h2>Average Age: {averageAge}</h2>
        </div>
    )
}


// 👉 Aisa data jo directly state se nikalta hai, jise alag se state banane ki zarurat nahi hoti.

// Tumhare pass ek original state hai:
// const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

// ✅ Sahi way:

// const total = numbers.reduce((a, b) => a + b, 0);