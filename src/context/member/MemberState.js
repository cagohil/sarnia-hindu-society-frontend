import { useState } from "react";
import { toast } from "react-toastify";
import memberContext from "./MemberContext";

const MemberState = (props) => {
  const host = "https://sarnia.vercel.app";

  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get all Members
  const getMember = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/members/fetchallmembers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch members");
      const json = await response.json();
      setMember(json);
    } catch (error) {
      console.error("Error fetching members:", error);
      toast.error("Failed to fetch members");
    } finally {
      setLoading(false);
    }
  };

  // Add a Member
  const addMember = async (name, designation) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/members/addmember`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ name, designation }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add member");
      }

      const newMember = await response.json();
      setMember((prevMembers) => [...prevMembers, newMember]);
      toast.success("Member added successfully!");
    } catch (error) {
      console.error("Error adding member:", error);
      toast.error(error.message || "Failed to add member");
    } finally {
      setLoading(false);
    }
  };

  // Edit a Member
  const editMember = async (id, name, designation) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/members/updatemember/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
        body: JSON.stringify({ name, designation }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update member");
      }

      // Get the updated member data from the response
      const responseData = await response.json();
      
      // Check the structure of the response
      console.log("API Response:", responseData);
      
      // Create a proper updated member object regardless of API response structure
      const updatedMember = {
        _id: id,  // Make sure we preserve the original ID
        name: name,
        designation: designation,
        // If the API returns any other fields, we can spread them here
        ...(responseData && typeof responseData === 'object' ? responseData : {})
      };
      
      // Update the state with our constructed member object
      setMember((prevMembers) =>
        prevMembers.map((mem) => (mem._id === id ? updatedMember : mem))
      );
      
      toast.success("Member updated successfully!");
    } catch (error) {
      console.error("Error updating member:", error);
      toast.error(error.message || "Failed to update member");
    } finally {
      setLoading(false);
    }
  };

  // Delete a Member
  const deleteMember = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${host}/api/members/deletemember/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          adminToken: localStorage.getItem("adminToken"),
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete member");
      }

      setMember((prevMembers) => prevMembers.filter((member) => member._id !== id));
      toast.success("Member deleted successfully!");
    } catch (error) {
      console.error("Error deleting member:", error);
      toast.error(error.message || "Failed to delete member");
    } finally {
      setLoading(false);
    }
  };

  return (
    <memberContext.Provider value={{ member, getMember, addMember, editMember, deleteMember, loading }}>
      {props.children}
    </memberContext.Provider>
  );
};

export default MemberState;