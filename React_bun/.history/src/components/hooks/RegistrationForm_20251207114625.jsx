import React, { useState } from "react";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <div>
          <label>
            First Name:
            <input type="text" placeholder="Enter first name"
            name="firstName"  value={user.firstName}/>
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input type="text" placeholder="Enter last name"
             name="lastName"  value={user.lastName} />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input type="email" placeholder="Enter email" 
             name="email"  value={user.email}/>
          </label>
        </div>

        <div>
          <label>
            Password:
            <input type="password" placeholder="Enter password" 
             name="password"  value={user.password}/>
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input type="tel" placeholder="Enter phone number" 
             name="phoneNumber"  value={user.phoneNumber}/>
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
