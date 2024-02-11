import React from "react";
import { useNavigate } from "react-router-dom";

const FamilyMemberCard = ({ member }) => {
  //this is the card that displays each member of the family.
  const navigate = useNavigate();
  return (
    // navigating to venue page with member's detail
    <div
      onClick={() => {
        navigate(`familymember/${member.name}/editVenue`, {
          state: { url: member },
        });
      }}>
      <h4>Name: {member.name}</h4>
      <h4>ITS Number: {member.ITSNumber}</h4>
      <h4>HOF: {member.HOFNumber}</h4>
      <h4>Age: {member.age}</h4>
      <h4>Gender: {member.gender}</h4>
      <h4>Chair: {member.chair}</h4>
      <h4>Dinner: {member.dinner}</h4>
      <h4>Tea with Sugar: {member.tea_without_sugar}</h4>
      <h4>With Child: {member.with_child}</h4>
    </div>
  );
};

export default FamilyMemberCard;
