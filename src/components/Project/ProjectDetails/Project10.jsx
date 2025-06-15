import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName:
    "Construction of Regional Office Building, Morang, including Sanitary, Electrical & Site Development Works",
  projectCode: "APF/NCB/WORKS/080/081-04",
  client: "Armed Police Force, Nepal",
  contractor: "Jay Kalika/Pathibhara J/V, Itahari",
  contractDate: "2079/12/24 B.S.",
  deadline: "2081/06/23 B.S.",
  contractValue: "NRs. 8,09,46,830.39",
  contractValueWords:
    "Eight Crore Nine Lakh Forty-Six Thousand Eight Hundred Thirty Rupees and Thirty-Nine Paisa (Including VAT and Provisional Sum)",
  overview:
    "The project involves the construction of a regional office building in Morang for the Armed Police Force of Nepal. It includes civil construction works, electrical installations, sanitary works, and site development. The contractor is responsible for timely execution and remedying any defects during the liability period.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Execute all works and remedy defects in accordance with the contract terms.",
    },
    {
      role: "Employer",
      duty: "Provide payments and oversee project execution as per the agreement.",
    },
  ],
  signatories: {
    contractor:
      "Jay Kalika/Pathibhara J/V, Itahari (Authorized Representative)",
    employer:
      "Armed Police Force, Nepal, represented by the Regional Office, Morang",
  },
};

function Project10() {
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

      <h3 className="mt-4">Know More!</h3>
      <p>
        This project is part of the Armed Police Force Nepal’s initiative to
        enhance regional infrastructure and operational readiness in Morang. It
        reflects the institution’s commitment to modernizing its facilities and
        improving service delivery in the eastern region.
      </p>
    </div>
  );
}

export default Project10;
