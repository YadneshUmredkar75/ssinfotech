// src/component/CompanyGoal.jsx
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const CompanyGoal = () => {
  return (
    <div className="h-screen">
    {<ScrollStack allowParentScrollOnEnd>
      {/* Mission */}
      <ScrollStackItem>
        <div className="flex md:flex-row items-center gap-6">
          <img
            src="/img/aboutus/mis.jpg"
            alt="Mission"
            className="w-40 h-40 object-cover rounded-2xl shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#AB1EA9]">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To achieve and maintain the confidence, trust and loyalty of our clients.
              Everything we have achieved and will achieve is due to the excellent and
              exceptional relationship we share with our customers. We at SS Infotech
              believe that these relationships are the company's most priceless and
              precious assets. With you, we create and deliver business and technology
              solutions that fit your needs and drive meaningful results. People matter, results count.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Objective */}
      <ScrollStackItem>
        <div className="flex md:flex-row items-center gap-6">
          <img src="/img/aboutus/obj.jpg" alt="Objective" className="w-40 h-40 object-cover rounded-2xl shadow-md" />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#AB1EA9]">Our Objective</h2>
            <p className="text-gray-700 leading-relaxed">
              Our objective at S.S. Infotech is clear: to cultivate enduring relationships
              with our clients built on trust, loyalty, and exceptional service. We are
              dedicated to leveraging our intelligence and expertise to pioneer new
              technologies and advance Information Technology for the betterment of society.
              Also, S.S. InfoTech provides opportunities for students to get exposed to a very large
              area of technology and its processes.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Vision */}
      <ScrollStackItem>
        <div className="flex md:flex-row items-center gap-6">
          <img src="/img/aboutus/vis.jpg" alt="Vision" className="w-40 h-40 object-cover rounded-2xl shadow-md" />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#AB1EA9]">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We share a vision of dedicating our intelligence and expertise to help create
              a world strengthened through Information Technology. This entails not only
              harnessing existing technologies but also innovating and inventing new ones.
              We envision a future where IT serves as a powerful force for positive change,
              driving innovation, connectivity, and progress across society.
            </p>
          </div>
        </div>
      </ScrollStackItem>

      {/* Care */}
      <ScrollStackItem>
        <div className="flex md:flex-row items-center gap-6">
          <img src="/img/aboutus/care.jpg" alt="Care" className="w-40 h-40 object-cover rounded-2xl shadow-md" />
          <div>
            <h2 className="text-2xl font-bold mb-2 text-[#AB1EA9]">Our Care</h2>
            <p className="text-gray-700 leading-relaxed">
              At S.S. Infotech, our utmost priority lies in fostering enduring relationships with
              our clients, rooted in trust, loyalty, and exceptional service. We are driven by a
              vision to dedicate our expertise towards shaping a world strengthened by IT.
              Your success is our care, and we are passionate about partnering with you on your journey.
            </p>
          </div>
        </div>
      </ScrollStackItem>
    </ScrollStack>}
    </div>
  );
};

export default CompanyGoal;
