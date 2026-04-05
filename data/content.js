/**
 * content.js — All portfolio content in one place.
 * Edit this file to update your portfolio without touching HTML or CSS.
 */

const CONTENT = {

  // ── META ────────────────────────────────────────────────────────────────────
  meta: {
    title: "Joaquim Corbera — Data, Analytics & AI",
    name: ["Joaquim", "Corbera", "Vidiella"],   // each item = one line in hero
    role: "Data, Analytics & AI",
    tag:  "Open to new opportunities",          // pulsing badge in hero
    heroDesc: "Senior consultant with 6+ years delivering end-to-end data solutions in consulting environments. Strong background in data engineering, analytics architectures and cloud platforms — combined with proven team leadership, client management and pre-sales capabilities.",
  },

  // ── SOCIAL & CV ─────────────────────────────────────────────────────────────
  links: {
    cv:       "cv/Joaquim_Corbera_CV.pdf",
    linkedin: "https://www.linkedin.com/in/joaquimcorberavidiella/",
    github:   "https://github.com/quimcorbera",
    email:    "joaquim.corberavidiella@gmail.com",
  },

  // ── ABOUT ───────────────────────────────────────────────────────────────────
  about: {
    paragraphs: [
      `I'm a <strong>Senior Data & AI consultant</strong> who has spent 6+ years at <strong>SDG Group</strong> building the kind of data infrastructure that changes how businesses actually operate — not just dashboards that look good in a demo.`,
      `I work at the intersection of <strong>technical depth and business fluency</strong>. I can architect a Snowflake pipeline, migrate a SAP BW/4HANA layer to a cloud lakehouse, and lead a client steering committee — all in the same day. That combination is what I bring to data leadership roles.`,
      `Currently looking for a <strong>management position</strong> in data teams — where I can own data strategy end-to-end, scale teams and build long-term client value in data-driven organizations.`,
    ],
    stats: [
      { num: "6+",  label: "years in data consulting" },
      { num: "~10", label: "person team led" },
    ],
  },

  // ── SOFT SKILLS ─────────────────────────────────────────────────────────────
  softSkills: [
    {
      icon: "🧩",
      title: "Problem solving & critical thinking",
      color: "si-teal",
      items: [
        { name: "Analytical mindset",  desc: "I decompose complex data challenges into structured, actionable steps before any code is written." },
        { name: "Best practices",      desc: "Clean code, documentation, version control and reproducible pipelines are non-negotiable for me." },
        { name: "Systems thinking",    desc: "Every technical decision is evaluated for its ripple effects on architecture, business processes and long-term scalability." },
      ],
    },
    {
      icon: "🎯",
      title: "Leadership & ownership",
      color: "si-purple",
      items: [
        { name: "Full ownership",          desc: "End-to-end accountability: scope, delivery, quality and client outcomes. No hand-offs without context." },
        { name: "Proactive decision-making", desc: "I surface risks early, escalate when needed and bring solutions rather than problems." },
        { name: "Mentorship mindset",      desc: "I invest in my team's growth through code reviews, knowledge-sharing sessions and fostering technical autonomy." },
      ],
    },
    {
      icon: "🤝",
      title: "Communication & collaboration",
      color: "si-accent",
      items: [
        { name: "Cross-functional fluency", desc: "I bridge engineering, analytics and business. I make complex technical concepts tangible for decision-makers." },
        { name: "Constructive feedback",    desc: "I give and receive honest feedback in a way that raises quality without creating friction." },
      ],
    },
    {
      icon: "🌱",
      title: "Adaptability & continuous learning",
      color: "si-blue",
      items: [
        { name: "Fast ramp-up",    desc: "Adapting to new client environments, tech stacks and business domains is a core muscle I've built over 6 years of consulting." },
        { name: "Tech curiosity",  desc: "I stay genuinely up to date with the data ecosystem — not chasing hype, but understanding what actually moves the needle." },
      ],
    },
  ],

  // ── HARD SKILLS ─────────────────────────────────────────────────────────────
  hardSkills: [
    {
      icon: "🖥️", color: "si-teal",
      name: "Backend",
      desc: "Data manipulation, scripting and query languages at the core of every pipeline.",
      tags: ["SQL", "Python", "API"],
    },
    {
      icon: "📊", color: "si-purple",
      name: "Frontend & BI",
      desc: "Visualization tools that turn data into decisions for business stakeholders.",
      tags: ["Power BI", "Tableau", "Streamlit", "HTML"],
    },
    {
      icon: "☁️", color: "si-accent",
      name: "Data & Cloud",
      desc: "End-to-end data platforms, orchestration and integration tools across cloud environments.",
      tags: ["AWS", "dbt", "Airflow", "Docker", "SnapLogic", "Talend", "IICS", "Jenkins"],
    },
    {
      icon: "🗄️", color: "si-blue",
      name: "Databases",
      desc: "Relational, analytical and cloud-native databases across multiple technology stacks.",
      tags: ["Snowflake", "SAP BW/4HANA", "MySQL", "Oracle", "DynamoDB"],
    },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────────────────────
  experience: [
    {
      dates:   "Jun 2025 — Present",
      current: true,
      role:    "Senior Qualified Data Consultant",
      company: "SDG Group España · Barcelona",
      desc:    "Leading complex, multi-stakeholder data projects for HR and Manufacturing clients, managing a team of ~10. Responsible for long-term team objectives, team structure and resource allocation based on client needs and consultant skill sets. Driving technical excellence while actively contributing to pre-sales, proposal development and long-term client relationship management.",
    },
    {
      dates:   "May 2024 — May 2025",
      current: false,
      role:    "Senior Data Consultant",
      company: "SDG Group España · Barcelona",
      desc:    "Formally managed a team of 3, conducting bi-annual performance evaluations and setting individual mid-term objectives. Owned end-to-end project delivery — scope, planning, execution and client communication. Identified and developed upsell opportunities through a deep understanding of client business contexts and evolving data needs.",
    },
    {
      dates:   "Apr 2022 — Mar 2024",
      current: false,
      role:    "Data Consultant",
      company: "SDG Group España · Barcelona",
      desc:    "Delivered analytics and BI solutions with high autonomy, becoming a trusted technical reference for clients and internal teams. Designed data pipelines, dashboards and analytical models while bridging technical and business stakeholders.",
    },
    {
      dates:   "Oct 2020 — Mar 2022",
      current: false,
      role:    "Data Analyst",
      company: "SDG Group España · Barcelona",
      desc:    "Built and maintained ETL processes in Talend and MySQL, supporting data integration and reporting across multiple client projects. Laid the foundations in data quality, autonomy and cross-team collaboration.",
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────────────────────
  projects: [
    {
      num:      "01",
      featured: true,
      title:    "Human Resources Analytics — SAP BW/4HANA to Cloud",
      desc:     "Designed and delivered a cloud-native HR analytics platform integrating SAP BW/4HANA into Snowflake via a dedicated API and AWS Glue pipelines. The solution provides a consistent, holistic view of HR covering workforce planning, capacity forecasting, demographics and turnover prediction.",
      stack:    ["SAP BW/4HANA", "Snowflake", "AWS Glue", "S3", "API", "Python"],
    },
    {
      num:      "02",
      featured: false,
      title:    "Manufacturing Analytics — Pharma",
      desc:     "Built an end-to-end analytical use-case for a pharmaceutical company, generating multiple data products across manufacturing processes on a modern cloud lakehouse stack.",
      stack:    ["Snowflake", "AWS", "dbt"],
    },
    {
      num:      "03",
      featured: false,
      title:    "Data Ingestion Tool — PoC",
      desc:     "Delivered a Proof of Concept for a data ingestion platform, presenting SLA-focused results to Business stakeholders and technical outcomes to the Platform engineering team.",
      stack:    ["Python", "AWS"],
    },
    {
      num:      "04",
      featured: false,
      title:    "Country Sales Report",
      desc:     "Built a Sales-In / Sales-Out country report tracking brand performance and benchmarking against direct competitors, with a full Tableau + Redshift stack.",
      stack:    ["Tableau", "Redshift"],
    },
    {
      num:      "05",
      featured: false,
      title:    "Telemedicine Data Warehouse",
      desc:     "Designed a single source of truth data warehouse for a telemedicine company using MySQL and Talend Studio for ETL, plus an operational Qlik Sense dashboard for reporting.",
      stack:    ["MySQL", "Talend", "Qlik Sense"],
    },
  ],

  // ── EDUCATION ───────────────────────────────────────────────────────────────
  education: {
    degree:  "BSc Industrial Engineering",
    school:  "IQS Barcelona · Spain",
    points: [
      "Strong foundation in problem-solving, optimization and analytical thinking.",
      "Bachelor thesis focused on Computational Fluid Dynamics (CFD).",
      "Hands-on, laboratory-based learning approach.",
    ],
  },

  // ── CERTIFICATIONS ──────────────────────────────────────────────────────────
  certifications: [
    { name: "Snowflake Data Engineer Training",              issuer: "Snowflake",              date: "NOV 2025" },
    { name: "Astronomer Certification: Apache Airflow Fundamentals", issuer: "Astronomer",     date: "SEP 2023" },
    { name: "Cloud Data Integration (CDI) Partner Bootcamp", issuer: "Informatica · IICS",    date: "JUN 2022" },
    { name: "dbt Fundamentals & Advanced Training",          issuer: "dbt Labs",               date: "—" },
    { name: "AWS Certified Cloud Practitioner",              issuer: "Amazon Web Services",    date: "—" },
    { name: "Python Programming Training",                   issuer: "—",                      date: "—" },
  ],

  // ── CONTACT ─────────────────────────────────────────────────────────────────
  contact: {
    heading: "Let's build something <span>great.</span>",
    subtext: "Open to data leadership roles, consulting engagements and interesting conversations about data strategy. I reply within 24h.",
  },

};
