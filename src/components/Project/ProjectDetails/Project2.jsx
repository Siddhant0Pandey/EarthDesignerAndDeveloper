import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projectData = {
  projectName: "Construction of Kachana-Building School, Itahari-04",
  projectCode: "ITR/NCB/50W/078/079",
  client: "Itahari Sub-Metropolitan City, Sunsari",
  contractor: "M/S Gyan Jyoti/Kshitiz/Earth-JV, Hetauda-6, Makwanpur",
  contractDate: "July 2022",
  deadline: "14th January 2024 (2080-Poush-29)",
  contractValue: "NRs 9,46,08,928.09",
  contractValueWords:
    "Nine Crore Forty-Six Lakh Eight Thousand Nine Hundred Twenty-Eight Rupees and Nine Paisa (including taxes)",
  overview:
    "The project focuses on the construction of the Kachana-Building School in Itahari-04, Sunsari. Awarded through a competitive bidding process, it includes full construction and defect correction, adhering to the contractual obligations set by the municipality.",
  responsibilities: [
    {
      role: "Contractor",
      duty: "Execute all construction work and remedy any defects.",
    },
    {
      role: "Employer",
      duty: "Pay as per the agreed terms during project milestones and final delivery.",
    },
  ],
  signatories: {
    contractor: "Gyan Jyoti/Kshitiz/Earth-JV",
    employer:
      "Ram Charitra Mehta (Chief Administrative Officer, Itahari Sub-Metropolitan City)",
  },
};

function Project2() {
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

      {/* Optional Status Section */}
      {/* <div className="alert alert-success mt-4" role="alert">
        <strong>Status:</strong> Ongoing
      </div> */}

      <p className="mt-4">
        The Construction of Kachana-Building School is a vital step toward
        enhancing educational infrastructure in Itahari-04, Sunsari. With a
        strong emphasis on quality, safety, and timely delivery, the project is
        expected to significantly improve the learning environment for students
        and contribute to the region’s overall socio-economic development. The
        collaboration between the local government and the executing joint
        venture underlines a commitment to sustainable and community-focused
        growth.
      </p>
    </div>
  );
}

export default Project2;
