
import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("")

  const [lastName, setLastName] = useState("")

   const [fullName, setFullName] = useState('');



  const handleSumbit = (event) => {

    event.preventDefault();

    // alert(`Full Name: ${firstName} ${lastName}`)

      if (firstName.trim() === '' || lastName.trim() === '') {
      setFullName("");
      return;
    }

    setFullName(`${firstName} ${lastName}`);

  }
  return (
    <div className="display-name">

    <h1>Full Name Display</h1>
   
    <form onSubmit={handleSumbit}>
      <label>First Name:</label>
      <input type='text' id='fname' name='fname' value={firstName}   onChange={(event) => setFirstName(event.target.value)} required></input>
      <br></br>

      <label>Last Name:</label>
      <input type='text' id='lname' name='lname' value={lastName} onChange={(event)=> setLastName(event.target.value)} required></input>
      <br></br>

      <button >
        submit
      </button>

      <br></br>

      
    
    </form>

    {fullName && (
    <label >
          Full Name: {fullName}
        </label>
)}

    </div>
  );
}

export default App;
