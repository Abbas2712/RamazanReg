import axios from "axios";

export default function loginPost(loginDetails, navigate){
    axios
      .post(
        "https://sb-backend24-stg-8a9d723043e6.herokuapp.com/api/login/",
        loginDetails
      )
      .then((res) => {
        //setting token in local storage and navigate to home page on successful authentication
        localStorage.setItem("bearer_token", res.data.access_token);
        navigate('/homepage')
      })
      .catch((err) => console.log(err));
  };