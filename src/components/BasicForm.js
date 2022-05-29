import { useState } from "react";
// import 'index.css'

const BasicForm = (props) => {
  const [valueName, setValueName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emile, setEmile] = useState('')
  const [valueNameTouched, setValueNameTouched] = useState(false)
  const [lastNameTouched, setLastNameTouched] = useState(false)
  const [emileTouched, setEmileTouched] = useState(false)

  const valueNameIsValid = valueName.trim() !== '' && valueName.includes('@')
  const valueInputIsInValid = !valueNameIsValid && valueNameTouched

  const lastNameIsValid = lastName.trim() !== '' && lastName.includes('@')
  const lastInputIsValid = !lastNameIsValid && lastNameTouched
  
  const emileIsValid = emile.trim() !== '' && emile.includes('@')
  const emileInputIsValid = !emileIsValid && emileTouched

  const valueInputChangeHandler = (event) => {
    setValueName(event.target.value)
  }

  const lastNameInputChangeHandler = (event) => {
    setLastName(event.target.value)
  }

  const emileInputChangeHandler = (event) => {
    setEmile(event.target.value)
  }
  
  const valueInputBlurHandler = () => {
    setValueNameTouched(true)
  }

  const lastInputBlurHandler = () => {
    setLastNameTouched(true)
  }

  const emileInputBlurHandler = () => {
    setEmileTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    setValueNameTouched(true)
    setLastNameTouched(true)
    setEmileTouched(true)
    if (valueName.trim() === ""  || valueName.includes('@')) {
      setValueNameTouched(true)
      return
    }
    setValueNameTouched(false)
    setLastNameTouched(false)
    setEmileTouched(false)
  }
   
  const inputClasses =  valueInputIsInValid ? 'form-control invalid' : 'form-control' 
  const lastClasses =  lastInputIsValid ? 'form-control invalid' : 'form-control'
  const emileClasses = emileInputIsValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <div className={inputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={valueName} onChange={valueInputChangeHandler} onBlur={valueInputBlurHandler}/>
        </div>
        <div className={lastClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameInputChangeHandler} onBlur={lastInputBlurHandler}/>
        </div>
      </div>
      <div className={emileClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emile} onChange={emileInputChangeHandler} onBlur={emileInputBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
