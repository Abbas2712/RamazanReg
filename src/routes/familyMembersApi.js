import axios from "axios";

export default function familyMembersApi(setFamilyMemberLists){
    // getting bearer token from local storage
    const bearer_token = localStorage.getItem("bearer_token");
    if (bearer_token) {
      console.log("Bearer Token : ", bearer_token);
      axios
        .get(
          "https://sb-backend24-stg-8a9d723043e6.herokuapp.com/api/family-members/",
          {
            headers: {
              Authorization: 'Bearer ' + bearer_token,
            },
          }
        )
        .then((res) => {
          setFamilyMemberLists(res.data);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } else {
      console.error("No token found!");
    }
  };