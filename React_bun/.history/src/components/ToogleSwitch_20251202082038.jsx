import React,{useState} from "react";

export const ToogleSwitch = () => {
    const [on, setOn] = useState (false);

    const handleChange = (event) => {
        setOn (event.target.checked);
    }
    return(
        <>
        <div>ToogleSwitch</div>
       
        <label className="toogle">
            <input type="checkbox" 
            // checked= {on}
            onChange = {handleChange}
            />
            <span className="slider">{on ? "ON" : "OFF"}</span>
        </label>
        </>
    )
}