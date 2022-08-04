import React, {useState} from 'react';
import './App.css';
import Register from './components/Register';

function App() {
  const [values, setValues] = useState({
    fullname:"",
    email:"",
    password:""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);



  const handleFullnameInput = (evt)=>{
    setValues({...values, fullname:evt.target.value});
    evt.target.value = ''
    // console.log(evt);
  }
 
  const handleEmailInput = (evt)=>{
    setValues({...values, email:evt.target.value})
  }
  
  const handlePasswordInput = (evt)=>{
    setValues({...values, password:evt.target.value})
  }

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    
    if(values.fullname && values.email && values.password){
      setValid(true);
      setSubmitted(true);
      console.log(values);
      setValues({...values, fullname:'', email: '',  password:''});
    }
    
    
    
 
}




  return (
    <div className="app">
      <Register
        handleFullnameInput={handleFullnameInput}
        handleEmailInput={handleEmailInput}
        handlePasswordInput={handlePasswordInput}
        handleSubmit={handleSubmit}
        values={values}
        submitted={submitted}
        valid = {valid}
      />
    </div>
  );
}

export default App;
