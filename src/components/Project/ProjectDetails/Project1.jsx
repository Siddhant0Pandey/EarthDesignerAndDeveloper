import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const boqData = {
  projectName: "Construction of Modern Bus Park, Itahari-9, Sunsari",
  client: "Itahari Sub Metropolitan City",
  partners: [
    {
      name: "Earth Designers and Developers Pvt. Ltd.",
      contact: "Navin Gautam - navingautam44@gmail.com",
    },
    {
      name: "Shreeman Construction",
      contact: "Pampha Bartaula - pamphabartaula1990@gmail.com",
    },
    {
      name: "Hamro Katuwal Construction",
      contact: "Sagar Katuwal - sagar18_2005@yahoo.com",
    },
  ],
  items: [
    {
      description: "Site Clearance & Dismantling Work",
      unit: "Job",
      qty: 1,
      rate: 400000,
    },
    {
      description: "PCC for RCC Works (RMC)",
      unit: "cu.m.",
      qty: 10400,
      rate: 1287.55,
    },
    { description: "Granite Flooring", unit: "Sqm", qty: 3400, rate: 1637.11 },
    {
      description: "CCTV System (14 IR Bullet Cameras)",
      unit: "No",
      qty: 14,
      rate: 10000,
    },
  ],
};

function Project1() {
  return (
    <div className="container mt-4">
      {/* Project Image */}
      <img
        src="/img/building.jpg"
        alt="Modern Bus Park"
        className="img-fluid mb-4"
        style={{
          borderRadius: "8px",
          maxHeight: "400px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <h1 className="text-primary">{boqData.projectName}</h1>
      <p>
        <strong>Client:</strong> {boqData.client}
      </p>

      <h3 className="mt-4">Joint Venture Partners</h3>
      <ul className="list-group">
        {boqData.partners.map((partner, i) => (
          <li key={i} className="list-group-item">
            <strong>{partner.name}</strong>
            <br />
            Contact: {partner.contact}
          </li>
        ))}
      </ul>

      <h3 className="mt-4">Sample BOQ Items</h3>
      <table className="table table-bordered">
        <thead className="table-secondary">
          <tr>
            <th>Description</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Rate (NRS)</th>
          </tr>
        </thead>
        <tbody>
          {boqData.items.map((item, i) => (
            <tr key={i}>
              <td>{item.description}</td>
              <td>{item.unit}</td>
              <td>{item.qty}</td>
              <td>{item.rate.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Know More!</h3>
      <p>
        The Construction of Modern Bus Park in Itahari-9, Sunsari is a
        comprehensive infrastructure development initiative...
      </p>
    </div>
  );
}

export default Project1;
