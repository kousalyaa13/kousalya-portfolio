// Curated project catalog. Edit this one array to update the gallery.
// Links and available image paths point to Kousalya's existing public GitHub repositories.
const owner = "kousalyaa13";
const projects = [
  {
    "title": "BloomBots 🌱",
    "subtitle": "AI Small Business Starter",
    "description": "Built an AI-powered tool discovery experience for small businesses, bringing research, side-by-side comparisons, estimated budgets, and setup plans into one guided product.",
    "tags": [
      "AI",
      "Full Stack",
      "Product Design",
      "JavaScript",
      "APIs"
    ],
    "categories": [
      "ai",
      "product",
      "passion"
    ],
    "emoji": "🌱",
    "repo": "ai_small_business_starter",
    "demo": "https://ai-small-business-starter.onrender.com/",
    "image": "https://raw.githubusercontent.com/kousalyaa13/ai_small_business_starter/main/static/small_business_banner.jpg"
  },
  {
    "title": "witOmni 📊",
    "subtitle": "Customer Repurchase Prediction",
    "description": "Developing a repeat-purchase classifier using 500K+ transactions, customer behavior patterns, and RFM features to help identify customers likely to buy again.",
    "tags": [
      "Python",
      "Machine Learning",
      "RFM",
      "Feature Engineering",
      "Classification"
    ],
    "categories": [
      "data",
      "product"
    ],
    "emoji": "📊",
    "repo": null
  },
  {
    "title": "Terp Tell All 🐢",
    "subtitle": "RAG Student Assistant",
    "description": "Built a retrieval-augmented question-answering system that helps UMD students explore professor feedback by retrieving relevant review context before generating answers.",
    "tags": [
      "Python",
      "RAG",
      "LLMs",
      "Embeddings",
      "NLP"
    ],
    "categories": [
      "ai",
      "passion"
    ],
    "emoji": "🐢",
    "repo": "Terp-Tell-All",
    "image": "https://raw.githubusercontent.com/kousalyaa13/Terp-Tell-All/main/images/mermaid-diagram-2026-06-07-194042.png"
  },
  {
    "title": "FitFindr ✨",
    "subtitle": "Secondhand Shopping Agent",
    "description": "Created a Groq-powered shopping assistant that searches secondhand clothing listings based on preferences, puts together outfit suggestions, and drafts social captions.",
    "tags": [
      "Python",
      "Groq",
      "LLMs",
      "AI Agents",
      "Prompt Engineering"
    ],
    "categories": [
      "ai",
      "passion"
    ],
    "emoji": "👗",
    "repo": "FitFinder-Groq_Agent"
  },
  {
    "title": "College Clustering 🎓",
    "subtitle": "Unsupervised Learning",
    "description": "Explored how top American colleges group together using K-means clustering and network analysis, then compared patterns in institutional characteristics beyond rankings.",
    "tags": [
      "Python",
      "K-Means",
      "Unsupervised Learning",
      "Network Analysis",
      "Scikit-learn"
    ],
    "categories": [
      "data"
    ],
    "emoji": "🎓",
    "repo": "College-Clustering-Analysis",
    "medium": "https://medium.com/@kousalyapotti/what-clustering-reveals-about-colleges-that-rankings-dont-ad25e5a561fd",
    "image": "https://raw.githubusercontent.com/kousalyaa13/College-Clustering-Analysis/main/kmeans_scatter.png"
  },
  {
    "title": "Sephora Predictor 💄",
    "subtitle": "Predictive Modeling",
    "description": "Trained supervised classification models to predict whether beauty products become customer favorites using review behavior and engagement metrics, comparing Random Forest and Gradient Boosting.",
    "tags": [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Gradient Boosting",
      "Classification"
    ],
    "categories": [
      "data",
      "product"
    ],
    "emoji": "💄",
    "repo": "Sephora-Popularity-Predictor",
    "medium": "https://medium.com/@kousalyapotti/can-machine-learning-predict-which-sephora-products-become-customer-favorites-49fb673fe0d4",
    "image": "https://raw.githubusercontent.com/kousalyaa13/Sephora-Popularity-Predictor/main/images/fig6_model_comparison.png"
  },
  {
    "title": "PawPal+ 🐾",
    "subtitle": "AI Pet Care Scheduler",
    "description": "Built an AI-assisted pet care planner that organizes daily activities around duration, priority, and recurrence to generate practical schedules without time conflicts.",
    "tags": [
      "Python",
      "LLMs",
      "APIs",
      "Scheduling",
      "Product Design"
    ],
    "categories": [
      "ai",
      "passion",
      "product"
    ],
    "emoji": "🐶",
    "repo": "PawPal"
  },
  {
    "title": "Manifest Fandom Classifier",
    "subtitle": "NLP Text Classification",
    "description": "Compared a fine-tuned DistilBERT model with a Groq-based zero-shot approach to classify engagement intent in Reddit discussions about the TV show Manifest.",
    "tags": [
      "Python",
      "NLP",
      "DistilBERT",
      "Text Classification",
      "LLMs"
    ],
    "categories": [
      "ai",
      "data"
    ],
    "emoji": "💬",
    "repo": "Manifest-Fandom-Analysis"
  },
  {
    "title": "Amazon Vine Review Analysis",
    "subtitle": "Review Text Analytics",
    "description": "Investigated differences between incentivized and non-incentivized Amazon Beauty reviews through rating patterns, review length, sentiment, and language-based analysis.",
    "tags": [
      "Python",
      "NLP",
      "Sentiment Analysis",
      "TF-IDF",
      "Data Analysis"
    ],
    "categories": [
      "ai",
      "data",
      "product"
    ],
    "emoji": "📝",
    "repo": "inst425_amazon_vine_review_analysis"
  },
  {
    "title": "TV Show Cosine Similarity",
    "subtitle": "NLP Similarity Explorer",
    "description": "Used TF-IDF vectorization and cosine similarity on animated television show summaries to identify related shows based on their descriptions rather than ratings.",
    "tags": [
      "Python",
      "NLP",
      "TF-IDF",
      "Cosine Similarity"
    ],
    "categories": [
      "ai",
      "passion"
    ],
    "emoji": "📺",
    "repo": "TV-Show-Cosine-Similarity",
    "medium": "https://medium.com/@kousalyapotti/from-dora-to-batman-finding-similar-animated-tv-shows-with-nlp-a930ea117ae8"
  },
  {
    "title": "Accutane Side Effects Analysis",
    "subtitle": "Healthcare Data Exploration",
    "description": "Explored FDA FAERS adverse-event reports to examine reported psychiatric effects involving isotretinoin, focusing on patterns in reporting rather than causal claims.",
    "tags": [
      "Python",
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Statistics",
      "Visualization"
    ],
    "categories": [
      "data"
    ],
    "emoji": "🔬",
    "repo": "Accutane-Psychiatric-Side-Effects-Analysis",
    "medium": "https://medium.com/inst414-data-science-tech/is-accutane-linked-to-psychiatric-side-effects-8677a33dbd54"
  },
  {
    "title": "Career Network Analysis",
    "subtitle": "Web Scraping & Networks",
    "description": "Scraped and cleaned career advice articles, used fuzzy matching to standardize job titles, and visualized networks of career recommendations for introverts and extroverts.",
    "tags": [
      "Python",
      "Web Scraping",
      "Fuzzy Matching",
      "NetworkX",
      "Visualization"
    ],
    "categories": [
      "data",
      "passion"
    ],
    "emoji": "🕸️",
    "repo": "Career-Network-Analysis",
    "medium": "https://medium.com/@kousalyapotti/a-network-analysis-of-introvert-vs-extrovert-career-recommendations-5ec2e7f8751d"
  },
  {
    "title": "MTA Transit Equity",
    "subtitle": "SQL & Database Design",
    "description": "Explored transit-oriented development and equity data through relational schema design, SQL queries, and database modeling to examine differences across transit areas.",
    "tags": [
      "SQL",
      "Relational Databases",
      "ERD Modeling",
      "Data Analysis"
    ],
    "categories": [
      "data",
      "product"
    ],
    "emoji": "🚇",
    "repo": "mta_transit_sql_analysis"
  },
  {
    "title": "SafeTravels",
    "subtitle": "Travel Safety UI/UX Prototype",
    "description": "Designed a mobile travel-safety prototype in Figma with route planning, local safety information, traveler reviews, and alert-focused screens.",
    "tags": [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "User Experience"
    ],
    "categories": [
      "design",
      "passion"
    ],
    "emoji": "🧭",
    "repo": "SafeTravels"
  },
  {
    "title": "The Mane Box",
    "subtitle": "Hair Care Recommender",
    "description": "Created a Python-based hair care recommendation experience that matches products to users' hair types, concerns, budgets, and ingredient preferences.",
    "tags": [
      "Python",
      "APIs",
      "Recommendation Systems",
      "Product Design"
    ],
    "categories": [
      "passion",
      "product"
    ],
    "emoji": "🧴",
    "repo": "the_mane_box"
  },
  {
    "title": "Art Portfolio",
    "subtitle": "Personal Art Website",
    "description": "Designed and published a personal website showcasing painting, drawing, and digital artwork, combining a creative visual identity with a browsable gallery.",
    "tags": [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub Pages",
      "UI Design"
    ],
    "categories": [
      "passion",
      "design"
    ],
    "emoji": "🎨",
    "repo": "Kousalyart",
    "website": "https://kousalyaa13.github.io/Kousalyart/"
  }
];

