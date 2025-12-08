import { use, useState } from "react";


export const ShortCircuitExample = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    
  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
      <p>You are logged in!</p>

      {/* Another example of short circuit evaluation */}

      <div className="grid-three-cols">
        <button>Toggle Login State</button>
        <button>Set User</button>
        <button>Clear User</button>
      </div>
    </section>
  );
};


