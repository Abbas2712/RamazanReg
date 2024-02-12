import React from 'react'

function VenueDropdown({setUpdateUser, venueDetailsList}) {
  return (
    <select
        name="venue"
        defaultValue={"default"}
        onChange={(e) =>
        setUpdateUser((prevData) => ({
            ...prevData,
            Venue: e.target.value,
        }))}>
          <option value={"default"} disabled> -- Select a Venue -- </option>
          {venueDetailsList.map((venue,index) => (
            <option key={index} value={venue.id}>{venue.name}</option>
          ))}
    </select>
  )
}

export default VenueDropdown