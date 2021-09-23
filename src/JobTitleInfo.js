import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import UserDetail from "./UserDetail";

const JobTitleInfo = (props) => {
  const { developer, Jobheader } = props;
  // console.log(props);
  const [id, setId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDetails = (id) => {
    setId(id);
    setModalIsOpen(true);
  };
  const ToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleShortlist = (id) => {
    axios
      .put(
        `http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
        {
          status: "shortlisted",
        }
      )
      //   .then((response) => {
      //     const result = response.data;
      //     console.log(result);
      //   })
      .catch((err) => {
        alert(err.message);
      });
    toast.success("sucessfully shortlisted!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  const handleReject = (id) => {
    axios
      .put(
        `http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,
        {
          status: "rejected",
        }
      )
      //   .then((response) => {
      //     const result = response.data;
      //     // console.log(result);
      //   })
      .catch((err) => {
        alert(err.message);
      });
    toast.info("sucessfully Rejected!!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <br />
      <h1>{Jobheader}s</h1>
      <p>List of candidates applied for {Jobheader} job</p>
      <Table className="table  table-striped" responsive="xl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Technical Skills</th>
            <th>Experience</th>
            <th>Applied Date</th>
            <th>View Details</th>
            <th>Update Application Status</th>
          </tr>
        </thead>
        <tbody>
          {developer.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.skills}</td>
                <td>{user.experience}</td>
                <td>
                  {user.createdAt
                    .slice(0, user.createdAt.indexOf("T"))
                    .split("-")
                    .join("/")}
                </td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => {
                      handleDetails(user._id);
                    }}
                  >
                    View Details
                  </Button>
                </td>
                <td>
                  {user.status === "applied" ? (
                    <div>
                      <Button
                        variant="success"
                        onClick={() => {
                          handleShortlist(user._id);
                        }}
                      >
                        Shortlist
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleReject(user._id);
                        }}
                      >
                        Reject
                      </Button>
                    </div>
                  ) : user.status === "shortlisted" ? (
                    <Button variant="success">Shortlisted</Button>
                  ) : (
                    user.status === "rejected" && (
                      <Button variant="danger">Rejected</Button>
                    )
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {id && (
        <UserDetail
          id={id}
          modalIsOpen={modalIsOpen}
          ToggleModal={ToggleModal}
        />
      )}
    </div>
  );
};
export default JobTitleInfo;
