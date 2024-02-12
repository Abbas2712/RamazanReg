import axios from 'axios'

function updateUserApi({ITSNumber,updateUser}) {
    axios.put(`https://sb-backend24-stg-8a9d723043e6.herokuapp.com/api/family-members/${ITSNumber}`,updateUser,{headers:{
        Authorization:  `Bearer ${localStorage.getItem("bearer_token")}`,
      }})
      .then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
    })
    
};

export default updateUserApi