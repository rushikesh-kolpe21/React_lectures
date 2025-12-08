import { useState } from "react";

export const UseState = () => {

    const [count, setCount] = useState(0);

    const [step, setStep] = useState(1);

    // handle increment btn
    const handleIncrementBtn=()=>{
        if(count < 10){
            
            setCount(count+step);
        }
    }

    // handle decrement btn
    const handleDecrementBtn = ()=>{
        if(count > 0){
            setCount(count-step);
        }
    }

    // handle on change
    const handleOnChange = (event)=>{
        setStep(Number(event.target.value));
    }

    return (
     <div>
        <h2>UseState challenge</h2>

        <p> Count : <span>{count}</span></p>

        <div>
            <label >
                step:
                <input type="number"
                // value={step}
                onChange={handleOnChange} />
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