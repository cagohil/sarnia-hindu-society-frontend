import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddEditMember = ({ show, handleClose, isEdit, currentMember, handleSave }) => {
  const [memberData, setMemberData] = useState({
    name: "",
    designation: "",
  });

  useEffect(() => {
    if (isEdit && currentMember) {
      // Only extract the fields we need
      setMemberData({
        name: currentMember.name || "",
        designation: currentMember.designation || "",
      });
    } else {
      setMemberData({ name: "", designation: "" });
    }
  }, [isEdit, currentMember, show]); // Added show dependency to reset form when modal opens/closes

  const handleChange = (e) => {
    setMemberData({ ...memberData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validate form data
    if (!memberData.name.trim() || !memberData.designation.trim()) {
      alert("Please fill all fields");
      return;
    }
    
    // If editing, pass the ID along with the form data
    if (isEdit && currentMember) {
      handleSave({
        ...memberData,
        _id: currentMember._id
      });
    } else {
      handleSave(memberData);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Edit Member" : "Add Member"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <input
            type="text"
            name="name"
            value={memberData.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            name="designation"
            value={memberData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="form-control mb-2"
            required
          />
          <Button type="submit" variant="primary" className="w-100">
            {isEdit ? "Save Changes" : "Add Member"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddEditMember;