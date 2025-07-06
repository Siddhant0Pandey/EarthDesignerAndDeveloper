import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName:
    "Baraudhoran Health Post, Old Age Home & Ward Office Construction",
  projectCode: "NCB/BRM/WORKS/02/2080-81",
  client: "Bishnu Rural Municipality, Simara, Sarlahi",
  contractor: "Earth Designers and Developers Pvt. Ltd.",
  contractDate: "12 May 2024 (2081/01/30)",
  deadline: "13 January 2026 (2083/09/29)",
  contractValue: "NRs 6,58,43,984.68",
  contractValueWords:
    "Six Crore Fifty Eight Lakh Forty Three Thousand Nine Hundred Eighty Four Rupees and Sixty Eight Paisa (Including Taxes)",
  overview:
    "This project involves the construction of the Baraudhoran Health Post, Old Age Home, and multiple ward office buildings in Bishnu Rural Municipality, ensuring proper infrastructure for healthcare, elderly care, and administrative services.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Complete all construction works and correct any defects.",
    },
    {
      role: "Employer",
      duty: "Provide payments as per agreed terms on project milestones.",
    },
  ],
  signatories: {
    contractor: "Navin Gautam (Earth Designers and Developers Pvt. Ltd.)",
    employer:
      "Sanjib Sapkota (Chief Administrative Officer, Bishnu Rural Municipality)",
  },
};

function Project5() {
  return (
    <div className="container mt-4">
      <h1 className="text-[#005792]">{projectData.projectName}</h1>
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
        This project marks a significant improvement in local infrastructure,
        ensuring modern healthcare facilities, elderly care centers, and
        administrative buildings for the municipality’s efficient operation.
      </p>
    </div>
  );
}

export default Project5;
