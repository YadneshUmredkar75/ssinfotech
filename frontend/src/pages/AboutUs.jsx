import { Button } from "../components/UI/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/UI/Card";
import { Badge } from "../components/UI/Badge";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  Star,
  Linkedin,
  Mail,
  GraduationCap,
  Building,
  TrendingUp,
  Heart,
  CheckCircle,
  Calendar
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2018", event: "SS Infotech Founded", description: "Started with a vision to bridge the gap between education and industry" },
    { year: "2019", event: "First 100 Students", description: "Successfully trained and placed our first batch of 100 students" },
    { year: "2020", event: "Industry Partnerships", description: "Established partnerships with 50+ companies for placements" },
    { year: "2021", event: "AI/ML Program Launch", description: "Introduced cutting-edge AI and Machine Learning courses" },
    { year: "2022", event: "2000+ Graduates", description: "Reached milestone of training over 2000 students" },
    { year: "2023", event: "Corporate Training", description: "Expanded to corporate training and upskilling programs" },
    { year: "2024", event: "5000+ Success Stories", description: "Celebrating 5000+ successful placements and counting" }
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director & Lead Trainer",
      specialization: "Full Stack Development, Cloud Computing",
      experience: "15+ years",
      education: "PhD Computer Science, IIT Bombay",
      image: "/placeholder.svg",
      description: "Expert in modern web technologies with extensive industry experience in leading tech companies."
    },
    {
      name: "Priya Mehta",
      role: "AI/ML Program Head",
      specialization: "Artificial Intelligence, Data Science",
      experience: "12+ years",
      education: "M.Tech AI, IIIT Pune",
      image: "/placeholder.svg",
      description: "Former senior data scientist with proven track record in ML model deployment and optimization."
    },
    {
      name: "Amit Sharma",
      role: "Cloud Computing Expert",
      specialization: "AWS, Azure, DevOps",
      experience: "10+ years",
      education: "B.Tech CSE, NIT Nagpur",
      image: "/placeholder.svg",
      description: "Certified cloud architect with hands-on experience in enterprise cloud solutions."
    },
    {
      name: "Sneha Patil",
      role: "Career Counselor",
      specialization: "Placement Assistance, Soft Skills",
      experience: "8+ years",
      education: "MBA HR, Symbiosis Pune",
      image: "/placeholder.svg",
      description: "Dedicated placement specialist helping students achieve their career goals."
    }
  ];

  const achievements = [
    { icon: Users, label: "Students Trained", value: "5000+" },
    { icon: Building, label: "Partner Companies", value: "200+" },
    { icon: Award, label: "Placement Success Rate", value: "85%" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
    { icon: BookOpen, label: "Programs Offered", value: "15+" },
    { icon: TrendingUp, label: "Average Salary Hike", value: "150%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from curriculum design to student support."
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make is focused on what's best for our students' career growth."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "We believe in lifelong learning and constantly update our programs with latest technologies."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster a collaborative environment where students and faculty work together towards success."
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-brand-accent text-white">About SS Infotech</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Empowering Students for a
              <span className="text-brand-accent"> Digital Future</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Since 2018, SS Infotech has been at the forefront of technology education, 
              transforming students into industry-ready professionals through innovative training programs and dedicated placement support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white rounded-t-lg">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To bridge the gap between academic learning and industry requirements by providing 
                  comprehensive, practical, and industry-relevant training programs that empower students 
                  with the skills and confidence needed to excel in the technology sector.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Industry-aligned curriculum",
                    "Hands-on practical training",
                    "100% placement assistance",
                    "Continuous skill development"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-blue" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-br from-brand-accent to-yellow-500 text-white rounded-t-lg">
                <Eye className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To become the leading technology training institute in India, recognized for our innovative 
                  teaching methodologies, exceptional placement records, and our contribution to building 
                  a skilled workforce for the digital economy.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Market leader in tech education",
                    "Global recognition and partnerships",
                    "Innovation in teaching methods",
                    "Sustainable career growth"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-brand-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-brand-blue text-white">Our Achievements</Badge>
            <h2 className="text-4xl font-bold text-foreground">Numbers That Speak</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our success is measured by the success of our students and their career achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <achievement.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-blue">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-brand-accent text-white">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-foreground">Milestones & Growth</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small training center to a leading tech education institute - our journey of excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-brand-blue/20"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 space-y-1 md:px-8">
                    <Card className={`border-0 shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="h-4 w-4 text-brand-blue" />
                          <Badge className="bg-brand-blue text-white">{milestone.year}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-brand-blue rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-brand-blue text-white">Our Faculty</Badge>
            <h2 className="text-4xl font-bold text-foreground">Expert Trainers & Mentors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry professionals with years of real-world experience and passion for teaching
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-brand-blue/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-brand-blue font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.education}</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Experience: </span>
                      <span className="text-muted-foreground">{member.experience}</span>
                    </div>
                    <div>
                      <span className="font-medium">Specialization: </span>
                      <span className="text-muted-foreground">{member.specialization}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-brand-accent text-white">Our Values</Badge>
            <h2 className="text-4xl font-bold text-foreground">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide everything we do at SS Infotech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-brand-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Join the SS Infotech Family</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of our growing community of successful professionals. Start your journey with us today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/90 text-white">
              Apply for Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}