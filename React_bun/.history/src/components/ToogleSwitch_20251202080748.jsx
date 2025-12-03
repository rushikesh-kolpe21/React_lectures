import React,{useState} from "react";

export const ToogleSwitch = () => {
    const [on, setOn] = useState (false);
    return(
        <>
        <div>ToogleSwitch</div>
        // creating a toogle switch
        <label className="toogle">
            <input type="checkbox" 
            checked= {on}
            />
            <span className="slider"></span>
        </label>
        </>
    )
}