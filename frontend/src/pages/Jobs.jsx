import { useMemo, useState } from "react";
import { Search, MapPin, Briefcase, Clock } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sample job data
const JOBS = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechSolutions Pvt Ltd",
    location: "Pune",
    experience: "0-2 years",
    type: "Full-time",
    skills: ["React", "TypeScript", "Tailwind"],
    postedAt: "2 days ago",
    description:
      "Build and maintain user-facing features using React, collaborate with designers and backend engineers, and ensure high performance and responsiveness of applications. Ideal for candidates with a good understanding of modern frontend tooling.",
  },
  {
    id: "2",
    title: "Junior Backend Engineer",
    company: "DataEdge",
    location: "Remote",
    experience: "1-3 years",
    type: "Full-time",
    skills: ["Node.js", "Express", "Postgres"],
    postedAt: "5 days ago",
    description:
      "Develop and maintain server-side logic, design APIs, and work with relational databases. Good opportunity to work on scalable systems and data-intensive applications.",
  },
  {
    id: "3",
    title: "Machine Learning Intern",
    company: "AiCore Labs",
    location: "Pune",
    experience: "0-1 years",
    type: "Internship",
    skills: ["Python", "TensorFlow", "Pandas"],
    postedAt: "1 week ago",
    stipend: "₹12,000/month",
    description:
      "Assist in building and training ML models, preprocess data, and evaluate model performance. Mentorship provided for hands-on projects.",
  },
  {
    id: "4",
    title: "Cloud Engineer",
    company: "CloudWorks",
    location: "Mumbai",
    experience: "2-4 years",
    type: "Full-time",
    skills: ["AWS", "Docker", "Kubernetes"],
    postedAt: "3 days ago",
    description:
      "Design, deploy, and maintain cloud infrastructure using AWS services. Focus on reliability, scalability, and automation.",
  },
  {
    id: "5",
    title: "Full Stack Developer",
    company: "WebCraft",
    location: "Remote",
    experience: "1-3 years",
    type: "Contract",
    skills: ["React", "Node.js", "GraphQL"],
    postedAt: "2 weeks ago",
    description:
      "Work across the stack to deliver end-to-end features, from UI to backend APIs, with a strong emphasis on developer experience and testability.",
  },
];

// Custom Button component
function Button({ children, onClick, type = "button", disabled = false, variant = "default" }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = variant === "ghost" 
    ? "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-300"
    : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles}`}
    >
      {children}
    </button>
  );
}

// Custom Input component
function Input({ value, onChange, placeholder, type = "text", required = false, className = "" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}

// Custom Badge component
function Badge({ children, variant = "default", className = "" }) {
  const variantStyles = variant === "outline" 
    ? "border border-gray-300 bg-transparent text-gray-600"
    : "bg-gray-100 text-gray-800";
  
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${variantStyles} ${className}`}>
      {children}
    </span>
  );
}

// Custom Card components
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return <div className="p-4 border-b border-gray-200">{children}</div>;
}

function CardTitle({ children }) {
  return <h2 className="text-lg font-semibold">{children}</h2>;
}

function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

// Custom Select components
function Select({ onValueChange, children }) {
  const [value, setValue] = useState("");
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onValueChange(e.target.value);
      }}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
}

function SelectTrigger({ children, className = "" }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

function SelectValue({ placeholder }) {
  return <>{placeholder}</>;
}

function SelectContent({ children }) {
  return <>{children}</>;
}

function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

// Custom Dialog components
function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4">{children}</div>
    </div>
  );
}

function DialogContent({ children }) {
  return <div className="p-6">{children}</div>;
}

function DialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

function DialogTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

function DialogDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

function DialogFooter({ children }) {
  return <div className="flex justify-end mt-4">{children}</div>;
}

function DialogClose({ children, asChild }) {
  return <>{children}</>;
}

// ApplyForm component for job application
function ApplyForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
  const [error, setError] = useState(null);

  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  function handleFileChange(f) {
    setError(null);
    if (!f || f.length === 0) {
      setResume(null);
      return;
    }
    const file = f[0];
    if (!allowed.includes(file.type)) {
      setError("Only PDF, DOC, and DOCX files are allowed.");
      setResume(null);
      return;
    }
    if (file.size > MAX_SIZE) {
      setError("File too large. Max size is 5MB.");
      setResume(null);
      return;
    }
    setResume(file);
  }

  const canSubmit = name.trim() !== "" && email.trim() !== "" && !error;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!canSubmit) return;
        onSubmit({
          name: name.trim(),
          email: email.trim(),
          message: message.trim() || undefined,
          resume,
        });
      }}
      className="space-y-3"
    >
      <div>
        <label className="text-sm">Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="text-sm">Email</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
      </div>
      <div>
        <label className="text-sm">Message</label>
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm">Resume (optional)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => handleFileChange(e.target.files)}
          className="mt-2"
        />
        {resume && <p className="text-sm mt-1">Selected: {resume.name}</p>}
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={!canSubmit}>
          Submit Application
        </Button>
      </div>
    </form>
  );
}

