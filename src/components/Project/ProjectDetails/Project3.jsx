import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName: "Construction of Administrative Building, Itahari-06, Sunsari",
  projectCode: "ITR/NCB/92W/077/078",
  client: "Itahari Sub-Metropolitan City, Sunsari",
  contractor: "Bright-Gyanjyoti-Earth JV, Koteshwor-32, Kathmandu",
  contractDate: "06 December 2021",
  deadline: "10th July 2023 (2080-03-25 BS)",
  contractValue: "NRs 9,18,24,364.70",
  contractValueWords:
    "Nine Crore Eighteen Lakhs Twenty Four Thousand Three Hundred Sixty Four Rupees and Paisa Seventy Only (Including Taxes)",
  overview:
    "This project involves the full construction of the Administrative Building in Itahari-06, ensuring adherence to contractual obligations and quality standards.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Execute the construction and rectify any defects.",
    },
    {
      role: "Employer",
      duty: "Ensure timely payments upon milestones and project completion.",
    },
  ],
  signatories: {
    contractor: "Bright-Gyanjyoti-Earth JV",
    employer:
      "Surya Prasad Subedi (Chief Administrative Officer, Itahari Sub-Metropolitan City)",
  },
};

function Project3() {
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
        This project marks a significant step in developing administrative
        infrastructure in Itahari-06, ensuring modern facilities that cater to
        local government operations and public services.
      </p>
    </div>
  );
}

export default Project3;
