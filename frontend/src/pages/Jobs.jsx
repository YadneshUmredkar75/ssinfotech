import { useEffect, useMemo, useState } from "react";
import { Search, MapPin, Briefcase, Clock, DollarSign, X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Time ago utility to format job posting dates
function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return `${interval} years ago`;
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months ago`;
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days ago`;
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours ago`;
  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes ago`;
  return "just now";
}

// Modal component for job application form
function JobApplicationModal({ job, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (log to console for demo)
    console.log("Application submitted for job:", job.title, formData);
    toast.success("Application submitted successfully!");
    setFormData({ name: "", email: "", phone: "", resume: null });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Apply for {job.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleInputChange}
              accept=".pdf,.doc,.docx"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function JobSearch() {
  // Fake admin jobs data
  const adminJobs = [
    {
      id: "admin-1",
      title: "Full Stack Developer",
      company: "Your Company",
      location: "Remote",
      experience: "2-4 years",
      type: "Full-time",
      skills: ["React", "Node.js", "MongoDB"],
      postedAt: new Date().toISOString(),
      description: "We're looking for a talented Full Stack Developer to join our team and build amazing web applications.",
      salary: "₹15-20 LPA",
      category: "Technology",
      isAdmin: true,
    },
    {
      id: "admin-2",
      title: "UI/UX Designer",
      company: "Your Company",
      location: "Pune, India",
      experience: "1-3 years",
      type: "Full-time",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      postedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      description: "Creative UI/UX Designer needed to design intuitive user interfaces for our products.",
      salary: "₹10-15 LPA",
      category: "Design",
      isAdmin: true,
    },
    {
      id: "admin-3",
      title: "DevOps Engineer",
      company: "Your Company",
      location: "Bangalore, India",
      experience: "3-5 years",
      type: "Full-time",
      skills: ["AWS", "Docker", "Kubernetes"],
      postedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      description: "Experienced DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines.",
      salary: "₹18-25 LPA",
      category: "Technology",
      isAdmin: true,
    },
  ];

  // State for search and filters
  const [query, setQuery] = useState(""); // Search query (job title, company, skills)
  const [location, setLocation] = useState(""); // Location filter
  const [experience, setExperience] = useState(undefined); // Experience filter
  const [jobType, setJobType] = useState(undefined); // Job type filter
  const [category, setCategory] = useState(undefined); // Category filter
  const [selectedSkills, setSelectedSkills] = useState([]); // Multi-select skills
  const [salaryRange, setSalaryRange] = useState(undefined); // Salary range filter
  const [postedWithin, setPostedWithin] = useState(undefined); // Posted within filter
  const [visible, setVisible] = useState(4); // Number of jobs to display
  const [saved, setSaved] = useState({}); // Saved jobs
  const [adzunaJobs, setAdzunaJobs] = useState([]); // Fetched job listings from API
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedJob, setSelectedJob] = useState(null); // Track selected job for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Adzuna API credentials (replace with your own from developer.adzuna.com)
  const ADZUNA_APP_ID = "2cd271a8";
  const ADZUNA_APP_KEY = "16d6613015ae761f23bb5cbd92aee308";

  // Combine admin jobs and Adzuna jobs
  const allJobs = useMemo(() => [...adminJobs, ...adzunaJobs], [adzunaJobs]);

  // Fetch jobs from Adzuna API
  useEffect(() => {
    const fetchJobs = async () => {
      if (!ADZUNA_APP_ID || !ADZUNA_APP_KEY || ADZUNA_APP_ID === "YOUR_ADZUNA_APP_ID") {
        setError("Please set your Adzuna API credentials.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Construct Adzuna API URL with filters
        let url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${ADZUNA_APP_ID}&app_key=${ADZUNA_APP_KEY}&results_per_page=50`;

        if (query) url += `&what=${encodeURIComponent(query)}`;
        if (location) url += `&where=${encodeURIComponent(location)}`;
        if (category && category !== "__any") url += `&category=${encodeURIComponent(category)}`;
        if (salaryRange) {
          const [min, max] = salaryRange.split("₹")[1].split("-").map((s) => parseInt(s.replace(" LPA", "")) * 100000);
          url += `&salary_min=${min}${max ? `&salary_max=${max}` : ""}`;
        }
        if (postedWithin && postedWithin !== "Any") {
          const days = { "Last 24 hours": 1, "Last 7 days": 7, "Last 30 days": 30 };
          url += `&days_since_added=${days[postedWithin]}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error("API request failed");
        const data = await response.json();
        // Transform Adzuna data to match app structure
        const transformedJobs = data.results.map((job) => ({
          id: job.id,
          title: job.title,
          company: job.company.display_name,
          location: job.location.display_name,
          experience: job.experience ? job.experience.label : "Not specified",
          type: job.contract_time ? job.contract_time : "Full-time",
          skills: job.category.tag ? job.category.tag.split(", ") : [],
          postedAt: new Date(job.created).toISOString(),
          description: job.description,
          salary: job.salary_is_predicted === "0" ? (job.salary_max ? `₹${(job.salary_max / 100000).toFixed(1)} LPA` : "Not specified") : "Not specified",
          category: job.category.tag || "Other",
          redirect_url: job.redirect_url || "#",
          isAdmin: false, // Mark as non-admin
        }));
        setAdzunaJobs(transformedJobs);
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch jobs: ${err.message}`);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [query, location, category, salaryRange, postedWithin]);

  // Memoized filter options
  const locations = useMemo(() => Array.from(new Set(allJobs.map((j) => j.location))), [allJobs]);
  const experiences = ["0-1 years", "1-3 years", "2-4 years", "4+ years"];
  const types = useMemo(() => Array.from(new Set(allJobs.map((j) => j.type))), [allJobs]);
  const skills = useMemo(() => Array.from(new Set(allJobs.flatMap((j) => j.skills))), [allJobs]);
  const categories = useMemo(() => Array.from(new Set(allJobs.map((j) => j.category))), [allJobs]);
  const salaryRanges = ["₹5-10 LPA", "₹10-15 LPA", "₹15-20 LPA", "₹20+ LPA"];
  const postedWithinOptions = ["Any", "Last 24 hours", "Last 7 days", "Last 30 days"];

  // Client-side filtering for experience, job type, and skills
  const filtered = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesExperience = experience ? job.experience === experience : true;
      const matchesType = jobType ? job.type === jobType : true;
      const matchesSkills = selectedSkills.length > 0 ? selectedSkills.every((skill) => job.skills.includes(skill)) : true;
      return matchesExperience && matchesType && matchesSkills;
    });
  }, [allJobs, experience, jobType, selectedSkills]);


  // Toggle skill selection
  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  // Handle View & Apply button click
  const handleViewApply = (job) => {
    if (job.isAdmin) {
      // For admin jobs, open application modal
      setSelectedJob(job);
      setIsModalOpen(true);
    } else {
      // For Adzuna jobs, redirect to original posting
      if (job.redirect_url && job.redirect_url !== "#") {
        window.open(job.redirect_url, "_blank");
      } else {
        toast.error("No application link available for this job.");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">Job Search</h1>
        <p className="text-gray-500 mt-2 text-lg">Explore opportunities across all industries and roles.</p>
      </div>

      {/* Search and Location Filter */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by job title, company, or skills"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
            />
          </div>
          <button
            onClick={() => {
              setQuery("");
              setLocation("");
              setExperience(undefined);
              setJobType(undefined);
              setCategory(undefined);
              setSelectedSkills([]);
              setSalaryRange(undefined);
              setPostedWithin(undefined);
            }}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md font-medium text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
          >
            Reset
          </button>
        </div>
        <div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location (e.g., Pune, India)"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with Filters */}
        <aside className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value === "__any" ? undefined : e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
                >
                  <option value="__any">Any</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Experience</label>
                <select
                  onChange={(e) => setExperience(e.target.value === "__any" ? undefined : e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
                >
                  <option value="__any">Any</option>
                  {experiences.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Job Type</label>
                <select
                  onChange={(e) => setJobType(e.target.value === "__any" ? undefined : e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
                >
                  <option value="__any">Any</option>
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Skills</label>
                <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                  {skills.map((skill) => (
                    <label key={skill} className="flex items-center space-x-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSkills.includes(skill)}
                        onChange={() => toggleSkill(skill)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Salary Range</label>
                <select
                  onChange={(e) => setSalaryRange(e.target.value === "__any" ? undefined : e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
                >
                  <option value="__any">Any</option>
                  {salaryRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Posted Within</label>
                <select
                  onChange={(e) => setPostedWithin(e.target.value === "__any" ? undefined : e.target.value)}
                  className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:shadow-sm"
                >
                  <option value="__any">Any</option>
                  {postedWithinOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Saved <strong>{Object.keys(saved).filter((k) => saved[k]).length}</strong> jobs
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Tips</h2>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-2">
              <li>Use specific keywords (e.g., nurse, accountant) to narrow results.</li>
              <li>Apply quickly to new listings — save them for later review.</li>
              <li>Filter by category and salary to find the best fit.</li>
            </ul>
          </div>
        </aside>

        {/* Job Listings */}
        <section className="lg:col-span-3 space-y-4">
          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading jobs For You...</p>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-md">
              {error}
            </div>
          )}
          {!loading && !error && (
            <>
              {/* Admin Jobs Section - Always at top */}
              {adminJobs.filter((job) => {
                const matchesExperience = experience ? job.experience === experience : true;
                const matchesType = jobType ? job.type === jobType : true;
                const matchesSkills = selectedSkills.length > 0 ? selectedSkills.every((skill) => job.skills.includes(skill)) : true;
                const matchesQuery = !query || job.title.toLowerCase().includes(query.toLowerCase()) || job.company.toLowerCase().includes(query.toLowerCase()) || job.skills.some(s => s.toLowerCase().includes(query.toLowerCase()));
                const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
                const matchesCategory = !category || job.category === category;
                const matchesSalary = !salaryRange || job.salary.startsWith(salaryRange.split("-")[0]);
                const matchesPostedWithin = !postedWithin || (postedWithin === "Any" || timeAgo(job.postedAt) === postedWithin);
                return matchesQuery && matchesLocation && matchesCategory && matchesSalary && matchesExperience && matchesType && matchesSkills && matchesPostedWithin;
              }).length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Company Jobs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {adminJobs.filter((job) => {
                      const matchesExperience = experience ? job.experience === experience : true;
                      const matchesType = jobType ? job.type === jobType : true;
                      const matchesSkills = selectedSkills.length > 0 ? selectedSkills.every((skill) => job.skills.includes(skill)) : true;
                      const matchesQuery = !query || job.title.toLowerCase().includes(query.toLowerCase()) || job.company.toLowerCase().includes(query.toLowerCase()) || job.skills.some(s => s.toLowerCase().includes(query.toLowerCase()));
                      const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
                      const matchesCategory = !category || job.category === category;
                      const matchesSalary = !salaryRange || job.salary.startsWith(salaryRange.split("-")[0]);
                      const matchesPostedWithin = !postedWithin || (postedWithin === "Any" || timeAgo(job.postedAt) === postedWithin);
                      return matchesQuery && matchesLocation && matchesCategory && matchesSalary && matchesExperience && matchesType && matchesSkills && matchesPostedWithin;
                    }).slice(0, visible).map((job) => (
                      <div
                        key={job.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                      >
                        <div className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <div className="bg-blue-100 rounded-md p-3">
                                  <Briefcase className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                                  <p className="text-sm text-gray-500">
                                    {job.company} • {job.location}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 flex items-center gap-2 flex-wrap">
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-600">
                                  {job.experience}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-600">
                                  {job.type}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full border border-blue-300 bg-blue-50 text-blue-700">
                                  Company Job
                                </span>
                                {job.skills.slice(0, 3).map((s) => (
                                  <span
                                    key={s}
                                    className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-4 text-sm text-gray-500 flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {timeAgo(job.postedAt)}
                                </span>
                                {job.salary && (
                                  <span className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    {job.salary}
                                  </span>
                                )}
                              </div>
                              <div className="mt-4">
                                <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <button
                                onClick={() => handleViewApply(job)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                              >
                                View & Apply
                              </button>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {adminJobs.filter((job) => {
                    const matchesExperience = experience ? job.experience === experience : true;
                    const matchesType = jobType ? job.type === jobType : true;
                    const matchesSkills = selectedSkills.length > 0 ? selectedSkills.every((skill) => job.skills.includes(skill)) : true;
                    const matchesQuery = !query || job.title.toLowerCase().includes(query.toLowerCase()) || job.company.toLowerCase().includes(query.toLowerCase()) || job.skills.some(s => s.toLowerCase().includes(query.toLowerCase()));
                    const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
                    const matchesCategory = !category || job.category === category;
                    const matchesSalary = !salaryRange || job.salary.startsWith(salaryRange.split("-")[0]);
                    const matchesPostedWithin = !postedWithin || (postedWithin === "Any" || timeAgo(job.postedAt) === postedWithin);
                    return matchesQuery && matchesLocation && matchesCategory && matchesSalary && matchesExperience && matchesType && matchesSkills && matchesPostedWithin;
                  }).length > visible && (
                    <div className="text-center mt-4">
                      <button
                        onClick={() => setVisible((v) => v + 4)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Load more company jobs
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Adzuna Jobs Section */}
              {adzunaJobs.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Opportunities</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-gray-500">
                      Showing <strong>{filtered.filter(job => !job.isAdmin).length}</strong> results
                    </p>
                    <div className="text-sm text-gray-500">
                      Sorted by <strong>Relevance</strong>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filtered.filter(job => !job.isAdmin).slice(0, visible).map((job) => (
                      <div
                        key={job.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                      >
                        <div className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <div className="bg-gray-100 rounded-md p-3">
                                  <Briefcase className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                                  <p className="text-sm text-gray-500">
                                    {job.company} • {job.location}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 flex items-center gap-2 flex-wrap">
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-600">
                                  {job.experience}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-600">
                                  {job.type}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full border border-gray-300 text-gray-600">
                                  {job.category}
                                </span>
                                {job.skills.slice(0, 3).map((s) => (
                                  <span
                                    key={s}
                                    className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800"
                                  >
                                    {s}
                                  </span>
                                ))}
                              </div>
                              <div className="mt-4 text-sm text-gray-500 flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {timeAgo(job.postedAt)}
                                </span>
                                {job.salary && (
                                  <span className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    {job.salary}
                                  </span>
                                )}
                              </div>
                              <div className="mt-4">
                                <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <button
                                onClick={() => handleViewApply(job)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                              >
                                View & Apply
                              </button>
                              <button
                                onClick={() => toggleSave(job.id)}
                                className="px-4 py-2 bg-transparent text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md font-medium text-sm transition-colors duration-200"
                              >
                                {saved[job.id] ? "Saved" : "Save"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filtered.filter(job => !job.isAdmin).length === 0 && (
                    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 text-center">
                      <p className="text-sm text-gray-500">
                        No jobs matched your search. Try adjusting filters or keywords.
                      </p>
                    </div>
                  )}
                  {visible < filtered.filter(job => !job.isAdmin).length && (
                    <div className="text-center mt-4">
                      <button
                        onClick={() => setVisible((v) => v + 4)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        Load more
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}