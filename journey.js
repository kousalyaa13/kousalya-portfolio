/* Experience dates and copy transcribed from the supplied LinkedIn PDF. */
const experienceRecords = [
  {
    id: 'att', type: 'program', name: 'AT&T', start: '2025-06', date: 'Jun 2025',
    role: 'AT&T Technology Academy Participant',
    description: 'Completed AT&T’s Technology Academy program focused on Agile delivery, cloud computing, APIs, AI/ML fundamentals, and modern software engineering practices.'
  },
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
 const credentials = [
  ["aws-ai","AWS Certified AI Practitioner","Amazon Web Services (AWS)","Nov 2026","Nov 2029"],
  ["claude","Claude 101","Anthropic","Nov 2026"],
  ["fluency","AI Fluency Framework & Foundations","Anthropic","Nov 2026"],
  ["openai","AI Foundations","OpenAI","Oct 2026"],
  ["ai201","Applications of AI Engineering","CodePath","Aug 2026"],
  ["nask","Now Assist Skill Kit Fundamentals","ServiceNow","Aug 2026"],
  ["cornell","Machine Learning Foundations","Cornell University","Jul 2026"],
  ["ai110","Foundations of AI Engineering","CodePath","May 2026"],
  ["snowpro","SnowPro Associate: Platform Certification","Snowflake","Feb 2026","Feb 2028"],
  ["ibm-de","Introduction to Data Engineering","IBM","Jan 2026"],
  ["att","AT&T Technology Academy Participant","AT&T","Jun 2025","Jan 2030"],
  ["sql50","SQL50","LeetCode","Jun 2025"],
  ["power-platform","Microsoft Certified: Power Platform Fundamentals","Microsoft","Jun 2025"],
  ["google-ai","Google AI Essentials","Google","Apr 2025"],
  ["aws-cloud","AWS Certified Cloud Practitioner","Amazon Web Services (AWS)","Apr 2025","Apr 2028"],
  ["tryhackme","Pentesting Principles","TryHackMe","Feb 2025"],
  ["pl900","PL-900: Microsoft Power Platform Fundamentals","Microsoft","Oct 2024"],
  ["google-pm","Google Foundations of Project Management","Coursera","Oct 2024"],
  ["ibm-sql","IBM Databases and SQL for Data Science with Python","Coursera","May 2024"],
  ["meta","Meta Introduction to Front-End Development","Coursera","May 2024"],
  ["nrf","Customer Service & Sales Certification","NRF Foundation","Apr 2024"],
  ["azure","Microsoft Certified: Azure Fundamentals","Microsoft Azure","Nov 2023"],
  ["revit","Certified Professional Autodesk Revit Architecture","Autodesk","May 2023"],
  ["oracle-db","Oracle Database Foundations Associate","Oracle","May 2023"],
  ["autocad","Autodesk Certified User: AutoCAD","Autodesk","Jul 2022"],
  ["mta","MTA: Introduction to Programming Using Python","Microsoft","May 2021"],
  ["powerpoint","Microsoft Office Specialist: PowerPoint Certification","Microsoft","May 2021"],
  ["word","Microsoft Office Specialist: Word Certification","Microsoft","May 2021"]
 ];
 const credentialLinks = {
  "aws-ai": "https://www.credly.com/badges/b6818726-d290-43a6-a046-65dd21b8da0d/linked_in_profile",
  "claude": "https://verify.skilljar.com/c/zn6ekxs2wk92",
  "fluency": "https://verify.skilljar.com/c/rsrcqwi3c4yk",
  "openai": "https://oaiacademy.credential.net/cd6e06f8-8c8c-44ce-b725-c82bea6b3d6b?key=cac046b6478572ea5c0e8ea1a89c5e98fd7340dd73ec237fb693d84225c8316f",
  "cornell": "https://mycredentials.ecornell.cornell.edu/mycredential/EGeuQbilPE",
  "att": "https://www.credly.com/badges/de6c0688-d48e-472a-90ba-ba7cd698e04e",
  "snowpro": "https://achieve.snowflake.com/74a84d65-e9f8-4b41-abfe-f4cfb3cda769",
  "ibm-de": "https://www.coursera.org/account/accomplishments/records/YFQD5HBHCUZE",
  "power-platform": "https://learn.microsoft.com/api/credentials/share/en-us/KousalyaPotti-8565/BF6F679795C038B3?sharingId",
  "google-ai": "https://www.coursera.org/account/accomplishments/records/M3TSE7I8QGNY",
  "aws-cloud": "https://www.credly.com/badges/cd3b0cf0-0626-48de-9adc-1102fc571079/linked_in_profile",
  "tryhackme": "https://tryhackme.com/kousalyap/badges/intro-to-pentesting",
  "pl900": "https://learn.microsoft.com/api/achievements/share/en-us/KousalyaPotti-8565/QTS5256E?sharingId=11BB235EC04BE87",
  "google-pm": "https://coursera.org/verify/0IOKS3OWDIHB",
  "ibm-sql": "https://coursera.org/verify/NQKKZE8BDTWJ",
  "meta": "https://coursera.org/verify/9FAKPYLJ7NBN",
  "sql50": "https://leetcode.com/medal/?showImg=0&id=7295343&isLevel=false"
};
 const credentialSkills = {
  "aws-ai": [
    "Amazon Bedrock",
    "SageMaker",
    "Responsible AI"
  ],
  "claude": [
    "Claude",
    "Prompt design",
    "AI collaboration"
  ],
  "fluency": [
    "AI delegation",
    "Prompt direction",
    "Output evaluation"
  ],
  "openai": [
    "AI literacy",
    "Prompting",
    "Responsible use"
  ],
  "ai201": [
    "RAG",
    "AI agents",
    "Vector embeddings",
    "Model evaluation"
  ],
  "nask": [
    "Prompt engineering",
    "AI agents",
    "ServiceNow"
  ],
  "cornell": [
    "Exploratory analysis",
    "Supervised learning",
    "Model evaluation"
  ],
  "ai110": [
    "Python",
    "LLM APIs",
    "Prompt engineering"
  ],
  "snowpro": [
    "Snowflake",
    "Database design",
    "Data warehousing"
  ],
  "ibm-de": [
    "ETL",
    "Data governance",
    "Relational databases"
  ],
  "att": [
    "Agile delivery",
    "Cloud computing",
    "REST APIs",
    "AI/ML"
  ],
  "sql50": [
    "SQL joins",
    "Aggregation",
    "Subqueries"
  ],
  "power-platform": [
    "Power Apps",
    "Power BI",
    "Power Automate"
  ],
  "google-ai": [
    "AI productivity",
    "Prompting",
    "Responsible AI"
  ],
  "aws-cloud": [
    "AWS services",
    "Cloud economics",
    "Cloud security"
  ],
  "tryhackme": [
    "Networking",
    "Linux",
    "Security concepts"
  ],
  "pl900": [
    "Power Apps",
    "Power Automate",
    "Dataverse"
  ],
  "google-pm": [
    "Agile",
    "Waterfall",
    "Scrum"
  ],
  "ibm-sql": [
    "SQL",
    "Python",
    "Relational databases"
  ],
  "meta": [
    "HTML",
    "CSS",
    "Responsive design"
  ],
  "nrf": [
    "Customer service",
    "Sales",
    "Customer communication"
  ],
  "azure": [
    "Azure services",
    "Cloud computing",
    "Cloud governance"
  ],
  "revit": [
    "BIM",
    "Architectural modeling",
    "Revit documentation"
  ],
  "oracle-db": [
    "SQL",
    "Relational databases",
    "Database design"
  ],
  "autocad": [
    "2D drafting",
    "Engineering design",
    "AutoCAD"
  ],
  "mta": [
    "Python syntax",
    "Control flow",
    "Data structures"
  ],
  "powerpoint": [
    "Slide design",
    "Presentation formatting",
    "Visual communication"
  ],
  "word": [
    "Document formatting",
    "Page layout",
    "Microsoft Word"
  ]
};
 const issuerFor = ([id,,issuer]) => ({'google-pm':'Google','ibm-sql':'IBM',meta:'Meta',azure:'Microsoft'})[id] || issuer;
 const dialog = document.getElementById('credential-dialog');
 const wordmarks = {'Amazon Web Services (AWS)':'AWS','Cornell University':'Cornell','NRF Foundation':'NRF'};
 function openCredentials(issuer, selectedId) {
  document.getElementById('credential-issuer').textContent = issuer;
  document.getElementById('issuer-credentials').innerHTML = credentials.filter(row => issuerFor(row) === issuer).map(([id,title,,issued,expires]) => {
   const url = credentialLinks[id];
   return '<article class="credential-detail" id="credential-'+id+'" tabindex="-1"><h5>'+escapeHTML(title)+'</h5><p>Issued '+issued+(expires?' · Expires '+expires:'')+'</p><ul class="book-skills" aria-label="Credential skills">'+credentialSkills[id].map(skill=>'<li>'+escapeHTML(skill)+'</li>').join('')+'</ul>'+
    (url ? '<a href="'+escapeHTML(url)+'" target="_blank" rel="noopener noreferrer">View cert <span aria-hidden="true">↗</span></a>' : '<small>Certificate file or verification link unavailable</small>')+'</article>';
  }).join('');
  dialog.showModal();
  const selected = selectedId && document.getElementById('credential-'+selectedId);
  if (selected) selected.focus();
 }
 for (const issuer of new Set(credentials.map(issuerFor))) {
  const button = document.createElement('button');
  button.type = 'button';
  const label = wordmarks[issuer] || issuer;
  button.className = 'issuer-gumball';
  button.textContent = label;
  if (issuer === 'IBM') button.classList.add('issuer-ibm');
  const filenames = {"anthropic":"anthropic_logo.png","at&t":"at&t_logo.webp","autodesk":"autodesk_logo.png","aws":"aws_logo.png","ibm":"ibm_logo.png","codepath":"codepath_logo.png","cornell":"cornell_tech_logo.png","google":"google_logo.png","leetcode":"leetcode_logo.png","meta":"meta_logo.png","microsoft":"microsoft_logo.png","nrf":"nrf_logo.png","openai":"openai_logo.svg","oracle":"oracle_logo.png","servicenow":"servicenow_logo.png","snowflake":"snowflake_logo.png","tryhackme":"try_hack_me_logo.png"};
  const filename = filenames[label.toLowerCase()];
  if (filename) {
   const logo = new Image();
   logo.alt = '';
   logo.addEventListener('load', () => button.replaceChildren(logo), {once:true});
   logo.src = 'assets/logos/'+encodeURIComponent(filename);
  }
  button.setAttribute('aria-label', issuer);
  button.setAttribute('aria-haspopup','dialog');
  button.addEventListener('click',()=>openCredentials(issuer));
  document.getElementById('issuer-buttons').append(button);
 }
 const globe = document.querySelector('.gumball-globe');
 const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
 const balls = [...globe.querySelectorAll('.issuer-gumball')].map(button => ({
  button, x:0, y:0, vx:0, vy:0
 }));
 let frame = 0;
 let previousTime = 0;
 let touchStart = null;
 let swiped = false;

 function animateBalls(time) {
  const dt = previousTime ? Math.min((time-previousTime)/16.67,2) : 1;
  previousTime = time;
  const bounds = globe.getBoundingClientRect();
  let moving = false;
  for (const ball of balls) {
   const {button} = ball;
   if (reducedMotion.matches) ball.x = ball.y = ball.vx = ball.vy = 0;
   const rect = button.getBoundingClientRect();
   const homeX = rect.left + rect.width/2 - ball.x - bounds.left - bounds.width/2;
   const homeY = rect.top + rect.height/2 - ball.y - bounds.top - bounds.height/2;
   ball.vx = (ball.vx - ball.x*0.012*dt) * Math.pow(0.94,dt);
   ball.vy = (ball.vy - ball.y*0.012*dt) * Math.pow(0.94,dt);
   ball.x += ball.vx*dt;
   ball.y += ball.vy*dt;
   const x = homeX+ball.x, y = homeY+ball.y;
   const distance = Math.hypot(x,y);
   const radius = Math.min(bounds.width,bounds.height)/2 - rect.width/2 - 5;
   if (distance > radius && radius > 0 && (ball.x || ball.y)) {
    const nx = x/distance, ny = y/distance;
    ball.x = nx*radius-homeX;
    ball.y = ny*radius-homeY;
    const outward = ball.vx*nx + ball.vy*ny;
    if (outward > 0) {
     ball.vx -= 1.75*outward*nx;
     ball.vy -= 1.75*outward*ny;
    }
   }
   if (Math.abs(ball.x)+Math.abs(ball.y)+Math.abs(ball.vx)+Math.abs(ball.vy) < 0.45) {
    ball.x = ball.y = ball.vx = ball.vy = 0;
   } else moving = true;
   button.style.translate = ball.x+'px '+ball.y+'px';
  }
  frame = moving ? requestAnimationFrame(animateBalls) : 0;
  if (!moving) previousTime = 0;
 }

 function stir(event, strength) {
  if (reducedMotion.matches) return;
  for (const ball of balls) {
   const rect = ball.button.getBoundingClientRect();
   const x = rect.left+rect.width/2-event.clientX;
   const y = rect.top+rect.height/2-event.clientY;
   const distance = Math.hypot(x,y);
   const reach = rect.width*2;
   if (distance >= reach) continue;
   const push = strength*(1-distance/reach);
   ball.vx = Math.max(-18,Math.min(18,ball.vx+(distance > 1 ? x/distance : 0)*push));
   ball.vy = Math.max(-18,Math.min(18,ball.vy+(distance > 1 ? y/distance : -1)*push));
  }
  if (!frame) frame = requestAnimationFrame(animateBalls);
 }

 globe.addEventListener('pointerdown', event => {
  swiped = false;
  touchStart = event.pointerType === 'touch' ? {id:event.pointerId,x:event.clientX,y:event.clientY} : null;
 });
 globe.addEventListener('pointermove', event => {
  if (event.pointerType === 'touch') {
   if (touchStart?.id !== event.pointerId) return;
   if (Math.hypot(event.clientX-touchStart.x,event.clientY-touchStart.y) < 8) return;
   swiped = true;
  }
  stir(event,event.pointerType === 'touch' ? 7 : 3);
 });
 for (const type of ['pointerup','pointercancel']) globe.addEventListener(type, () => { touchStart = null; });
 globe.addEventListener('click', event => {
  if (swiped && event.detail !== 0) {
   event.preventDefault();
   event.stopPropagation();
   swiped = false;
  }
 }, true);
 function relatedCredentials(bookId) {
  const ids = {att:['att'], codepath:['ai110','ai201'], bttai:['cornell']}[bookId] || [];
  if (!ids.length) return '';
  return '<section class="book-references"><h3>Related credentials</h3><ul class="book-credentials">'+ids.map(id => {
   const [,title,issuer,issued] = credentials.find(credential => credential[0] === id);
   return '<li><a aria-haspopup="dialog" href="#credential-'+id+'">'+escapeHTML(title)+'</a><small>'+escapeHTML(issuer)+' · '+issued+'</small></li>';
  }).join('')+'</ul></section>';
 }
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
  id:'codepath', type:'program', name:'CodePath AI', start:'2026-01',
  roles:[
   {id:'ai110',role:'AI110',date:'First course',description:'Started the CodePath AI Engineering sequence with AI110.'},
   {id:'ai201',role:'AI201',date:'Follow-on course',description:'Continued the AI Engineering sequence with AI201 after completing AI110.'}
  ]
 };
 const labels = {loudoun:'Loudoun County Government',witomni:'witOmni AI Marketing',fairfax:'Fairfax County Government',umdta:'UMD Teaching Assistant',bttai:'Break Through Tech AI/ML',bttguild:'Break Through Tech Guild',cci:'Commonwealth Cyber Initiative',kohls:"Kohl's",oracle:'Oracle REACH'};
 const entries = [...experienceRecords.filter(p => p.id !== 'fairfaxdb').map(p => p.id === 'fairfax' ? {...p, roles:[p,experienceRecords.find(r => r.id === 'fairfaxdb')]} : p), codepath];
 // Sort by the latest role start within each book, keeping role progression chronological.
 const latestStart = entry => entry.id === 'loudoun' ? '2026-04' :
  (entry.roles || [entry]).reduce((latest, role) => (role.start || '') > latest ? role.start : latest, entry.start || '');
 entries.sort((a,b) => latestStart(b).localeCompare(latestStart(a)));
 const topSkills = {
  att: ["Agile Delivery", "Cloud Computing", "APIs", "AI/ML Fundamentals", "Software Engineering"],
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
 const resumeDetails = {
  bttai: [
   'Built and evaluated classification and neural-network models using Python, Pandas, scikit-learn, TensorFlow, and Keras.',
   'Built machine learning workflows covering preprocessing, feature engineering, cross-validation, hyperparameter tuning, evaluation, and responsible AI.'
  ],
  ai201: [
   'Continued the CodePath AI Engineering sequence after AI110.',
   'Across the fellowship, built 10+ AI applications using Claude Code and Python, applying RAG, agent workflows, vector embeddings, API integration, and model evaluation.'
  ],
  'loudoun3': ['Developing a Microsoft Teams agent that integrates ServiceNow and Jira requests to streamline IT service workflows.']
 };
 function rolesFor(entry) {
  if (entry.id === 'loudoun') return loudounRoles.map((role,i) => ({
   id:'loudoun'+(i+1), role:role.title, date:role.date
  }));
  return entry.roles || [entry];
 }
 function roleBlock(role) {
  const source = fullDescriptions[role.id] || extra[role.id] || [role.description];
  const lines = [...new Set([...source, ...(resumeDetails[role.id] || [])])];
  const bullets = lines.flatMap(line => line.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [line])
   .map(line => '<li>'+h(line.trim()).replace(highlights, match => '<strong>'+match+'</strong>')+'</li>').join('');
  return '<article><h3>'+h(role.role)+'</h3><small>'+h(range(role))+'</small><ul class="book-description">'+bullets+'</ul></article>';
 }
 function skillGroups(roles) {
  return roles.map(role => {
   const tags = topSkills[role.id].map(skill => '<li>'+h(skill)+'</li>').join('');
   const title = roles.length > 1 ? '<h4>'+h(role.role)+'</h4>' : '';
   return '<div class="book-skill-group">'+title+'<ul class="book-skills">'+tags+'</ul></div>';
  }).join('');
 }
 const recommendations = {
  "capitalone": [
    {
      "name": "Eddie McGolrick",
      "title": "Data Analysis Manager at Capital One",
      "date": "August 15, 2026",
      "relationship": "Senior colleague",
      "quote": [
        "Kousalya came into Capital One as an intern and knew exactly what she was doing. She asks the right questions, goes the extra mile, and brings a confidence rarely seen this early in one's career. Whatever team ends up landing Kousalya is extremely lucky to have her."
      ]
    }
  ],
  "loudoun": [
    {
      "name": "Sucheta Kodali",
      "title": "Data & Analytics Manager at Loudoun County Government",
      "date": "June 9, 2026",
      "relationship": "Direct manager",
      "quote": [
        "It's remarkable to reflect on the past year since Kousalya began her journey as an intern and then transitioned into a part-time data analyst at Loudoun County. What truly distinguishes Kousalya is her enthusiasm for tackling complex tasks and her proactive approach to researching and optimizing workflows. She frequently reaches out to explore emerging opportunities in AI and Data Analytics, all the while maintaining a high standard in her current responsibilities with M365 Power Apps and PowerBI.",
        "Kousalya consistently demonstrates a talent for not only completing assignments efficiently but also enhancing existing processes by adopting innovative technologies. Her commitment to going above and beyond has genuinely impressed me, making each project more effective and forward-thinking.",
        "If the opportunity were available, I'd gladly welcome Kousalya as a full-time member of the team. I'm confident that any manager would appreciate her dedication, motivation, and eagerness to contribute. Kousalya is truly a valuable asset, and I look forward to seeing her continued impact and growth."
      ]
    },
    {
      "name": "Travis Snider",
      "title": "Data Engineer at Arlington County",
      "date": "May 24, 2026",
      "relationship": "Teammate",
      "quote": [
        "Kousalya is an exceptionally dedicated professional who approaches every new challenge with enthusiasm. Having worked closely with her for over a year, I have seen her consistently exceed expectations. Her positive attitude and proactive mindset truly elevate the team dynamic.",
        "She has proven to be an invaluable asset, particularly through her technical initiatives. During her tenure with Loudoun County, Kousalya developed a custom budget application using Microsoft Power Apps, completely eliminating the need for cumbersome Excel spreadsheets and significantly improving our budget production and review processes. Additionally, her contributions to our Transit project have been vital; she successfully streamlined an incredibly convoluted process into a highly manageable and maintainable workflow. I cannot recommend Kousalya highly enough for any team looking for a top-tier problem solver and collaborator."
      ]
    },
    {
      "name": "Lana Blum",
      "title": "Data Architect at Loudoun County Government",
      "date": "February 3, 2026",
      "relationship": "Teammate",
      "quote": [
        "I had the pleasure of working with Kousalya over the summer during her internship, and she quickly proved to be such a valuable contributor that we retained her when she returned to college. Although she works just 20 hours per week, you would never know it—she consistently attends the vast majority of team and project meetings, completes all assigned work on time, and proactively recommends improvements to our project platforms and processes.",
        "Kousalya is currently the primary Power Platform developer on two highly visible projects. She rapidly became proficient in Power Apps and then Power Pages and is now expanding her expertise into SharePoint. Even when faced with what initially seems like an “impossible” request, she finds a way to deliver effective solutions.",
        "She is highly motivated and professional. She asks thoughtful, insightful questions during customer meetings, demonstrating strong preparation and genuine engagement. Kousalya brings a level of maturity, reliability, and problem-solving ability well beyond her years, and any organization would be fortunate to have her on their team."
      ]
    }
  ]
};
 function addRecommendations(id) {
  const people = recommendations[id];
  if (!people) return;
  const section = document.createElement('section');
  section.className = 'book-references';
  section.innerHTML = '<h3>References</h3><div class="reference-buttons">'+people.map((person,i) =>
   '<button type="button" data-reference="'+i+'" aria-haspopup="dialog"><span class="reference-icon" aria-hidden="true"></span>'+h(person.name)+'</button>'
  ).join('')+'</div><dialog class="reference-dialog" aria-labelledby="reference-name"><form method="dialog"><button type="submit" autofocus>Close</button></form><div class="reference-content"></div></dialog>';
  book.querySelector('.book-context').append(section);
  const dialog = section.querySelector('dialog');
  const content = dialog.querySelector('.reference-content');
  section.querySelectorAll('[data-reference]').forEach(button => button.addEventListener('click', () => {
   const person = people[Number(button.dataset.reference)];
   content.innerHTML = '<h2 id="reference-name">'+h(person.name)+'</h2><p>'+h(person.title)+'</p><small>'+h(person.relationship)+' · '+h(person.date)+'</small><blockquote>'+person.quote.map(paragraph=>'<p>'+h(paragraph)+'</p>').join('')+'</blockquote>';
   dialog.showModal();
  }));
 }
 function select(id, navigate = false) {
  const entry = entries.find(p => p.id === id);
  shelf.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.book === id)));
  const roles = rolesFor(entry);
  const plaque = entry.plaque ? '<img class="book-plaque" alt="" src="assets/plaques/'+encodeURIComponent(entry.plaque)+'">' : '';
  book.innerHTML = '<div class="book-page"><h2 tabindex="-1">'+h(labels[entry.id] || entry.name)+'</h2>'+roles.map(roleBlock).join('')+'</div><div class="book-page book-context">'+plaque+'<h3>Top skills</h3>'+skillGroups(roles)+relatedCredentials(id)+
   '</div>';
  addRecommendations(id);
  book.querySelectorAll('.book-credentials a').forEach(link => link.addEventListener('click', event => {
   const id = link.hash.slice('#credential-'.length);
   const credential = credentials.find(row => row[0] === id);
   if (!credential) return;
   event.preventDefault();
   openCredentials(issuerFor(credential), id);
  }));
  if (navigate) book.querySelector('h2').focus({preventScroll:!matchMedia('(max-width: 780px)').matches});
 }
 shelf.innerHTML = [['work','Work experience'],['program','Programs & research']].map(([type,title]) =>
  '<section><h3>'+title+'</h3><div class="book-spines">'+entries.filter(p=>p.type===type).map(p=>'<button type="button" data-book="'+h(p.id)+'" aria-controls="experience-book"><span>'+h(labels[p.id] || p.name)+'</span></button>').join('')+'</div></section>'
 ).join('');
 shelf.querySelectorAll('button').forEach(button => button.addEventListener('click', () => select(button.dataset.book,true)));
 select('loudoun');
})();
