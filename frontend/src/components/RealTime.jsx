import React, { useState } from 'react';

const Badge = ({ status }) => {
  const color = status === 'Live' ? 'bg-[#10B981] text-white' : 'bg-[#F59E0B] text-white';
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${color} ring-1 ring-inset ring-white/10`}>
      {status}
    </span>
  );
};

const ProjectCard = ({ project }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
    <div className="h-48 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Project Image Placeholder</span>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#111827] mb-2">{project.title}</h3>
      <p className="text-[#111827] text-sm mb-4">{project.description}</p>
      <Badge status={project.status} />
    </div>
  </article>
);

const ClientCard = ({ client }) => (
  <div className="bg-[#F9FAFB] rounded-lg shadow-sm p-6 text-center">
    <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
      <span className="text-gray-500 text-sm">{client.name.charAt(0)}</span>
    </div>
    <h4 className="text-[#111827] font-medium">{client.name}</h4>
    <p className="text-[#111827] text-sm mt-2">{client.description}</p>
  </div>
);

const RealTime = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'A real-time shopping app with live inventory.', status: 'Live' },
    { id: 2, title: 'Chat Application', description: 'Real-time messaging system for teams.', status: 'On Going' },
    { id: 3, title: 'Dashboard Analytics', description: 'Live data visualization tool.', status: 'Live' },
    { id: 4, title: 'Inventory Management', description: 'Real-time stock tracking system.', status: 'On Going' },
    { id: 5, title: 'Social Media Feed', description: 'Dynamic content feed with real-time updates.', status: 'Live' },
    { id: 6, title: 'Booking System', description: 'Real-time appointment scheduler.', status: 'On Going' },
  ];

  const clients = [
    { name: 'Aroma Girls Hostel', description: 'Web development and real-time management system.' },
    { name: 'SS Overseas', description: 'Custom real-time project solutions for global reach.' },
    { name: 'AliGn Infotech', description: 'Collaborative real-time IT services.' },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.status === activeFilter);

  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AB1EA9] mb-6">Real Time Projects</h1>
          <p className="text-[#111827] text-lg mb-8 max-w-2xl mx-auto">
            Dive into hands-on, real-world projects that simulate live IT environments. Our services focus on web development with real-time features to build practical skills and deliver impactful solutions.
          </p>
          <button 
            className="bg-[#AB1EA9] hover:bg-[#9b1a8f] text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
            aria-label="Get started with Real Time Projects"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Expanded Description */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-sm">Service Image Placeholder</span>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#AB1EA9] mb-4">Web Development Services</h2>
            <p className="text-[#111827] text-lg leading-relaxed">
              Our Real Time Project services offer comprehensive web development tailored for dynamic applications. From real-time data processing to interactive user interfaces, we ensure seamless integration and performance. Ideal for startups and enterprises seeking agile IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-12">Our Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {['All', 'Live', 'On Going'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#AB1EA9] text-white'
                    : 'bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]'
                } focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2`}
                aria-label={`Filter projects by ${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <ClientCard key={index} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#111827] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Launch Your Real Time Project?</h2>
          <p className="text-gray-300 mb-6">
            Contact us today for tailored web development services.
          </p>
          <button 
            className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2 focus:ring-offset-[#111827]"
            aria-label="Contact us for services"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </main>
  );
};

export default RealTime;

// import ServicePage from './ServicePage';
// <ServicePage />
