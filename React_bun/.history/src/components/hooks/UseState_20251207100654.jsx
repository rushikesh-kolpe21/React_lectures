import { useState } from "react";

export const UseState = () => {

    const [count, setCount] = useState(0)

    // handle increment btn
    const handleIncrementBtn=()=>{
        setCount(count+1);
    }

    return (
     <div>
        <h2>UseState challenge</h2>

        <p> Count : <span>0</span></p>

        <div>
            <label htmlFor="">
                step:
                <input type="number" />
            </label>
        </div>

        <div>
            <button onClick={handleIncrementBtn}>INC</button>
            <button>DEC</button>
            <button>RESET</button>
        </div>
     </div>
    );
  }