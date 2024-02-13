import { useNavigate } from "react-router-dom";
import styles from '../styles/global.module.css'
import loginStyles from '../styles/login.module.css'
import loginPost from "../routes/loginApi";
import React from "react";

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = React.useState({
    ITSNumber: "",
    password: "",
  });

  // init navigation hooks for routing and passing to login api
  const navigate = useNavigate()

  const handleSubmit = e => {
    // prevent reload
    e.preventDefault();

    // if all fields are empty
    if (loginDetails.ITSNumber === "" && loginDetails.password === "") {
      alert("Both fields are required.");
    } else if (loginDetails.ITSNumber !== "" && loginDetails.password === "") {
      alert("Please enter your Password.");
    } else if (
      loginDetails.ITSNumber === "" ||
      loginDetails.ITSNumber.length !== 8
    ) {
      alert("Your ITS number should be exactly 8 digits long.");
    } else {
      // submit the form here
      console.log(
        `Submitted with user name: ${loginDetails.ITSNumber} and password :${loginDetails.password}`
      );
      //  call login api function here
      loginPost(loginDetails,navigate);
    }
  };
  return (
    <div className={loginStyles.loginSection}>
      <div style={{display:"grid",justifyItems:"center"}}>
        <h1 className={styles.displayText}>Login</h1>
        <p style={{fontSize:'0.8em', lineHeight:'0.3em'}}>Enter Your Details</p>
      </div>
      <form action="Submit" method="post">
        <label htmlFor="" >ITS Number</label>
        <br />
        <input
          type="number"
          value={loginDetails.ITSNumber}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, ITSNumber: e.target.value })
          }
          placeholder="ITS Number"
        />{" "}
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          value={loginDetails.password}
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
          placeholder="password"
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
