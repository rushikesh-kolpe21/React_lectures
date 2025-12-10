import { useEffect, useState } from "react";

export const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // order matters! keep hooks in hthe same order across render

    // for updating title
    useEffect(()=>{
        document.title = `count ${count}`
    },[count]);

    useEffect(() => {
        console.log("Count has changed:", name);
    }, [name]); // Effect runs only when 'count' changes

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