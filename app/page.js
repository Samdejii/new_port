'use client';

import './globals.css';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentAnnotation, setCurrentAnnotation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnotation((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navigateTo = (page) => {
    if (page === currentPage || isTransitioning) return;
    setIsTransitioning(true);
    setMobileMenuOpen(false);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const projects = [
    {
      //title: "WVSU Drone ML Project",
      //description: "Full-stack online store with real-time inventory, payment integration, and admin dashboard.",
      tags: ["Python", "Node.js", "ML"],
      type: "Drone ML Project",
      image: "/IMG_0124.png",
      demoLink: "https://drive.google.com/drive/folders/1S1Wz0Fzu-P5l1ad8D5DEX3W0u_t2-A2A?usp=sharing",
      codeLink: "https://github.com/Samdejii/DJI-Drone---WVSU-Project",
      liveLink: null
    },
    {
      //title: "Interior Design",
      //description: "Full-stack online store with real-time inventory, payment integration, and admin dashboard.",
      tags: ["PowerBI", "DAX", "UI"],
      type: "Data Analysis",
      image: "/Screenshot 2026-03-10 012416.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/Sales-Performance-Dashboard",
      liveLink: null
    },
    {
      //title: "Previous Portfolio",
      //description: "Interactive data visualization tool with live updates and custom charts.",
      tags: ["React", "Node.js", "TypeScript"],
      type: "Frontend Development",
      image: "/Screenshot 2026-02-20 171314.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/port",
      liveLink: "https://adesam-portfolio.netlify.app/"
    },
    {
      //title: "Famsec.",
      //description: "SaaS platform using GPT-4 API to generate marketing copy and blog posts.",
      tags: ["Next.js", "TypeScript"],
      type: "Frontend Development",
      image: "/Screenshot 2026-02-20 171340.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/chilld",
      liveLink: "https://rnext.netlify.app/"
    },
    {
      //title: "Global Missions Board",
      //description: "SaaS platform using GPT-4 API to generate marketing copy and blog posts.",
      tags: ["React", "Node.js", "TypeScript"],
      type: "Frontend Development",
      image: "/Screenshot 2026-02-20 171422.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/gmbnbc",
      liveLink: "https://global-missions-board.netlify.app/"
    },
    {
      //title: "Cloud Management",
      //description: "Interactive data visualization tool with live updates and custom charts.",
      tags: ["HTML", "CSS", "Bootstrap"],
      type: "Frontend Development",
      image: "/Screenshot 2026-02-20 171439.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/cloudm",
      liveLink: "https://cloud-management8.netlify.app/"
    },
    {
      //title: "Techview",
      //description: "Full-stack online store with real-time inventory, payment integration, and admin dashboard.",
      tags: ["HTML", "CSS", "Bootstrap"],
      type: "Frontend Development",
      image: "/Screenshot 2026-02-20 171458.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/techvue",
      liveLink: "https://trialtechvue.netlify.app/"
    },
    {
      //title: "Modal",
      //description: "SaaS platform using GPT-4 API to generate marketing copy and blog posts.",
      tags: ["React", "Node.js", "TypeScript"],
      type: "Frontend Development",
      image: "/Screenshot 2026-02-20 171519.png",
      demoLink: null,
      codeLink: "https://github.com/Samdejii/modaltest",
      liveLink: "https://modal-test56.netlify.app/"
    },
    {
      //title: "Agentic AI Digital Twin",
      //description: "Interactive data visualization tool with live updates and custom charts.",
      tags: ["React", "Tailwind", "Agentic AI"],
      type: "Research",
      image: "/Screenshot 2025-11-30 190743.png",
      demoLink: null,
      codeLink: null,
      liveLink: null,
    },
  ];

  const skills = [
    { name: "Frontend", items: "React, Next.js, TypeScript, Tailwind" },
    { name: "Data Analysis", items: "Python, SQL, Postgres, Pandas, NumPy, Power BI, Looker" },
    { name: "AI and Machine Learning", items: "PyTorch, CLIP models, Gen AI fundamentals" },
    { name: "Cloud", items: "AWS fundamentals and cloud architecture concepts, Docker, CI/CD, Vercel, Netlify, CTF's" },
    { name: "Robotics", items: "DJI Phanthom 4 Drone, Go2 Pro Robot Dog, Multispectral RGB image processing [using .tif images]" },
    { name: "Research", items: "Academic Research, Conference Presentation, Conference Session Chair [AIR-RES 2025 Springer Nature, Las Vegas], e.t.c" },
  ];

  const experiences = [
    {
      role: "Teaching Assistant",
      company: "West Virginia State University",
      period: "Jan 2024 – Present",
      logo: "west-virginia-state-university-logo-png_seeklogo-439969.png",
      bullets: [
        "Teaching C and Java programming to approximately 20 undergraduate students using the zyBooks interactive platform.",
        "Guiding students through programming exercises, debugging, and core computer science concepts.",
        "Supporting lab sessions and reinforcing best practices in coding and problem-solving.",
        "Assisting students with troubleshooting syntax, logic errors, and development workflows.",
      ],
    },
    {
      role: "Research Assistant",
      company: "West Virginia State University",
      period: "Sep 2024 – Present",
      logo: "west-virginia-state-university-logo-png_seeklogo-439969.png",
      bullets: [
        "Developing and evaluating ML models for anomaly detection in large scale datasets.",
        "Automating feature engineering and preprocessing pipelines for training workflows.",
        "Designing evaluation frameworks to measure model accuracy,drift, and reliability.",
        "Collaborating on research to application ML workflows.",
      ],
    },
    {
      role: "Jr. Software Engineer",
      company: "Metro Innovation Hub",
      period: "Nov 2023 – Aug 2024",
      logo: "images.png",
      bullets: [
        "Developed Python automation scripts for data processing tasks.",
        "Supported backend tools and internal systems.",
        "Produced concise summaries of results for stakeholders and research leadership, translating findings into action items",
      ],
    },
  ];

  const education = [
    {
      degree: "Masters in Computer Science",
      school: "West Virginia State University",
      period: "Sep 2024 – May 2026",
      logo: "west-virginia-state-university-logo-png_seeklogo-439969.png",
      description: "• GPA: 3.9/4.0 • IBM Masters Fellowship Recipient",
    },
    {
      degree: "Bachelors in Computer Science",
      school: "Bowen University",
      period: "Sep 2016 – May 2020",
      logo: "Podium-Bowen-Logo-e1572367768365.jpg",
      description: "• GPA: 3.5/5.0",
    },
  ];

  const certifications = [
    {
      name: "Wild Weird SecureWV 15 Conference",
      issuer: "SecureWV",
      date: "2024 - Selected participant and presenter at Wild Weird SecureWV 15 Conference",
      credentialId: "",
    },
    {
      name: "IBM Masters Fellowship",
      issuer: "IBM",
      date: "2025 - Nationally competitive fellowship for academic excellence in CS/AI • Research funding",
      credentialId: "",
    },
    {
      name: "30th Annual NSM Research Symposium",
      issuer: "West Virginia State University",
      date: "2025 - Selected participant in leadership development program for WVSU HBCU scholars",
      credentialId: "",
    },
    {
      name: "6th ANNUAL National HBCU Blockchain, FinTech, and AI Conference",
      issuer: "North Carolina A&T State University",
      date: "2025 - Nationally competitive fellowship for academic excellence in CS/AI • Research funding",
      credentialId: "",
    },
    {
      name: "AI Revolution: Research, Ethics, and Society (AIR-RES 2025)",
      issuer: "Springer Nature",
      date: "2025 - Session Chair and Presenter at AIR-RES Conference, Springer Nature, Las Vegas",
      credentialId: "",
    },
    {
      name: "Yellow H@cker",
      issuer: "1890 Universities Foundation",
      date: "2025 - Participated and represented WVSU at a Hackathon at the 1890 Universities Foundation Cyber & AI Games for Agriculture, Washington DC, September 9th",
      credentialId: "",
    },
    {
      name: "Thurgood Marshall College Fund Leadership Institute",
      issuer: "TMCF",
      date: "2025 - Selected participant in leadership development program for HBCU scholars",
      credentialId: "",
    },
    {
      name: "President's List",
      issuer: "West Virginia State University",
      date: "2026 - West Virginia State University - Recognized for getting a 4.0 GPA",
      credentialId: "",
    },
    {
      name: "Generative AI Fundamentals",
      issuer: "Databricks Academy",
      date: "2026",
      credentialId: "https://credentials.databricks.com/c5157946-d760-409f-aa7e-4a42fff16139#acc.Qhb3JyNx",
    },
    // Add more certifications here
  ];

  // Recent LinkedIn Posts - You can update these with your actual posts
  const recentPosts = [
    {
      title: "Presidents List - Fall 2025",
      excerpt: "West Virginia State University",
      date: "Jan 2026",
      image: "image.png",
      link: "https://www.linkedin.com/in/samuelade007/recent-activity/all/"
    },
    {
      title: "Thurgood Marshall College Fund Leadership Institute",
      excerpt: "Washignton DC",
      date: "Nov 2025",
      image: "image copy 2.png",
      link: "https://www.linkedin.com/in/samuelade007/recent-activity/all/"
    },
    {
      title: "6th National HBCU Blockchain, Fintech, and AI conference",
      excerpt: "North Carolina A&T",
      date: "Oct 2025",
      image: "image copy.png",
      link: "https://www.linkedin.com/in/samuelade007/recent-activity/all/"
    },
  ];

  // Tools/Skills icons for About page
  const tools = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Ollama", icon: "https://avatars.githubusercontent.com/u/151674099?s=200&v=4" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen bg-white text-gray-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigateTo('home')}
              className="text-2xl sm:text-4xl font-semibold hover:opacity-80 transition-opacity"
            >
              <span className="text-gray-900">Sam</span>
              <span className="text-rose-500">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
              <button onClick={() => navigateTo('home')} className={`text-sm transition-colors ${currentPage === 'home' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>Home</button>
              <button onClick={() => navigateTo('about')} className={`text-sm transition-colors ${currentPage === 'about' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>About</button>
              <button onClick={() => navigateTo('experience')} className={`text-sm transition-colors ${currentPage === 'experience' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>Experience</button>
              <button onClick={() => navigateTo('education')} className={`text-sm transition-colors ${currentPage === 'education' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>Education</button>
              <button onClick={() => navigateTo('projects')} className={`text-sm transition-colors ${currentPage === 'projects' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>Projects</button>
              <button onClick={() => navigateTo('posts')} className={`text-sm transition-colors ${currentPage === 'posts' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>Posts</button>
              <button onClick={() => navigateTo('contact')} className={`text-sm transition-colors ${currentPage === 'contact' ? 'text-emerald-600 font-medium' : 'text-gray-600 hover:text-emerald-600'}`}>Contact</button>
              <a href="/T_Resume.pdf" download className="px-4 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-all duration-300 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 space-y-1 border-t border-gray-100 pt-3">
              <button onClick={() => navigateTo('home')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'home' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>Home</button>
              <button onClick={() => navigateTo('about')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'about' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>About</button>
              <button onClick={() => navigateTo('experience')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'experience' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>Experience</button>
              <button onClick={() => navigateTo('education')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'education' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>Education</button>
              <button onClick={() => navigateTo('projects')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'projects' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>Projects</button>
              <button onClick={() => navigateTo('posts')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'posts' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>Posts</button>
              <button onClick={() => navigateTo('contact')} className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${currentPage === 'contact' ? 'bg-emerald-50 text-emerald-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>Contact</button>
              <a href="/your-cv.pdf" download className="block w-full text-left px-4 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-all">
                Download CV
              </a>
            </div>
          )}
        </div>
      </nav>
      
      {/* Page Container */}
      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Home Page */}
        {currentPage === 'home' && (
          <div className="min-h-screen flex items-center pt-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT COLUMN: name/text with subtle grid behind */}
                <div className="relative space-y-6">

                  {/* Grid decoration */}
                  <div
                    aria-hidden="true"
                    className="absolute pointer-events-none select-none overflow-hidden"
                    style={{ top: '5px', left: '-10px', width: '640px', height: '380px', zIndex: 0 }}
                  >
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `linear-gradient(to right, rgba(2, 36, 24, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 36, 24, 0.25) 1px, transparent 1px)`,
                      backgroundSize: '60px 60px',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'radial-gradient(ellipse 70% 70% at 60% 60%, transparent 40%, white 75%)',
                    }} />
                  </div>

                  {/* All content sits above the grid (z-10) */}
                  <div className="relative z-10">
                    {/* Status Badge */}
                    <div className="inline-block mb-6">
                      <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-xs font-medium">
                        Available for new projects
                      </span>
                    </div>
                    
                    {/* Name */}
                    <div className="mb-6">
                      <h1 className="text-6xl lg:text-5xl font-semi-bold leading-none text-gray-900 mb-2">
                        Samuel Adewumi
                      </h1>
                      <h1 className="text-3xl lg:text-4xl leading-none text-emerald-600" style={{ fontFamily: 'Satisfy, cursive' }}>
                        Software Engineer
                      </h1>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2 mb-6">
                      <button 
                        onClick={() => navigateTo('projects')}
                        className="group px-6 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-all duration-300 flex items-center gap-2"
                      >
                        View My Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => navigateTo('contact')}
                        className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                      >
                        Get In Touch
                      </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 items-center pt-2">
                      <a href="https://github.com/samdejii" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://linkedin.com/in/samuelade007" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      {/*<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="Twitter">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.26H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>*/}
                    </div>
                  </div>
                </div>

                {/* Right Side - Photo with Rotating Dashed Circle */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative" style={{ width: '370px', height: '370px' }}>
                    
                    {/* Rotating Dashed Circle */}
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{ 
                        animation: 'spin 30s linear infinite',
                        border: '3px dashed transparent',
                        backgroundImage: `conic-gradient(
                          from 0deg,
                          #10b981 0deg 25deg,
                          transparent 25deg 40deg,
                          #10b981 40deg 80deg,
                          transparent 80deg 95deg,
                          #10b981 95deg 110deg,
                          transparent 110deg 135deg,
                          #10b981 135deg 155deg,
                          transparent 155deg 180deg,
                          #10b981 180deg 215deg,
                          transparent 215deg 235deg,
                          #10b981 235deg 245deg,
                          transparent 245deg 270deg,
                          #10b981 270deg 295deg,
                          transparent 295deg 315deg,
                          #10b981 315deg 345deg,
                          transparent 345deg 360deg
                        )`,
                        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 2px))',
                        mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 2px))'
                      }}
                    />
                    
                    {/* Photo */}
                    <div className="absolute inset-3 rounded-full overflow-hidden border-4 shadow-2xl">
                      <div className="relative w-full h-full">
                        <img src="/unnamed.jpg" alt="Samuel Adewumi" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/20" />
                      </div>
                    </div>

                    {/* Annotations */}
                    <div className={`pointer-events-none absolute -top-8 -left-8 transition-all duration-700 ${currentAnnotation === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="flex items-start gap-1">
                        <div className="text-right"><p className="text-gray-700 font-handwriting text-base whitespace-nowrap">Troubleshooting & Debugging</p></div>
                        <svg className="w-12 h-12 text-gray-600" viewBox="0 0 100 100">
                          <defs><marker id="a1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="currentColor" /></marker></defs>
                          <path d="M 10 10 Q 40 5, 60 25" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#a1)" />
                        </svg>
                      </div>
                    </div>

                    <div className={`pointer-events-none absolute -top-8 -right-8 transition-all duration-700 ${currentAnnotation === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="flex items-start gap-1">
                        <svg className="w-14 h-14 text-emerald-500" viewBox="0 0 100 100">
                          <defs><marker id="a2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="currentColor" /></marker></defs>
                          <path d="M 80 20 Q 60 10, 45 30" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#a2)" />
                        </svg>
                        <p className="text-emerald-600 font-handwriting text-base whitespace-nowrap">Analysis & Visualization</p>
                      </div>
                    </div>

                    <div className={`pointer-events-none absolute -bottom-8 -left-8 transition-all duration-700 ${currentAnnotation === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="flex items-end gap-1">
                        <p className="text-emerald-600 font-handwriting text-base whitespace-nowrap text-right">Building Systems</p>
                        <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 100 100">
                          <defs><marker id="a3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="currentColor" /></marker></defs>
                          <path d="M 20 80 Q 30 95, 55 75" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#a3)" />
                        </svg>
                      </div>
                    </div>

                    <div className={`pointer-events-none absolute -bottom-8 -right-8 transition-all duration-700 ${currentAnnotation === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                      <div className="flex items-end gap-1">
                        <svg className="w-16 h-16 text-gray-600" viewBox="0 0 100 100">
                          <defs><marker id="a4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="currentColor" /></marker></defs>
                          <path d="M 85 75 Q 70 90, 50 70" stroke="currentColor" strokeWidth="1.5" fill="none" markerEnd="url(#a4)" />
                        </svg>
                        <p className="text-gray-700 font-handwriting text-base whitespace-nowrap">Fundamental System Knowledge</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* About Page */}
        {currentPage === 'about' && (
          <div className="min-h-screen flex items-center pt-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 py-16 w-full">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-gray-900">About Me</h2>
                <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Hey! I'm Sam, I build end to end intelligent systems designing interfaces, architecting data pipelines, 
                      training ML models, and deploying scalable cloud solutions. </p>
                      <p> From frontend experiences to database infrastructure, 
                      I transform complex data into actionable insights through production ready applications. Strong fundamentals 
                      across the stack enable me to independently architect, troubleshoot, and deliver complete solutions that create measurable impact.</p>
                    <p>Building intelligent systems from concept to deployment, and strong system-level fundamentals enable me to independently architect, troubleshoot, and ship complete products from scratch.</p> 
                  </div>
                  
                  {/* Tools I Use */}
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools I Use</h3>
                    <div className="flex gap-4 flex-wrap">
                      {tools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center hover:border-emerald-300 hover:shadow-sm transition-all duration-300 group"
                          title={tool.name}
                        >
                          <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="p-5 bg-white border border-gray-200 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all duration-300 group">
                      <h3 className="text-base font-semibold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">{skill.name}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{skill.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Page */}
        {currentPage === 'experience' && (
          <div className="min-h-screen pt-20 pb-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16 w-full">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-gray-900">Experience</h2>
                <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
              </div>
              <div className="flex gap-12">
                <div className="hidden md:block w-32 shrink-0">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest pt-6">Work</p>
                </div>
                <div className="flex-1 space-y-6">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                            <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg">{exp.role}</p>
                            <p className="text-sm text-gray-500">{exp.company}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-400 whitespace-nowrap shrink-0 pt-1">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Page */}
        {currentPage === 'education' && (
          <div className="min-h-screen pt-20 pb-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16 w-full">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-gray-900">Education</h2>
                <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
              </div>

              {/* Degrees Row */}
              <div className="flex gap-12 mb-12">
                <div className="hidden md:block w-32 shrink-0">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest pt-6">Degrees</p>
                </div>
                <div className="flex-1 space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-400 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                            <img src={edu.logo} alt={edu.school} className="w-10 h-10 object-contain" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-md">{edu.degree}</p>
                            <p className="text-xs text-gray-500">{edu.school}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap shrink-0 pt-1">{edu.period}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Row */}
              <div className="flex gap-12">
                <div className="hidden md:block w-32 shrink-0">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest pt-6">Honors & Certifications</p>
                </div>
                <div className="flex-1">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all duration-300">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{cert.name}</h4>
                        <p className="text-sm text-gray-500 mb-1">{cert.issuer}</p>
                        <p className="text-xs text-gray-400">{cert.date}</p>
                        {cert.credentialId && (
                          <p className="text-xs text-gray-400 mt-1">ID: {cert.credentialId}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Projects Page */}
        {currentPage === 'projects' && (
          <div className="min-h-screen pt-20 pb-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-16 w-full">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-gray-900">Featured Work</h2>
                <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                    <div className="relative w-full h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <h3 className="absolute inset-0 flex items-center justify-center text-white/90 font-bold text-2xl leading-tight text-center px-4">{project.title}</h3>
                      <span className="absolute bottom-3 left-4 px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">{project.type}</span>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 3).map((tag, tagIdx) => (
                          <span key={tagIdx} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full border border-emerald-200">{tag}</span>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2 flex-wrap">
                        {project.demoLink && (
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700 transition-all duration-300">
                            <ExternalLink className="w-3 h-3" />Demo
                          </a>
                        )}
                        {project.codeLink && (
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-xs font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300">
                            <Github className="w-3 h-3" />Code
                          </a>
                        )}
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-xs font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                            <ExternalLink className="w-3 h-3" />Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recent Posts Page */}
        {currentPage === 'posts' && (
          <div className="min-h-screen pt-20 pb-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-16 w-full">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-gray-900">Recent Posts</h2>
                <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
                <p className="text-gray-600 mt-4">Insights and updates from my LinkedIn</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {recentPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Post Image or LinkedIn Logo */}
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-20 h-20 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://www.linkedin.com/in/samuelade007/recent-activity/all/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-all duration-300"
                >
                  View All Posts on LinkedIn
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && (
          <div className="min-h-screen flex items-center pt-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6 w-full">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Let's Work Together</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Have a project in mind? Let's chat about how we can work together to bring your ideas to life.
                </p>
                <div className="flex justify-center gap-4 pt-4 flex-wrap">
                  <a href="mailto:sadewumi@wvstateu.edu" className="group flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-all duration-300">
                    <Mail className="w-4 h-4" />Email Me
                  </a>
                  <a href="https://github.com/Samdejii" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300">
                    <Github className="w-4 h-4" />GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/samuelade007/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
                    <Linkedin className="w-4 h-4" />LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* CSS for spin animation */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}