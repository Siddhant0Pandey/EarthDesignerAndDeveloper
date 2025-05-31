import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName:
    "Construction of Additional Floor and Site Development Works of Research Centre at Kamane",
  projectCode: "MBAHS/WORKS/NCB/2077-78/01",
  client: "Madan Bhandari Academy of Health and Sciences",
  contractor: "Earth Designers and Developers Pvt. Ltd.",
  contractDate: "21st Asar 2078",
  deadline: "Project completion and defect correction as per agreement terms",
  contractValue: "NRs 12,628,992.21",
  contractValueWords:
    "One Crore Twenty Six Lakhs Twenty Eight Thousand Nine Hundred Ninety Two Paisa 21/100 Only (including VAT and Provision Sum)",
  overview:
    "This project involves the construction of an additional floor and site development works for the research center at Kamane, ensuring quality infrastructure for academic and health-related research activities.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Execute and complete construction works, including defect corrections.",
    },
    {
      role: "Employer",
      duty: "Ensure timely payments and oversee project execution.",
    },
  ],
  signatories: {
    contractor:
      "Navin Gautam (Managing Director, Earth Designers and Developers Pvt. Ltd.)",
    employer:
      "Rajesh Prasai (Registrar, Madan Bhandari Academy of Health and Sciences)",
  },
};

function Project6() {
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
        This project is a key initiative for expanding research capabilities and
        infrastructure at Kamane, ensuring modern facilities to support academic
        growth and development.
      </p>
    </div>
  );
}

export default Project6;
