import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobForm from "./JobForm";
const UserInfo = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const formSubmission = (info) => {
    // console.log(info);
    axios
      .post(
        "http://dct-application-form.herokuapp.com/users/application-form",
        info
      )
      .then((response) => {
        const result = response.data;
        // console.log(result);
        if (result) {
          toast.success("sucessfully submitted!!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
        setIsSaved(true);
      })
      .catch((err) => {
        toast.error("sorry check your network!");
        alert(err.message);
      });
  };
  const toggleIsSaved = () => {
    setIsSaved(false);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid item container>
        <Grid item xs={false} sm={3} />
        <Grid item xs={12} sm={8}>
          <h2>Apply for Job</h2>
          <JobForm
            formSubmission={formSubmission}
            isSaved={isSaved}
            toggleIsSaved={toggleIsSaved}
          />
        </Grid>
        <Grid item xs={false} sm={3} />
      </Grid>
    </div>
  );
};
export default UserInfo;
