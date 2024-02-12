import axios from 'axios';
import React from 'react'

export default function allVenueApi(setVenueDetailsList) {
    const bearer_token = localStorage.getItem("bearer_token");
    axios.get(
            "https://sb-backend24-stg-8a9d723043e6.herokuapp.com/api/venues/",
            {
                headers: {
                    Authorization: "Bearer " + bearer_token,
                },
            }
        )
        .then((res) => {
            console.log(res.data);
            setVenueDetailsList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}
