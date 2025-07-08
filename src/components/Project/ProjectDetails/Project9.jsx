import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName:
    "Construction of Floor Extension of Two Buildings and Other Civil Works",
  projectCode: "APF/NCB/WORKS/081/082-001",
  client: "Armed Police Force Nepal Headquarters, Halchowk, Kathmandu",
  contractor: "Earth/Victoria J/V, Kathmandu",
  contractDate: "5th March 2025 (2081-11-21)",
  deadline: "20th Asadh 2082",
  contractValue: "NRs. 2,90,79,716.65",
  contractValueWords:
    "Two Crore Ninety Lakh Seventy-Nine Thousand Seven Hundred Sixteen Rupees and Sixty-Five Paisa (Including VAT and Provisional Sum)",
  overview:
    "This project involves the construction of floor extensions for two buildings and associated civil works at the Armed Police Force Headquarters in Halchowk. The contractor is responsible for executing all works and addressing any defects in accordance with the contract.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Execute the construction and remedy any defects as per contract.",
    },
    {
      role: "Employer",
      duty: "Ensure payments and oversight in accordance with contract terms.",
    },
  ],
  signatories: {
    contractor: "DIGP Er. Sandeep Thapa (Earth/Victoria J/V, Kathmandu)",
    employer:
      "Armed Police Force Nepal Headquarters, Halchowk, represented by designated officials",
  },
};

function Project9() {
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

      <h3 className="mt-4">Know More!</h3>
      <p>
        The extension of floors for two buildings and accompanying civil works
        are part of a strategic infrastructure upgrade by the Armed Police Force
        Nepal Headquarters. This initiative enhances operational capacity and
        service delivery within the organization, ensuring a secure and modern
        facility environment.
      </p>
    </div>
  );
}

export default Project9;
