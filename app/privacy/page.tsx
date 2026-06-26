"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowLeft, 
  FaShieldAlt, 
  FaUserCheck, 
  FaFileContract, 
  FaEraser, 
  FaUserShield, 
  FaExclamationTriangle, 
  FaChevronRight,
  FaHome
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: "intro", title: "Introduction & Who We Are", num: "01" },
    { id: "data-collect", title: "What Personal Data We Collect", num: "02" },
    { id: "why-collect", title: "Why We Collect Your Data", num: "03" },
    { id: "legal-basis", title: "Legal Basis for Processing", num: "04" },
    { id: "data-sharing", title: "How We Share Your Data", num: "05" },
    { id: "rights", title: "Your Rights as a Data Principal", num: "06" },
    { id: "retention", title: "Data Retention", num: "07" },
    { id: "security", title: "Security Safeguards", num: "08" },
    { id: "cookies", title: "Cookies & Tracking", num: "09" },
    { id: "children", title: "Children's Data", num: "10" },
    { id: "transfers", title: "Cross-Border Data Transfers", num: "11" },
    { id: "contact", title: "Contact & Grievance Officer", num: "12" },
  ];

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    });

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        sectionRefs.current[sec.id] = el;
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#050d1a] text-white selection:bg-[#00d4ff]/30 selection:text-white relative overflow-hidden font-sans">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_rgba(0,212,255,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(0,184,156,0.04)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.007)_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#050d1a]/85 backdrop-blur-md px-6 py-4">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between">
          <Link href="/?skipIntro=true" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#00b89c] p-0.5 group-hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#050d1a] flex items-center justify-center">
                <Image src="/logo.png" alt="Zelvora logo" fill priority sizes="32px" className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-wide">Zelvora</span>
              <span className="text-[7px] uppercase tracking-[0.2em] text-[#00d4ff]">Technologies Pvt. Ltd.</span>
            </div>
          </Link>
          
          <Link 
            href="/?skipIntro=true"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
          >
            <FaHome size={12} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Strip */}
      <section className="relative border-b border-white/5 bg-[#071324]/50 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 px-3.5 py-1 text-xs text-[#00d4ff] font-semibold shadow-[0_0_15px_rgba(0,212,255,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]"></span>
              </span>
              DPDP Act 2023 Compliant
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl tracking-tight font-display">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-400 max-w-xl">
              Zelvora Industry Labs (`labs.zelvoratech.com`) is a premium tech training platform dedicated to experiential learning. This document outlines our data privacy practices under the DPDP Act 2023.
            </p>
          </div>
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              Effective: <strong className="text-white">June 2025</strong>
            </span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              Full Enforcement: <strong className="text-white">May 2027</strong>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16 lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block lg:self-start lg:sticky lg:top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-6">Document Sections</p>
          <nav className="space-y-1.5 border-l border-white/5 pl-1.5">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`group flex items-start gap-3 w-full text-left pl-3 py-1.5 border-l-2 -ml-[7px] text-xs font-medium transition-all duration-300 ${
                    isActive 
                      ? "border-[#00d4ff] text-[#00d4ff] bg-[#00d4ff]/5 rounded-r-lg" 
                      : "border-transparent text-slate-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span className={`text-[9px] font-mono opacity-60 tracking-wider ${isActive ? "text-[#00d4ff]" : ""}`}>{sec.num}</span>
                  <span className="leading-tight">{sec.title}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Anchors Selector */}
        <div className="lg:hidden sticky top-[72px] z-30 -mx-6 px-6 py-3 border-b border-white/5 bg-[#050d1a]/95 backdrop-blur-md overflow-x-auto flex gap-3 whitespace-nowrap scrollbar-none">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all duration-300 ${
                  isActive 
                    ? "bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.08)]" 
                    : "bg-white/5 border-white/5 text-slate-300 hover:text-white"
                }`}
              >
                {sec.num}. {sec.title}
              </button>
            );
          })}
        </div>

        {/* Policy Sections */}
        <div className="space-y-16 lg:max-w-4xl py-6">
          
          {/* 01. Introduction */}
          <section id="intro" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 01</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display flex items-center gap-2">
              Introduction &amp; Who We Are
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                Zelvora Technologies Pvt. Ltd. (operating the "Zelvora Industry Labs" platform at <Link href="https://labs.zelvoratech.com" target="_blank" className="text-[#00d4ff] hover:underline">labs.zelvoratech.com</Link>) is committed to protecting the privacy and personal data of our students, graduates, and aspiring professionals. This Privacy Policy details our data practices as a Data Fiduciary under the Digital Personal Data Protection (DPDP) Act, 2023. We collect and process personal data solely to provide industry-standard project training, workshops, internships, and certification opportunities.
              </p>
              <p>
                By enrolling in our programs or visiting our site, you acknowledge the collection, storage, and processing of your personal data as outlined in this policy. If you do not agree with these practices, we advise you not to submit any personal information to our platform.
              </p>
            </div>
          </section>

          {/* 02. What Personal Data We Collect */}
          <section id="data-collect" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 02</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              What Personal Data We Collect
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              We collect categories of personal data necessary to provide an immersive tech training environment.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40 backdrop-blur-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0b1b30]">
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[180px]">Data Category</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[240px]">Specific Elements</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider">Purpose of Collection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Identity &amp; Contact</td>
                    <td className="p-4 text-slate-300">Name, email address, phone number, academic background, university details.</td>
                    <td className="p-4 text-slate-400">Account creation, user authentication, direct program communication, and program delivery.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Professional Profile</td>
                    <td className="p-4 text-slate-300">Resume details, Github profile link, LinkedIn URL, coding experience, and technical skill lists.</td>
                    <td className="p-4 text-slate-400">Matching for active startup projects, dedicated internships, and career placement services.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Technical &amp; Usage</td>
                    <td className="p-4 text-slate-300">IP address, browser type, device information, navigation paths, and platform usage metrics.</td>
                    <td className="p-4 text-slate-400">Analytics, platform optimization, system debugging, and site security monitoring.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Academic Progress</td>
                    <td className="p-4 text-slate-300">Assignment submissions, project code, workshop attendance, and grades/assessments.</td>
                    <td className="p-4 text-slate-400">Tracking learning outcomes, issuing certifications, and evaluating student performance.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 03. Why We Collect Your Data */}
          <section id="why-collect" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 03</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Why We Collect Your Data
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                We process your personal data for specific, lawful purposes related directly to providing experiential training programs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                <li>Delivering and managing our software training, bootcamps, and workshops.</li>
                <li>Customizing study tracks and assigning projects matching your skills.</li>
                <li>Facilitating recruitment matching to match you with appropriate hiring teams.</li>
                <li>Issuing verified, blockchain-verifiable digital training credentials and certificates.</li>
                <li>Maintaining network security, preventing fraud, and enforcing platform integrity.</li>
              </ul>
            </div>
          </section>

          {/* 04. Legal Basis for Processing */}
          <section id="legal-basis" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 04</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Legal Basis for Processing
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              In accordance with Section 4 of the DPDP Act 2023, we process personal data based on the following grounds:
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40 backdrop-blur-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0b1b30]">
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[180px]">Processing Activity</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[240px]">Basis (DPDP Act 2023)</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Registration &amp; Access</td>
                    <td className="p-4 text-[#00d4ff] font-semibold">Consent (Section 6)</td>
                    <td className="p-4 text-slate-400">Explicit, informed, unconditional, and unambiguous consent given during registration.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Grading &amp; Assessment</td>
                    <td className="p-4 text-[#00d4ff] font-semibold">Consent / Contractual</td>
                    <td className="p-4 text-slate-400">Processing code files and submission records to execute learning deliverables.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Recruitment &amp; Match</td>
                    <td className="p-4 text-[#00d4ff] font-semibold">Explicit Consent</td>
                    <td className="p-4 text-slate-400">Sharing project stats and resumes with companies based on learner requests.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Platform Safeguards</td>
                    <td className="p-4 text-[#00b89c] font-semibold">Legitimate Use (Section 7)</td>
                    <td className="p-4 text-slate-400">Monitoring network traffic to secure our infrastructure against hacking or abuse.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 05. How We Share Your Data */}
          <section id="data-sharing" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 05</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              How We Share Your Data
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                We value your privacy and do not sell or trade your data. Sharing occurs only under strict constraints:
              </p>
              <ul className="space-y-3 text-slate-300 pl-1">
                <li className="flex items-start gap-3">
                  <FaChevronRight className="text-[#00d4ff] mt-1 flex-shrink-0" size={10} />
                  <span><strong>Startup Partners:</strong> With your consent, your resumes and project code folders are shared with tech startups for potential placement matching.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaChevronRight className="text-[#00d4ff] mt-1 flex-shrink-0" size={10} />
                  <span><strong>Service Providers:</strong> We employ verified subprocessors (hosting services, payment gateways, database endpoints) bound by strict non-disclosure pacts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaChevronRight className="text-[#00d4ff] mt-1 flex-shrink-0" size={10} />
                  <span><strong>Regulatory Compliance:</strong> We disclose data when mandated by legal directives or regulators under the Data Protection Board (DPB) of India.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 06. Your Rights as a Data Principal */}
          <section id="rights" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 06</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Your Rights as a Data Principal
            </h2>
            <p className="text-sm text-slate-300 mb-8">
              Under the DPDP Act 2023, you hold specific statutory rights. We ensure these can be directly exercised.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Card 1 */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaShieldAlt size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Right to Access</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Request a summary of your personal data processed by us and the list of fiduciaries with whom it has been shared.</p>
              </div>

              {/* Card 2 */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaUserCheck size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Right to Correction</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Request the correction of inaccurate details, incomplete profile metrics, or outdated academic info in our systems.</p>
              </div>

              {/* Card 3 */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaEraser size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Right to Erasure</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Request deletion of personal data once the specific learning or certification purpose has been fully satisfied.</p>
              </div>

              {/* Card 4 */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaFileContract size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Withdraw Consent</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Revoke consent for personal data processing at any point. Note that some platform services may become inaccessible.</p>
              </div>

              {/* Card 5 */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaUserShield size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Right to Grievance</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Access swift grievance redressal mechanisms to address queries concerning your digital profile data.</p>
              </div>

              {/* Card 6 */}
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/30 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaExclamationTriangle size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">DPB Complaint</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">If unresolved by our Grievance Officer, you retain the right to file a complaint to the Data Protection Board of India.</p>
              </div>

            </div>
          </section>

          {/* 07. Data Retention */}
          <section id="retention" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 07</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Data Retention
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              We retain personal data only for as long as it aligns with the training purpose or is mandated by legal records.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40 backdrop-blur-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0b1b30]">
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[200px]">Data Category</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[220px]">Retention Period</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider">Justification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Active Account Profile</td>
                    <td className="p-4 text-slate-300">Duration of enrollment + 2 years</td>
                    <td className="p-4 text-slate-400">To handle alumni project followups, resume listings, and ongoing placement matching.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Certifications &amp; Grades</td>
                    <td className="p-4 text-[#00b89c] font-semibold">Permanently</td>
                    <td className="p-4 text-slate-400">To allow continuous background verification by third-party recruiters and partners.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Security &amp; Network Logs</td>
                    <td className="p-4 text-slate-300">180 Days</td>
                    <td className="p-4 text-slate-400">Complying with standard system security protocols and debugging requirements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 08. Security Safeguards */}
          <section id="security" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 08</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Security Safeguards
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                We implement industry-grade technical and organizational security measures to protect personal data from unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                <li>End-to-end encryption (TLS 1.3) for data in transit and AES-256 encryption for data at rest.</li>
                <li>Role-based access controls (RBAC) ensuring only authorized staff can view user data.</li>
                <li>Regular penetration testing and code quality audits to resolve vulnerabilities.</li>
                <li>Firewalls, secure database configurations, and automated daily backups.</li>
              </ul>
            </div>
          </section>

          {/* 09. Cookies & Tracking */}
          <section id="cookies" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 09</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Cookies &amp; Tracking
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              Our training portal uses cookies to manage user sessions and gather telemetry logs.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40 backdrop-blur-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0b1b30]">
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[180px]">Cookie Type</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider">Purpose</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[180px]">Expiry</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Essential Cookies</td>
                    <td className="p-4 text-slate-400">Required for session state, secure login tracking, and terminal console settings.</td>
                    <td className="p-4 text-slate-300">Session / 30 Days</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Analytical Cookies</td>
                    <td className="p-4 text-slate-400">Gathers usage data (Google Analytics) to identify performance blocks and improve layout.</td>
                    <td className="p-4 text-slate-300">1 Year</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Functional Cookies</td>
                    <td className="p-4 text-slate-400">Saves interface layout settings, dark mode configs, and custom terminal variables.</td>
                    <td className="p-4 text-slate-300">90 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10. Children's Data */}
          <section id="children" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 10</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Children's Data
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0]">
              <p>
                Zelvora Industry Labs is intended for university students, graduates, and adults. We do not knowingly process personal data of children under the age of 18 without verifiable parental consent. If we discover that we have inadvertently collected data from a minor without such consent, we will take immediate steps to delete that data from our production databases.
              </p>
            </div>
          </section>

          {/* 11. Cross-Border Data Transfers */}
          <section id="transfers" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 11</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Cross-Border Data Transfers
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0]">
              <p>
                We store and process your personal data primarily on secure cloud servers located within India. We do not transfer personal data outside of India unless the transfer is fully compliant with the guidelines and rules notified by the Central Government under Section 16 of the DPDP Act 2023.
              </p>
            </div>
          </section>

          {/* 12. Contact / Grievance Officer */}
          <section id="contact" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 12</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Contact &amp; Grievance Officer
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your data rights, please contact our designated Grievance Officer:
            </p>
            
            {/* Glowing Glassmorphism Card */}
            <div className="glass-card p-8 rounded-3xl border border-[#00d4ff]/15 bg-gradient-to-br from-[#061217]/90 to-[#03090b]/90 relative overflow-hidden max-w-xl">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#00d4ff]/5 blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-semibold block">Grievance Officer Name</label>
                  <p className="text-base font-bold text-white mt-0.5">Mohammed Hamedullah Sajid</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-semibold block">Role</label>
                  <p className="text-sm text-slate-200 mt-0.5">Grievance Officer &amp; CHRO</p>
                  <p className="text-xs text-slate-400">Zelvora Technologies Pvt. Ltd.</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-semibold block">Email Address</label>
                  <a href="mailto:zelvoratechnologies@gmail.com" className="text-sm text-[#00d4ff] hover:underline font-semibold block mt-0.5">
                    zelvoratechnologies@gmail.com
                  </a>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-semibold block">Direct Contact</label>
                  <p className="text-sm text-slate-200 mt-0.5 font-semibold">+91 91000 40993</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] font-semibold block">Headquarters</label>
                  <p className="text-xs text-slate-300 mt-0.5">Hyderabad, Telangana, India.</p>
                </div>
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#030912]/80 py-8 px-6 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2025 Zelvora Technologies Pvt. Ltd. · All Rights Reserved</p>
          <a href="https://labs.zelvoratech.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d4ff] transition-colors">
            labs.zelvoratech.com
          </a>
        </div>
      </footer>
    </main>
  );
}
