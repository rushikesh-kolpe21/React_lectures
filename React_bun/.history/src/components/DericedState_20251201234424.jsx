const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 34 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 19 },
];

export const DericedState = () => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user)=>{
                    <h2>User name : {user.name} and {user.age} year old</h2>
                })}
            </ul>
        </div>
    )
}