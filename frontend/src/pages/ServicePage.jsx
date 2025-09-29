// import React from "react";

// const ServicePage = () => {
//   return <div>ServicePage</div>;
// };

// export default ServicePage;
// ServicePage

import React, { useState, useMemo, useRef, useEffect } from "react";
import RealTime from "../components/RealTime";
import SoftwareDevPage from "../components/SoftwareDevPage";
import WebDevPage from "../components/WebDevPage";
import Digital from "../components/Digital";
import TrainingOfferedPage from "../components/TrainingOfferedPage";
import OpenCampusHiringPage from "../components/OpenCampusHiringPage";

const SERVICES_META = [
  {
    id: "open-campus",
    title: "Open Campus Hiring",
    summary:
      "Campus drives, placements & student engagement — bring career opportunities to your campus.",
    icon: "🎓",
    component: <OpenCampusHiringPage />,
  },
  {
    id: "training",
    title: "Training Offered",
    summary:
      "IELTS, GRE, TOEFL and technical training to prepare candidates for academic and industry success.",
    icon: "📚",
    component: <TrainingOfferedPage />,
  },
  {
    id: "digital",
    title: "Digital Marketing",
    summary:
      "SEO, Ads, Social & Analytics to grow brand visibility and drive conversions.",
    icon: "📣",
    component: <Digital />,
  },
  {
    id: "webdev",
    title: "Web Development",
    summary:
      "Static & dynamic websites, e-commerce and bespoke web platforms built with modern stacks.",
    icon: "💻",
    component: <WebDevPage />,
  },
  {
    id: "software",
    title: "Software Development",
    summary:
      "Enterprise & custom software — Admin, ERP, HMS, Payroll, and more, tailored to your needs.",
    icon: "🧩",
    component: <SoftwareDevPage />,
  },
  {
    id: "realtime",
    title: "Real Time Projects",
    summary:
      "Small, attractive real-time solutions to prototype & launch quickly with impact.",
    icon: "⚡",
    component: <RealTime />,
  },
];

/** Simple testimonial data */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Mrunal Umredkar",
    role: "Student",
    quote:
      "If you want to make a career in Salesforce then S.S. Infotech helps. Salesforce is a comprehensive, practical and extremely affordable course. You'll learn exactly what it takes to be in the industry, and that will help you ace your certification exam.",
  },
  {
    id: 2,
    name: "Ritika Sharma",
    role: "Alumnus",
    quote:
      "The practical projects and mentoring helped me build a portfolio that landed interviews at top firms. Highly recommended.",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Campus Rep",
    quote:
      "Organised campus drives and smooth coordination — SS Infotech made hiring simple and effective for our students.",
  },
];

