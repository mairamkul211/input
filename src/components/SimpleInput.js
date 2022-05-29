import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const inputNameRef = useRef();
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if(!enteredName.includes('@')) {
      setIsValid(true)
      setEnteredNameTouched(true)
    }
    console.log(enteredName);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
    if (enteredName.trim() === "") {
      setIsValid(true);
      return;
    }
    if(!enteredName.includes('@')) {
      setIsValid(true)
      return
    }
    setEnteredNameTouched(false)
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true)
    if (enteredName.trim() === "" || !enteredName.includes('@')) {
      setIsValid(true);
      return;
    }
    setIsValid(false)
    const enteredRefName = inputNameRef.current.value;
    // fetch request to server
    console.log(enteredRefName);
  };
  const nameInputIsValid = isValid && enteredNameTouched
  const nameInputClasses =  nameInputIsValid ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;