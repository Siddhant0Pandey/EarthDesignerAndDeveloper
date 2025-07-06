import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName: "Construction of the Parliamentary Party Office",
  projectCode: "PAS/NCB/WORKS/2078/079/03",
  client:
    "Provincial Assembly Secretariat, Bagmati Province, Hetauda, Makwanpur",
  contractor: "Earth Designers and Developers Pvt. Ltd.",
  contractDate: "23rd May 2022 (09 Jestha 2079)",
  deadline: "08th Ashar 2080",
  contractValue: "NRs 208,44,246.68",
  contractValueWords:
    "Two Hundred Eight Lakhs Forty-Four Thousand Two Hundred Forty-Six Rupees and Sixty-Eight Paisa (Including VAT, Except Provisional Sum)",
  overview:
    "This project involves the construction of the Parliamentary Party Office in Hetauda, ensuring high-quality execution and defect remedy in coordination with the Provincial Assembly Secretariat.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Complete the construction and address any defects in accordance with the contractual terms.",
    },
    {
      role: "Employer",
      duty: "Ensure timely payments and oversee proper execution as per contract.",
    },
  ],
  signatories: {
    contractor: "Navin Gautam (Earth Designers and Developers Pvt. Ltd.)",
    employer:
      "Krishna Hari Khadka (Provincial Assembly Secretariat, Bagmati Province)",
  },
};

function Project8() {
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
        The construction of the Parliamentary Party Office is a crucial
        development project for Bagmati Province, aiming to establish a modern
        facility that supports legislative activities and governance.
      </p>
    </div>
  );
}

export default Project8;
