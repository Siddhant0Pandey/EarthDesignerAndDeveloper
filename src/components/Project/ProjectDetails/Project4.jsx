import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName: "Rajdhani Hetauda Sahari Sadak",
  projectCode: "IDO/CHT/W/NCB/59/077-78",
  client: "Infrastructure Development Office, Chitwan",
  contractor: "Earth Designers and Developers Pvt. Ltd., Lalitpur-10",
  contractDate: "12th Chaitra 2077",
  deadline: "20th Ashadh 2078",
  contractValue: "NRs 1,39,51,552.74",
  contractValueWords:
    "One Crore Thirty Nine Lakhs Fifty One Thousand Five Hundred Fifty Two Rupees and Seventy Four Paisa (Including Taxes)",
  overview:
    "This project involves the construction of Rajdhani Hetauda Sahari Sadak under the approved package. The work includes full execution and rectification of defects in accordance with contractual obligations.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Carry out construction work and rectify any defects.",
    },
    {
      role: "Employer",
      duty: "Ensure timely payment upon project milestones and completion.",
    },
  ],
  signatories: {
    contractor: "Earth Designers and Developers Pvt. Ltd.",
    employer: "Infrastructure Development Office, Chitwan Representative",
  },
};

function Project4() {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">{projectData.projectName}</h1>
      <p className="text-muted">
        <strong>Project Code:</strong> {projectData.projectCode}
      </p>

      <div className="row mb-3">
        <div className="col-md-6">
          <p>
            <strong>Client:</strong> {projectData.client}
          </p>
          <p>
            <strong>Contractor:</strong> {projectData.contractor}
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <strong>Contract Date:</strong> {projectData.contractDate}
          </p>
          <p>
            <strong>Deadline:</strong> {projectData.deadline}
          </p>
        </div>
      </div>

      <p>
        <strong>Contract Value:</strong> {projectData.contractValue}
      </p>
      <p>
        <em>In Words: {projectData.contractValueWords}</em>
      </p>

      <h3 className="mt-4">Project Overview</h3>
      <p>{projectData.overview}</p>

      <h3 className="mt-4">Responsibilities</h3>
      <ul className="list-group">
        {projectData.responsibilities.map((item, i) => (
          <li key={i} className="list-group-item">
            <strong>{item.role}:</strong> {item.duty}
          </li>
        ))}
      </ul>

      <h3 className="mt-4">Signatories</h3>
      <p>
        <strong>Contractor Representative:</strong>{" "}
        {projectData.signatories.contractor}
      </p>
      <p>
        <strong>Employer Representative:</strong>{" "}
        {projectData.signatories.employer}
      </p>

      <p className="mt-4">
        This project is a key initiative to improve urban road connectivity and
        infrastructure in Hetauda, ensuring better mobility and accessibility
        for the region.
      </p>
    </div>
  );
}

export default Project4;
