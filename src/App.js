import { useState } from 'react'
import Form from './components/Form'
import Member from './components/Member'

const initialFormValues = {
  name: "Bob",
  email: "Bob@Bob.com",
  role: "Bass"
};

function App() {
  const [band, setBand] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  }
  
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newMember.name || !newMember.email || !newMember.role) return;

    setBand([newMember, ...band])
    console.log(band)
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Band Application</h1>

      <Form
        band={band}
        update={updateForm}
        submit={submitForm}
      />

      {band.map((member) => {
        return <Member key={member.id} details={member} />
      })}
    </div>
  );
}

export default App;
