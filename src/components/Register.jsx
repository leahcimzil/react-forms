import React from 'react';

const Register = ({
    handleFullnameInput,
    handleEmailInput,
    handlePasswordInput,
    handleSubmit,
    values,
    submitted,
    valid
}) => 

{


  return (
    <div>
          <form id='register-form' onSubmit={handleSubmit}>
              <h2>Sign up</h2>
            {submitted && valid ? <div className="success-message">Hurray!!! your form has been submitted!</div> : null}
              
              <label htmlFor="name">Fullname</label>
              <input
                  id='fullname'
                  onChange={handleFullnameInput}
                  value={values.fullname}
                  type="text"
                  name="fName"
                  className='form-field'  
                  autoComplete='on'
              />
              
             {submitted && !(values.fullname) ? <div className="name error">Please enter a name</div> : null} 
             
              <label htmlFor='email'>Email</label>
              <input 
              type="email" 
              id="email" 
              name="email" 
              onChange={handleEmailInput}
              value={values.email}
              autoComplete='on'
               />

              {submitted && !values.email ? 
              <div className="email error">Please enter a valid email</div> 
              : null
              }

              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              name="password" 
              onChange={handlePasswordInput}
              value={values.password}
              autoComplete='on'
               />
              {submitted && !values.password ? <div className="password error">Please enter a valid password</div> : null}

              <button>Sign Up</button>
          </form>
    </div>
  )
}

export default Register