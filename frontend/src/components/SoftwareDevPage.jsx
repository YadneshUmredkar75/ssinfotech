//SoftwareDev
import React, { useState } from 'react';

const ProductCard = ({ product }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
    <div className="h-12 w-12 bg-[#AB1EA9] rounded-full mx-auto mt-4 flex items-center justify-center mb-4">
      <span className="text-white text-sm font-medium">{product.title.charAt(0)}</span>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#111827] mb-2">{product.title}</h3>
      <p className="text-[#111827] text-sm leading-relaxed">{product.summary}</p>
    </div>
  </article>
);

const SoftwareDevPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    { id: 1, title: 'Admin Software', summary: 'They undertake tasks including monitoring internet performance, maintaining network availability, and troubleshooting hardware and software issues. Used in systems like student management and transportation.', category: 'Standard' },
    { id: 2, title: 'Email Management Software', summary: 'Efficient handling of large volumes of incoming mail — used by customer service centers alongside phone support.', category: 'Standard' },
    { id: 3, title: 'Payroll Software', summary: 'Specialized tool to simplify employee payment processes; automates routine tasks and calculations.', category: 'Standard' },
    { id: 4, title: 'Hospital Management Software', summary: 'Comprehensive solution for hospitals of all sizes to manage health-related information and operations.', category: 'Standard' },
    { id: 5, title: 'Data Entry Software', summary: 'Replaces costly manual and paper processes with apps for computers and mobile devices to automate data capture.', category: 'Standard' },
    { id: 6, title: 'Institute Management Software', summary: 'Streamlines institute operations: enrollment, exam coordination, scheduling, HR and payroll.', category: 'Standard' },
    { id: 7, title: 'ERP (Enterprise Resource Planning)', summary: 'Unified suite of business applications across finance, HR, distribution, manufacturing, and supply chain.', category: 'ERP' },
    { id: 8, title: 'Any Type Of Customized Software', summary: 'Bespoke software tailored specifically to an organization\'s needs.', category: 'Customized' },
  ];

  const filters = ['All', 'Standard', 'ERP', 'Customized'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AB1EA9] mb-6">Software Development — Unleashing the future with our software development</h1>
          <p className="text-[#111827] text-xl mb-8 max-w-2xl mx-auto">
            At SS Infotech, we specialize in crafting innovative software solutions that drive growth and streamline operations for businesses of all sizes.
          </p>
          <div className="space-x-4">
            <button 
              className="bg-[#AB1EA9] hover:bg-[#9b1a8f] text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
              aria-label="Get started with Software Development"
            >
              Get Started
            </button>
            <button 
              className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2"
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Expanded Description */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#AB1EA9] mb-6">Why Choose Us</h2>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              At SS Infotech, we specialize in crafting innovative software solutions that drive growth and streamline operations for businesses of all sizes. With a team of experienced developers and a commitment to excellence, we're dedicated to bringing your ideas to life and helping you stay ahead in today's digital landscape.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              Embark on a transformative journey into the realm of SS Infotech, where we specialize in elevating both businesses and individuals through our state-of-the-art IT solutions. Within our vibrant ecosystem, a cadre of seasoned professionals stands ready to tailor bespoke software development and deliver comprehensive training programs.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed">
              These initiatives are meticulously crafted to empower you amidst the rapid evolution of the digital landscape. Allow us to lead you toward triumph, fueled by our unyielding dedication to innovation and expertise, ensuring your readiness to thrive in the ever-shifting cosmos of technology.
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-sm">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Software Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-12">Our Software Development</h2>
          <div className="flex justify-center mb-8 space-x-4 flex-wrap">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#AB1EA9] text-white'
                    : 'bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]'
                } focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2 m-1`}
                aria-label={`Filter products by ${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#111827] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-6">
            Contact us today for custom software development solutions.
          </p>
          <button 
            className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2 focus:ring-offset-[#111827]"
            aria-label="Contact us for software development"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </main>
  );
};

export default SoftwareDevPage;

// import SoftwareDevPage from './SoftwareDevPage';
// <SoftwareDevPage />
