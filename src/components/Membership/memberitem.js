import React from "react";

const MemberItem = ({ member, handleEdit, handleDelete }) => {
  return (
    <div className="col-sm-4 mb-3">
      <div style={{ boxShadow: "2px 2px 8px #666", width: "100%" }}>
        <div className="data inpageevent">
          <div style={{ color: "#690000", fontSize: "25px", fontWeight: "700" }}>
            <strong>{member.name}</strong>
          </div>
          <p>{member.designation}</p>
        </div>
        {localStorage.getItem("adminToken") && (
          <div className="btn-group w-100">
            <button className="btn btn-warning" onClick={() => handleEdit(member)}>
              <i className="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(member._id)}>
              <i className="fa-solid fa-trash-can"></i> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberItem;