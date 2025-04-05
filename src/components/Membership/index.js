import React, { useContext, useEffect, useState } from "react";
import MemberItem from "./MemberItem";
import AddEditMember from "./AddEditMember";
import memberContext from "../../context/member/MemberContext";
import deepa from "../../assets/images/deepa.png";
import Loader from "../Loader";

const Members = () => {
  const { member, getMember, addMember, editMember, deleteMember, loading } = useContext(memberContext);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  useEffect(() => {
    getMember();
  }, []);

  const handleSave = (data) => {
    if (isEdit && currentMember) {
      // Pass the ID directly instead of relying on currentMember in closure
      editMember(data._id, data.name, data.designation);
    } else {
      addMember(data.name, data.designation);
    }
    setShowModal(false);
  };

  const handleEdit = (member) => {
    setCurrentMember(member);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleAdd = () => {
    setCurrentMember(null);
    setIsEdit(false);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      deleteMember(id);
    }
  };

  return (
    <div style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>
      <div style={{ maxWidth: "1400px", margin: "auto" }}>
        <div className="container-fluid pl-0 pr-0 pt-3 pb-3">
          <div className="inpagecontent mb-3">
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "500px", margin: "auto" }}>
              <img src={deepa} style={{ width: "40px" }} alt="decorative" />
              <h1 className="headclass mb-0 mt-1 text-center">List of Board Members</h1>
              <img src={deepa} style={{ width: "40px" }} alt="decorative" />
            </div>
          </div>
          <div className="row">
            {loading && <Loader />}
            {!loading && member.length === 0 && (
              <div className="col-12 text-center">
                <p>No members found. Please check back later!</p>
              </div>
            )}
            {!loading &&
              member.length > 0 &&
              member.map((mem) => (
                <MemberItem
                  key={mem._id}
                  member={mem}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
          </div>
          {localStorage.getItem("adminToken") && (
            <div className="text-right mt-3">
              <button className="btn btn-primary" onClick={handleAdd}>
                Add Member
              </button>
            </div>
          )}
        </div>
      </div>
      <AddEditMember
        show={showModal}
        handleClose={() => setShowModal(false)}
        isEdit={isEdit}
        currentMember={currentMember}
        handleSave={handleSave}
      />
    </div>
  );
};

export default Members;