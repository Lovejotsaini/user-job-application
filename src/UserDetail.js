import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minHeight: "40%",
    minWidth: "40%",
  },
};
const buttonStyle = {
  position: "absolute",
  right: "0",
  bottom: "0",
  color: "grey",
  backgroundColor: "light",
};
const crossStyle = {
  position: "absolute",
  right: "0",
  top: "0",
  color: "grey",
  border: "none",
  outline: "none",
};
const UserDetail = (props) => {
  const { id, modalIsOpen, ToggleModal } = props;
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(
          `http://dct-application-form.herokuapp.com/users/application-form/${id}`
        )
        .then((response) => {
          const result = response.data;
          setUserDetail(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [id]);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={ToggleModal}
        style={customStyles}
      >
        <h2>{userDetail.name} Profile</h2>
        <hr />
        <div>
          <h5>Contact number - {userDetail.phone}</h5>
          <h5>Email - {userDetail.email}</h5>
          <h5>Skills - {userDetail.skills}</h5>
          <h5>Experience - {userDetail.experience}</h5>
          <hr />
        </div>
        <button onClick={ToggleModal} style={crossStyle}>
          X
        </button>
        <button onClick={ToggleModal} style={buttonStyle}>
          Close
        </button>
      </Modal>
    </div>
  );
};
export default UserDetail;
