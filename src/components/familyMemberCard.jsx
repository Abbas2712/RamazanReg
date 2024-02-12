import React from "react";
import { useNavigate } from "react-router-dom";

const FamilyMemberCard = ({ member}) => {
  //this is the card that displays each member of the family.
  const navigate = useNavigate();
  return (
    // navigating to venue page with member's detail
    <div
      className="card"
      onClick={() => navigate(`/familyVenues/${member.id}`,{state: member})}>

      <h4>Name: {member.name}</h4>
      <h4>ITS Number: {member.ITSNumber}</h4>
      <h4>HOF: {member.ITSNumber}</h4>
      <h4>Age: {member.age}</h4>
      <h4>Gender: {member.gender}</h4>
      <h4>Chair: {member.chair === true? 'Yes': 'No'}</h4>
      <h4>Dinner: {member.dinner === true? 'Yes': 'No'}</h4>
      <h4>Tea with Sugar: {member.tea_without_sugar === true? 'Yes': 'No'}</h4>
      <h4>With Child: {member.with_child === true? 'Yes': 'No'}</h4>
      {member.Venue !== null &&  <><h4> Venue At: {member.Venue}</h4></>}
    </div>
  );
};

export default FamilyMemberCard;
