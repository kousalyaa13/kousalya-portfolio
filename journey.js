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
 const codepath = [
  {id:'ai110',type:'program',name:'CodePath AI110',role:'AI Engineering · AI110',date:'2025–2026 · CodePath program',description:'Coursework in practical AI engineering through CodePath.',skills:[]},
  {id:'ai201',type:'program',name:'CodePath AI201',role:'AI Engineering · AI201',date:'2025–2026 · CodePath program',description:'Continued AI engineering coursework through CodePath.',skills:[]}
 ];
 const labels = {loudoun:'Loudoun County',witomni:'Wit Omni',capitalone:'Capital One',fairfax:'Fairfax County',obscurity:'Obscurity Labs',nrg:'National Research Group',umdta:'UMD Teaching',bttai:'Break Through Tech AI',bttguild:'Break Through Tech Guild',markcuban:'Mark Cuban Foundation',cci:'CCI',oracle:'Oracle REACH'};
 const entries = [...experienceRecords.filter(p => p.id !== 'fairfaxdb').map(p => p.id === 'fairfax' ? {...p, roles:[p,experienceRecords.find(r => r.id === 'fairfaxdb')]} : p), ...codepath];
 const priority = ['loudoun','capitalone','witomni','fairfax'];
 entries.sort((a,b) => (priority.includes(a.id) ? priority.indexOf(a.id) : 9) - (priority.includes(b.id) ? priority.indexOf(b.id) : 9));
 const skillsFor = p => p.id === 'loudoun' ? [...p.skills,'Power BI','Flask','Dataverse'] : [...new Set((p.roles || [p]).flatMap(r => r.skills))];
 const paragraphs = lines => lines.map(line => '<p>'+h(line)+'</p>').join('');
 const roleBlock = (role,date,lines) => '<article><h3>'+h(role)+'</h3><small>'+h(date)+'</small>'+paragraphs(lines)+'</article>';
 const detail = p => {
  if (p.id === 'loudoun') return loudounRoles.map((r,i) => roleBlock(r.title,r.date,extra.loudoun[i])).join('');
  return (p.roles || [p]).map(r => roleBlock(r.role,range(r),[r.description,...(extra[r.id] || [])])).join('');
 };
 function select(id, navigate = false) {
  const entry = entries.find(p => p.id === id);
  shelf.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.book === id)));
  const skills = skillsFor(entry);
  const plaque = entry.plaque ? '<img class="book-plaque" alt="" src="assets/plaques/'+encodeURIComponent(entry.plaque)+'">' : '';
  book.innerHTML = '<div class="book-page"><h2 tabindex="-1">'+h(entry.name)+'</h2>'+detail(entry)+'</div><div class="book-page book-context">'+plaque+
   (skills.length ? '<h3>Skills</h3><ul>'+skills.map(skill=>'<li>'+h(skill)+'</li>').join('')+'</ul>' : '')+
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