const icons = {
  github:'<span class="uploaded-icon uploaded-github" aria-hidden="true"></span>',
  medium:'<span class="uploaded-icon uploaded-medium" aria-hidden="true"></span>',
  paint:'<span class="custom-icon-holder"><svg class="icon-fallback" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 7l3 3M3 21c3 0 6-1 6-4l11-11a2 2 0 0 0-3-3L6 14c-3 0-4 3-3 7Z"/></svg><img class="custom-icon-img" src="assets/paintbrush_icon.png?v=2" alt="" loading="lazy" onerror="this.style.display=\'none\'"></span>',
  robot:'<span class="custom-icon-holder"><svg class="icon-fallback" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4m-2 0h4M4 13H2m20 0h-2M8 15h.01M16 15h.01M9 18h6"/></svg><img class="custom-icon-img" src="assets/demo_robot.png?v=2" alt="" loading="lazy" onerror="this.style.display=\'none\'"></span>'
};
const repoUrl = name => name ? "https://github.com/" + owner + "/" + encodeURIComponent(name) : null;
const escapeHTML = text => String(text).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function featureCard(p) {
  const tags = (p.tags || []).slice(0, 5).map(t => '<span>' + escapeHTML(t) + '</span>').join("");
  return '<article class="project-card compact-project"><div class="project-inner"><h3>' + escapeHTML(p.title) + '</h3><div class="project-subtitle">' + escapeHTML(p.subtitle || "") + '</div><p>' + escapeHTML(p.description) + '</p><div class="project-tags">' + tags + '</div><div class="project-links">' + projectLinks(p) + '</div></div></article>';
}
function projectLinks(p) {
  let links=[];
  if(p.repo) links.push('<a class="icon-link" href="'+repoUrl(p.repo)+'" target="_blank" rel="noopener noreferrer" title="GitHub repository" aria-label="GitHub repository for '+escapeHTML(p.title)+'">'+icons.github+'</a>');
  if(p.medium) links.push('<a class="icon-link" href="'+escapeHTML(p.medium)+'" target="_blank" rel="noopener noreferrer" title="Read Medium article" aria-label="Medium article for '+escapeHTML(p.title)+'">'+icons.medium+'</a>');
  if(p.website) links.push('<a class="icon-link" href="'+escapeHTML(p.website)+'" target="_blank" rel="noopener noreferrer" title="Open art portfolio" aria-label="Open art portfolio website">'+icons.paint+'</a>');
  if(p.demo) links.push('<a class="icon-link" href="'+escapeHTML(p.demo)+'" target="_blank" rel="noopener noreferrer" title="Try the live app" aria-label="Try '+escapeHTML(p.title)+' live">'+icons.robot+'</a>');
  return links.length ? links.join("") : '<span class="private-note">Internship project</span>';
}
const gallery = document.getElementById("project-gallery");
const projectCount = document.getElementById("project-count");
function renderProjects(filter = "all") {
  const matches = projects.filter(p => filter === "all" || p.categories.includes(filter));
  gallery.innerHTML = matches.map(featureCard).join("");
  projectCount.textContent = matches.length + (matches.length === 1 ? " project" : " projects");
}
renderProjects();
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => {
      const active = b === button;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  });
});
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target);}
  }),{threshold:.08});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el=>el.classList.add("visible"));
}
const menu=document.querySelector(".menu-toggle"), links=document.querySelector(".navlinks");
menu.addEventListener("click",()=>{
  const expanded=links.classList.toggle("open");
  menu.setAttribute("aria-expanded",String(expanded));
});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  links.classList.remove("open");menu.setAttribute("aria-expanded","false");
}));
const mascot=document.getElementById("mascot"), speech=document.getElementById("mascot-speech");
const messages=["psst... hi! ✨","you found me! 🌸","go peek at the projects! ↗","built with lots of ♡","stay curious ✿","my code has personality!"];
let mascotMessage=0;
mascot.addEventListener("click",()=>{
  mascotMessage=(mascotMessage+1)%messages.length;
  speech.textContent=messages[mascotMessage];
  mascot.classList.add("talking");
  window.clearTimeout(mascot.hideTimeout);
  mascot.hideTimeout=window.setTimeout(()=>mascot.classList.remove("talking"),3000);
});
document.getElementById("year").textContent=String(new Date().getFullYear());


