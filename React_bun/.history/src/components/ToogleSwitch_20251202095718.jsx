import React,{useState} from "react";

import { ImSwitch } from "react-icons/im";

export const ToogleSwitch = () => {
    const [on, setOn] = useState (false);

    const handleChange = (event) => {
        setOn(!on); // false to true , true to false for understanding go l to r
    }
    return(
        <>
        <div>ToogleSwitch</div>
       
        <label className="toogle">
            <input type="checkbox" 
            onChange = {handleChange}
            />
            <span className="slider">{on ? "ON" : "OFF"}</span>
        </label>
        </>
    )
}