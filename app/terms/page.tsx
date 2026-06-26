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
  FaHome,
  FaInfoCircle,
  FaSkullCrossbones,
  FaLaptopCode,
  FaAward,
  FaUserTie,
  FaHandshake,
  FaCreditCard,
  FaCopy,
  FaFileSignature,
  FaLink,
  FaGavel,
  FaLock,
  FaEnvelopeOpenText
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("intro-terms");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: "intro-terms", title: "Introduction & Agreement", num: "00" },
    { id: "eligibility", title: "Section 01 — Eligibility", num: "01" },
    { id: "accounts", title: "Section 02 — User Accounts", num: "02" },
    { id: "services", title: "Section 03 — Platform Services", num: "03" },
    { id: "payments", title: "Section 04 — Fees & Payments", num: "04" },
    { id: "acceptable-use", title: "Section 05 — Acceptable Use", num: "05" },
    { id: "ip", title: "Section 06 — Intellectual Property", num: "06" },
    { id: "credentials", title: "Section 07 — Credentials", num: "07" },
    { id: "ugc", title: "Section 08 — User Content", num: "08" },
    { id: "third-party", title: "Section 09 — Third-Party Links", num: "09" },
    { id: "liability", title: "Section 10 — Disclaimers", num: "10" },
    { id: "indemnity", title: "Section 11 — Indemnification", num: "11" },
    { id: "termination", title: "Section 12 — Termination", num: "12" },
    { id: "modifications", title: "Section 13 — Modifications", num: "13" },
    { id: "governing-law", title: "Section 14 — Governing Law", num: "14" },
    { id: "contact-us", title: "Section 15 — Contact Us", num: "15" },
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
          
          <div className="flex items-center gap-3">
            <Link 
              href="/privacy"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link 
              href="/?skipIntro=true"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <FaHome size={12} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Strip */}
      <section className="relative border-b border-white/5 bg-[#071324]/50 py-16 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="inline-flex flex-wrap gap-2 items-center">
              <span className="rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 px-3 py-0.5 text-[10px] text-[#00d4ff] font-semibold">
                Governed by Indian Law
              </span>
              <span className="rounded-full border border-[#00b89c]/30 bg-[#00b89c]/5 px-3 py-0.5 text-[10px] text-[#00b89c] font-semibold">
                IT Act 2000 Compliant
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl tracking-tight font-display">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-slate-400 max-w-xl">
              User Agreement and legal constraints governing the use of the Zelvora Industry Labs educational platform.
            </p>
          </div>
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              Effective: <strong className="text-white">June 2025</strong>
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
                {sec.num}. {sec.title.replace("Section ", "")}
              </button>
            );
          })}
        </div>

        {/* Terms Sections */}
        <div className="space-y-16 lg:max-w-4xl py-6">
          
          {/* Introduction & Agreement */}
          <section id="intro-terms" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Agreement</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Introduction
            </h2>
            
            {/* Blue Info Highlight Box */}
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/5 p-6 mb-6 flex gap-4 items-start shadow-[0_0_25px_rgba(59,130,246,0.05)]">
              <FaInfoCircle className="text-[#00d4ff] mt-1 flex-shrink-0" size={20} />
              <div className="text-sm leading-relaxed text-[#ccd6e0]">
                These Terms govern use of <Link href="https://labs.zelvoratech.com" target="_blank" className="text-[#00d4ff] hover:underline">labs.zelvoratech.com</Link>, operated by Zelvora Technologies Pvt. Ltd., incorporated under the Companies Act 2013, Hyderabad, India. By accessing or registering on the Platform, the User agrees to these Terms and the Privacy Policy. These Terms are a legally binding agreement under the Information Technology Act, 2000.
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-300">
              Please read these Terms of Service carefully before executing registrations. If you do not agree to be bound by these legal rules, you may not visit or access the Platform or any associated workshop servers.
            </p>
          </section>

          {/* Section 01 — Eligibility */}
          <section id="eligibility" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 01</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Eligibility
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                The Platform is open to all age groups. However, Users under the age of 18 must obtain explicit parent or guardian consent. By accepting these Terms, the parent or legal guardian takes absolute responsibility for the minor's usage of our tools, courses, and credentials.
              </p>
              <p>
                The User must be capable of entering a legally binding contract under the Indian Contract Act, 1872. You agree to provide accurate, truthful, and complete details at the point of registration and account setup.
              </p>
            </div>
          </section>

          {/* Section 02 — User Accounts */}
          <section id="accounts" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 02</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              User Accounts
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                You are responsible for keeping your login passwords and authentication tokens highly confidential. You must notify us immediately at <a href="mailto:info@zelvoratech.com" className="text-[#00d4ff] hover:underline font-semibold">info@zelvoratech.com</a> if you discover any unauthorized access or breach of credentials.
              </p>
              <p>
                All activities conducted under your user credentials remain your primary responsibility. Accounts are non-transferable and must not be shared, rented, or sold. Zelvora reserves the right to suspend or terminate accounts displaying suspicious concurrent login locations or policy violations.
              </p>
            </div>
          </section>

          {/* Section 03 — Platform Services */}
          <section id="services" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 03</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Platform Services
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              We provide access to specialized tools, interactive assignments, and corporate networking:
            </p>
            
            {/* 4-Card Icon Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaLaptopCode size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Industry Projects</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Collaborate on real-world briefs and codebases across web, AI, design, and software engineering domains.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaAward size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Verified Certificates</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Receive verified certificates of completion upon satisfying all assignment metrics and code reviews.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaUserTie size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Expert Mentorship</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">Get code reviews, interactive sessions, and feedback channels guided by experienced startup builders.</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-[#00d4ff]/20 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center mb-4">
                  <FaHandshake size={18} />
                </div>
                <h4 className="text-sm font-semibold text-white mb-2">Placement Support</h4>
                <p className="text-[11px] leading-relaxed text-slate-400">With your consent, access student showcases where we highlight portfolios directly to hiring startups.</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-6 italic">
              * Note: We reserve the right to modify, suspend, or discontinue any of our online platforms or services with reasonable notice.
            </p>
          </section>

          {/* Section 04 — Fees, Payments & Refunds */}
          <section id="payments" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 04</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Fees, Payments &amp; Refunds
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40 backdrop-blur-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0b1b30]">
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider w-[180px]">Billing Topic</th>
                    <th className="p-4 font-semibold text-slate-200 uppercase tracking-wider">Policy Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Payment Terms</td>
                    <td className="p-4 text-slate-300">All fees are due in full at the time of program enrollment. Prices listed are in INR and are inclusive of standard GST.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Supported Methods</td>
                    <td className="p-4 text-slate-300">UPI, Net Banking, credit/debit cards, and digital wallets processed securely via our gateway partners.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Refund Window</td>
                    <td className="p-4 text-slate-300">Eligible for refund requests within <strong>7 days of purchase</strong>, provided you have accessed less than 30% of the training materials. No refunds are granted after this window.</td>
                  </tr>
                  <tr className="bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Failed Payments</td>
                    <td className="p-4 text-slate-300">If payment fails, course access is not granted. Please contact <a href="mailto:info@zelvoratech.com" className="text-[#00d4ff] hover:underline">info@zelvoratech.com</a> for ledger resolution.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-white">Chargebacks</td>
                    <td className="p-4 text-slate-300">Initiating a payment chargeback without contacting our support teams first may result in temporary or permanent account suspension.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 05 — Acceptable Use */}
          <section id="acceptable-use" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 05</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Acceptable Use
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                To maintain a safe, clean, and collaborative tech learning environment, you agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                <li>Share, copy, resell, or distribute course assets, notes, and training resources.</li>
                <li>Submit plagiarized projects or undisclosed AI-generated work represented as original code.</li>
                <li>Attempt to breach, hack, or overload our hosting servers and database clusters.</li>
                <li>Impersonate other students, mentors, or admin accounts.</li>
                <li>Use automated scrapers, web spiders, or extractors to scrape data from labs.zelvoratech.com.</li>
                <li>Upload malicious scripts, files, or viruses to our repository channels.</li>
              </ul>

              {/* Red Danger Highlight Box */}
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 flex gap-4 items-start shadow-[0_0_25px_rgba(239,68,68,0.05)]">
                <FaSkullCrossbones className="text-[#ef4444] mt-1 flex-shrink-0" size={20} />
                <div className="text-xs leading-relaxed text-[#ccd6e0]">
                  <strong>WARNING:</strong> Violation of this Section may result in immediate account termination without refund, deletion of credentials, and reporting to legal authorities under Section 43, 66, and 72 of the Information Technology (IT) Act, 2000.
                </div>
              </div>
            </div>
          </section>

          {/* Section 06 — Intellectual Property */}
          <section id="ip" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 06</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Intellectual Property
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                All educational content, system design, mock repositories, software frameworks, and branding elements remain the exclusive Intellectual Property of Zelvora Technologies Pvt. Ltd. under the Copyright Act, 1957. Users are granted a limited, personal, non-exclusive, and non-transferable license to access materials for personal learning purposes only.
              </p>
              <p>
                Any codebase, project designs, or assignment files created and submitted by you remain your own intellectual property. However, by submitting files, you grant Zelvora Technologies Pvt. Ltd. a non-exclusive, royalty-free, perpetual license to display, reference, and highlight your work on our platform showcases with proper learner attribution.
              </p>
            </div>
          </section>

          {/* Section 07 — Certificates & Credentials */}
          <section id="credentials" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 07</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Certificates &amp; Credentials
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                Certificates of completion are issued strictly to students who successfully fulfill all project checkpoints, code reviews, and evaluation metrics set by platform mentors.
              </p>
              <p>
                These credentials represent training completion and industry skillset verification. They do not constitute an officially accredited university degree or government-recognized diploma. Zelvora reserves the right to revoke or invalidate issued credentials if plagiarism or academic dishonesty is discovered post-issuance. Active verification links will remain valid for a minimum of 3 years from the date of issue.
              </p>
            </div>
          </section>

          {/* Section 08 — User-Generated Content */}
          <section id="ugc" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 08</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              User-Generated Content
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                You confirm that you own or possess the necessary rights for all text, files, and assets you submit to our portal. You grant us a royalty-free license to display your project files in our review areas.
              </p>
              <p>
                You must not upload, post, or submit any content that is illegal, defamatory, offensive, or violates third-party patents, copyrights, or trademarks. Zelvora reserves the right to remove any violating content without warning.
              </p>
            </div>
          </section>

          {/* Section 09 — Third-Party Links & Services */}
          <section id="third-party" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 09</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Third-Party Links &amp; Services
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                Our platforms contain links to external developer tools, repository platforms (e.g., GitHub), and hosting channels (e.g., Vercel, YouTube). These links are provided solely for your educational convenience.
              </p>
              <p>
                Zelvora has no direct control over third-party platforms, terms, or safety policies. Accessing these links is entirely at your own risk, and we accept no liability for data issues arising on third-party domains.
              </p>
            </div>
          </section>

          {/* Section 10 — Disclaimers & Limitation of Liability */}
          <section id="liability" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 10</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Disclaimers &amp; Limitation of Liability
            </h2>
            
            {/* Amber Warning Highlight Box */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 mb-6 flex gap-4 items-start shadow-[0_0_25px_rgba(245,158,11,0.05)]">
              <FaExclamationTriangle className="text-[#f59e0b] mt-1 flex-shrink-0" size={20} />
              <div className="text-xs leading-relaxed text-[#ccd6e0]">
                <strong>DISCLAIMER:</strong> The platform and all educational materials are provided "as is" and "as available" without warranties of any kind. Zelvora Technologies Pvt. Ltd. does not guarantee employment or specific career outcomes.
              </div>
            </div>

            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                We do not guarantee that access to the website or databases will be completely uninterrupted or free from software bugs.
              </p>
              <p>
                To the fullest extent permitted by law, Zelvora Technologies Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages. Our total liability for any claim arising out of these Terms is strictly capped at the total training fees paid by you in the <strong>three (3) months</strong> preceding the claim.
              </p>
            </div>
          </section>

          {/* Section 11 — Indemnification */}
          <section id="indemnity" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 11</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Indemnification
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0]">
              <p>
                You agree to indemnify, defend, and hold harmless Zelvora Technologies Pvt. Ltd., its directors, employees, corporate mentors, and development partners from and against any third-party claims, liabilities, damages, or costs (including legal fees) arising from: your breach of these Terms, misuse of the Platform, any code submissions that infringe copyright laws, or your violation of statutory rights.
              </p>
            </div>
          </section>

          {/* Section 12 — Termination */}
          <section id="termination" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 12</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Termination
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                We reserve the right to suspend or terminate your account access immediately if you breach these Terms, display behavior harmful to other students or staff, or when required by regulatory authorities.
              </p>
              <p>
                Upon termination for cause, all system permissions, sandbox accesses, and certification validations cease immediately. Fees paid prior to termination for cause are non-refundable. Users may request account deletion at any time by emailing our systems at <a href="mailto:info@zelvoratech.com" className="text-[#00d4ff] hover:underline">info@zelvoratech.com</a>.
              </p>
            </div>
          </section>

          {/* Section 13 — Modifications to Terms */}
          <section id="modifications" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 13</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Modifications to Terms
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0]">
              <p>
                Zelvora may revise and update these Terms at any time. When material modifications are executed, we will notify you by sending an email update or displaying a platform banner at least <strong>14 days</strong> before the revisions take effect. Your continued use of labs.zelvoratech.com post-update constitutes binding acceptance of the updated Terms.
              </p>
            </div>
          </section>

          {/* Section 14 — Governing Law & Dispute Resolution */}
          <section id="governing-law" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 14</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Governing Law &amp; Dispute Resolution
            </h2>
            <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
              <p>
                These Terms are governed by and construed in accordance with the laws of India.
              </p>
              <p>
                In the event of any dispute or disagreement, we will first attempt to resolve the issue in good faith through direct negotiations within 30 days of notice. Any unresolved disputes shall be subject to the exclusive jurisdiction of the competent courts of <strong>Hyderabad, Telangana, India</strong>. Your statutory rights under Indian consumer protection laws remain completely unaffected.
              </p>
            </div>
          </section>

          {/* Section 15 — Contact Us */}
          <section id="contact-us" className="scroll-mt-36">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 15</span>
            <h2 className="text-2xl font-bold text-white mt-1 mb-4 font-display">
              Contact Us
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              If you have any questions or require clarification regarding these Terms, please contact our legal and support team:
            </p>
            
            {/* Glowing Glassmorphism Card */}
            <div className="glass-card p-8 rounded-3xl border border-[#00d4ff]/15 bg-gradient-to-br from-[#061217]/90 to-[#03090b]/90 relative overflow-hidden max-w-xl">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#00d4ff]/5 blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] block">Operating Entity</label>
                  <p className="text-sm font-bold text-white mt-0.5">Zelvora Technologies Pvt. Ltd.</p>
                  <p className="text-xs text-slate-400">Hyderabad, Telangana, India.</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] block">Support &amp; Legal Email</label>
                  <a href="mailto:info@zelvoratech.com" className="text-sm text-[#00d4ff] hover:underline font-semibold block mt-0.5">
                    info@zelvoratech.com
                  </a>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00d4ff] block">Platform Portal</label>
                  <a href="https://labs.zelvoratech.com" target="_blank" className="text-sm text-slate-200 hover:text-white mt-0.5 font-semibold block">
                    labs.zelvoratech.com
                  </a>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#00b89c] block">Typical Response Time</label>
                  <p className="text-xs text-[#00b89c] mt-0.5">Within 7 business days</p>
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
