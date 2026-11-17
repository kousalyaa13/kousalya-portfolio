/* Experience dates and copy transcribed from the supplied LinkedIn PDF. */
const experienceRecords = [
  {
    "id": "fairfax",
    "type": "work",
    "start": "2023-06",
    "end": "2023-08",
    "name": "Fairfax County Government",
    "role": "Business Applications Intern",
    "description": "Built a Power App for 200+ print requests and modernized JavaScript and API workflows.",
    "skills": [
      "Power Apps",
      "JavaScript"
    ],
    "plaque": "fairfax.png"
  },
  {
    "id": "markcuban",
    "type": "program",
    "start": "2023-08",
    "end": "2023-12",
    "name": "Mark Cuban Foundation",
    "role": "AI Bootcamp Participant",
    "description": "Explored applied AI, machine learning, cyber risk, and government technology use cases.",
    "skills": [
      "AI",
      "Machine Learning"
    ],
    "plaque": "mark_cuban.png"
  },
  {
    "id": "fairfaxdb",
    "type": "work",
    "start": "2024-05",
    "end": "2024-06",
    "name": "Fairfax County Government",
    "role": "Database Administration Intern",
    "description": "Managed SQL Server databases and provisioned 20+ virtual machines for county infrastructure.",
    "skills": [
      "SQL Server",
      "VMware"
    ],
    "plaque": "fairfax.png"
  },
  {
    "id": "obscurity",
    "type": "work",
    "start": "2024-06",
    "end": "2024-08",
    "name": "Obscurity Labs",
    "role": "Machine Learning Engineering Intern",
    "description": "Built drone telemetry pipelines and computer vision workflows for real-time analysis and anomaly detection.",
    "skills": [
      "Python",
      "Computer Vision"
    ],
    "plaque": "Obscurity Labs Pixel Plaque.png"
  },
  {
    "id": "cci",
    "type": "program",
    "start": "2024-06",
    "end": "2024-08",
    "name": "Commonwealth Cyber Initiative",
    "role": "Cybersecurity Training Fellow",
    "description": "Earned first place in Tech Duels and placed in the top 10% of the Capture the Flag challenge.",
    "skills": [
      "Cybersecurity",
      "CTI"
    ],
    "plaque": null
  },
  {
    "id": "nrg",
    "type": "work",
    "start": "2024-08",
    "end": "2024-09",
    "name": "National Research Group",
    "role": "AI Risk Landscape Market Research Intern",
    "description": "Researched 25+ emerging AI risks and presented governance and mitigation strategies to leadership.",
    "skills": [
      "AI Ethics",
      "Research"
    ],
    "plaque": "national_research_group.png"
  },
  {
    "id": "bttguild",
    "type": "program",
    "start": "2024-08",
    "end": "2024-08",
    "name": "Break Through Tech",
    "role": "Summer Guild Fellow",
    "description": "Prototyped an accessible budgeting app for older adults using Figma and Python.",
    "skills": [
      "Figma",
      "Python"
    ],
    "plaque": "break_through_tech.png"
  },
  {
    "id": "fire",
    "type": "program",
    "start": "2024-08",
    "end": "2025-12",
    "name": "UMD FIRE",
    "role": "Computing & Society Researcher",
    "description": "Studied the environmental impacts of AI infrastructure, surveyed 100+ participants, and co-authored a peer-reviewed paper.",
    "skills": [
      "Research",
      "R"
    ],
    "plaque": "fire.png"
  },
  {
    "id": "oracle",
    "type": "program",
    "start": "2025-05",
    "end": "2025-07",
    "name": "Oracle",
    "role": "REACH Program Fellow",
    "description": "Explored cloud infrastructure, backend development, and enterprise software through technical workshops.",
    "skills": [
      "Cloud",
      "Python"
    ],
    "plaque": "oracle.png"
  },
  {
    "id": "kohls",
    "type": "program",
    "start": "2025-05",
    "end": "2025-05",
    "name": "Kohl’s",
    "role": "Emerging Talent Summit Fellow",
    "description": "Designed and presented a customer loyalty program using product strategy and behavioral insights.",
    "skills": [
      "Product Strategy",
      "UI/UX"
    ],
    "plaque": null
  },
  {
    "id": "loudoun",
    "type": "work",
    "start": "2025-06",
    "end": null,
    "name": "Loudoun County Government",
    "role": "Three roles · one growing journey",
    "description": "Building county applications from early prototypes to production platforms.",
    "skills": [
      "SQL Server",
      "Power Platform",
      "Python"
    ],
    "plaque": "loudoun.png"
  },
  {
    "id": "jpm",
    "type": "program",
    "start": "2025-07",
    "end": "2025-07",
    "name": "JPMorganChase",
    "role": "Technology Program Participant",
    "description": "Selected for the Delaware Open House to explore technology and analytics careers in financial services.",
    "skills": [
      "Technology",
      "Analytics"
    ],
    "plaque": null
  },
  {
    "id": "umdta",
    "type": "work",
    "start": "2025-08",
    "end": "2025-12",
    "name": "University of Maryland",
    "role": "Teaching Assistant · INST327",
    "description": "Taught SQL and database design through office hours and mentored four database implementation teams.",
    "skills": [
      "SQL",
      "Database Design"
    ],
    "plaque": "umd.png"
  },
  {
    "id": "bttai",
    "type": "program",
    "start": "2026-04",
    "end": null,
    "name": "Break Through Tech AI",
    "role": "AI/ML Fellow",
    "description": "Selected from 5,000+ candidates for an applied machine learning and AI engineering fellowship.",
    "skills": [
      "Machine Learning",
      "Data Science"
    ],
    "plaque": "break_through_tech.png"
  },
  {
    "id": "capitalone",
    "type": "work",
    "start": "2026-06",
    "end": "2026-08",
    "name": "Capital One",
    "role": "Data Analyst Intern",
    "description": "Built SQL quality controls, an analytics table used by 20+ teams, and a daily Databricks pipeline with 86+ columns.",
    "skills": [
      "Snowflake",
      "Databricks"
    ],
    "plaque": "capital_one.png"
  },
  {
    "id": "witomni",
    "type": "work",
    "start": "2026-08",
    "end": null,
    "name": "Wit Omni AI Marketing",
    "role": "AI Studio Fellow",
    "description": "Building a repeat-purchase classifier on 500K+ transactions with customer behavior features and supervised learning.",
    "skills": [
      "Python",
      "Scikit-learn"
    ],
    "plaque": "witomni.png"
  }
];
const loudounRoles = [
  {
    "title": "Data & Analytics Intern",
    "date": "Jun–Aug 2025",
    "description": "Prototyped budget and transit applications and supported municipal endpoint security."
  },
  {
    "title": "Entry Level Product & Data Analyst",
    "date": "Aug 2025–Apr 2026",
    "description": "Built SQL-backed budgeting and transit platforms, reducing manual reporting and follow-up."
  },
  {
    "title": "Junior Data Analyst",
    "date": "Apr 2026–Present",
    "description": "Supporting live county platforms and developing a Sheriff’s Office vehicle calibration application."
  }
];

