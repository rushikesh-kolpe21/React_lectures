import { useState } from "react";

export const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const handleInputChange = (event) => {
        setName(event.target.value);
    };
  return (
     <div>
        <h1>React UseEffect Component</h1>
        <p>
            count:<span>{count}</span>
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <p>
            Name: <span>{name}</span>
            console.log(name)
        </p>

        <label >
            <input 
            type="text" placeholder="Enter your name"
            value={name} name="name"
            onChange={handleInputChange}
            required
             />
        </label>
     </div>
    )
}