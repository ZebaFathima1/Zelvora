"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050d1a] text-white selection:bg-[#00d4ff]/30 selection:text-white relative overflow-hidden font-sans">
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_rgba(0,212,255,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,_rgba(0,184,156,0.04)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.007)_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#050d1a]/85 backdrop-blur-md px-6 py-4">
        <div className="mx-auto max-w-[960px] flex items-center justify-between">
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
      <section className="relative border-b border-white/5 bg-[#071324]/50 py-16 px-6 sm:px-10">
        <div className="mx-auto max-w-[960px] flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              zelvoratech.com is a premium tech training platform dedicated to experiential learning. This document outlines our data privacy practices under the DPDP Act 2023.
            </p>
          </div>
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              Effective: June 2025
            </span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              Full Enforcement: May 2027
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout - Single Column / Line-Wise */}
      <div className="mx-auto max-w-[960px] px-6 py-12 sm:px-10 space-y-16">
        
        {/* 01. Introduction */}
        <section id="intro" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 01</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Introduction &amp; Who We Are
          </h2>
          <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
            <p>
              Zelvora Technologies Pvt. Ltd. (operating the "zelvoratech.com" platform at <Link href="https://labs.zelvoratech.com" target="_blank" className="text-[#00d4ff] hover:underline">labs.zelvoratech.com</Link>) is committed to protecting the privacy and personal data of our students, graduates, and aspiring professionals. This Privacy Policy details our data practices as a Data Fiduciary under the Digital Personal Data Protection (DPDP) Act, 2023. We collect and process personal data solely to provide industry-standard project training, workshops, internships, and certification opportunities.
            </p>
            <p>
              By enrolling in our programs or visiting our site, you acknowledge the collection, storage, and processing of your personal data as outlined in this policy. If you do not agree with these practices, we advise you not to submit any personal information to our platform.
            </p>
          </div>
        </section>

        {/* 02. What Personal Data We Collect */}
        <section id="data-collect" className="space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 02</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            What Personal Data We Collect
          </h2>
          <p className="text-sm text-slate-300">
            We collect categories of personal data necessary to provide an immersive tech training environment.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40">
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
        <section id="why-collect" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 03</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Why We Collect Your Data
          </h2>
          <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
            <p>
              We process your personal data for specific, lawful purposes related directly to providing experiential training programs:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-slate-300 pl-2">
              <li>Delivering and managing our software training, bootcamps, and workshops.</li>
              <li>Customizing study tracks and assigning projects matching your skills.</li>
              <li>Facilitating recruitment matching to match you with appropriate hiring teams.</li>
              <li>Issuing verified, blockchain-verifiable digital training credentials and certificates.</li>
              <li>Maintaining network security, preventing fraud, and enforcing platform integrity.</li>
            </ul>
          </div>
        </section>

        {/* 04. Legal Basis for Processing */}
        <section id="legal-basis" className="space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 04</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Legal Basis for Processing
          </h2>
          <p className="text-sm text-slate-300">
            In accordance with Section 4 of the DPDP Act 2023, we process personal data based on the following grounds:
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40">
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
        <section id="data-sharing" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 05</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            How We Share Your Data
          </h2>
          <div className="text-sm leading-relaxed text-[#ccd6e0] space-y-4">
            <p>
              We value your privacy and do not sell or trade your data. Sharing occurs only under strict constraints:
            </p>
            <div className="space-y-4 pl-1 text-slate-300">
              <p>
                <strong>Startup Partners:</strong> With your consent, your resumes and project code folders are shared with tech startups for potential placement matching.
              </p>
              <p>
                <strong>Service Providers:</strong> We employ verified subprocessors (hosting services, payment gateways, database endpoints) bound by strict non-disclosure pacts.
              </p>
              <p>
                <strong>Regulatory Compliance:</strong> We disclose data when mandated by legal directives or regulators under the Data Protection Board (DPB) of India.
              </p>
            </div>
          </div>
        </section>

        {/* 06. Your Rights as a Data Principal */}
        <section id="rights" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 06</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Your Rights as a Data Principal
          </h2>
          <p className="text-sm text-slate-300">
            Under the DPDP Act 2023, you hold specific statutory rights. We ensure these can be directly exercised.
          </p>
          
          {/* Line-Wise Rights List */}
          <div className="space-y-6 text-sm text-[#ccd6e0] mt-6">
            <div className="border-l-2 border-[#00d4ff]/40 pl-4 py-1">
              <h4 className="font-semibold text-white">1. Right to Access</h4>
              <p className="text-xs text-slate-400 mt-1">Request a summary of your personal data processed by us and the list of fiduciaries with whom it has been shared.</p>
            </div>
            
            <div className="border-l-2 border-[#00d4ff]/40 pl-4 py-1">
              <h4 className="font-semibold text-white">2. Right to Correction</h4>
              <p className="text-xs text-slate-400 mt-1">Request the correction of inaccurate details, incomplete profile metrics, or outdated academic info in our systems.</p>
            </div>
            
            <div className="border-l-2 border-[#00d4ff]/40 pl-4 py-1">
              <h4 className="font-semibold text-white">3. Right to Erasure</h4>
              <p className="text-xs text-slate-400 mt-1">Request deletion of personal data once the specific learning or certification purpose has been fully satisfied.</p>
            </div>
            
            <div className="border-l-2 border-[#00d4ff]/40 pl-4 py-1">
              <h4 className="font-semibold text-white">4. Withdraw Consent</h4>
              <p className="text-xs text-slate-400 mt-1">Revoke consent for personal data processing at any point. Note that some platform services may become inaccessible.</p>
            </div>
            
            <div className="border-l-2 border-[#00d4ff]/40 pl-4 py-1">
              <h4 className="font-semibold text-white">5. Right to Grievance</h4>
              <p className="text-xs text-slate-400 mt-1">Access swift grievance redressal mechanisms to address queries concerning your digital profile data.</p>
            </div>
            
            <div className="border-l-2 border-[#00d4ff]/40 pl-4 py-1">
              <h4 className="font-semibold text-white">6. DPB Complaint</h4>
              <p className="text-xs text-slate-400 mt-1">If unresolved by our Grievance Officer, you retain the right to file a complaint to the Data Protection Board of India.</p>
            </div>
          </div>
        </section>

        {/* 07. Data Retention */}
        <section id="retention" className="space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 07</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Data Retention
          </h2>
          <p className="text-sm text-slate-300">
            We retain personal data only for as long as it aligns with the training purpose or is mandated by legal records.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40">
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
        <section id="security" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 08</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
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
        <section id="cookies" className="space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 09</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Cookies &amp; Tracking
          </h2>
          <p className="text-sm text-slate-300">
            Our training portal uses cookies to manage user sessions and gather telemetry logs.
          </p>
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#071324]/40">
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
        <section id="children" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 10</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Children's Data
          </h2>
          <div className="text-sm leading-relaxed text-[#ccd6e0]">
            <p>
              zelvoratech.com is intended for university students, graduates, and adults. We do not knowingly process personal data of children under the age of 18 without verifiable parental consent. If we discover that we have inadvertently collected data from a minor without such consent, we will take immediate steps to delete that data from our production databases.
            </p>
          </div>
        </section>

        {/* 11. Cross-Border Data Transfers */}
        <section id="transfers" className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#00d4ff]/60">Section 11</div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Cross-Border Data Transfers
          </h2>
          <div className="text-sm leading-relaxed text-[#ccd6e0]">
            <p>
              We store and process your personal data primarily on secure cloud servers located within India. We do not transfer personal data outside of India unless the transfer is fully compliant with the guidelines and rules notified by the Central Government under Section 16 of the DPDP Act 2023.
            </p>
          </div>
        </section>


      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#030912]/80 py-8 px-6 text-center text-xs text-slate-400">
        <div className="mx-auto max-w-[960px] flex justify-center">
          <p>© 2025 Zelvora Technologies Pvt. Ltd. · All Rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
