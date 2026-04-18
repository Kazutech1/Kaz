"use client";

import ScrollPath from "./components/ScrollPath";
import Section from "./components/Section";
import ThemeChanger from "./components/ThemeChanger";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail, Terminal, Cpu, Layers, Zap, Code, Shield, Radio, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";


// Custom Brand Icons
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-8.512m4.464-5.488L20 4"/></svg>
);

const TerminalStatus = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const potentialLogs = [
    "INIT_CORE_PROTOCOLS...",
    "HANDSHAKE_NODE_01: OK",
    "POLLING_DATA_STREAMS...",
    "BUFFER_OVERFLOW_CHECK: PASS",
    "MTU_OPTIMIZED: 1500",
    "LATENCY_MONITOR: 0.2ms",
    "UPLINK_STABLE",
    "REDUNDANCY_SYNCING..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), potentialLogs[Math.floor(Math.random() * potentialLogs.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-8 bottom-32 hidden xl:block z-50 pointer-events-none opacity-20">
      <div className="border border-carbon-700 p-4 bg-carbon-900/80 backdrop-blur-sm w-48 font-mono text-[9px] leading-tight space-y-1">
        <div className="text-accent font-black mb-2 uppercase border-b border-carbon-700 pb-1 flex justify-between">
          <span>Sys_Monitor</span>
          <span className="animate-pulse">●</span>
        </div>
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-carbon-700">[{i}]</span>
            <span className={i === logs.length - 1 ? "text-oxy-100" : "text-carbon-700"}>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


const GithubSection = () => {
  const staticRepos = [
    {
      id: "R_01",
      name: "AGENT_CHALLENGE",
      language: "TYPESCRIPT",
      description: "NOSANA BUILDERS' CHALLENGE: AGENT 101.",
      stargazers_count: 5,
      html_url: "https://github.com/Kazutech1/agent-challenge",
      live: "https://agent-challenge-beta.vercel.app",
      updated_at: "2026.04.14"
    },
    {
      id: "R_02",
      name: "SMARTEDU_IR",
      language: "JAVASCRIPT",
      description: "SMARTEDU INFORMATION RETRIEVAL SYSTEM. NODE.JS AND POSTGRESQL API.",
      stargazers_count: 3,
      html_url: "https://github.com/Kazutech1/smartedu-ir",
      live: "https://smartedu-ir.vercel.app",
      updated_at: "2025.12.10"
    },
    {
      id: "R_03",
      name: "EXCELMIND_CRM",
      language: "TYPESCRIPT",
      description: "NO_DESCRIPTION_PROVIDED_BY_USER. SECURE_NODE.",
      stargazers_count: 2,
      html_url: "https://github.com/Kazutech1/ExcelMind-CRM",
      live: "https://excel-mind-crm.vercel.app",
      updated_at: "2025.09.15"
    },
    {
      id: "R_04",
      name: "FLOWBOARD",
      language: "TYPESCRIPT",
      description: "NO_DESCRIPTION_PROVIDED_BY_USER. SECURE_NODE.",
      stargazers_count: 4,
      html_url: "https://github.com/Kazutech1/FlowBoard",
      live: "https://flow-board-red.vercel.app",
      updated_at: "2025.08.25"
    }
  ];

  return (
    <Section id="github" label="OPEN_SOURCE">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-8xl leading-none mix-blend-difference">GITHUB<br/><span className="text-accent underline decoration-[8px] md:decoration-[16px] underline-offset-[8px]">REPOS</span></h2>
        <a href="https://github.com/Kazutech1" target="_blank" rel="noopener noreferrer" className="brutalist-button hidden md:flex items-center gap-2">
          <GithubIcon size={24} /> VIEW_ALL_ACTIVITY
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {staticRepos.map(repo => (
          <div key={repo.id} className="brutalist-card group hover:border-accent transition-colors block bg-carbon-900 border border-carbon-700 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black mb-2 group-hover:text-accent transition-colors truncate max-w-[250px]">{repo.name}</h3>
                  <span className="text-[10px] bg-carbon-800 text-oxy-200 border border-carbon-700 px-2 py-1 uppercase font-bold">
                    {repo.language}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-carbon-700 group-hover:text-oxy-200 transition-colors">
                  <span className="text-xs font-black">{repo.stargazers_count}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>
              <p className="text-oxy-200/90 font-medium text-sm line-clamp-2 h-10 mb-4">
                {repo.description}
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-carbon-800">
              <div className="flex gap-4">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black text-carbon-700 hover:text-accent transition-colors">
                  <GithubIcon size={14} /> REPO
                </a>
                <a href={repo.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-black text-carbon-700 hover:text-accent transition-colors">
                  <ExternalLink size={14} /> LIVE_SIGNAL
                </a>
              </div>
              <span className="text-[10px] font-black text-carbon-700">UPDATED: {repo.updated_at}</span>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/Kazutech1" target="_blank" rel="noopener noreferrer" className="brutalist-button mt-8 flex md:hidden items-center justify-center gap-2">
        <GithubIcon size={24} /> VIEW_ALL_ACTIVITY
      </a>
    </Section>
  );
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Check if device has touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <main className="relative bg-carbon-900 min-h-screen selection:bg-accent selection:text-white">
      <div className="grain" />
      <div 
        className={`custom-cursor ${hovering ? 'hovering' : ''}`}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
      
      <TerminalStatus />
      <ThemeChanger />
      <ScrollPath />

      
      {/* Hero Section */}
      <Section id="hero" label="SYS_INIT">
        <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: text content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] mb-6 md:mb-8 mix-blend-difference font-black">
                KAZUTO<span className="text-accent">_</span>
              </h1>
            </motion.div>

            <div className="flex flex-col gap-8 mt-8 md:mt-12">
              <div className="border-l-[8px] md:border-l-[12px] border-accent pl-5 md:pl-8">
                <p className="text-xs md:text-sm font-black tracking-widest text-carbon-700 mb-2 md:mb-3 uppercase">Umeh Emmanuel Chibuike</p>
                <p className="text-xl md:text-4xl font-bold uppercase max-w-2xl leading-tight">
                  FULLSTACK DEV<br />
                  <span className="text-carbon-700">REACT · NODE.JS</span> <br />
                  REACT NATIVE.
                </p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-4">
                <div className="flex items-center gap-2 text-carbon-700 text-xs font-black tracking-widest uppercase">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Port Harcourt, Nigeria
                </div>
                <a href="#projects" className="brutalist-button text-sm md:text-lg px-4 md:px-6 py-2 md:py-3">
                  VIEW_PROJECTS <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: profile image */}
          <motion.div
            className="lg:col-span-4 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group p-8">
              {/* animated offset frame — rotates between accent, white, and transparent */}
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full border-[3px] z-0"
                animate={{
                  borderColor: ["#ff3a00", "#ffffff", "#ff3a00", "#ffffff33", "#ff3a00"],
                  top: ["-24px", "-28px", "-20px", "-28px", "-24px"],
                  left: ["-24px", "-20px", "-28px", "-20px", "-24px"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* second animated frame, opposite phase */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full border-[3px] z-0"
                animate={{
                  borderColor: ["#ffffff33", "#ff3a00", "#ffffff", "#ff3a00", "#ffffff33"],
                  bottom: ["-24px", "-20px", "-28px", "-20px", "-24px"],
                  right: ["-24px", "-28px", "-20px", "-28px", "-24px"],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* corner tick top-right */}
              <motion.div
                className="absolute -top-6 -right-6 w-8 h-8 border-t-2 border-r-2 border-oxy-100 z-20"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* corner tick bottom-left */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 border-b-2 border-l-2 border-oxy-100 z-20"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* image */}
              <div className="relative w-56 h-72 sm:w-72 sm:h-[22rem] md:w-96 md:h-[30rem] border-2 border-oxy-100 overflow-hidden z-10 bg-carbon-800">
                <Image
                  src="/profile.jpeg"
                  alt="Kazuto"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />
                <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              </div>
              {/* label tag */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-accent text-white text-[10px] font-black px-3 py-1 z-20 tracking-widest uppercase"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                EMMANUEL.DEV
              </motion.div>
              {/* scan line decoration */}
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-10">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-full h-px bg-oxy-100" style={{ marginTop: `${i * 4.2}%` }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" label="KERNEL_CHECK">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-8xl mb-6 md:mb-8 leading-none">NO BLOAT.<br />JUST SHIP.</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 aspect-square relative border-2 border-carbon-700 bg-carbon-800 shrink-0 group">
                <Image src="/profile.jpeg" alt="Umeh Emmanuel" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="(max-width: 768px) 100vw, 33vw" priority />
                <div className="absolute inset-0 bg-accent mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="space-y-4 md:space-y-6 text-base md:text-xl text-oxy-200 leading-relaxed font-medium">
                <p>
                  FullStack developer with <span className="text-oxy-100 font-bold">3+ years</span> building production web and mobile applications using React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL and React Native.
                </p>
                <p>
                  Proven track record in startup environments — from <span className="text-oxy-100 font-bold">MVP to live product</span> — with strong fundamentals in JavaScript, TypeScript, component architecture, and API integration.
                </p>
                <p>
                  Began writing code before owning a laptop. <span className="text-oxy-100 font-bold">Built production-level apps on a mobile device.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="brutalist-card bg-carbon-800 p-6 md:p-12 overflow-hidden border-accent">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu size={120} />
              </div>
              <h3 className="text-2xl mb-8 text-accent font-black">CORE_MODULES</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Terminal size={18} />, text: "COMPONENT ARCHITECTURE" },
                  { icon: <Layers size={18} />, text: "API INTEGRATION" },
                  { icon: <Zap size={18} />, text: "MOBILE DEVELOPMENT" },
                  { icon: <Globe size={18} />, text: "END-TO-END OWNERSHIP" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-black tracking-tighter hover:text-accent transition-colors">
                    <span className="text-accent">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>


      {/* Projects Section */}
      <Section id="projects" label="DATA_STREAMS">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { id: "01", name: "OSMOS_ACADEMY", tech: "NEXT.JS / SOLANA", desc: "THE ULTIMATE RPG-BASED LEARNING PLATFORM FOR SOLANA DEVELOPERS. EARN XP AND SOULBOUND NFTS.", github: "https://github.com/Kazutech1/superteam-academy", live: "https://superteam-academy-mauve.vercel.app/en", image: "/osmos.png" },
            { id: "02", name: "NEXUZ_STORE", tech: "NEXT.JS / EXPRESS / POSTGRES", desc: "SCALABLE MULTI-TENANT E-COMMERCE INFRASTRUCTURE. AUTOMATED PROVISIONING OF HIGH-PERFORMANCE DIGITAL STOREFRONTS.", github: "#", live: "https://www.nexuz.store/", image: "/nexuz.png" },
            { id: "03", name: "ZUUM_AUDIO", tech: "NEXT.JS / REACT", desc: "AUTONOMOUS MUSIC MARKETPLACE. ENABLING CREATORS TO BUY, SELL, AND DISTRIBUTE DIGITAL AUDIO ASSETS SEAMLESSLY.", github: "#", live: "https://zuum-frontend-one.vercel.app/", image: null },
            { id: "04", name: "HAGGLE_NET", tech: "NEXT.JS / X403 / SOLANA", desc: "AUTONOMOUS AGENTIC MARKETPLACE ON SOLANA. ZERO-HUMAN-INTERACTION BUYING AND SELLING PIPELINES.", github: "#", live: "https://haggle-net.vercel.app/", image: null }
          ].map((proj) => (
            <div key={proj.id} className="brutalist-card group">
              <div className="absolute top-0 right-0 p-4 font-black text-4xl opacity-5 group-hover:opacity-20 transition-opacity">
                {proj.id}
              </div>
              <div className="aspect-video bg-carbon-900 mb-8 border border-carbon-700 flex items-center justify-center overflow-hidden relative group/webview">
                {proj.image ? (
                  <div className="absolute inset-0 w-full h-full z-0">
                    <Image 
                      src={proj.image} 
                      alt={proj.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" 
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none z-0">
                    <iframe 
                      src={proj.live !== "#" ? proj.live : "/"} 
                      loading="lazy"
                      className="w-full h-full border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      sandbox="allow-scripts allow-same-origin"
                      scrolling="no"
                      tabIndex={-1}
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-carbon-900/40 group-hover:bg-carbon-900/0 transition-colors duration-700 pointer-events-none z-10 mix-blend-multiply" />
                <div className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/50 to-transparent z-10 pointer-events-none" />
                <span className="text-4xl font-black text-white/80 group-hover:opacity-0 transition-all duration-700 tracking-tighter uppercase whitespace-pre z-20 pointer-events-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">{proj.name}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-accent text-xs font-black mb-2 block tracking-widest">{proj.tech}</span>
                  <h3 className="text-3xl mb-4">{proj.name}</h3>
                  <p className="text-oxy-200/90 font-medium max-w-sm mb-6">{proj.desc}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-sm hover:text-accent transition-colors">
                  <GithubIcon size={16} /> REPO_ACCESS
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-black text-sm hover:text-accent transition-colors">
                  <ExternalLink size={16} /> LIVE_SIGNAL
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Github Section */}
      <GithubSection />

      {/* Skills Section */}
      <Section id="skills" label="OS_ARSENAL">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "REACT.JS", level: "95%", category: "FRONTEND" },
            { name: "NEXT.JS", level: "95%", category: "FRONTEND" },
            { name: "TYPESCRIPT", level: "90%", category: "LANGUAGE" },
            { name: "REACT NATIVE", level: "88%", category: "MOBILE" },
            { name: "NODE.JS", level: "85%", category: "BACKEND" },
            { name: "MONGODB", level: "85%", category: "DATABASE" },
            { name: "EXPRESS", level: "82%", category: "BACKEND" },
            { name: "FIREBASE", level: "78%", category: "BACKEND" },
            { name: "EXPO", level: "85%", category: "MOBILE" },
            { name: "REST APIS", level: "90%", category: "BACKEND" },
            { name: "GIT / CI/CD", level: "85%", category: "TOOLING" },
            { name: "AWS BASICS", level: "65%", category: "TOOLING" }
          ].map((skill) => (
            <div key={skill.name} className="border border-carbon-700 p-4 md:p-6 hover:border-accent transition-colors group">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <span className="text-[10px] md:text-xs font-black text-accent">{skill.category}</span>
                <span className="text-[9px] md:text-[10px] font-bold text-carbon-700">LVL_{skill.level}</span>
              </div>
              <h4 className="text-base md:text-2xl group-hover:translate-x-2 transition-transform">{skill.name}</h4>
              <div className="h-1 bg-carbon-800 mt-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  className="h-full bg-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" label="TIMELINE_LOGS">
        <div className="space-y-16">
          {[
            {
              company: "FLUXEL TECHNOLOGIES",
              role: "FRONTEND & MOBILE DEVELOPER",
              period: "2024 - PRESENT",
              tags: ["REACT NATIVE", "NEXT.JS", "PRODUCTION"],
              bullets: [
                "BUILT AND MAINTAINED A PRODUCTION REACT NATIVE APP — COMPLEX UI FLOWS FOR STAKING, WALLET MANAGEMENT, AND REWARDS.",
                "DEVELOPED RESPONSIVE WEB DASHBOARDS USING REACT.JS AND NEXT.JS FOR INTERNAL PRODUCT USE.",
                "INTEGRATED BACKEND REST APIS FOR REAL-TIME DATA, AUTHENTICATION, AND PUSH NOTIFICATIONS.",
                "DIAGNOSED AND RESOLVED CRITICAL PRODUCTION ISSUES: AUTH FAILURES, ENV MISCONFIGS, AND CONNECTIVITY BUGS UNDER LIVE TRAFFIC.",
                "CONDUCTED CODE REVIEWS AND ITERATED ON UX FEEDBACK IN A FAST-PACED STARTUP ENVIRONMENT."
              ]
            },
            {
              company: "SELF_TAUGHT",
              role: "FULLSTACK ENGINEER",
              period: "LIFETIME",
              tags: ["B.ENG. MECHANICAL", "SELF-TAUGHT", "MOBILE-FIRST"],
              bullets: [
                "B.ENG. MECHANICAL ENGINEERING — NIGERIA. COMPLETED.",
                "BEGAN WRITING CODE BEFORE OWNING A LAPTOP.",
                "BUILT AND SHIPPED PRODUCTION-LEVEL APPLICATIONS ENTIRELY FROM A MOBILE DEVICE.",
                "TRANSITIONED FULLY INTO SOFTWARE ENGINEERING THROUGH SELF-DIRECTED LEARNING AND REAL PRODUCT BUILDING."
              ]
            }
          ].map((exp, i) => (
            <div key={i} className="relative group pl-4 md:pl-0">
              <div className="absolute left-0 md:-left-12 top-0 bottom-0 w-0.5 md:w-1 bg-carbon-700 group-hover:bg-accent transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                <span className="bg-carbon-800 text-oxy-200 px-3 py-1 text-xs font-black border border-carbon-700 w-fit">{exp.period}</span>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-carbon-700 border border-carbon-700 px-2 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-6xl mb-3 md:mb-4 group-hover:text-accent transition-colors">{exp.company}</h3>
              <p className="text-base md:text-2xl font-black text-carbon-700 mb-4 md:mb-6">{exp.role}</p>
              <ul className="space-y-2 md:space-y-3 max-w-2xl">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm md:text-base text-oxy-200/90 font-medium leading-relaxed">
                    <span className="text-accent font-black shrink-0 mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>


      {/* Contact Section */}
      <Section id="contact" label="SIGNAL_OUT">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-9xl mb-8 md:mb-12 mix-blend-difference">ESTABLISH<br /><span className="text-accent underline decoration-[8px] md:decoration-[20px] underline-offset-[6px] md:underline-offset-[10px]">CONNECTION</span>.</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="brutalist-label group-focus-within:text-accent transition-colors">NAME_IDENTIFIER</label>
                <input type="text" placeholder="TYPE_ALIAS_HERE" className="w-full bg-transparent border-b-2 border-carbon-700 outline-none font-black uppercase text-lg md:text-2xl py-2 focus:border-accent transition-colors" />
              </div>
              <div className="relative group">
                <label className="brutalist-label group-focus-within:text-accent transition-colors">ENCRYPTED_MAIL</label>
                <input type="email" placeholder="umehemmanuel22@gmail.com" className="w-full bg-transparent border-b-2 border-carbon-700 outline-none font-black uppercase text-lg md:text-2xl py-2 focus:border-accent transition-colors" />
              </div>
              <div className="relative group">
                <label className="brutalist-label group-focus-within:text-accent transition-colors">DATA_PACKAGE</label>
                <textarea placeholder="INPUT_MESSAGE_LOGS" rows={4} className="w-full bg-transparent border-b-2 border-carbon-700 outline-none font-black uppercase text-lg md:text-2xl py-2 focus:border-accent transition-colors resize-none" />
              </div>
              <button className="brutalist-button w-full py-4 md:py-8 text-lg md:text-2xl group relative overflow-hidden">
                <span className="relative z-10">SEND_SIGNAL</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>

            <div className="flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <h4 className="text-accent font-black text-sm tracking-widest mb-4">SOCIAL_NODES</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="border border-carbon-700 p-4 hover:border-accent hover:bg-carbon-800 transition-all flex items-center gap-3 font-black">
                      <TwitterIcon size={20} /> X_FEED
                    </a>
                    <a href="#" className="border border-carbon-700 p-4 hover:border-accent hover:bg-carbon-800 transition-all flex items-center gap-3 font-black">
                      <LinkedinIcon size={20} /> LINKEDN
                    </a>
                    <a href="https://github.com/Kazutech1" target="_blank" rel="noopener noreferrer" className="border border-carbon-700 p-4 hover:border-accent hover:bg-carbon-800 transition-all flex items-center gap-3 font-black">
                      <GithubIcon size={20} /> GITHUB
                    </a>
                    <a href="mailto:umehemmanuel22@gmail.com" className="border border-carbon-700 p-4 hover:border-accent hover:bg-carbon-800 transition-all flex items-center gap-3 font-black">
                      <Mail size={20} /> E_MAIL
                    </a>
                  </div>
                </div>
                
                <div className="brutalist-card bg-accent text-white border-black">
                   <h4 className="text-black font-black text-sm tracking-widest mb-2">AVAILABILITY</h4>
                   <p className="text-2xl font-black">OPEN_FOR_CRITICAL_PROJECTS_2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="p-8 md:p-24 border-t border-carbon-700 text-left relative overflow-hidden">
        <div className="absolute right-0 bottom-0 text-[20vw] font-black text-carbon-800/20 leading-none select-none pointer-events-none">
          KAZUTO
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <div className="text-4xl font-black mb-4">KAZUTO<span className="text-accent">.</span>VOID</div>
            <p className="text-carbon-700 font-bold max-w-xs uppercase text-xs tracking-tighter">
              HARDWARE-ACCELERATED PORTFOLIO <br />
              V2.0_INDUSTRIAL_REVISION <br />
              BUILD_772.4_STABLE
            </p>
          </div>
          <div className="text-right font-black uppercase tracking-widest text-oxy-200/40 text-sm">
            © 2026 ALL_SYSTEMS_FUNCTIONAL.
          </div>
        </div>
      </footer>

    </main>
  );
}
