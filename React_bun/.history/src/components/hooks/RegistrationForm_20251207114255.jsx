export const RegistrationForm = () => {
   return (
    <div>
      <h2>Registration Form</h2>

      <form>

        <div>
          <label>
            First Name:
            <input type="text" placeholder="Enter first name" />
          </label>
        </div>

        <div>
          <label>
            Last Name:
            <input type="text" placeholder="Enter last name" />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input type="email" placeholder="Enter email" />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input type="password" placeholder="Enter password" />
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input type="tel" placeholder="Enter phone number" />
          </label>
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  );
  }