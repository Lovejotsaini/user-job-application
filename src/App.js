import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Route } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import AdminPage from "./AdminPage";
import JobApplication from "./JobApplication";
import Header from "./Header";
import Home from "./Home";

toast.configure();
Modal.setAppElement("#root");
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://dct-application-form.herokuapp.com/users/application-forms")
      .then((response) => {
        const result = response.data;
        // console.log(result);
        setData(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Route exact path="/" component={Home} />
      <Route exact path="/job-form" component={JobApplication} />
      <Route
        exact
        path="/dashboard"
        render={(props) => <AdminPage {...props} userData={data} />}
      />
    </Grid>
  );
};
export default App;
