import { useState } from "react";

export const UseState = () => {

    const [count, setCount] = useState(0)

    // handle increment btn
    const handleIncrementBtn=()=>{
        setCount(count+1);
    }

    // handle decrement btn
    const handleDecrementBtn = ()=>{
        if(count >=0){
            setCount(count-1);
        }
    }

    return (
     <div>
        <h2>UseState challenge</h2>

        <p> Count : <span>{count}</span></p>

        <div>
            <label htmlFor="">
                step:
                <input type="number" />
            </label>
        </div>

        <div>
            <button onClick={handleIncrementBtn}>INC</button>
            <button onClick={handleDecrementBtn}>DEC</button>
            <button onClick={()=>setCount(0)}>RESET</button>
        </div>
     </div>
    );
  }