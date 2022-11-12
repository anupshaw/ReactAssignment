import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  console.log(action);
  if (action.type === "User_Input") {
    return { val: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "User_Blur") {
    return { val: state.val, isValid: state.val.includes("@") };
  }
  return { val: "", isValid: "false" };
};


const passwordReducer = (state, action) => {
  console.log(action);
  if (action.type === "User_Input") {
    return { val: action.val, isValid: action.val.trim().length > 6};
  }

  if (action.type === "User_Blur") {
    return { val: state.val, isValid: state.val.trim().length > 6 };
  }
  return { val: "", isValid: "false" };
};


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailstate, dispatch] = useReducer(emailReducer, {
    val: "",
    isValid: "false",
  });


  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    val: "",
    isValid: "false",
  });

  useEffect(() => {
    console.log("Effect Running");

    return () => {
      console.log("Effect Cleanup");
    };
  }, []);

  const emailChangeHandler = (event) => {
    dispatch({ type: "User_Input", val: event.target.value });

    setFormIsValid(emailstate.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "User_Input", val: event.target.value });

    setFormIsValid(emailstate.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatch({ type: "User_Blur" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "User_Blur" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailstate.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailstate.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailstate.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
