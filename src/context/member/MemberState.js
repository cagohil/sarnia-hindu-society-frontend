import { useState } from "react";
import MemberContext from "./MemberContext";

const MemberState = (props) => {
  const host = "https://sarnia.vercel.app";

  const memberList = [];
  const [member, setMember] = useState(memberList);


    //Get all Member
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



  //Add a Member
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



  //Delete a Member
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
