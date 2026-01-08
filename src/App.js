
import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("")

  const [lastName, setLastName] = useState("")

 const [submitted, setSubmitted] = useState(false);



  const handleSumbit = (event) => {

    event.preventDefault();

    // alert(`Full Name: ${firstName} ${lastName}`)

      if (firstName.trim() === '' || lastName.trim() === '') {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

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

      <button type='submit'>
        submit
      </button>

      <br></br>
{submitName && (
    <label >
          Full Name: {firstName} {lastName}
        </label>
)}
      
    
    </form>

    </div>
  );
}

export default App;
