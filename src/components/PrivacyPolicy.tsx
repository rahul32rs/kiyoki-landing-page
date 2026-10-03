import React, { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  Globe, 
  Bell, 
  Mail, 
  Phone, 
  MapPin, 
  Database, 
  Cpu, 
  ChevronRight,
  Clock,
  Printer
} from 'lucide-react';
import { KiyokiLogo } from './KiyokiLogo';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
  onOpenContact?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ 
  onBackToHome,
  onOpenContact
}) => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sections = [
    { id: 'overview', title: '1. Overview & Commitment', icon: ShieldCheck },
    { id: 'collection', title: '2. Information We Collect', icon: Database },
    { id: 'iot-data', title: '3. Device & Air Sensor Telemetry', icon: Cpu },
    { id: 'usage', title: '4. How We Use Your Data', icon: Eye },
    { id: 'sharing', title: '5. Information Sharing & Disclosure', icon: Globe },
    { id: 'security', title: '6. Data Storage & Security', icon: Lock },
    { id: 'cookies', title: '7. Cookies & Tracking Technologies', icon: Bell },
    { id: 'rights', title: '8. Your Rights (GDPR & CCPA/CPRA)', icon: CheckCircle2 },
    { id: 'children', title: '9. Children’s Privacy', icon: FileText },
    { id: 'updates', title: '10. Policy Updates & Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-gray-900 font-sans selection:bg-sky-brand selection:text-white">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-gray-200/80 sticky top-[88px] z-30 backdrop-blur-md bg-white/90">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 text-gray-700 hover:text-sky-brand font-medium transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">Legal</span>
            <span className="text-gray-300">/</span>
            <span className="text-sky-brand font-medium">Privacy Policy</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200/80 rounded-md transition-colors cursor-pointer"
              title="Print Policy"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Document</span>
            </button>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Current & Effective
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/50 via-white to-[#fafbfc] border-b border-gray-100 pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100/60 border border-sky-200/80 rounded-full text-xs font-semibold text-sky-brand mb-5">
              <ShieldCheck className="w-4 h-4" />
              <span>Trust, Transparency & Data Protection</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Kiyoki Global Privacy Policy
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              At Kiyoki, your right to privacy is as fundamental as your right to breathe clean, uncontaminated air. 
              This policy explains how we collect, safeguard, and responsibly process your personal information and smart purifier telemetry data.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-[13px] text-gray-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-brand" />
                <span><strong>Effective Date:</strong> October 1, 2026</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div>
                <span><strong>Last Reviewed:</strong> October 2026</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <div>
                <span><strong>Applicability:</strong> Web, Kiyoki App & Connected Devices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Table of Contents */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-[160px] bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-sky-brand" />
                Table of Contents
              </h2>

              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-brand text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-950'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                        <span className="truncate">{section.title}</span>
                      </span>
                      <ChevronRight className={`w-3 h-3 shrink-0 ${isActive ? 'text-white' : 'text-gray-300'}`} />
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="bg-sky-50/70 rounded-xl p-3.5 border border-sky-100">
                  <p className="text-[11px] font-semibold text-sky-brand uppercase tracking-wider">
                    Privacy Inquiries
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    Have questions regarding your personal information?
                  </p>
                  <a
                    href="mailto:support@kiyoki.com"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-brand hover:text-sky-hover transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    support@kiyoki.com
                  </a>
                  {onOpenContact && (
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="mt-2 text-[11px] text-gray-500 hover:text-sky-brand underline block cursor-pointer"
                    >
                      Search help topics
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Full Privacy Policy Content */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-12">
            
            {/* Quick Summary Box */}
            <div className="bg-white border-2 border-sky-100 rounded-2xl p-6 sm:p-8 shadow-subtle">
              <h2 className="text-lg font-bold text-gray-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-brand" />
                Key Privacy Highlights at a Glance
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px] text-gray-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p><strong>We Never Sell Data:</strong> Kiyoki does not and will never sell, rent, or trade your personal information.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p><strong>Telemetry for Clean Air:</strong> Sensor data (PM2.5, VOCs) is utilized strictly to calibrate filtration performance.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p><strong>Bank-Grade Security:</strong> End-to-end TLS 1.3 in transit and AES-256 encryption at rest.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p><strong>Full Control:</strong> Easily request data export, modification, or complete deletion at any time.</p>
                </div>
              </div>
            </div>

            {/* SECTION 1 */}
            <section id="overview" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 01</span>
                  <h2 className="text-xl font-bold text-gray-950">Overview & Our Commitment</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  Kiyoki Technologies Inc. (&ldquo;Kiyoki&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is dedicated to innovating residential and commercial air purification solutions. We respect and prioritize your personal privacy.
                </p>
                <p>
                  This Privacy Policy applies to personal information gathered through our website (<span className="font-semibold text-gray-900">kiyoki.com</span>), our mobile applications, our customer care services, and connected smart IoT air purifiers (collectively referred to as our &ldquo;Services&rdquo;).
                </p>
                <p>
                  By browsing our website, purchasing our air purifiers or replacement filters, or creating a Kiyoki connected account, you acknowledge that you have read and understood the practices described in this document.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="collection" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 02</span>
                  <h2 className="text-xl font-bold text-gray-950">Information We Collect</h2>
                </div>
              </div>

              <div className="mt-5 space-y-5 text-sm text-gray-700 leading-relaxed">
                <p>
                  Depending on how you interact with our brand, we collect information in three primary categories:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <h3 className="font-semibold text-gray-950 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-brand" />
                      A. Information You Voluntarily Provide
                    </h3>
                    <ul className="mt-2.5 list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-1">
                      <li><strong>Contact & Identity Details:</strong> Full name, email address, physical shipping address, billing address, and phone number when placing an order or registering for product warranty.</li>
                      <li><strong>Billing & Payment Information:</strong> Payment card details, transaction histories, and invoice data processed securely via PCI-DSS compliant gateways. (Kiyoki does not store raw credit card numbers on its servers).</li>
                      <li><strong>Communications:</strong> Customer support correspondence, product reviews, feedback submissions, and warranty claim inquiries.</li>
                      <li><strong>Account Credentials:</strong> Username, encrypted password hashes, and user preferences configured within the Kiyoki mobile application.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <h3 className="font-semibold text-gray-950 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-brand" />
                      B. Automatically Collected Technical Data
                    </h3>
                    <ul className="mt-2.5 list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-600 pl-1">
                      <li><strong>Browsing & Device Details:</strong> Internet Protocol (IP) address, browser version, operating system, language preferences, referring URLs, and diagnostic crash logs.</li>
                      <li><strong>Interaction Data:</strong> Pages visited, time spent per product category, scroll depth, and interaction with cart functions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="iot-data" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 03</span>
                  <h2 className="text-xl font-bold text-gray-950">Connected Device & Air Sensor Telemetry</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Kiyoki smart air purifiers incorporate high-precision laser particle counters and volatile organic compound (VOC) detectors designed to maximize purification efficiency in real time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="border border-sky-100 bg-sky-50/40 p-4 rounded-xl">
                    <h4 className="font-semibold text-xs text-sky-brand uppercase tracking-wider">Sensor Readings</h4>
                    <p className="mt-1 text-xs text-gray-600">
                      Indoor PM2.5, PM10, total volatile organic compounds (tVOC), ambient humidity, and room temperature metrics used to automatically adjust fan speed curves.
                    </p>
                  </div>
                  <div className="border border-sky-100 bg-sky-50/40 p-4 rounded-xl">
                    <h4 className="font-semibold text-xs text-sky-brand uppercase tracking-wider">Filter Diagnostics</h4>
                    <p className="mt-1 text-xs text-gray-600">
                      Remaining HEPA and activated carbon filtration capacity, cumulative motor runtime hours, and predictive replacement timelines so you never inhale bypass air.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-900 text-white rounded-xl text-xs flex items-center gap-3">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <p>
                    <strong className="text-white font-semibold">Privacy by Design:</strong> Device sensor telemetry is tied solely to an anonymous device serial identifier and is never correlated with audio, video, or location tracking.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="usage" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 04</span>
                  <h2 className="text-xl font-bold text-gray-950">How We Use Your Information</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>We process your data strictly on lawful grounds, including contract performance, legitimate business interests, and your explicit consent:</p>

                <div className="space-y-3">
                  {[
                    {
                      title: 'Order Fulfillment & Warranty Protection',
                      desc: 'Processing purchases, shipping replacement filters, managing delivery notifications, and validating 3-Year Limited Warranty guarantees.'
                    },
                    {
                      title: 'Intelligent Filtration Automation',
                      desc: 'Delivering real-time air quality index (AQI) calculations and auto-mode fan speed adjustments via the Kiyoki Cloud.'
                    },
                    {
                      title: 'Timely Maintenance & Safety Alerts',
                      desc: 'Sending critical alerts regarding HEPA saturation, sensor maintenance notifications, or system firmware safety updates.'
                    },
                    {
                      title: 'Continuous Quality Enhancement',
                      desc: 'Analyzing aggregated, de-identified telemetry data to enhance motor aerodynamics, acoustic dampening, and aerodynamic energy conservation.'
                    },
                    {
                      title: 'Direct Communications & Preferences',
                      desc: 'Delivering newsletters, clean air tips, and exclusive subscriber incentives (with effortless one-click unsubscribe options at any time).'
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-sky-100 text-sky-brand text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs sm:text-[13px] text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="sharing" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 05</span>
                  <h2 className="text-xl font-bold text-gray-950">Information Sharing & Third Parties</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-gray-950">We do not sell, rent, monetize, or release your personal data to data brokers.</strong>
                </p>
                <p>
                  We share information solely with trusted third-party service providers bound by strict confidentiality and data protection agreements:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/70">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">Logistics & Couriers</h4>
                    <p className="mt-1.5 text-xs text-gray-600">FedEx, UPS, and DHL for physical delivery of Kiyoki air purifier systems and replacement parts.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/70">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">Payment Processors</h4>
                    <p className="mt-1.5 text-xs text-gray-600">Stripe and PayPal for encrypted, tokenized credit card and digital wallet processing.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/70">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">Cloud Infrastructure</h4>
                    <p className="mt-1.5 text-xs text-gray-600">SOC2 Type II certified server hosts (AWS / Google Cloud) ensuring encrypted data storage.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/70">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider">Legal Compliance</h4>
                    <p className="mt-1.5 text-xs text-gray-600">Only when strictly required by enforceable subpoena, legal warrant, or applicable statute.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="security" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 06</span>
                  <h2 className="text-xl font-bold text-gray-950">Data Storage, Encryption & Retention</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  We implement multi-layered administrative, technical, and physical safeguards designed to protect personal and telemetry data against unauthorized disclosure, loss, or alteration:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sky-brand font-bold text-lg">TLS 1.3</div>
                    <div className="text-xs text-gray-600 mt-1">Encrypted in transit over all network connections</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sky-brand font-bold text-lg">AES-256</div>
                    <div className="text-xs text-gray-600 mt-1">Encrypted at rest across cloud databases</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-sky-brand font-bold text-lg">Least-Privilege</div>
                    <div className="text-xs text-gray-600 mt-1">Strict role-based access controls & audits</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600">
                  <strong>Retention Period:</strong> We retain transaction records for the duration required by applicable commercial and tax regulations (typically 7 years). Device telemetry older than 18 months is automatically scrubbed of all identifiers and converted to statistical aggregates.
                </p>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="cookies" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 07</span>
                  <h2 className="text-xl font-bold text-gray-950">Cookies & Tracking Technologies</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Our website uses cookies and similar technologies (such as session storage and local cache) to remember your cart items, keep you authenticated, and understand site traffic:
                </p>

                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900">Essential Cookies:</strong> Vital for shopping cart functionality, checkout security, and navigation. Cannot be disabled.
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <strong className="text-gray-900">Functional & Analytics Cookies:</strong> Help us measure which product specifications and air quality guides our visitors read most frequently.
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  You can set your browser to reject all or some browser cookies, or to alert you when websites set or access cookies. Note that disabling essential cookies may impact shopping cart usability.
                </p>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="rights" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 08</span>
                  <h2 className="text-xl font-bold text-gray-950">Your Legal Rights (GDPR & CCPA/CPRA)</h2>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Regardless of your jurisdiction, Kiyoki honors global privacy principles. Depending on your location (including the European Economic Area, UK, and California), you possess specific legal rights:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                    <h4 className="font-semibold text-gray-900 text-sm">Right to Access & Portability</h4>
                    <p className="text-xs text-gray-600 mt-1">Request an electronic copy of all personal records and telemetry histories associated with your profile.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                    <h4 className="font-semibold text-gray-900 text-sm">Right to Rectification</h4>
                    <p className="text-xs text-gray-600 mt-1">Correct or update any incomplete, out-of-date, or inaccurate shipping or profile information.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                    <h4 className="font-semibold text-gray-900 text-sm">Right to Erasure (&ldquo;Be Forgotten&rdquo;)</h4>
                    <p className="text-xs text-gray-600 mt-1">Request permanent deletion of your customer record and associated smart device credentials.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                    <h4 className="font-semibold text-gray-900 text-sm">Opt-Out of Marketing</h4>
                    <p className="text-xs text-gray-600 mt-1">Unsubscribe instantly via the footer link in any email or by contacting our support team.</p>
                  </div>
                </div>

                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-gray-700">
                  <strong>Notice for California Residents (CCPA):</strong> We do not sell personal information or share personal data for cross-context behavioral advertising. You will never be discriminated against for exercising your privacy rights.
                </div>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="children" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 09</span>
                  <h2 className="text-xl font-bold text-gray-950">Children’s Privacy</h2>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Our products and services are intended for purchase and use by individuals aged 18 and older. Kiyoki does not knowingly solicit or collect personal information from children under the age of 16 without verified parental consent.
                </p>
                <p className="text-xs text-gray-600">
                  If we discover that a child under 16 has submitted personal information, we will delete the data immediately. If you believe we hold information regarding a minor, please contact us at <a href="mailto:support@kiyoki.com" className="text-sky-brand underline">support@kiyoki.com</a>.
                </p>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="updates" className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-28">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-brand flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-sky-brand uppercase tracking-wider">Section 10</span>
                  <h2 className="text-xl font-bold text-gray-950">Policy Updates & How to Contact Us</h2>
                </div>
              </div>

              <div className="mt-5 space-y-5 text-sm text-gray-700 leading-relaxed">
                <p>
                  We may periodically revise this Privacy Policy to reflect advancements in our air purification technologies, regulatory requirements, or customer feedback. When updates occur, we will revise the &ldquo;Last Reviewed&rdquo; date at the top of this document. Material changes will be accompanied by prominent notice on our website or direct email.
                </p>

                {/* Contact Card */}
                <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-950 text-white rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-6 flex items-center">
                      <KiyokiLogo variant="white" height={22} />
                    </div>
                    <span className="text-xs text-neutral-400">| Privacy & Compliance Office</span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                    For inquiries, data access requests, or to exercise your rights under GDPR/CCPA, please reach our dedicated Data Protection Officer:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-neutral-800 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-neutral-400">Email Inquiries</div>
                        <a href="mailto:support@kiyoki.com" className="text-white hover:text-sky-300 font-medium transition-colors">
                          support@kiyoki.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-neutral-400">Toll-Free Phone</div>
                        <div className="text-white font-medium">1-800-549-6541</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-neutral-400">Headquarters</div>
                        <div className="text-white font-medium">Kiyoki Private Limited<br />D-25, Sector 63A, Noida, Uttar Pradesh, India - 201309</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Actions */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Kiyoki Home
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs sm:text-sm text-gray-500 hover:text-sky-brand font-medium transition-colors cursor-pointer"
              >
                ↑ Back to top
              </button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
