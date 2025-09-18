import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Label,
  Textarea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/UI/UI";
import {
  Building,
  Calendar,
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  IndianRupee,
  BookOpen,
  Laptop,
  Code,
  Brain,
  Cloud,
  Database,
  Video,
  Globe,
  Smartphone,
  BarChart3,
} from "lucide-react";

export default function TrainingAndPlacements() {
  const trainingPrograms = [
    {
      id: "web-development",
      title: "Web Development",
      subtitle: "Full Stack Web Development",
      icon: Code,
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "500+",
      rating: 4.8,
      price: "₹45,000",
      description:
        "Master modern web development with hands-on projects and industry best practices.",
      highlights: [
        "Frontend: HTML5, CSS3, JavaScript, React.js",
        "Backend: Node.js, Express.js, MongoDB",
        "Tools: Git, VS Code, Postman, Webpack",
        "Deployment: AWS, Netlify, Heroku",
      ],
      curriculum: [
        {
          week: "Week 1-2",
          topic: "HTML5 & CSS3 Fundamentals",
          description: "Semantic HTML, responsive design, CSS Grid & Flexbox",
        },
        {
          week: "Week 3-4",
          topic: "JavaScript Essentials",
          description: "ES6+, DOM manipulation, async programming",
        },
        {
          week: "Week 5-8",
          topic: "React.js Development",
          description: "Components, hooks, state management, routing",
        },
        {
          week: "Week 9-12",
          topic: "Backend with Node.js",
          description: "Express.js, REST APIs, database integration",
        },
        {
          week: "Week 13-16",
          topic: "Database & Authentication",
          description: "MongoDB, JWT, security best practices",
        },
        {
          week: "Week 17-20",
          topic: "Advanced Topics",
          description: "Testing, deployment, performance optimization",
        },
        {
          week: "Week 21-24",
          topic: "Capstone Project",
          description: "Build and deploy a full-stack application",
        },
      ],
      projects: [
        "Responsive Portfolio Website",
        "E-commerce Shopping Cart",
        "Social Media Dashboard",
        "Real-time Chat Application",
      ],
    },
    {
      id: "ai-ml",
      title: "AI/ML",
      subtitle: "Artificial Intelligence & Machine Learning",
      icon: Brain,
      duration: "8 months",
      level: "Intermediate to Advanced",
      students: "300+",
      rating: 4.9,
      price: "₹65,000",
      description:
        "Dive deep into AI and ML with practical implementation and real-world datasets.",
      highlights: [
        "Python programming for data science",
        "Machine Learning algorithms & techniques",
        "Deep Learning with TensorFlow & PyTorch",
        "Natural Language Processing & Computer Vision",
      ],
      curriculum: [
        {
          week: "Week 1-4",
          topic: "Python for Data Science",
          description: "NumPy, Pandas, Matplotlib, data preprocessing",
        },
        {
          week: "Week 5-8",
          topic: "Statistics & Probability",
          description: "Statistical analysis, hypothesis testing",
        },
        {
          week: "Week 9-16",
          topic: "Machine Learning",
          description: "Supervised & unsupervised learning algorithms",
        },
        {
          week: "Week 17-24",
          topic: "Deep Learning",
          description: "Neural networks, CNN, RNN, LSTM",
        },
        {
          week: "Week 25-28",
          topic: "NLP & Computer Vision",
          description: "Text processing, image recognition",
        },
        {
          week: "Week 29-32",
          topic: "MLOps & Deployment",
          description: "Model deployment, monitoring, scaling",
        },
      ],
      projects: [
        "Predictive Analytics Model",
        "Image Classification System",
        "Sentiment Analysis Tool",
        "Recommendation Engine",
      ],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      subtitle: "AWS, Azure & DevOps",
      icon: Cloud,
      duration: "4 months",
      level: "Beginner to Intermediate",
      students: "400+",
      rating: 4.7,
      price: "₹35,000",
      description:
        "Learn cloud platforms and DevOps practices for modern application deployment.",
      highlights: [
        "AWS Core Services (EC2, S3, RDS, Lambda)",
        "Azure fundamentals and services",
        "Docker containerization",
        "CI/CD pipelines and automation",
      ],
      curriculum: [
        {
          week: "Week 1-2",
          topic: "Cloud Fundamentals",
          description: "Cloud concepts, service models, deployment models",
        },
        {
          week: "Week 3-6",
          topic: "AWS Core Services",
          description: "EC2, S3, VPC, IAM, RDS",
        },
        {
          week: "Week 7-10",
          topic: "Azure Platform",
          description: "Virtual machines, storage, networking",
        },
        {
          week: "Week 11-12",
          topic: "Containerization",
          description: "Docker, Kubernetes basics",
        },
        {
          week: "Week 13-14",
          topic: "DevOps Practices",
          description: "CI/CD, Git, Jenkins, monitoring",
        },
        {
          week: "Week 15-16",
          topic: "Certification Prep",
          description: "AWS/Azure certification preparation",
        },
      ],
      projects: [
        "Multi-tier Web Application on AWS",
        "Containerized Microservices",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
      ],
    },
    {
      id: "full-stack",
      title: "Full Stack Development",
      subtitle: "MERN Stack + Advanced Technologies",
      icon: Database,
      duration: "10 months",
      level: "Beginner to Expert",
      students: "600+",
      rating: 4.9,
      price: "₹75,000",
      description:
        "Comprehensive full-stack development with modern frameworks and best practices.",
      highlights: [
        "MERN Stack (MongoDB, Express, React, Node.js)",
        "TypeScript for type-safe development",
        "GraphQL & REST APIs",
        "Testing, deployment & scaling",
      ],
      curriculum: [
        {
          week: "Week 1-4",
          topic: "Frontend Fundamentals",
          description: "HTML, CSS, JavaScript, responsive design",
        },
        {
          week: "Week 5-12",
          topic: "React.js Mastery",
          description: "Components, hooks, context, advanced patterns",
        },
        {
          week: "Week 13-20",
          topic: "Backend Development",
          description: "Node.js, Express, database design",
        },
        {
          week: "Week 21-28",
          topic: "Advanced Topics",
          description: "TypeScript, GraphQL, microservices",
        },
        {
          week: "Week 29-36",
          topic: "Testing & Quality",
          description: "Unit testing, integration testing, TDD",
        },
        {
          week: "Week 37-40",
          topic: "Deployment & Scaling",
          description: "Cloud deployment, performance optimization",
        },
      ],
      projects: [
        "Social Media Platform",
        "E-learning Management System",
        "Real-time Collaboration Tool",
        "Enterprise Dashboard",
      ],
    },
  ];

  const upcomingDrives = [
    {
      company: "Tata Consultancy Services (TCS)",
      logo: "/placeholder.svg",
      date: "March 15, 2024",
      time: "10:00 AM",
      venue: "SS Infotech Campus",
      positions: ["Software Engineer", "System Engineer"],
      package: "₹4.0 - 6.0 LPA",
      eligibility: "All branches with 60%+ aggregate",
      requirements: [
        "B.Tech/B.E/MCA",
        "No active backlogs",
        "Good communication skills",
      ],
      registrationDeadline: "March 12, 2024",
      status: "Registration Open",
      description:
        "TCS is conducting campus recruitment for multiple positions across various technologies.",
    },
    {
      company: "Infosys Limited",
      logo: "/placeholder.svg",
      date: "March 22, 2024",
      time: "9:30 AM",
      venue: "SS Infotech Campus",
      positions: ["System Engineer", "Power Programmer"],
      package: "₹3.5 - 5.2 LPA",
      eligibility: "CSE/IT/ECE with 65%+ aggregate",
      requirements: ["Strong programming skills", "CGPA 6.5+", "No year gaps"],
      registrationDeadline: "March 19, 2024",
      status: "Registration Open",
      description:
        "Infosys campus drive for fresher positions with comprehensive training programs.",
    },
    {
      company: "Wipro Technologies",
      logo: "/placeholder.svg",
      date: "April 5, 2024",
      time: "11:00 AM",
      venue: "SS Infotech Campus",
      positions: ["Project Engineer", "Software Developer"],
      package: "₹3.8 - 5.5 LPA",
      eligibility: "All branches with 55%+ aggregate",
      requirements: [
        "Good analytical skills",
        "Flexible to relocate",
        "Team player",
      ],
      registrationDeadline: "April 2, 2024",
      status: "Coming Soon",
      description:
        "Wipro is hiring for various technology roles with growth opportunities.",
    },
    {
      company: "Accenture",
      logo: "/placeholder.svg",
      date: "April 18, 2024",
      time: "10:30 AM",
      venue: "SS Infotech Campus",
      positions: ["Associate Software Engineer", "Analyst"],
      package: "₹4.5 - 6.5 LPA",
      eligibility: "CSE/IT/ECE with 70%+ aggregate",
      requirements: [
        "Strong communication",
        "Problem-solving skills",
        "Willingness to learn",
      ],
      registrationDeadline: "April 15, 2024",
      status: "Coming Soon",
      description:
        "Accenture campus recruitment for technology and consulting roles.",
    },
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      company: "Microsoft",
      package: "₹18.0 LPA",
      role: "Software Engineer",
      batch: "2023",
      program: "Full Stack Development",
      image: "/placeholder.svg",
      story:
        "SS Infotech's comprehensive training and mock interviews prepared me perfectly for Microsoft's rigorous interview process.",
    },
    {
      name: "Priya Patel",
      company: "Google",
      package: "₹22.0 LPA",
      role: "Software Engineer",
      batch: "2023",
      program: "AI/ML",
      image: "/placeholder.svg",
      story:
        "The AI/ML program and placement guidance helped me crack Google's technical interviews and land my dream job.",
    },
    {
      name: "Amit Kumar",
      company: "Amazon",
      package: "₹16.5 LPA",
      role: "Cloud Engineer",
      batch: "2023",
      program: "Cloud Computing",
      image: "/placeholder.svg",
      story:
        "The cloud computing specialization and industry projects made me stand out in Amazon's interview process.",
    },
  ];

  const placementStats = [
    { label: "Placement Success Rate", value: "85%", icon: Target },
    { label: "Average Package", value: "₹6.2 LPA", icon: IndianRupee },
    { label: "Highest Package", value: "₹22.0 LPA", icon: TrendingUp },
    { label: "Partner Companies", value: "200+", icon: Building },
    { label: "Students Placed", value: "2500+", icon: Users },
    { label: "Average Hike", value: "150%", icon: Award },
  ];

  const partnerCompanies = [
    { name: "TCS", logo: "/placeholder.svg", type: "Mass Recruiter" },
    { name: "Infosys", logo: "/placeholder.svg", type: "Mass Recruiter" },
    { name: "Wipro", logo: "/placeholder.svg", type: "Mass Recruiter" },
    { name: "Accenture", logo: "/placeholder.svg", type: "Consulting" },
    { name: "Microsoft", logo: "/placeholder.svg", type: "Product" },
    { name: "Google", logo: "/placeholder.svg", type: "Product" },
  ];

  const placementProcess = [
    {
      step: "1",
      title: "Pre-Placement Training",
      description:
        "Comprehensive training on aptitude, technical skills, and soft skills",
      duration: "2 weeks",
    },
    {
      step: "2",
      title: "Resume Building",
      description:
        "Professional resume creation and review by industry experts",
      duration: "3 days",
    },
    {
      step: "3",
      title: "Mock Interviews",
      description:
        "Practice sessions with HR, technical, and group discussion rounds",
      duration: "1 week",
    },
    {
      step: "4",
      title: "Company Registration",
      description:
        "Registration for placement drives based on eligibility and interest",
      duration: "Ongoing",
    },
    {
      step: "5",
      title: "Interview Process",
      description: "Actual company interviews with our support and guidance",
      duration: "As scheduled",
    },
    {
      step: "6",
      title: "Offer & Onboarding",
      description: "Offer negotiation support and onboarding assistance",
      duration: "Post-selection",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry Certification",
      description: "Get certified upon successful completion",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry professionals",
    },
    {
      icon: Laptop,
      title: "Hands-on Projects",
      description: "Build real-world applications",
    },
    {
      icon: Globe,
      title: "Placement Assistance",
      description: "100% job placement support",
    },
    {
      icon: BookOpen,
      title: "Updated Curriculum",
      description: "Latest industry-relevant content",
    },
    {
      icon: Video,
      title: "Recorded Sessions",
      description: "Access to all recorded lectures",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-yellow-400 text-white">
              Training & Placements
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Empowering Your
              <span className="text-yellow-400"> Career Journey</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Master cutting-edge technologies with our industry-ready training
              programs and secure your dream job with our 85% placement success
              rate and 200+ partner companies.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-white"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training and placement support to launch your career
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-blue-600/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs designed to make you industry-ready
            </p>
          </div>
          <Tabs defaultValue={trainingPrograms[0].id} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-100 rounded-lg">
              {trainingPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <program.icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{program.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {trainingPrograms.map((program) => (
              <TabsContent
                key={program.id}
                value={program.id}
                className="space-y-8"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-3xl">
                              {program.title}
                            </CardTitle>
                            <CardDescription className="text-lg">
                              {program.subtitle}
                            </CardDescription>
                          </div>
                          <program.icon className="h-12 w-12 text-blue-600" />
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <Clock className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-sm text-gray-600">
                              Duration
                            </div>
                            <div className="font-medium">
                              {program.duration}
                            </div>
                          </div>
                          <div className="text-center">
                            <BarChart3 className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-sm text-gray-600">Level</div>
                            <div className="font-medium text-sm">
                              {program.level}
                            </div>
                          </div>
                          <div className="text-center">
                            <Users className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-sm text-gray-600">
                              Students
                            </div>
                            <div className="font-medium">
                              {program.students}
                            </div>
                          </div>
                          <div className="text-center">
                            <Star className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-sm text-gray-600">Rating</div>
                            <div className="font-medium">
                              {program.rating}/5
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-3">
                            Program Highlights
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {program.highlights.map((highlight, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <BookOpen className="h-5 w-5" />
                          <span>Detailed Curriculum</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {program.curriculum.map((item, index) => (
                            <div
                              key={index}
                              className="border-l-4 border-blue-600 pl-4"
                            >
                              <div className="flex items-center space-x-2 mb-1">
                                <Badge variant="outline">{item.week}</Badge>
                                <h5 className="font-semibold">{item.topic}</h5>
                              </div>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Download Complete Syllabus
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Laptop className="h-5 w-5" />
                          <span>Hands-on Projects</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {program.projects.map((project, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                            >
                              <CheckCircle className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium">
                                {project}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg sticky top-8">
                      <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
                        <CardTitle className="text-2xl">Enroll Now</CardTitle>
                        <div className="text-3xl font-bold">
                          {program.price}
                        </div>
                        <p className="text-blue-100">One-time payment</p>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 xxxxx xxxxx"
                            />
                          </div>
                          <div>
                            <Label htmlFor="education">
                              Educational Background
                            </Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your education" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="btech">
                                  B.Tech/B.E
                                </SelectItem>
                                <SelectItem value="bca">BCA</SelectItem>
                                <SelectItem value="mca">MCA</SelectItem>
                                <SelectItem value="mtech">M.Tech</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="experience">Prior Experience</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="fresher">Fresher</SelectItem>
                                <SelectItem value="0-1">0-1 years</SelectItem>
                                <SelectItem value="1-3">1-3 years</SelectItem>
                                <SelectItem value="3+">3+ years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white">
                          Submit Enrollment
                        </Button>
                        <p className="text-xs text-gray-600 text-center">
                          Our team will contact you within 24 hours
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Placement Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Placement Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself - helping students achieve
              their career goals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {placementStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="bg-blue-600/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Placement Drives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Upcoming Placement Drives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Register for upcoming placement opportunities with top companies
            </p>
          </div>
          <div className="space-y-6">
            {upcomingDrives.map((drive, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={drive.logo}
                          alt={drive.company}
                          className="w-16 h-16 object-contain border rounded-lg p-2"
                        />
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-gray-800">
                            {drive.company}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {drive.positions.map((position, posIndex) => (
                              <Badge
                                key={posIndex}
                                className="bg-blue-600 text-white"
                              >
                                {position}
                              </Badge>
                            ))}
                          </div>
                          <Badge
                            className={
                              drive.status === "Registration Open"
                                ? "bg-green-600 text-white"
                                : "bg-yellow-600 text-white"
                            }
                          >
                            {drive.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600">{drive.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <span>{drive.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span>{drive.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span>{drive.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <IndianRupee className="h-4 w-4 text-gray-600" />
                        <span className="font-medium text-blue-600">
                          {drive.package}
                        </span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">
                          Registration Deadline:{" "}
                        </span>
                        <span className="font-medium">
                          {drive.registrationDeadline}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">
                          Eligibility:
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {drive.eligibility}
                        </p>
                        <div className="space-y-1">
                          {drive.requirements.map((req, reqIndex) => (
                            <div
                              key={reqIndex}
                              className="flex items-center space-x-2 text-sm"
                            >
                              <CheckCircle className="h-3 w-3 text-green-600" />
                              <span className="text-gray-600">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button
                          className={`w-full ${
                            drive.status === "Registration Open"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                          disabled={drive.status !== "Registration Open"}
                        >
                          {drive.status === "Registration Open"
                            ? "Register Now"
                            : "Coming Soon"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories and Placement Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="success-stories" className="space-y-8">
            <div className="text-center">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-100 rounded-lg">
                <TabsTrigger value="success-stories">
                  Success Stories
                </TabsTrigger>
                <TabsTrigger value="placement-process">
                  Placement Process
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="success-stories" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">
                  Student Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Celebrating our alumni who are now working in top companies
                  worldwide
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-gray-800">
                            {story.name}
                          </h3>
                          <p className="text-sm text-gray-600">{story.role}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Company:
                          </span>
                          <span className="font-medium text-blue-600">
                            {story.company}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Package:
                          </span>
                          <span className="font-medium text-green-600">
                            {story.package}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            Program:
                          </span>
                          <span className="font-medium">{story.program}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Batch:</span>
                          <span className="font-medium">{story.batch}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic">
                        "{story.story}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="placement-process" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-gray-800">
                  Our Placement Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive support from training to placement - your
                  success journey with us
                </p>
              </div>
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-blue-600/20"></div>
                <div className="space-y-8">
                  {placementProcess.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex items-start space-x-6"
                    >
                      <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <Card className="flex-1 border-0 shadow-md">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-800">
                              {step.title}
                            </h3>
                            <Badge variant="outline">{step.duration}</Badge>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Placement Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              200+ companies trust us to provide them with skilled and job-ready
              professionals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerCompanies.map((company, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4 text-center space-y-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-12 h-12 object-contain mx-auto"
                  />
                  <div>
                    <div className="font-medium text-sm">{company.name}</div>
                    <div className="text-xs text-gray-600">{company.type}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Join Our Training & Placement Program
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form to enroll in our training programs or register
              for placement drives
            </p>
          </div>
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">
                Training & Placement Registration
              </CardTitle>
              <CardDescription className="text-blue-100">
                Complete your profile to access training and placement
                opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 xxxxx xxxxx" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="education">Education</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btech">B.Tech/B.E</SelectItem>
                      <SelectItem value="bca">BCA</SelectItem>
                      <SelectItem value="mca">MCA</SelectItem>
                      <SelectItem value="mtech">M.Tech</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">Computer Science</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="ece">
                        Electronics & Communication
                      </SelectItem>
                      <SelectItem value="mechanical">Mechanical</SelectItem>
                      <SelectItem value="civil">Civil</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="aggregate">Aggregate Percentage</Label>
                  <Input
                    id="aggregate"
                    type="number"
                    placeholder="Enter percentage"
                  />
                </div>
                <div>
                  <Label htmlFor="passoutYear">Passout Year</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="programInterest">Interested Program</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a training program" />
                  </SelectTrigger>
                  <SelectContent>
                    {trainingPrograms.map((program) => (
                      <SelectItem key={program.id} value={program.id}>
                        {program.title}
                      </SelectItem>
                    ))}
                    <SelectItem value="none">
                      Not interested in training
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="skills">Technical Skills</Label>
                <Textarea
                  id="skills"
                  placeholder="List your technical skills (e.g., Java, Python, React, etc.)"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="experience">Work/Internship Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Describe any work experience or internships (if any)"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="companies">Preferred Companies</Label>
                <Textarea
                  id="companies"
                  placeholder="List companies you're most interested in (optional)"
                  rows={2}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Submit Registration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-600 text-center">
                Our team will review your application and contact you for
                suitable training and placement opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Launch Your Career Today</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our training and placement program to master in-demand skills
              and secure your dream job with top companies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-white"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
