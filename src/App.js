import { useState } from 'react'
import Form from './components/Form'
import './App.css';

const initialBand = {
  name: "",
  email: "",
  role: ""
};

function App() {
  const [band, setBand] = useState(initialBand)

  const updateForm = () => {
    console.log("update")
  }
  
  const submitForm = () => {
    console.log("submit")
  }

  return (
    <div className="App">
      <h1>Band Builder</h1>
      <Form
        band={band}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
