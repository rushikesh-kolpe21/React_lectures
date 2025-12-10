import { useState } from "react"

export const Cleanup = ()=> {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>My subscribers on Youtube</p>
            <div>{count}</div>

            <h3>Subscribers <br/> Realtime Counter</h3>
        </div>
    )
}