import { useState } from "react";


export const ShortCircuitExample = () => {

    const [isLoggedIn, setLoggedIn] = useState(false); // state variable ko true or false ke value de ta he
    const [user, setUser] = useState("")

  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
    { isLoggedIn && <p>You are logged in!</p>}

      {/* Another example of short circuit evaluation */}
      {user || <p>user not found</p>}
      {user && <p>{user}is login user</p>}

      <div className="grid-three-cols">
        <button onClick={()=>setLoggedIn(!isLoggedIn)}>Toggle Login State</button> { /* this above only making true or false statement */}
        <button onClick={()=> setUser("rushi")}>Set User</button>
        <button onClick={()=> setUser("")} >Clear User</button>
      </div>
    </section>
  );
};