/* Storybook journey: editable work and program milestones. */
const journeyMilestones = [
 {id:"fairfax",type:"work",year:"2023",x:10,y:83,icon:"🏛️",name:"Fairfax County Government",role:"Business Applications Intern",date:"Jun 2023 – Jun 2024",description:"Modernized enterprise applications, developed a Power Apps print workflow, and explored infrastructure systems including VMware, DNS, and Active Directory.",skills:["Power Apps","JavaScript","Infrastructure","Automation"]},
 {id:"markcuban",type:"program",year:"2023",x:22,y:72,icon:"🎓",name:"Mark Cuban Foundation",role:"AI Bootcamp",date:"2023",description:"Explored foundational artificial intelligence concepts and practical applications through an educational bootcamp.",skills:["AI","Learning"]},
 {id:"obscurity",type:"work",year:"2024",x:14,y:51,icon:"🔬",name:"Obscurity Labs",role:"Security Product Development Intern",date:"Summer 2024",description:"Worked with drone telemetry, software-defined radio, MAVLink, and computer vision to explore security applications.",skills:["Python","GNU Radio","MAVLink","Computer Vision"]},
 {id:"fire",type:"program",year:"2024",x:36,y:62,icon:"🌟",name:"UMD FIRE",role:"Computing & Society Research",date:"2024",description:"Explored computing and its broader societal implications through undergraduate research.",skills:["Research","Computing"]},
 {id:"bttguild",type:"program",year:"2024",x:28,y:39,icon:"📚",name:"Break Through Tech",role:"Summer Guild",date:"2024",description:"Participated in a technology-focused learning community and explored pathways into technical careers.",skills:["Technology","Career Development"]},
 {id:"loudoun",type:"work",year:"2025",x:52,y:55,icon:"🏢",name:"Loudoun County Government",role:"Junior Data Analyst",date:"Jun 2025 – Present",description:"Built end-to-end departmental tools, SQL-backed applications, and Power BI dashboards to replace manual workflows and improve operations.",skills:["SQL Server","Power Apps","Power BI","Dataverse","Python"]},
 {id:"umdta",type:"work",year:"2025",x:48,y:79,icon:"🏫",name:"University of Maryland",role:"Database Design Teaching Assistant",date:"Fall 2025",description:"Supported students learning relational database concepts and SQL in INST327.",skills:["SQL","Database Design","Teaching"]},
 {id:"oracle",type:"program",year:"2025",x:65,y:72,icon:"🎓",name:"Oracle REACH",role:"Career Development Program",date:"2025",description:"Participated in a professional development program exploring technology careers.",skills:["Professional Development","Technology"]},
 {id:"codepath",type:"program",year:"2025",x:57,y:31,icon:"💻",name:"CodePath",role:"AI Engineering Program",date:"2025–2026",description:"Expanded practical AI engineering skills through project-based technical learning.",skills:["AI Engineering","Python","LLMs"]},
 {id:"capitalone",type:"work",year:"2026",x:83,y:19,icon:"🏦",name:"Capital One",role:"Data Analyst Intern",date:"Summer 2026",description:"Built Snowflake SQL quality controls, a daily Databricks pipeline, and a centralized analytics table for Customer Assist AI used by 20+ teams.",skills:["Snowflake","SQL","Databricks","ETL","QuickSight"]},
 {id:"bttai",type:"program",year:"2026",x:71,y:38,icon:"✨",name:"Break Through Tech AI",role:"AI Fellow",date:"2026",description:"Selected for an AI fellowship emphasizing hands-on machine learning and industry-aligned project work.",skills:["Machine Learning","AI","Teamwork"]},
 {id:"witomni",type:"work",year:"2026",x:85,y:52,icon:"🤖",name:"witOmni",role:"AI Engineering Intern",date:"Aug 2026 – Present",description:"Developing a repurchase prediction classifier using more than 500,000 transactions and customer behavior features.",skills:["Python","Machine Learning","RFM","Classification"]},
 {id:"nrg",type:"program",year:"2024",x:32,y:17,icon:"📈",name:"National Research Group",role:"Program Experience",date:"2024",description:"A milestone in my early exploration of technology and professional opportunities.",skills:["Professional Development"]}
];
const journeyPlaques = {
 fairfax:"fairfax.png",markcuban:"mark_cuban.png",obscurity:"Obscurity Labs Pixel Plaque.png",
 fire:"fire.png",bttguild:"break_through_tech.png",loudoun:"loudoun.png",
 umdta:"umd.png",oracle:"oracle.png",capitalone:"capital_one.png",
 bttai:"break_through_tech.png",witomni:"witomni.png",nrg:"national_research_group.png"
};
const journeyArt = file => "assets/" + file.split("/").map(encodeURIComponent).join("/");

