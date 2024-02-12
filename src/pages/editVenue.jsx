import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import allVenueApi from "../routes/allVenueApi";
import updateUserApi from "../routes/updateUserApi";
import VenueDropdown from "../components/venueDropdown";

function EditVenue() {
  // get data and destructre it from previous state
  const location = useLocation();
  const userData = location.state;

  const [venueDetailsList, setVenueDetailsList] = useState([]);
  const [updateUser, setUpdateUser ] = useState({Venue: 0, chair: false, dinner: false, tea_without_sugar: false, with_child: false});

  useEffect(() => {
    allVenueApi(setVenueDetailsList);
  }, []);

  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();

    // call the user Details Api Here
    updateUserApi(ITSNumber= userData.ITSNumber, updateUser)
  };

  return (
    <div>
      <form action="submit" method="post">
        <label htmlFor="name">Name:</label>
        <br />
        <input
          value={userData.name}
          type="text"
          name="name"
          id="name"
          disabled
        />
        <br />
        <label htmlFor="name">ITS Number:</label>
        <br />
        <input
          value={userData.ITSNumber}
          type="text"
          name="name"
          id="name"
          disabled
        />
        <br />
        <label htmlFor="name">HOF:</label>
        <br />
        <input
          value={userData.ITSNumber}
          type="text"
          name="name"
          id="name"
          disabled
        />
        <br />
        <label htmlFor="name">Age:</label>
        <br />
        <input
          value={userData.age}
          type="text"
          name="name"
          id="name"
          disabled
        />
        <br />
        <label htmlFor="name">Gender:</label>
        <br />
        <input
          value={userData.gender}
          type="text"
          name="name"
          id="name"
          disabled
        />
        <br />
        <label htmlFor="name">Venue:</label>
        <br />
        <VenueDropdown setUpdateUser={setUpdateUser} venueDetailsList={venueDetailsList}/>
        <br />
        <label htmlFor="chair">Chair:</label>
        <label>
          <input
            name="chair"
            value="true"
            type="radio"
            checked={userData.chair === true}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, chair: JSON.parse(e.target.value)}))}
          />
          Yes
        </label>
        <label>
          <input
            name="chair"
            value="false"
            type="radio"
            checked={userData.chair === false}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, chair: JSON.parse(e.target.value)}))}
          />
          No
        </label>
        <br />
        <label htmlFor="name">Dinner:</label>
        <label>
          <input
            name="dinner"
            value="true"
            type="radio"
            checked={userData.dinner === true}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, dinner: JSON.parse(e.target.value)}))}
          />
          Yes
        </label>
        <label>
          <input
            name="dinner"
            value="false"
            type="radio"
            checked={userData.dinner === false}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, dinner: JSON.parse(e.target.value)}))}
          />
          No
        </label>
        <br />
        <label htmlFor="name">Tea without Sugar:</label>
        <label>
          <input
            name="tea_without_sugar"
            value="true"
            type="radio"
            checked={userData.tea_without_sugar === true}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, tea_without_sugar: JSON.parse(e.target.value)}))}
          />
          Yes
        </label>
        <label>
          <input
            name="tea_with_sugar"
            value="false"
            type="radio"
            checked={userData.tea_without_sugar === false}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, tea_without_sugar: JSON.parse(e.target.value)}))}
          />
          No
        </label>
        <br />
        <label htmlFor="name">With Child:</label>
        <label>
          <input
            name="with_child"
            value="true"
            type="radio"
            checked={userData.with_child === true}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, with_child: JSON.parse(e.target.value)}))}
          />
          Yes
        </label>
        <label>
          <input
            name="with_child"
            value="false"
            type="radio"
            checked={userData.with_child === false}
            onChange={(e) => setUpdateUser(prevData=>({...prevData, with_child: JSON.parse(e.target.value)}))}
          />
          No
        </label>
        <br />
        <button onClick={handleSubmit} type="submit">
          Update Venue
        </button>
      </form>
    </div>
  );
}

export default EditVenue;