// Main JobSearch component
export default function JobSearch() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(undefined);
  const [experience, setExperience] = useState(undefined);
  const [jobType, setJobType] = useState(undefined);
  const [visible, setVisible] = useState(4);
  const [saved, setSaved] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Memoize unique locations for the location filter
  const locations = useMemo(() => Array.from(new Set(JOBS.map((j) => j.location))), []);

  // Define experience levels
  const experiences = ["0-1 years", "0-2 years", "1-3 years", "2-4 years", "4+ years"];

  // Memoize unique job types
  const types = useMemo(() => Array.from(new Set(JOBS.map((j) => j.type))), []);

  // Filter jobs based on search query and filters
  const filtered = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesQuery = [job.title, job.company, job.skills.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesLocation = location ? job.location === location : true;
      const matchesExperience = experience ? job.experience === experience : true;
      const matchesType = jobType ? job.type === jobType : true;
      return matchesQuery && matchesLocation && matchesExperience && matchesType;
    });
  }, [query, location, experience, jobType]);

  // Toggle save state for a job
  const toggleSave = (id) => {
    setSaved((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ToastContainer />
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Job Search</h1>
        <p className="text-gray-500 mt-2">
          Find relevant roles, filter by experience, location, and type. Apply or save listings for later.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by job title, company, or skills"
              className="pl-10"
            />
          </div>
          <Button
            onClick={() => {
              setQuery("");
              setLocation(undefined);
              setExperience(undefined);
              setJobType(undefined);
            }}
          >
            Reset
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Select
            onValueChange={(val) => setLocation(val === "__any" ? undefined : val)}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={
                  <span className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </span>
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="__any">All</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with Filters */}
        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Refine results to find the best matches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Experience</label>
                  <Select
                    onValueChange={(val) => setExperience(val === "__any" ? undefined : val)}
                  >
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any">Any</SelectItem>
                      {experiences.map((exp) => (
                        <SelectItem key={exp} value={exp}>
                          {exp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Job Type</label>
                  <Select
                    onValueChange={(val) => setJobType(val === "__any" ? undefined : val)}
                  >
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="__any">Any</SelectItem>
                      {types.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Skills</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.from(new Set(JOBS.flatMap((j) => j.skills))).map((skill) => (
                      <Badge key={skill} className="cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Saved <strong>{Object.keys(saved).filter((k) => saved[k]).length}</strong> jobs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>Use specific keywords (e.g., React, Node.js) to narrow results.</li>
                <li>Apply quickly to new listings — add them to your saved list first.</li>
                <li>Filter by experience and location to find the best fit.</li>
              </ul>
            </CardContent>
          </Card>
        </aside>

        {/* Job Listings */}
        <section className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <strong>{filtered.length}</strong> results
            </p>
            <div className="text-sm text-gray-500">
              Sorted by <strong>Relevance</strong>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.slice(0, visible).map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="flex items-start justify-between">
                    <div
                      onClick={() => {
                        setSelectedJob(job);
                        setDialogOpen(true);
                      }}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 rounded-md p-3">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-sm text-gray-500">
                            {job.company} • {job.location}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2 flex-wrap">
                        <Badge variant="outline">{job.experience}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        {job.skills.slice(0, 3).map((s) => (
                          <Badge key={s} className="bg-gray-100 text-gray-800">
                            {s}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 text-sm text-gray-500 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.postedAt}
                        </span>
                        {job.stipend && (
                          <span className="flex items-center gap-1">💰 {job.stipend}</span>
                        )}
                      </div>
                      <div className="mt-4">
                        <p className="text-sm">{job.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Button
                        onClick={() => {
                          setSelectedJob(job);
                          setDialogOpen(true);
                        }}
                      >
                        View & Apply
                      </Button>
                      <Button variant="ghost" onClick={() => toggleSave(job.id)}>
                        {saved[job.id] ? "Saved" : "Save"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filtered.length === 0 && (
            <Card>
              <CardContent>
                <p className="text-sm text-gray-500">
                  No jobs matched your search. Try adjusting filters or keywords.
                </p>
              </CardContent>
            </Card>
          )}
          <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedJob?.title}</DialogTitle>
                <DialogDescription>
                  {selectedJob?.company} • {selectedJob?.location}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline">{selectedJob?.experience}</Badge>
                  <Badge variant="outline">{selectedJob?.type}</Badge>
                  {selectedJob?.skills?.map((s) => (
                    <Badge key={s} className="bg-gray-100 text-gray-800">
                      {s}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h4 className="font-medium">Job Description</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    {selectedJob?.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">How to Apply</h4>
                  <ApplyForm
                    onSubmit={(payload) => {
                      const resumeText = payload.resume
                        ? ` with resume (${payload.resume.name})`
                        : "";
                      toast.success(`Application submitted${resumeText}.`);
                      setDialogOpen(false);
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost" onClick={() => setDialogOpen(false)}>
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {visible < filtered.length && (
            <div className="text-center mt-4">
              <Button onClick={() => setVisible((v) => v + 4)}>Load more</Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}