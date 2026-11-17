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
 const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 const viewport=document.getElementById('tl-scroll'),content=document.getElementById('tl-content');
 const modal=document.getElementById('jv-modal'),dialog=modal.querySelector('.jv-dialog');
 const h=escapeHTML; let offsets=[], timelineWidth=0;
 let year=2026,lastFocus;
 const monthIndex=d=>Number(d.slice(5))-1;
 const format=d=>months[monthIndex(d)]+' '+d.slice(0,4);
 const dates=p=>format(p.start)+(p.end===p.start?'': ' – '+(p.end?format(p.end):'Present'));
 const art=p=>p.plaque?'<img src="assets/plaques/'+encodeURIComponent(p.plaque)+'" alt="" loading="lazy">':'<span aria-hidden="true">✦</span>';
 const progression=(compact=false)=>'<ol class="tl-promotions">'+loudounRoles.map((r,i)=>'<li><span class="tl-promotion-dot" aria-hidden="true">'+(i+1)+'</span><div><strong>'+h(r.title)+'</strong><time>'+h(r.date)+'</time><p>'+h(compact?['Prototyped budget and transit apps; supported endpoint security.','Delivered SQL-backed budget and transit platforms.','Supporting live platforms; modernizing vehicle calibration workflows.'][i]:r.description)+'</p></div></li>').join('')+'</ol>';
 function lane(items,type){
  const rowEnds=[];
  const placed=items.map(p=>{
   const start=p.start.slice(0,4)<String(year)?0:monthIndex(p.start);
   const x=offsets[start],w=p.id==='loudoun'?450:360;
   let row=rowEnds.findIndex(end=>end+24<=x);if(row<0)row=rowEnds.length;
   rowEnds[row]=x+w;return {p,x,w,row};
  });
  const rowHeight=type==='work'&&items.some(p=>p.id==='loudoun')?(matchMedia('(max-width:650px)').matches?460:410):270;
  const height=Math.max(1,rowEnds.length)*rowHeight+44;
  return '<section class="tl-lane '+type+'" aria-label="'+(type==='work'?'Work experience':'Programs and research')+'" style="height:'+height+'px"><div class="tl-lane-name">'+(type==='work'?'WORK':'PROGRAMS & RESEARCH')+'</div>'+placed.map(({p,x,w,row})=>'<article class="tl-card '+(p.id==='loudoun'?'tl-employer':'')+'" style="left:'+x+'px;'+(type==='work'?'bottom:':'top:')+(38+row*rowHeight)+'px;width:'+w+'px"><div class="tl-card-head"><div class="tl-plaque">'+art(p)+'</div><div><h3>'+h(p.name)+'</h3><span class="tl-dates">'+h(dates(p))+'</span></div></div>'+(p.id==='loudoun'?'<div class="tl-growth">3 roles · 2 promotions</div>'+progression(true):'<h4>'+h(p.role)+'</h4><p>'+h(p.description)+'</p>')+'<button class="tl-details" data-id="'+p.id+'" aria-haspopup="dialog" aria-label="Details for '+h(p.name)+'">Skills & details <span aria-hidden="true">↗</span></button></article>').join('')+(items.length?'':'<p class="tl-empty">No entries in this lane for '+year+'.</p>')+'</section>';
 }
 function render(){
  const items=experienceRecords.filter(p=>Number(p.start.slice(0,4))<=year&&(!p.end||Number(p.end.slice(0,4))>=year));
  let x=24; offsets=months.map((_,i)=>{const atMonth=items.filter(p=>(p.start.slice(0,4)<String(year)?0:monthIndex(p.start))===i); const value=x; x+=atMonth.length?Math.max(...atMonth.map(p=>p.id==='loudoun'?450:360))+28:64;return value;}); timelineWidth=x+24; content.style.width=timelineWidth+'px';
  content.innerHTML=lane(items.filter(p=>p.type==='work'),'work')+'<div class="tl-axis" aria-label="Months in '+year+'"><strong>'+year+'</strong>'+months.map((m,i)=>'<span style="left:'+offsets[i]+'px"><i></i>'+m+'</span>').join('')+'</div>'+lane(items.filter(p=>p.type==='program'),'program');
  document.querySelectorAll('[data-year]').forEach(b=>{b.classList.toggle('active',Number(b.dataset.year)===year);b.setAttribute('aria-pressed',String(Number(b.dataset.year)===year));});
  document.getElementById('tl-count').textContent=year+' · '+items.length+' experiences active this year';
  content.querySelectorAll('[data-id]').forEach(b=>b.addEventListener('click',()=>open(experienceRecords.find(p=>p.id===b.dataset.id),b)));
  const earliest=Math.min(...items.map(p=>p.start.slice(0,4)<String(year)?0:monthIndex(p.start)));
  viewport.scrollLeft=Math.max(0,offsets[earliest]-24);update();
 }
 function open(p,button){
  lastFocus=button;
  document.getElementById('jv-dialog-body').innerHTML='<div class="jv-dialog-content"><div class="jv-dialog-logo">'+art(p)+'</div><div class="jv-dialog-meta">'+(p.type==='work'?'Work experience':'Program & research')+'</div><h3 id="jv-title">'+h(p.name)+'</h3><strong>'+h(p.role)+'</strong><div class="jv-dialog-date">'+h(dates(p))+'</div>'+(p.id==='loudoun'?progression():'<p>'+h(p.description)+'</p>')+'<div class="jv-skills">'+p.skills.map(s=>'<span>'+h(s)+'</span>').join('')+'</div>';
  modal.hidden=false;document.body.classList.add('jv-modal-open');document.getElementById('jv-close').focus();
 }
 function close(){modal.hidden=true;document.body.classList.remove('jv-modal-open');lastFocus?.focus();}
 function update(){const max=viewport.scrollWidth-viewport.clientWidth;document.getElementById('tl-prev').disabled=viewport.scrollLeft<2;document.getElementById('tl-next').disabled=viewport.scrollLeft>=max-2;document.getElementById('tl-position').textContent=months[Math.max(0,offsets.findLastIndex(x=>x<=viewport.scrollLeft+25))]+' '+year;}
 function move(dir){viewport.scrollBy({left:dir*Math.max(280,viewport.clientWidth*.75),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 document.querySelectorAll('[data-year]').forEach(b=>b.addEventListener('click',()=>{year=Number(b.dataset.year);render();}));
 document.getElementById('tl-prev').addEventListener('click',()=>move(-1));document.getElementById('tl-next').addEventListener('click',()=>move(1));
 viewport.addEventListener('scroll',update,{passive:true});let narrow=matchMedia('(max-width:650px)').matches; window.addEventListener('resize',()=>{const next=matchMedia('(max-width:650px)').matches;if(next!==narrow){narrow=next;render();}else update();});
 viewport.addEventListener('keydown',e=>{if(e.target!==viewport)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}});
 document.getElementById('jv-close').addEventListener('click',close);modal.querySelector('.jv-backdrop').addEventListener('click',close);
 modal.addEventListener('keydown',e=>{if(e.key==='Escape')close();if(e.key==='Tab'){e.preventDefault();document.getElementById('jv-close').focus();}});
 render();
})();
