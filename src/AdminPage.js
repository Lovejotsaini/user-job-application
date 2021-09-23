import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import JobTitleInfo from "./JobTitleInfo";
const AdminPage = (props) => {
  const Title = [
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "FULL Stack Developer",
  ];
  const { userData } = props;
  const [developer, setDeveloper] = useState([]);
  const [Jobheader, setJobHeader] = useState(Title[0]);

  // To show the Front-End Developers at inital rendering
  useEffect(() => {
    const result = userData.filter((i) => {
      return i.jobTitle === "Front-End Developer";
    });
    setDeveloper(result);
  }, [userData]);

  // After clicking on JobTitle button
  const handleClick = (index) => {
    setJobHeader(Title[index]);
    const result = userData.filter((i) => {
      return i.jobTitle === Title[index];
    });
    setDeveloper(result);
  };
  return (
    <div style={{ paddingLeft: "50px" }}>
      <h1>Admin Dashboard</h1>
      {Title.map((job, i) => {
        return (
          <Button
            key={i}
            onClick={() => handleClick(i)}
            variant="outline-primary"
          >
            {job}
          </Button>
        );
      })}

      {developer && (
        <JobTitleInfo developer={developer} Jobheader={Jobheader} />
      )}
    </div>
  );
};
export default AdminPage;
