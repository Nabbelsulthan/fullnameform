import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName.trim() === '' || lastName.trim() === '') {
      setFullName('');
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="display-name">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />

        <label>Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <p>Full Name: {fullName}</p>
      )}
    </div>
  );
}

export default App;
