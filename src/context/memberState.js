import { useState } from "react";
import MemberContext from "./memberContext";

const MemberState = (props) => {
  // const host = "http://localhost:8000";
  // const host = "http://3.15.117.216:8000";
  const host = "https://sarniahindusociety.org:8000";


  const meberList = [];

  const [member, setMember] = useState(meberList);



    //Get all Image
    const getMember = async () => {
      //API Call
      const response = await fetch(`${host}/api/members/fetchallmembers`, {
        method: "GET",
        headers: {
          "Content-Type": "multipart/form-data"
        },
      });
      const json = await response.json()
    console.log(json)
    setMember(json)
    };
  


  //Add a Images
  const addMember = async (meberImage, name, designation, about) => {
    //API Call
    const response = await fetch(`${host}/api/members/addmember`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        adminToken:localStorage.getItem('adminToken'),
      },
      body: JSON.stringify({meberImage, name, designation, about}),
    });
    const members = await response.json();
    setMember(member.concat(members));
  };



  //Delete a Image
  const deleteMember = async(id) => {
    // API Call
    const response = await fetch(`${host}/api/members/deletemember/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "multipart/form-data",
        adminToken:localStorage.getItem('adminToken'),
      },
    });
    const json = response.json();
    console.log(json);

    const newMember = member.filter((members) => {
      return members._id !== id;
    });
    setMember(newMember);
  };



  return (
    <MemberContext.Provider value={{ member, getMember, addMember, deleteMember}}>
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberState;
