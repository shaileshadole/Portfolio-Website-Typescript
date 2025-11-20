import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Server,
  Smartphone,
  ExternalLink,
  ChevronDown,
  User,
  Briefcase,
  Award,
  BookOpen,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ["Java", "C", "JavaScript", "TypeScript", "Python"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
    tools: ["VS Code", "Docker", "Git", "GitHub", "Postman", "NPM"],
  };

  const projects = [
    {
      title: "ATM Services",
      description:
        "A comprehensive ATM simulation system built with MERN Stack featuring user authentication, transaction processing, and account management.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://atm-services-shailesh.netlify.app/",
      features: [
        "User Authentication",
        "Transaction Processing",
        "Account Management",
        "Real-time Updates",
      ],
    },
    {
      title: "PartsNPrice",
      description:
        "A component tracking system for EXTC projects that manages parts inventory, pricing, and project details efficiently.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://partsnprice-shailesh.vercel.app/",
      features: [
        "Component Tracking",
        "Price Management",
        "Project Details",
        "Inventory Control",
      ],
    },
    {
      title: "WeFund",
      description:
        "A modern crowdfunding platform built with MERN Stack enabling users to create campaigns, donate, and track funding progress.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "wefund-shailesh.vercel.app/",
      features: [
        "Campaign Creation",
        "Payment Integration",
        "Progress Tracking",
        "User Profiles",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-[#00ffee]">SA</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize ${
                        activeSection === item
                          ? "text-[#00ffee] border-b-2 border-[#00ffee]"
                          : "text-gray-300 hover:text-[#00ffee]"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-[#00ffee] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00ffee] transition-colors capitalize w-full text-left"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[#00ffee]/5"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[#00ffee] bg-clip-text text-transparent">
              Shailesh Anil Adole
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              B.E. Computer Science Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer specializing in MERN Stack with expertise in
              DSA, 100+ LeetCode problems solved, and a passion for building
              scalable web applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-[#00ffee] text-gray-900 font-semibold rounded-lg hover:bg-[#00ffee]/90 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-[#00ffee] text-[#00ffee] font-semibold rounded-lg hover:bg-[#00ffee] hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              <a
                href="https://drive.google.com/file/d/1HaolfX1NGfSbhUQrH309u-iNYvwaq2yo/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown
              size={32}
              className="text-[#00ffee] mx-auto cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#00ffee]">About Me</h2>
            <div className="w-20 h-1 bg-[#00ffee] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Computer Science Engineer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineer with a strong
                foundation in Data Structures and Algorithms. Having solved over
                100 LeetCode problems, I enjoy tackling complex programming
                challenges and finding elegant solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My expertise spans across full-stack development with the MERN
                stack, where I've built several production-ready applications.
                I'm proficient in both frontend and backend development, always
                striving to create scalable and user-friendly solutions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-[#00ffee]" size={20} />
                  <span className="text-gray-300">B.E. Computer Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="text-[#00ffee]" size={20} />
                  <span className="text-gray-300">100+ LeetCode</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-[#00ffee]" size={20} />
                  <span className="text-gray-300">Full-Stack Dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-[#00ffee]" size={20} />
                  <span className="text-gray-300">MERN Stack</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold mb-4 text-[#00ffee]">
                Quick Facts
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <User size={16} className="text-[#00ffee]" />
                  <span className="text-gray-300">Full-Stack Developer</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Code size={16} className="text-[#00ffee]" />
                  <span className="text-gray-300">Java & C Programming</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Database size={16} className="text-[#00ffee]" />
                  <span className="text-gray-300">Database Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Server size={16} className="text-[#00ffee]" />
                  <span className="text-gray-300">Backend Architecture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Smartphone size={16} className="text-[#00ffee]" />
                  <span className="text-gray-300">Responsive Design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#00ffee]">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-[#00ffee] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive set of technical skills across the full
              development stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <Code className="text-[#00ffee] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Programming
              </h3>
              <ul className="space-y-2">
                {skills.programming.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 hover:text-[#00ffee] transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <Smartphone className="text-[#00ffee] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">
                Frontend
              </h3>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 hover:text-[#00ffee] transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <Server className="text-[#00ffee] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">Backend</h3>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 hover:text-[#00ffee] transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <Database className="text-[#00ffee] mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4 text-white">Tools</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 hover:text-[#00ffee] transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#00ffee]">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-[#00ffee] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my major projects showcasing full-stack
              development skills
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-[#00ffee]/50 transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#00ffee] transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={20}
                        className="text-gray-400 group-hover:text-[#00ffee] transition-colors"
                      />
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#00ffee] mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-400">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-[#00ffee]/10 text-[#00ffee] rounded-full border border-[#00ffee]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#00ffee]">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-[#00ffee] mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              exciting projects. Let's connect and discuss how we can work
              together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
          {/* <div className="grid md:grid-cols-3 gap-8"> */}
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <Mail className="text-[#00ffee] mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-300">adoleshailesh2@gmail.com</p>
            </div>

            {/* <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <Phone className="text-[#00ffee] mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
              <p className="text-gray-300">+91 9876543210</p>
            </div> */}

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00ffee]/50 transition-colors">
              <MapPin className="text-[#00ffee] mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Location
              </h3>
              <p className="text-gray-300">India</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/shaileshadole"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-[#00ffee] hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shailesh-adole-01306a303/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-[#00ffee] hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adoleshailesh2@gmail.com"
              className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-[#00ffee] hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Shailesh Anil Adole. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