/** Utility: smooth scroll to an element ID */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Badge component */
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className} bg-gray-100 text-gray-900`}
  >
    {children}
  </span>
);

/** Service teaser card used in overview */
const ServiceTeaser = ({ id, title, summary, icon, onJump }) => (
  <article
    tabIndex="0"
    role="button"
    onClick={() => onJump(id)}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onJump(id);
    }}
    className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AB1EA9]"
    aria-label={`Open ${title}`}
  >
    <div className="flex items-start gap-4">
      <div
        className="flex items-center justify-center rounded-lg w-12 h-12 text-xl flex-shrink-0 bg-gray-50"
      >
        <span aria-hidden>{icon}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-600">{summary}</p>
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onJump(id);
            }}
            aria-label={`Explore ${title}`}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-[#AB1EA9] text-white hover:bg-[#9b1a93] transition-colors"
          >
            Explore
          </button>
          <button
            aria-label={`Contact about ${title}`}
            className="text-sm px-3 py-2 rounded-md border border-[#AB1EA9] text-[#AB1EA9] bg-transparent hover:bg-[#AB1EA9] hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const mail = `mailto:info@ssinfotech.com?subject=Enquiry about ${encodeURIComponent(
                title
              )}`;
              window.location.href = mail;
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  </article>
);

/** Sticky side nav */
const SideNav = ({ items, current, onJump }) => (
  <nav
    aria-label="Services quick navigation"
    className="hidden md:flex md:flex-col md:gap-2 md:sticky md:top-28 md:pt-2"
  >
    {items.map((it) => (
      <button
        key={it.id}
        onClick={() => onJump(it.id)}
        className={`text-left px-3 py-2 rounded-md transition-colors text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
          current === it.id
            ? "bg-[#AB1EA9] text-white"
            : "text-gray-900 bg-transparent"
        }`}
        aria-current={current === it.id}
      >
        {it.title}
      </button>
    ))}
  </nav>
);

/** Testimonial carousel simple */
const Testimonials = ({ items }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  useEffect(() => {
    const next = () => setIndex((i) => (i + 1) % items.length);
    timeoutRef.current = setInterval(next, 5000);
    return () => clearInterval(timeoutRef.current);
  }, [items.length]);

  function pause() {
    clearInterval(timeoutRef.current);
  }
  function resume() {
    timeoutRef.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
  }

  return (
    <section
      className="mt-10 bg-white rounded-2xl p-6 shadow-sm"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label="Testimonials"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        What People Are Saying About Us
      </h2>
      <div className="relative">
        <div className="min-h-[120px]">
          <blockquote className="text-gray-700">
            <p className="text-gray-900">&ldquo;{items[index].quote}&rdquo;</p>
            <footer className="mt-3 text-sm text-gray-600">
              — <strong className="text-gray-900">{items[index].name}</strong>,{" "}
              {items[index].role}
            </footer>
          </blockquote>
        </div>

        <div className="absolute right-0 top-0 flex gap-2">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 transition-colors"
          >
            ›
          </button>
        </div>
        <div className="mt-4 flex gap-2" role="tablist" aria-label="testimonial dots">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-[#AB1EA9] ring-2 ring-offset-1 ring-[#AB1EA9]" : "bg-gray-300 opacity-40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/** Contact CTA banner */
const ContactCTA = () => (
  <section
    className="mt-10 rounded-2xl p-6 text-center bg-gray-50"
  >
    <h3 className="text-xl font-semibold text-gray-900">
      Ready to start a project or schedule a campus drive?
    </h3>
    <p className="mt-2 text-gray-600">Talk to our team — we'll help you pick the right service and plan.</p>
    <div className="mt-4 flex justify-center gap-3">
      <a
        href="mailto:info@ssinfotech.com"
        aria-label="Email us"
        className="inline-flex items-center px-5 py-2 rounded-md font-medium shadow-sm bg-[#AB1EA9] text-white hover:bg-[#9b1a93] transition-colors"
      >
        Email Us
      </a>
      <a
        href="#contact"
        aria-label="Request a callback"
        className="inline-flex items-center px-5 py-2 rounded-md font-medium border border-[#FFB347] text-gray-900 bg-white hover:bg-[#FFB347] transition-colors"
      >
        Request Callback
      </a>
    </div>
  </section>
);

/** Main parent ServicePage */
export default function ServicePage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("open-campus");
  const containerRef = useRef(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return SERVICES_META;
    const q = query.toLowerCase();
    return SERVICES_META.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => {
    function onScroll() {
      // update active based on scroll position of target sections
      const threshold = 150;
      for (const s of SERVICES_META) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom > threshold) {
          setActive(s.id);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white" ref={containerRef}>
      {/* Main content grid with sticky side nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 py-10">
        <aside className="md:col-span-3 hidden md:block">
          <SideNav items={SERVICES_META} current={active} onJump={scrollToId} />
        </aside>

        <section className="md:col-span-9 space-y-8">
          {/* Services overview grid */}
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-semibold text-gray-900">
              Services Overview
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              A compact view of our primary services. Click a card to jump to the full section and explore detailed offerings.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {filtered.map((s) => (
                <ServiceTeaser key={s.id} {...s} onJump={(id) => scrollToId(id)} />
              ))}
            </div>
          </section>

          {/* Render each imported section in order (each should have matching IDs inside) */}
          <section id="open-campus" aria-labelledby="open-campus-heading">
            <h2 id="open-campus-heading" className="text-xl font-semibold text-gray-900">
              Open Campus Hiring
            </h2>
            <div className="mt-4">
              <OpenCampusHiringPage />
            </div>
          </section>

          <section id="training" aria-labelledby="training-heading" className="pt-6">
            <h2 id="training-heading" className="text-xl font-semibold text-gray-900">
              Training Offered
            </h2>
            <div className="mt-4">
              <TrainingOfferedPage />
            </div>
          </section>

          <section id="digital" aria-labelledby="digital-heading" className="pt-6">
            <h2 id="digital-heading" className="text-xl font-semibold text-gray-900">
              Digital Marketing
            </h2>
            <div className="mt-4">
              <Digital />
            </div>
          </section>

          <section id="webdev" aria-labelledby="webdev-heading" className="pt-6">
            <h2 id="webdev-heading" className="text-xl font-semibold text-gray-900">
              Web Development
            </h2>
            <div className="mt-4">
              <WebDevPage />
            </div>
          </section>

          <section id="software" aria-labelledby="software-heading" className="pt-6">
            <h2 id="software-heading" className="text-xl font-semibold text-gray-900">
              Software Development
            </h2>
            <div className="mt-4">
              <SoftwareDevPage />
            </div>
          </section>

          <section id="realtime" aria-labelledby="realtime-heading" className="pt-6">
            <h2 id="realtime-heading" className="text-xl font-semibold text-gray-900">
              Real Time Projects
            </h2>
            <div className="mt-4">
              <RealTime />
            </div>
          </section>

          {/* Testimonials */}
          <Testimonials items={TESTIMONIALS} />

          {/* Contact CTA */}
          <ContactCTA />

          {/* Footer */}
          <footer id="contact" className="mt-10 border-t pt-6 pb-12">
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  SS Infotech
                </h4>
                <p className="mt-2 text-sm text-gray-600 max-w-md">
                  We provide end-to-end IT solutions, training and campus hiring to help students and businesses succeed in the digital era.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <div>
                  <h5 className="text-sm font-medium text-gray-900">
                    Email
                  </h5>
                  <a href="mailto:info@ssinfotech.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    info@ssinfotech.com
                  </a>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">
                    Phone
                  </h5>
                  <p className="text-sm text-gray-600">+91 12345 67890</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} SS Infotech. All rights reserved.
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
