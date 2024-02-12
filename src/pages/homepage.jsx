import React, { useEffect } from "react";
import { useState } from "react";
import familyMembersApi from "../routes/familyMembersApi";
import FamilyMemberCard from '../components/familyMemberCard'

function HomePage() {
  const [familyMemberLists, setFamilyMemberLists] = useState([]);

  useEffect(() => {
    // call get all familyMembersApi here
    familyMembersApi(setFamilyMemberLists);
  }, []);

  return (
    <div>
      <h1 className="text-center">Welcome Username</h1>
      <section id="family-members">
        <h2>Family Members: </h2>
        
        {familyMemberLists === null? <h1>Error occured while loading family list. Try again!</h1> : familyMemberLists.map((member, index)=>
            <FamilyMemberCard key={index} member={member}/>
        )}
      </section>
    </div>
  );
}
export default HomePage;
