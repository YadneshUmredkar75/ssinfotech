import React, { useState } from 'react';

const ServiceCard = ({ service }) => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]" tabIndex="0" role="button" aria-label={`Learn more about ${service.title}`}>
    <div className="h-48 bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500 text-sm">Service Icon Placeholder</span>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-[#111827] mb-2">{service.title}</h3>
      <p className="text-[#111827] text-sm leading-relaxed">{service.summary}</p>
    </div>
  </article>
);

const ChannelPill = ({ channel }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'Web': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
      case 'Social': return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M18 1.5A2.5 2.5 0 0015.5 4h-11A2.5 2.5 0 002 6.5v11A2.5 2.5 0 004.5 20h11a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018 1.5zm-5 6a3 3 0 100-6 3 3 0 000 6zm5 11a1 1 0 01-2 0v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-2 0v-6a1 1 0 011-1h7a1 1 0 011 1v6z" /></svg>;
      case 'Email': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      case 'Ads': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
      case 'Analytics': return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
      default: return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    }
  };

  return (
    <div className="bg-[#F9FAFB] rounded-full px-4 py-2 mx-2 hover:bg-[#AB1EA9] hover:text-white transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center space-x-2">
        {getIcon(channel)}
        <span className="text-[#111827] font-medium">{channel}</span>
      </div>
    </div>
  );
};

const Digital = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { id: 1, title: 'SEO', summary: 'Boost online visibility and drive organic traffic with tailored keyword strategies and technical improvements.' },
    { id: 2, title: 'Email Marketing', summary: 'Design and automate campaigns to nurture leads, retain customers, and drive conversions.' },
    { id: 3, title: 'Google Ads', summary: 'Precision paid campaigns to reach high-intent customers, increase traffic, and maximize ROI.' },
    { id: 4, title: 'Social Media Marketing', summary: 'Create targeted content and ads to build engagement across platforms like Facebook & Instagram.' },
    { id: 5, title: 'Lead Generation', summary: 'Attract and convert prospects using content, landing pages, and segmentation strategies.' },
    { id: 6, title: 'Marketing Analytics', summary: 'Measure performance across channels and use data to optimize campaigns and budgets.' },
  ];

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const channels = ['Web', 'Social', 'Email', 'Ads', 'Analytics'];

  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AB1EA9] mb-6">Digital Marketing — Drive growth across web, social, email, and ads</h1>
          <p className="text-[#111827] text-xl mb-8 max-w-2xl mx-auto">
            Digital marketing involves strategies to promote products or services via websites, social media, mobile apps, and email — from SEO to paid ads and analytics.
          </p>
          <div className="space-x-4">
            <button 
              className="bg-[#AB1EA9] hover:bg-[#9b1a8f] text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
              aria-label="Start your digital marketing campaign"
            >
              Get Started
            </button>
            <button 
              className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2"
              aria-label="Learn more about digital marketing"
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
              Digital marketing involves various strategies to promote products or services via digital channels like websites, social media, mobile apps, and email. These strategies include social media marketing, SEO, email marketing, content marketing, video marketing, web advertising, affiliate marketing, and marketing analytics.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              Each serves different purposes, from boosting brand awareness to driving sales, contributing to a comprehensive strategy aligned with business objectives.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed">
              At SS Infotech, we craft tailored digital marketing solutions to elevate your online presence and achieve measurable results.
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-sm">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-4">Our Digital Marketing Services</h2>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md mx-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
              aria-label="Search digital marketing services"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Training & Consulting Blurb */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] mb-6">Digital Marketing Training & Consulting</h2>
          <p className="text-[#111827] text-lg leading-relaxed mb-8">
            Embark on a transformative journey into the realm of SS Infotech, where we specialize in elevating both businesses and individuals through our state-of-the-art digital marketing solutions. Within our vibrant ecosystem, a cadre of seasoned professionals stands ready to tailor bespoke marketing strategies and deliver comprehensive training programs. These initiatives are meticulously crafted to empower you amidst the rapid evolution of the digital landscape. Allow us to lead you toward triumph, fueled by our unyielding dedication to innovation and expertise, ensuring your readiness to thrive in the ever-shifting cosmos of technology.
          </p>
        </div>
      </section>

      {/* Animated Channel Strip */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-12">Our Main Channels</h2>
          <div className="flex flex-wrap justify-center items-center space-x-4 overflow-x-auto pb-4">
            {channels.map(channel => (
              <ChannelPill key={channel} channel={channel} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#111827] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Boost Your Digital Presence?</h2>
          <p className="text-gray-300 mb-6">
            Contact us today for expert digital marketing services.
          </p>
          <button 
            className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2 focus:ring-offset-[#111827]"
            aria-label="Contact us for digital marketing"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </main>
  );
};

export default Digital;

