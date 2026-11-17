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
/* A continuous, proportional month scale. No filters, hidden details, or dialogs. */
(() => {
 const viewport=document.getElementById('ct-scroll'),root=document.getElementById('ct-content');
 const names=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 const h=escapeHTML,monthWidth=76;
 const index=s=>{const [y,m]=s.split('-').map(Number);return y*12+m-1;};
 const first=index('2023-06');
 const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(new Date());
 const part=n=>Number(parts.find(p=>p.type===n).value);
 const nowYear=part('year'),nowMonth=part('month'),nowDay=part('day');
 const last=Math.max(first,nowYear*12+nowMonth-1),count=last-first+1;
 const days=new Date(nowYear,nowMonth,0).getDate();
 const presentX=(last-first+(nowDay-1)/days)*monthWidth;
 const scaleWidth=count*monthWidth;
 const format=s=>names[Number(s.slice(5))-1]+' '+s.slice(0,4);
 const range=p=>format(p.start)+(p.end===p.start?'':' – '+(p.end?format(p.end):'Present'));
 const plaque=p=>p.plaque?'<img src="assets/plaques/'+encodeURIComponent(p.plaque)+'" alt="">':'<span aria-hidden="true">✦</span>';
 const roles=[
  {start:'2025-06',end:'2025-08',role:loudounRoles[0].title,description:loudounRoles[0].description},
  {start:'2025-08',end:'2026-04',role:loudounRoles[1].title,description:loudounRoles[1].description},
  {start:'2026-04',end:null,role:loudounRoles[2].title,description:loudounRoles[2].description}
 ];
 function row(p,sub=false){
  const x=(index(p.start)-first)*monthWidth;
  const end=p.end?(index(p.end)-first+1)*monthWidth:presentX;
  const width=Math.max(8,end-x);
  return '<tr class="ct-row '+p.type+(sub?' ct-promotion':'')+'"><th scope="row"><div class="ct-label">'+(!sub?'<div class="ct-company"><span class="ct-plaque">'+plaque(p)+'</span><strong>'+h(p.name)+'</strong></div>':'')+'<div class="ct-role">'+h(p.role)+'</div><div class="ct-date">'+h(range(p))+'</div><p>'+h(p.description)+'</p></div></th><td><div class="ct-track" style="width:'+scaleWidth+'px"><div class="ct-now-line" style="left:'+presentX+'px"></div><div class="ct-bar '+(!p.end?'ongoing':'')+'" style="left:'+x+'px;width:'+width+'px" role="img" aria-label="'+h(p.role+': '+range(p))+'"><span>'+(!p.end?'ONGOING':h(p.start===p.end?names[Number(p.start.slice(5))-1]:''))+'</span></div></div></td></tr>';
 }
 let body='';
 for(const type of ['work','program']){
  body+='<tr class="ct-group"><th scope="rowgroup">'+(type==='work'?'WORK EXPERIENCE':'PROGRAMS & RESEARCH')+'</th><td><span>'+ (type==='work'?'Employment & applied work':'Fellowships, research & learning')+'</span></td></tr>';
  const entries=experienceRecords.filter(p=>p.type===type).sort((a,b)=>b.start.localeCompare(a.start));
  for(const p of entries){
   if(p.id==='loudoun'){
    body+='<tr class="ct-employer"><th><div class="ct-company"><span class="ct-plaque">'+plaque(p)+'</span><strong>Loudoun County Government<small>3 roles · 2 promotions</small></strong></div></th><td><span class="ct-employer-note">Progression within the same employer</span></td></tr>';
    body+=roles.map(r=>row({...p,...r},true)).join('');
   }else body+=row(p);
  }
 }
 root.innerHTML='<table class="ct-table"><caption>Work and programs, June 2023 to '+names[nowMonth-1]+' '+nowYear+'. End dates are shown at month precision.</caption><thead><tr><th scope="col">Experience <small>Dates & short descriptions</small></th><th scope="col"><div class="ct-calendar" style="width:'+scaleWidth+'px">'+Array.from({length:count},(_,i)=>{const n=first+i,y=Math.floor(n/12),m=n%12;return '<span class="ct-month" style="left:'+i*monthWidth+'px;width:'+monthWidth+'px"><b>'+y+'</b>'+names[m]+'</span>';}).join('')+'<span class="ct-present-label" style="left:'+presentX+'px">Present</span></div></th></tr></thead><tbody>'+body+'</tbody></table>';
 const behavior=()=>matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth';
 const go=atEnd=>viewport.scrollTo({left:atEnd?viewport.scrollWidth:0,behavior:behavior()});
 document.getElementById('ct-start').addEventListener('click',()=>go(false));
 document.getElementById('ct-present').addEventListener('click',()=>go(true));
 viewport.addEventListener('keydown',e=>{if(e.target!==viewport)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();viewport.scrollBy({left:(e.key==='ArrowLeft'?-1:1)*monthWidth*3,behavior:behavior()});}if(e.key==='Home'||e.key==='End'){e.preventDefault();go(e.key==='End');}});
 document.getElementById('ct-range').textContent='Jun 2023 — '+names[nowMonth-1]+' '+nowYear;
 viewport.scrollLeft=viewport.scrollWidth;
})();
