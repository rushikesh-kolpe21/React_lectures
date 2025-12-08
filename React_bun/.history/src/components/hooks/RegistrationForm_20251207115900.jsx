import React, { useState } from "react";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

//   Handle form input changes
    const handleFormSubmit = (event) => {
        const { name, value } = event.target;
        setUser((prevData)=> ({...prevData, [name]: value})); // but why we use [] bracket because we want to dynamically update the value of the name property based on the input field that triggered the change event.
    };

  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <div>
          <label>
            First Name:
            <input type="text" placeholder="Enter first name"
            name="firstName"  value={user.firstName}
            onChange={handleFormSubmit}/>
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input type="text" placeholder="Enter last name"
             name="lastName"  value={user.lastName}
              onChange={handleFormSubmit} />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input type="email" placeholder="Enter email" 
             name="email"  value={user.email}
             onChange={handleFormSubmit}/>
          </label>
        </div>

        <div>
          <label>
            Password:
            <input type="password" placeholder="Enter password" 
             name="password"  value={user.password}
             onChange={handleFormSubmit}/>
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input type="tel" placeholder="Enter phone number" 
             name="phoneNumber"  value={user.phoneNumber}
             onChange={handleFormSubmit}/>
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
