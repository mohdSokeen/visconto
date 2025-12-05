"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faDollarSign, faShieldAlt, faHandshake, faCircleCheck, faUserTie, faLayerGroup, faPeopleGroup, faMicrochip, faBriefcaseMedical, faCogs, faIndustry, faStore, faSatelliteDish, faLandmark, faRocket, faBuilding } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  return (
    <section id="home" className="relative overflow-hidden pt-[125px] pb-20">
      {/* Background Blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 w-[70vw] h-[70vw] rounded-full filter blur-3xl opacity-70 animate-blob bg-gradient-to-tr from-indigo-600 via-purple-500 to-rose-500" />
        <div className="absolute -right-32 -bottom-32 w-[55vw] h-[55vw] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000 bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
              Build Stronger Teams. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500"> Faster Smarter   </span>
            </h1>

            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-xl pb-5" >
              Visconto Group Inc. helps companies of all sizes hire exceptional talent across technology, healthcare, finance, engineering, and more — without delays, risk, or overhead.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
                Talk to a Recruitment Strategist
              </a>
              <a href="#join" className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                Join Our Talent Network
              </a>
            </div>
          </motion.div>

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center pb-5"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="rounded-3xl p-1 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/40 to-white/10 dark:from-[#071018] dark:to-[#09131d]">
                  <div className="p-2 sm:p-2">
                    <div className="relative h-64 sm:h-85 rounded-xl overflow-hidden">

                      {/* Image Tag */}
                      <img
                        src="/images/home.png"
                        alt="Workforce Partners"
                        className="w-full h-full object-cover"
                      />

                      {/* Overlay Text + Gradient */}
                      <div className="absolute bottom-0 left-0 w-full p-6 flex items-end text-white">
                        <div className="bg-gradient-to-t from-black/60 to-transparent p-4 rounded-md">
                          <div className="font-semibold text-lg">Trusted Workforce Partners</div>
                          <div className="text-xs opacity-80">
                            Hire across Tech, Healthcare, Finance & more
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHY CHOOSE VISCONTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10" id="why">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">Why Clients Choose Visconto</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: faClock, title: "Speed to Hire", desc: "Qualified professionals delivered in days — not months." },
              { icon: faUsers, title: "Quality Over Quantity", desc: "Every candidate is pre-screened and skills verified." },
              { icon: faHandshake, title: "Flexible Engagement Models", desc: "Contract, contract-to-hire, or direct hire." },
              { icon: faDollarSign, title: "Cost Efficiency", desc: "Reduce hiring delays and turnover risk." },
              { icon: faShieldAlt, title: "Compliance & Reliability", desc: "We handle payroll, onboarding & labor regulations." },
              { icon: faCircleCheck, title: "People Who Stay", desc: "Happier hires who perform better and stay longer." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl transition-shadow"
                // className="p-6 rounded-2xl bg-white dark:bg-[#0c1622] shadow group hover:shadow-xl transition border border-slate-200 dark:border-slate-700"
              >
                <FontAwesomeIcon icon={item.icon} className="text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WHAT WE OFFER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8">
          <h2 className="text-4xl font-bold mb-8 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faUsers, title: "Contract Staffing", desc: "Scale your workforce instantly with experienced professionals." },
              { icon: faUserTie, title: "Direct Hire & Executive Search", desc: "From senior developers to leaders who fit your culture." },
              { icon: faLayerGroup, title: "Project-Based Delivery", desc: "We assemble and manage teams for key initiatives." },
              { icon: faHandshake, title: "Workforce Consulting", desc: "Hiring strategy, compensation, planning, and retention." },
              { icon: faPeopleGroup, title: "Talent Pool Access", desc: "Priority access to 300,000+ vetted professionals." },
            ].map((item, i) => (
              <div
                key={i}
                viewport={{ once: true }}
                className="p-7 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl transition-shadow"
                // className="p-7 rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-slate-700 shadow group hover:shadow-xl transition"
              >
                <FontAwesomeIcon icon={item.icon} className="text-rose-500 text-3xl mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* INDUSTRIES  WE SERVE*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16" id="industries"
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                Industries We Serve
              </span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We help organizations hire top-tier professionals across multiple high‑growth sectors.
            </p>
          </div>

          {/* INDUSTRY GRID WITH ICONS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Technology", icon: faMicrochip },
              { name: "Healthcare", icon: faBriefcaseMedical },
              { name: "Finance", icon: faDollarSign },
              { name: "Engineering", icon: faCogs },
              { name: "Manufacturing", icon: faIndustry },
              { name: "Retail", icon: faStore },
              { name: "Telecom", icon: faSatelliteDish },
              { name: "Public Sector", icon: faLandmark },
              { name: "Startups", icon: faRocket },
              { name: "Enterprise", icon: faBuilding },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                // className="p-6 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border group shadow hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <FontAwesomeIcon
                  icon={industry.icon}
                  className="text-indigo-600 dark:text-rose-400 text-3xl mb-3 group-hover:scale-110 transition-transform"
                />
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* HOW WE WORK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10" id="process">
          <h2 className="text-4xl font-bold mb-10 text-center">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Understand Your Business", desc: "We begin with your challenges — not a resume dump." },
              { step: "2", title: "Curate the Right Fit", desc: "Technical specialists pre-screen candidates for skill + team fit." },
              { step: "3", title: "Deliver & Support", desc: "Ongoing onboarding, performance follow-up, and retention support." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 text-center rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur border"
                // className="p-8 text-center rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-slate-700"
              >
                <div className="text-4xl font-bold text-indigo-500 mb-3">{item.step}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}