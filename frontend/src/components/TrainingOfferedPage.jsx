//TrainingOfferedPage
import React, { useState } from 'react';

const CourseCard = ({ course, onEnroll }) => {
  const getIcon = (name) => {
    switch (name) {
      case 'IELTS': return <svg className="w-12 h-12 text-[#AB1EA9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
      case 'GRE': return <svg className="w-12 h-12 text-[#AB1EA9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
      case 'TOEFL': return <svg className="w-12 h-12 text-[#AB1EA9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
      default: return <svg className="w-12 h-12 text-[#AB1EA9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]" tabIndex="0" role="button" aria-label={`Enroll in ${course.title}`}>
      <div className="p-6 text-center">
        {getIcon(course.title)}
        <h3 className="text-xl font-semibold text-[#111827] mt-4 mb-2">{course.title}</h3>
        <p className="text-[#111827] text-sm mb-4">{course.summary}</p>
        <ul className="text-[#111827] text-sm space-y-1 mb-4">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <svg className="w-4 h-4 text-[#10B981] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="text-[#111827] text-xs mb-4 font-medium">Duration: {course.duration}</div>
        <button 
          onClick={(e) => { e.stopPropagation(); onEnroll(course.title); }}
          className="bg-[#AB1EA9] hover:bg-[#9b1a8f] text-white px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
          aria-label={`Enroll in ${course.title}`}
        >
          Enroll Now
        </button>
      </div>
    </article>
  );
};

const MiniCard = ({ extra }) => (
  <div className="bg-[#F9FAFB] rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300">
    <h4 className="text-[#111827] font-medium mb-2">{extra.title}</h4>
    <p className="text-[#111827] text-sm mb-4">{extra.description}</p>
    <button 
      className="text-[#AB1EA9] text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
      aria-label={`Learn more about ${extra.title}`}
    >
      Learn More
    </button>
  </div>
);

const AccordionItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button 
      onClick={onToggle}
      className="w-full text-left p-4 font-medium text-[#111827] flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
      aria-expanded={isOpen}
      aria-controls={`answer-${question}`}
    >
      {question}
      <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </button>
    <div 
      id={`answer-${question}`}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
    >
      <p className="p-4 text-[#111827] text-sm bg-[#F9FAFB]">{answer}</p>
    </div>
  </div>
);

const TrainingOfferedPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrolled, setEnrolled] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const courses = [
    { 
      id: 1, 
      title: 'IELTS Exam', 
      summary: 'IELTS scores are widely accepted by educational institutions, employers, and immigration authorities in many countries. Our training focuses on Listening, Reading, Writing and Speaking with real exam simulations.',
      features: ['Mock Tests', 'Personalized Feedback', 'Flexible Timings'],
      duration: '8 weeks'
    },
    { 
      id: 2, 
      title: 'GRE Exam', 
      summary: 'GRE scores are accepted by graduate and business school programs worldwide. Training covers verbal reasoning, quantitative reasoning, and analytical writing with strategy-driven coaching.',
      features: ['Mock Tests', 'Personalized Feedback', 'Flexible Timings'],
      duration: '10 weeks'
    },
    { 
      id: 3, 
      title: 'TOEFL Exam', 
      summary: 'TOEFL scores are widely accepted by universities and institutions. Our TOEFL prep emphasizes integrated speaking & writing tasks, academic listening, and reading comprehension.',
      features: ['Mock Tests', 'Personalized Feedback', 'Flexible Timings'],
      duration: '8 weeks'
    },
  ];

  const extras = [
    { id: 1, title: 'Web Development Services', description: 'Learn to build modern websites with hands-on training.' },
    { id: 2, title: 'Digital Marketing Training', description: 'Master SEO, social media, and analytics strategies.' },
    { id: 3, title: 'Software Development & Training', description: 'Develop custom software solutions with expert guidance.' },
  ];

  const faqs = [
    { id: 1, question: 'How long is the typical course?', answer: 'Courses typically range from 6–12 weeks, depending on the level and intensity of preparation.' },
    { id: 2, question: 'Do you offer mock tests?', answer: 'Yes, we provide regular timed mock tests with detailed feedback to simulate real exam conditions.' },
    { id: 3, question: 'Are classes online or offline?', answer: 'We offer both online and offline options, including hybrid formats and recorded sessions for flexibility.' },
  ];

  const handleEnroll = (courseTitle) => {
    if (!enrolled.includes(courseTitle)) {
      setEnrolled([...enrolled, courseTitle]);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F3F4F6]">
      {showBanner && (
        <div className="bg-[#10B981] text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
          <span>Successfully enrolled in a course!</span>
          <button onClick={() => setShowBanner(false)} aria-label="Close banner" className="ml-4">×</button>
        </div>
      )}
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#AB1EA9] mb-6">Training Offered — Expert IELTS, GRE, and TOEFL Preparation</h1>
          <p className="text-[#111827] text-xl mb-8 max-w-2xl mx-auto">
            Welcome to SS Infotech — your go-to destination for expert IELTS, GRE, and TOEFL preparation designed to help you reach academic and professional goals.
          </p>
          <div className="space-x-4">
            <button 
              className="bg-[#AB1EA9] hover:bg-[#9b1a8f] text-white px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
              aria-label="Start your training journey"
            >
              Get Started
            </button>
            <button 
              className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2"
              aria-label="Learn more about courses"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#AB1EA9] mb-6">Why Choose Us</h2>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              Our approach is rooted in personalized learning, combining subject matter expertise with effective test-taking strategies. We prioritize a comprehensive understanding of the content along with honing the skills necessary for success in the IELTS, GRE, and TOEFL exams.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed mb-4">
              Embark on a transformative journey into the realm of SS Infotech training, where seasoned instructors deliver tailored lessons, mock tests, and targeted feedback.
            </p>
            <p className="text-[#111827] text-lg leading-relaxed">
              Our programs are designed to build confidence, improve scores, and prepare candidates for real test conditions.
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-sm">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-4">Our Courses</h2>
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto mb-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB1EA9] focus:ring-offset-2"
            aria-label="Search training courses"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings */}
      <section className="py-16 px-4 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extras.map(extra => (
              <MiniCard key={extra.id} extra={extra} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#AB1EA9] text-center mb-8">Frequently Asked Questions</h2>
          <div className="bg-[#F9FAFB] rounded-lg overflow-hidden">
            {faqs.map(faq => (
              <AccordionItem 
                key={faq.id} 
                question={faq.question} 
                answer={faq.answer}
                isOpen={openFaq === faq.id}
                onToggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#111827] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Start Your Preparation?</h2>
          <p className="text-gray-300 mb-6">
            Contact us today to enroll in IELTS, GRE, or TOEFL training.
          </p>
          <button 
            className="bg-[#FFB347] hover:bg-[#F59E0B] text-[#111827] px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:ring-offset-2 focus:ring-offset-[#111827]"
            aria-label="Contact us for training"
          >
            Contact Us
          </button>
        </div>
      </footer>
    </main>
  );
};

export default TrainingOfferedPage;

// import TrainingOfferedPage from './TrainingOfferedPage';
// <TrainingOfferedPage />