/* Chronological, responsive journey timeline. */
(() => {
 const root=document.querySelector(".journey-v2");
 if(!root)return;
 const chapters=["2023","2024","2025","2026"];
 const timeline=document.getElementById("jt-timeline");
 const modal=document.getElementById("jv-modal"),body=document.getElementById("jv-dialog-body"),dialog=modal.querySelector(".jv-dialog");
 let type="all",lastFocus=null;
 const imageFor=p=>journeyPlaques[p.id]?journeyArt("plaques/"+journeyPlaques[p.id]):null;
 function setActive(selector,key,value){
  document.querySelectorAll(selector).forEach(b=>{let active=b.dataset[key]===value;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
 }
 const chapterNames=["The first spark", "Finding my direction", "Building with purpose", "Bringing it all together"];
 function render(){
  const items=journeyMilestones.filter(p=>type==="all"||p.type===type);
  timeline.innerHTML=chapters.map((year,index)=>{
   const entries=items.filter(p=>p.year===year);
   if(!entries.length)return "";
   return '<section class="jt-chapter" aria-labelledby="chapter-'+year+'"><div class="jt-year"><span class="jt-chapter-number">CHAPTER 0'+(index+1)+'</span><h3 id="chapter-'+year+'">'+year+'</h3><p>'+chapterNames[index]+'</p></div><div class="jt-cards">'+entries.map(p=>'<button type="button" class="jt-card" data-id="'+p.id+'" aria-haspopup="dialog"><span class="jt-card-top"><span class="jt-kind '+p.type+'">'+(p.type==="work"?'WORK':'PROGRAM')+'</span><span class="jt-date">'+escapeHTML(p.date)+'</span></span><span class="jt-card-main"><span class="jt-art">'+(imageFor(p)?'<img src="'+imageFor(p)+'" alt="" loading="lazy">':'<span aria-hidden="true">✦</span>')+'</span><span class="jt-card-heading"><span class="jt-company">'+escapeHTML(p.name)+'</span><span class="jt-role">'+escapeHTML(p.role)+'</span></span></span><span class="jt-description">'+escapeHTML(p.description)+'</span><span class="jt-card-footer"><span>'+p.skills.slice(0,2).map(escapeHTML).join(' · ')+'</span><span class="jt-open">Explore <span aria-hidden="true">↗</span></span></span></button>').join("")+'</div></section>';
  }).join("");
  timeline.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>openMilestone(items.find(p=>p.id===b.dataset.id),b)));
  document.getElementById("jv-count").textContent=items.length+" experiences · 2023–2026";
  setActive(".jv-filter","type",type);
 }
 function openMilestone(p,button){
  lastFocus=button;
  body.innerHTML='<div class="jv-dialog-content"><div class="jv-dialog-logo">'+(imageFor(p)?'<img src="'+imageFor(p)+'" alt="">':p.icon)+'</div><div class="jv-dialog-meta">'+escapeHTML(p.year)+' · '+(p.type==="work"?"work experience":"program & fellowship")+'</div><h3 id="jv-title">'+escapeHTML(p.name)+'</h3><strong>'+escapeHTML(p.role)+'</strong><div class="jv-dialog-date">'+escapeHTML(p.date)+'</div><p>'+escapeHTML(p.description)+'</p><div class="jv-skill-heading">✦ skills & experiences</div><div class="jv-skills">'+p.skills.map(t=>'<span>'+escapeHTML(t)+'</span>').join("")+'</div></div>';
  modal.hidden=false;document.body.classList.add("jv-modal-open");dialog.focus();
 }
 function close(){modal.hidden=true;document.body.classList.remove("jv-modal-open");lastFocus?.focus();}
 document.querySelectorAll(".jv-filter").forEach(b=>b.addEventListener("click",()=>{type=b.dataset.type;render();}));
 document.getElementById("jv-close").addEventListener("click",close);
 modal.querySelector(".jv-backdrop").addEventListener("click",close);
 document.addEventListener("keydown",e=>{if(modal.hidden)return;if(e.key==="Escape")close();if(e.key==="Tab"){const nodes=[...dialog.querySelectorAll("button,[href],[tabindex]:not([tabindex='-1'])")];if(!nodes.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===dialog)){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 render();
})();
