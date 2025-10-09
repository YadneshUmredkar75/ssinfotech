import React from "react";
import certificateBg from "../../assets/certificate-bg.png";

const WebDeveloperTemplate = ({ data = {}, type = "Certificate" }) => {
  const {
    candidateName = "[Candidate Name]",
    companyName = "[Company Name]",
    internshipFrom = "[Start Date]",
    internshipTo = "[End Date]",
    department = "[Department]",
    position = "[Position]",
    issuedDate = "[Date]",
    collegeName = "[College Name]",
  } = data;

  return (
    <div
      className="relative w-[794px] h-[1123px] p-8"
           style={{
             backgroundImage: `url(${certificateBg})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
           }}
    >
      {/* Date top-right */}
      <div className="absolute right-8 text-sm pt-44">
        Date: <strong>{issuedDate}</strong>
      </div>

      <div className="text-center font-bold text-[20px] underline pt-52">INTERNSHIP COMPLETION CERTIFICATE</div>

      <div className="absolute left-8 right-8 text-[14px] pt-4">
        {/* To block */}
        <div className="mb-4">
          <p className="font-semibold">To,</p>
          <p className="font-semibold">{candidateName},</p>
          <p>{collegeName}.</p>
        </div>

        {/* Subject */}
        <p className="font-semibold mb-3">
          Subject: Certificate of Internship
        </p>

        {/* Greeting */}
        <p className="mb-4">Dear {candidateName},</p>

        {/* Main Content */}
        <p className="mb-3">
          This is to formally certify that <strong>{candidateName}</strong> has successfply completed an internship at <strong>{companyName}</strong> from <strong>{internshipFrom}</strong> to <strong>{internshipTo}</strong>. During the tenure of the internship, {candidateName} was assigned to the <strong>{position}</strong> role.
        </p>

        <p className="mb-3 font-semibold">Internship Details:</p>
        <p className="list-disc pl-4 mb-3">
          <p><strong>Intern Name:</strong> {candidateName}</p>
          <p><strong>Position:</strong> {position}</p>
          <p><strong>Internship Duration:</strong> {internshipFrom} to {internshipTo}</p>
        </p>

        <p className="mb-3 font-semibold">Responsibilities Undertaken:</p>
        <p className="mb-3">
          During the internship, {candidateName} actively contributed to the development of web applications and software solutions. Key responsibilities included:
        </p>
        <p className="list-disc pl-4 mb-3">
          <p>Frontend Development: Implementing responsive UI designs using HTML, CSS, JavaScript, React.js.</p>
          <p>Backend Development: Developing and integrating APIs using Node.js, Express.js, and managing databases with MongoDB/MySQL.</p>
          <p>Debugging & Optimization: Identifying and fixing bugs, optimizing apppcation performance.</p>
          <p>Version Control: Collaborating with teams using Git & GitHub.</p>
          <p>Deployment & Testing: Assisting in deployment of web apppcations and conducting testing for functionality and security.</p>
        </p>

        <p className="mb-3 font-semibold">Internship Overview & Performance Evaluation:</p>
        <p className="mb-3">
          Throughout the internship, {candidateName} exhibited exceptional problem-solving skills, adaptability, and enthusiasm in learning new technologies. Their contributions to project development and teamwork were highly commendable.
        </p>

      </div>
    </div>
  );
};

export default WebDeveloperTemplate;
