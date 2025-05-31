import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName: "Dasdhunga Narayani Integrated Development Project (Building)",
  projectCode: "UDBO/HETAUDA/WORKS/2078-79/01",
  client: "Urban Development and Building Office, Hetauda, Makawanpur",
  contractor: "Earth Designers and Developers Pvt. Ltd.",
  contractDate: "9th Ashar 2078 B.S.",
  deadline: "As per contractual terms and completion schedule",
  contractValue: "NRs 12,803,066.21",
  contractValueWords:
    "One Crore Twenty Eight Lakh Three Thousand Sixty Six Rupees and Twenty One Paisa (including VAT and PS)",
  overview:
    "This project focuses on the execution and completion of the Dasdhunga Narayani Integrated Development Building, ensuring infrastructure improvement and quality construction as per government standards.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Execute construction works and remedy any defects.",
    },
    {
      role: "Employer",
      duty: "Ensure timely payments and oversee compliance with contract terms.",
    },
  ],
  signatories: {
    contractor: "Navin Gautam (Earth Designers and Developers Pvt. Ltd.)",
    employer:
      "Dipendra Thaj (Urban Development and Building Office, Hetauda, Makawanpur)",
  },
};

function Project7() {
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
        This project represents a significant investment in infrastructure for
        Dasdhunga, contributing to integrated development and sustainable growth
        in the region.
      </p>
    </div>
  );
}

export default Project7;
