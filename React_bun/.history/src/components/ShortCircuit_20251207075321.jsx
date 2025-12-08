import { useState } from "react";


export const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short-circuit */}
      {isLoggedIn && <p>You are logged in!</p>}

      {/* Another example of short-circuit */}
      {user || <p>No user found</p>}
      {user && <p>User: {user}</p>}

      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>

        <button onClick={() => setUser("Rushikesh")}>
          Set User
        </button>

        <button onClick={() => setUser("")}>
          Clear User
        </button>
      </div>
    </section>
  );
};


