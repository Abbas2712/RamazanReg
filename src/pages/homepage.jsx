import React, { useState, useEffect } from "react";
import familyMembersApi from "../routes/familyMembersApi";
import { useNavigate } from "react-router-dom";
import HomeStyles from '../styles/homePage.module.css';

function HomePage() {
  const navigate = useNavigate()
  const [familyMemberLists, setFamilyMemberLists] = useState([]);

  useEffect(() => {
    // call get all familyMembersApi here
    familyMembersApi(setFamilyMemberLists);
  }, []);

  return (
    <div className={HomeStyles.homePageContainer}>
      <h3 className={HomeStyles.pageTitle}>Ramazanul Moazzam Registration</h3>
      <section id="family-members" className={HomeStyles.familyTable}>
        {/* <h2>Family Members: </h2> */}
        <div className={HomeStyles.tableWrapper}>

          {familyMemberLists === null? 
          <h1>Error occured while loading family list. Try again!</h1> : 
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ITS Number</th>
                <th>HOF</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Venue</th>
                <th>Chair</th>
                <th>Dinner</th>
                <th>Tea with Sugar</th>
                <th>With Child</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {familyMemberLists.map((member, index)=>(
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.ITSNumber}</td>
                  <td>{member.ITSNumber}</td>
                  <td>{member.age}</td>
                  <td>{member.gender}</td>
                  <td>{member.Venue !==null? member.Venue:"N/A"}</td>
                  <td>{member.chair ? 'Yes': 'No'}</td>
                  <td>{member.dinner ? 'Yes': 'No'}</td>
                  <td>{member.tea_without_sugar ? 'Yes': 'No'}</td>
                  <td>{member.with_child ? 'Yes': 'No'}</td>
                  <td><button className={HomeStyles.editButton} onClick={() => navigate(`/familyVenues/${member.id}`,{state: member})}> Edit form</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        </div>
      </section>
    </div>
  );
}
export default HomePage;
