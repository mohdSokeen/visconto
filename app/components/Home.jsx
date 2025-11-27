"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUsers,
  faDollarSign,
  faShieldAlt,
  faHandshake,
  faCircleCheck,
  faUserTie,
  faLayerGroup,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden py-30">
      {/* Background Blobs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 w-[70vw] h-[70vw] rounded-full filter blur-3xl opacity-70 animate-blob bg-gradient-to-tr from-indigo-600 via-purple-500 to-rose-500" />
        <div className="absolute -right-32 -bottom-32 w-[55vw] h-[55vw] rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000 bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-extrabold leading-tight"
            >
              Build Stronger Teams. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500">
                Faster Smarter
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg text-slate-700 dark:text-slate-300 max-w-xl"
            >
              Visconto Group Inc. helps companies of all sizes hire exceptional talent across technology, healthcare, finance, engineering, and more — without delays, risk, or overhead.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
                Talk to a Recruitment Strategist
              </a>
              <a href="#join" className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                Join Our Talent Network
              </a>
            </div>
          </div>

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="rounded-3xl p-1 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/40 to-white/10 dark:from-[#071018] dark:to-[#09131d]">
                  <div className="p-2 sm:p-2">
                    <div className="h-64 sm:h-85 rounded-xl bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop')] bg-cover bg-center flex items-end text-white p-6">
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
          </motion.div>
        </div>

        {/* WHY CHOOSE VISCONTO */}
        <section className="mt-24" id="why">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Clients Choose Visconto</h2>
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
                className="p-6 rounded-2xl bg-white dark:bg-[#0c1622] shadow hover:shadow-xl transition border border-slate-200 dark:border-slate-700"
              >
                <FontAwesomeIcon icon={item.icon} className="text-indigo-600 text-2xl mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="mt-28">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: faUsers, title: "Contract Staffing", desc: "Scale your workforce instantly with experienced professionals." },
              { icon: faUserTie, title: "Direct Hire & Executive Search", desc: "From senior developers to leaders who fit your culture." },
              { icon: faLayerGroup, title: "Project-Based Delivery", desc: "We assemble and manage teams for key initiatives." },
              { icon: faHandshake, title: "Workforce Consulting", desc: "Hiring strategy, compensation, planning, and retention." },
              { icon: faPeopleGroup, title: "Talent Pool Access", desc: "Priority access to 300,000+ vetted professionals." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-7 rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-slate-700 hover:shadow-xl transition"
              >
                <FontAwesomeIcon icon={item.icon} className="text-rose-500 text-3xl mb-4" />
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mt-28 text-center" id="industries">
          <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Technology • Healthcare • Finance • Engineering • Manufacturing • Retail • Telecom • Public Sector • Startups & Enterprise
          </p>
        </section>

        {/* HOW WE WORK */}
        <section className="mt-28" id="process">
          <h2 className="text-3xl font-bold mb-10 text-center">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="p-8 text-center rounded-2xl bg-white dark:bg-[#0c1622] border border-slate-200 dark:border-slate-700"
              >
                <div className="text-4xl font-bold text-indigo-500 mb-3">{item.step}</div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TALENT MESSAGE */}
        <section className="mt-28 max-w-4xl mx-auto text-center" id="talent">
          <h2 className="text-3xl font-bold mb-6">A Word About Our Talent</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            We invest in candidate relationships — offering guidance, transparent communication, and ongoing support. When candidates feel valued, clients see the results.
          </p>
          <a href="#join" className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
            Join Our Talent Network
          </a>
        </section>

        {/* FOOTER CTA */}
        <section className="mt-32 text-center pb-16" id="contact">
          <h2 className="text-4xl font-extrabold mb-6">Let’s Build Something Great.</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-6">
            Whether you need one specialist or a full team, Visconto Group Inc. delivers talent that drives impact.
          </p>
          <a href="#contact-form" className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-semibold shadow-lg hover:opacity-90 transition">
            Talk to a Recruitment Strategist
          </a>
        </section>
      </div>
    </section>
  );
}