(() => {
 const shelf = document.getElementById('bookshelf');
 const book = document.getElementById('experience-book');
 const h = escapeHTML;
 const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 const format = date => months[Number(date.slice(5))-1] + ' ' + date.slice(0,4);
 const range = entry => entry.date || (format(entry.start) + (entry.start === entry.end ? '' : ' – ' + (entry.end ? format(entry.end) : 'Present')));
 const extra = {
  capitalone: [
   'Built seven Snowflake SQL controls for Eno and Customer Assist AI. Six were active, with daily Databricks compliance reporting.',
   'Automated a daily pipeline that flattened nested data into more than 86 standardized columns and added notifications.',
   'Combined three sources into an analytics table with one row per chatbot response, adopted by more than 20 teams.',
   'Built more than ten QuickSight dashboards and a reporting layer that combined five tables. Placed second for the Lifelong Learner award.'
  ],
  loudoun: [
   ['Prototyped budget and transit applications and presented the budget prototype to county leadership. Helped replace spreadsheets used to log mileage, passenger counts, and service changes.'],
   ['Built a budget app used by 27+ staff, replacing 15+ spreadsheets and cutting reconciliation from hours to seconds. Created SQL models, views, and stored procedures and built more than 15 Power BI reports.', 'Developed transit workflows for 200+ drivers across 50+ routes. Automated reminders reduced incomplete logs by about 70% and saved around ten hours of weekly follow-up.'],
   ['Support the budget and transit tools after launch, resolve production issues, and document workflows for county staff.', 'Build a mobile-friendly Flask and SQL Server application for the Sheriff’s Office that digitizes vehicle calibration forms and automates PDF generation and printing.']
  ],
  witomni: ['Engineer recency, frequency, and monetary features from more than 500,000 transactions. Evaluate and tune classifiers using precision, recall, F1, and ROC-AUC to account for class imbalance and support retention analysis.'],
  fairfax: ['Designed the print workflow from prototype through deployment and automated email notifications and operational reporting. Refactored JavaScript and API integrations across more than 50 files.'],
  obscurity: ['Analyzed SiK/MAVLink telemetry with software-defined radio tools and experimented with object detection using Roboflow and Hugging Face.']
 };
 const codepath = {
  id:'codepath', type:'program', name:'CodePath AI',
  roles:[
   {id:'ai110',role:'AI110',date:'First course',description:'Started the CodePath AI Engineering sequence with AI110.'},
   {id:'ai201',role:'AI201',date:'Follow-on course',description:'Continued the AI Engineering sequence with AI201 after completing AI110.'}
  ]
 };
 const labels = {loudoun:'Loudoun County Government',witomni:'witOmni AI Marketing',fairfax:'Fairfax County Government',umdta:'UMD Teaching Assistant',bttai:'Break Through Tech AI/ML',bttguild:'Break Through Tech Guild',cci:'Commonwealth Cyber Initiative',kohls:"Kohl's",oracle:'Oracle REACH'};
 const entries = [...experienceRecords.filter(p => p.id !== 'fairfaxdb').map(p => p.id === 'fairfax' ? {...p, roles:[p,experienceRecords.find(r => r.id === 'fairfaxdb')]} : p), codepath];
 const priority = ['loudoun','capitalone','witomni','fairfax'];
 entries.sort((a,b) => (priority.includes(a.id) ? priority.indexOf(a.id) : 9) - (priority.includes(b.id) ? priority.indexOf(b.id) : 9));
 const topSkills = {
  "fairfax": [
    "Power Apps",
    "Power Automate",
    "Power BI",
    "JavaScript",
    "API Integration"
  ],
  "fairfaxdb": [
    "SQL Server",
    "SSMS",
    "VMware vSphere",
    "Infoblox",
    "Azure"
  ],
  "markcuban": [
    "Machine Learning",
    "Neural Networks",
    "AI Prototyping",
    "Model Development",
    "Cyber Risk Analysis"
  ],
  "obscurity": [
    "Python",
    "GNU Radio",
    "MAVLink",
    "Computer Vision",
    "Telemetry Ingestion"
  ],
  "cci": [
    "Cyber Threat Intelligence",
    "Capture the Flag",
    "Project Management",
    "Security Analysis",
    "Team Collaboration"
  ],
  "nrg": [
    "AI Ethics",
    "Market Research",
    "AI Governance",
    "Risk Assessment",
    "Research Communication"
  ],
  "bttguild": [
    "Figma",
    "Python",
    "UI/UX",
    "Prototyping",
    "Web App Design"
  ],
  "fire": [
    "R",
    "Survey Design",
    "Literature Review",
    "Data Analysis",
    "Research Writing"
  ],
  "oracle": [
    "Cloud Computing",
    "Python",
    "Backend Development",
    "Enterprise Software",
    "Technical Collaboration"
  ],
  "kohls": [
    "Product Strategy",
    "UI/UX",
    "Customer Experience",
    "Project Management",
    "Presentation"
  ],
  "jpm": [
    "Technology Career Exploration",
    "Analytics Career Exploration",
    "Financial Services Technology",
    "Professional Networking",
    "Industry Research"
  ],
  "umdta": [
    "SQL",
    "Query Optimization",
    "Database Normalization",
    "ER Modeling",
    "Technical Mentoring"
  ],
  "bttai": [
    "Machine Learning",
    "Data Science",
    "AI Engineering",
    "Model Evaluation",
    "Applied Analytics"
  ],
  "capitalone": [
    "SQL",
    "Snowflake",
    "Databricks",
    "Data Quality",
    "QuickSight"
  ],
  "witomni": [
    "Python",
    "Scikit-learn",
    "RFM Feature Engineering",
    "Classification",
    "Model Evaluation"
  ],
  "loudoun1": [
    "Power Apps",
    "Power Pages",
    "Workflow Prototyping",
    "Process Analysis",
    "Stakeholder Communication"
  ],
  "loudoun2": [
    "SQL Server",
    "Power Apps",
    "Power BI",
    "Power Pages",
    "Dataverse"
  ],
  "loudoun3": [
    "Python",
    "Flask",
    "SQL Server",
    "Production Support",
    "Workflow Automation"
  ],
  "ai110": [
    "AI Engineering",
    "Python",
    "AI Application Development",
    "Model Integration",
    "Technical Problem Solving"
  ],
  "ai201": [
    "AI Engineering",
    "Python",
    "AI Workflow Design",
    "Prototyping",
    "Technical Problem Solving"
  ]
};
 const fullDescriptions = {
  "witomni": [
    "Building a binary classification pipeline using Python and Scikit-Learn on an e-commerce transactional dataset (500k+ rows) to predict customer repeat purchasing behavior for founder-led businesses. Engineering customer-level features (RFM metrics) to analyze purchasing patterns, identify key behavioral drivers, and inform targeted retention strategies. Developing, evaluating, and tuning supervised machine learning models using Precision, Recall, F1-Score, and ROC-AUC to handle class imbalance and maximize predictive accuracy."
  ],
  "loudoun1": [
    "Developed a Power Pages transit application that replaced manual Excel trip logs with automated workflows for mileage, passenger counts, reroutes, holidays, and atypical service across 50+ routes.",
    "Designed and presented a Power Apps budget prototype to county leadership, helping replace fragmented spreadsheets with a database-backed workflow for fiscal reporting and financial tracking.",
    "Coordinated with town leadership across four municipalities on endpoint security readiness."
  ],
  "loudoun2": [
    "Modernized the Department of Information Technology's budget tracking processes by replacing 15+ Excel sheets with a centralized SQL-backed Power Apps application, reducing manual reconciliation tasks from hours to seconds for 27+ active users. Developed 10+ budgeting features, including transfers, adjustments, grant funding, bulk updates, deletions, and real-time financial tracking, while building SQL data models, views, and stored procedures supporting fiscal-year reporting and operational analytics. Designed 15+ Power BI reports used by county leadership for financial oversight, operational visibility, and data-driven decision-making.",
    "Led development of a transit operations platform supporting drivers and staff across 50+ bus routes, replacing manual logging workflows with automated reporting, compliance reminders, and centralized tracking for mileage, passenger counts, reroutes, holidays, and atypical service days. Engineered automated compliance workflows that reduced incomplete transit logs by 70% and cut manual admin follow-up by 10 hours per week."
  ],
  "loudoun3": [
    "Directing post-go-live operations of Loudoun County Government’s Budget Automation and Transit platforms, providing production support, debugging live issues, and delivering real-time enhancements while maintaining reliable day-to-day platform operations for county staff. Led knowledge transfer sessions and documentation for 10+ stakeholders and technical staff to support long-term maintenance, adoption, and operational continuity.",
    "Currently leading a new public safety modernization initiative with the Loudoun County Sheriff’s Office by developing a centralized vehicle calibration and collision-tracking application using Python, Flask, and SQL Server. Designed tablet and phone-based workflows for vehicle technicians to digitize calibration forms, automate PDF generation, streamline print operations, and centralize reporting through a secure SQL-backed systems and VMs."
  ],
  "bttai": [
    "Selected out of a pool of 5000+ candidates for a competitive AI/ML fellowship focused on applied machine learning, AI engineering, and data science techniques."
  ],
  "umdta": [
    "Reinforced core database concepts including SQL joins, subqueries, aggregation, normalization, and entity-relationship modeling. Held weekly office hours to debug SQL queries, troubleshoot relational schemas, and provide one-on-one technical guidance to improve students’ query optimization and database design skills. Mentored 4 semester-long database implementation teams by reviewing project architecture, validating ER models, and delivering feedback aligned with industry-standard database design practices."
  ],
  "fire": [
    "Conducted research under Dr. Kristina Kramarczuk analyzing the societal and environmental impacts of AI infrastructure, GPU manufacturing, e-waste, and rare-earth material dependency. Designed and conducted IRB-approved surveys with 100+ student and faculty participants, performed literature reviews, and analyzed public awareness surrounding the environmental costs of large-scale AI hardware and data center expansion. Co-authored a published, peer-reviewed research paper and presented findings at the university research symposium."
  ],
  "jpm": [
    "Selected for the JPMorgan Chase 2025 Delaware Open House, an invitation-only program focused on technology, analytics, and early career development within financial services. Connected with industry professionals and gained insight into technology and analytics career paths at JPMorgan Chase."
  ],
  "oracle": [
    "Participated in hands-on technical workshops focused on cloud infrastructure, backend product development frameworks, and enterprise software engineering best practices."
  ],
  "kohls": [
    "Collaborated with a cross-functional team to design “Kohl’s Quest,” a tiered customer loyalty program focused on improving customer engagement and retention. Applied product strategy, behavioral insights, and customer experience principles to develop and present recommendations to 200+ students and 20+ Kohl’s leaders and employees."
  ],
  "nrg": [
    "Conducted market research identifying 25+ emerging AI risks across high-impact sectors including healthcare, financial services (BFSI), and technology infrastructure sectors. Mapped risks to governance and compliance frameworks to help prioritize mitigation strategies.",
    "Developed business case studies analyzing risks such as algorithmic bias, data privacy exposure, shadow AI adoption, and model drift, evaluating their operational and financial impact on organizations. Partnered with domain experts to present mitigation strategies directly to corporate leadership, bridging the gap between technical AI vulnerabilities and executive decision-making."
  ],
  "bttguild": [
    "Designed and prototyped a personal budgeting web app using Figma for UI design and Python to implement core logic. Focused on improving financial literacy specifically for elders through a simple user experience and interactive budgeting features."
  ],
  "obscurity": [
    "Built an end-to-end analytics platform to process and decode real-time drone telemetry and behavioral data. Developed and optimized computer vision workflows using Roboflow and open-source AI frameworks such as Hugging Face to support automated anomaly detection.",
    "Engineered live data ingestion pipelines integrating radio communication software to translate raw hardware signals into structured telemetry data for real-time analysis and tracking. Conducted iterative model experimentation and testing to improve AI performance, signal interpretation, and autonomous monitoring capabilities."
  ],
  "cci": [
    "Chosen from 150+ applicants. Earned 1st place in Tech Duels and top 10% in Capture the Flag Cybersecurity Challenge. Was mentored by experts from Google, AWS, Leidos, and Appian."
  ],
  "fairfaxdb": [
    "Provisioned, configured, and decommissioned 20+ virtual machines using VMware vSphere and Infoblox to support county testing, infrastructure operations, and database environments. Administered Microsoft SQL Server databases by performing backup, restoration, and management tasks using SSMS alongside Active Directory and DNS integrations. Supported multi-cloud infrastructure initiatives by validating IaaS environments and operational readiness across AWS and Microsoft Azure. Completed advanced technical labs in VMware, Azure, and AWS to strengthen cloud infrastructure and virtualization skills."
  ],
  "markcuban": [
    "Built applied AI and machine learning solutions exploring model development, cyber risk analysis, and real-world government technology use cases."
  ],
  "fairfax": [
    "print operations, modernizing a system handling 200+ requests and managing the full lifecycle from Figma wireframing to Microsoft Power Platform deployment. Engineered automated email notification workflows via Power Automate and built operational reporting dashboards using Power BI and Power Query to support a team of 20+ internal users. Upgraded outdated workflows by refactoring deprecated JavaScript code and API integrations across 50+ codebase files, maintaining strict repository version control standards within an Agile/Scrum development cycle. Microsoft Power Apps, Microsoft Power BI and +5 skills"
  ]
};
 const highlights = /(?:\b(?:SQL Server|Power Apps|Power Pages|Power BI|Snowflake|Databricks|Python|QuickSight|Customer Assist AI|machine learning|computer vision|model drift|data pipelines|vehicle calibration|competitive AI\/ML fellowship)\b|\b\d[\d,]*(?:%|\+)|\b(?:first place|second place|hours to seconds)\b)/gi;
 const paragraphs = lines => lines.map(line => '<p>'+h(line).replace(highlights, match => '<strong>'+match+'</strong>')+'</p>').join('');
 function roleBlock(id, role, date, lines) {
  const tags = topSkills[id].map(skill => '<li>'+h(skill)+'</li>').join('');
  return '<article><h3>'+h(role)+'</h3><small>'+h(date)+'</small>'+paragraphs(lines)+'<h4>Top skills</h4><ul class="book-skills">'+tags+'</ul></article>';
 }
 function detail(entry) {
  if (entry.id === 'loudoun') return loudounRoles.map((role, i) => {
   const id = 'loudoun'+(i+1);
   return roleBlock(id,role.title,role.date,fullDescriptions[id]);
  }).join('');
  return (entry.roles || [entry]).map(role => roleBlock(role.id,role.role,range(role),fullDescriptions[role.id] || extra[role.id] || [role.description])).join('');
 }
 function select(id, navigate = false) {
  const entry = entries.find(p => p.id === id);
  shelf.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.book === id)));
  const plaque = entry.plaque ? '<img class="book-plaque" alt="" src="assets/plaques/'+encodeURIComponent(entry.plaque)+'">' : '';
  book.innerHTML = '<div class="book-page"><h2 tabindex="-1">'+h(labels[entry.id] || entry.name)+'</h2>'+detail(entry)+'</div><div class="book-page book-context">'+plaque+
   '<button type="button" class="book-back">Back to shelf</button></div>';
  book.querySelector('.book-back').onclick = () => shelf.querySelector('[aria-pressed="true"]').focus();
  if (navigate) book.querySelector('h2').focus({preventScroll:!matchMedia('(max-width: 780px)').matches});
 }
 shelf.innerHTML = [['work','Work experience'],['program','Programs & research']].map(([type,title]) =>
  '<section><h3>'+title+'</h3><div class="book-spines">'+entries.filter(p=>p.type===type).map(p=>'<button type="button" data-book="'+h(p.id)+'" aria-controls="experience-book"><span>'+h(labels[p.id] || p.name)+'</span></button>').join('')+'</div></section>'
 ).join('');
 shelf.querySelectorAll('button').forEach(button => button.addEventListener('click', () => select(button.dataset.book,true)));
 select('loudoun');
})();
