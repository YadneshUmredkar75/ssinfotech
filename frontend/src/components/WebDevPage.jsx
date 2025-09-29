import React from 'react';

const ServiceCard = ({ service }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <div className="h-48 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Service Image Placeholder</span>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#111827] mb-2">{service.title}</h3>
      <p className="text-[#111827] text-sm">{service.description}</p>
    </div>
  </article>
);

const WebDevPage = () => {
  const services = [
    { id: 1, title: 'Static Website Development', description: 'Build simple, fast-loading websites with fixed content for informational purposes.' },
    { id: 2, title: 'Dynamic Website Development', description: 'Create interactive sites that update content in real-time based on user input.' },
    { id: 3, title: 'E-Commerce Website Development', description: 'Develop online stores with secure payment integration and inventory management.' },
    { id: 4, title: 'Email Management Development', description: 'Implement systems for efficient email handling and customer communication.' },
    { id: 5, title: 'MLM Website Development', description: 'Design multi-level marketing platforms with referral tracking and commission calculations.' },
    { id: 6, title: 'CRM Website Development', description: 'Build customer relationship management tools to streamline sales and support.' },
  ];

  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AB1EA9] mb-6">Web Development Services — Versatile way to build your web development project</h1>
          <p className="text-[#111827] text-xl mb-4">
            To be the vanguard of digital innovation, enabling businesses to excel in the online world with cutting-edge web development solutions.
          </p>
          <p className="text-[#111827] text-lg mb-8 max-w-2xl mx-auto">
            At SS Infotech, we have a vision for a digital world where every website we design becomes a masterpiece.
          </p>
          <div className="space-x-4">
            <button 
              className="bg-[#AB1EA9] hover:bg-[#9b1a8f] text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
              aria-label="Start your web development project"
            >
              Get Started
            </button>
            <button 
              className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2"
              aria-label="Learn more about web services"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Expanded Description */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-[#AB1EA9] mb-6">Web Development Services</h2>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              SS Infotech is a leading IT consulting and web development training organization. We help enterprises and organizations to create their websites in static and dynamic forms.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              This company helps organizations to understand the impact of a new initiative, deploy a new application, or partner with a trusted firm that can assimilate into their team.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed">
              SS Infotech is here to help! We are dedicated to educating and supporting your business each step of the way.
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg order-1 md:order-2">
            <span className="text-gray-500 text-sm">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#111827] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Build Your Website?</h2>
          <p className="text-gray-300 mb-6">
            Contact us today for expert web development services.
          </p>
          <button 
            className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2 focus:ring-offset-[#111827]"
            aria-label="Contact us for web development"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </main>
  );
};

export default WebDevPage;

// import WebDevPage from './WebDevPage';
// <WebDevPage />
