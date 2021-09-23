import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./JobForm.css";

const title = [
  "Front-End Developer",
  "Node.js Developer",
  "MEAN Stack Developer",
  "FULL Stack Developer",
];
const JobForm = (props) => {
  const { isSaved, toggleIsSaved, formSubmission } = props;
  // useEffect(() => {
  //   if (isSaved) {
  //     toggleIsSaved();
  //   }
  // }, [toggleIsSaved, isSaved]);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    skills: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().required("Required"),
    jobTitle: Yup.string().required("Required"),
    experience: Yup.string().required("Required"),
    skills: Yup.string().required("Required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    // console.log("form data", values);
    formSubmission(values);
    onSubmitProps.resetForm();
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="Fullname">Fullname</label>
          <Field id="fullName" name="name" type="text" />
          <ErrorMessage name="name">
            {(errmsg) => <div style={{ color: "red" }}>{errmsg}</div>}
          </ErrorMessage>
          <hr />
          <label htmlFor="email">Email address</label>
          <Field id="email" name="email" type="email" />{" "}
          <ErrorMessage name="email">
            {(errmsg) => <div style={{ color: "red" }}>{errmsg}</div>}
          </ErrorMessage>
          <hr />
          <label htmlFor="phone">Contact Number</label>
          <Field id="phone" name="phone" type="text" />{" "}
          <ErrorMessage name="phone">
            {(errmsg) => <div style={{ color: "red" }}>{errmsg}</div>}
          </ErrorMessage>
          <hr />
          <label htmlFor="jobTitle">Applying for job</label>
          <Field as="select" id="jobTitle" name="jobTitle">
            <option value="">----Select----</option>
            {title.map((tit, i) => {
              return (
                <option value={tit} key={i}>
                  {tit}
                </option>
              );
            })}
          </Field>
          <ErrorMessage name="jobTitle">
            {(errmsg) => <div style={{ color: "red" }}>{errmsg}</div>}
          </ErrorMessage>
          <hr />
          <label htmlFor="experience">Experience</label>
          <Field
            id="experience"
            name="experience"
            type="text"
            placeholder="Experience(2 years 3 months)"
          />
          <ErrorMessage name="experience">
            {(errmsg) => <div style={{ color: "red" }}>{errmsg}</div>}
          </ErrorMessage>
          <hr />
          <label htmlFor="skills">Technical Skills</label>
          <Field as="textarea" id="skills" name="skills" />
          <ErrorMessage name="skills">
            {(errmsg) => <div style={{ color: "red" }}>{errmsg}</div>}
          </ErrorMessage>
          <hr />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default JobForm;
