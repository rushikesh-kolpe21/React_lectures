
export const ReactUseEffect = () => {
    const [count, setCount] = useState(0);
  return (
     <div>
        <h1>React UseEffect Component</h1>
        <p>
            count:<span>{count}</span>
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <p>
            Name: <span>John Doe</span>
        </p>

        <label >
            <input 
            type="text" placeholder="Enter your name"
            required
             />
        </label>
     </div>
    )
}