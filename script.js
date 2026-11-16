// Curated project catalog. Edit this one array to update the gallery.
// Links and available image paths point to Kousalya's existing public GitHub repositories.
const owner = "kousalyaa13";
const projects = [
  {
    title:"BloomBots 🌱",subtitle:"AI Small Business Starter",
    description:"A hackathon-built AI advisor helping small business owners compare tools, explore workflows, estimate costs, and plan a small pilot.",
    emoji:"🌱",category:"ai",featured:true,
    tags:["AI","Full Stack","Product"],
    repo:"ai_small_business_starter",
    image:"https://raw.githubusercontent.com/kousalyaa13/ai_small_business_starter/main/static/small_business_banner.jpg"
  },
  {
    title:"witOmni 📊",subtitle:"Customer Repurchase Prediction",
    description:"Predicting repeat purchases from transaction data using customer behavior and RFM features. An AI engineering internship project.",
    emoji:"📊",category:"data",featured:true,
    tags:["Machine Learning","Python","Analytics"],
    repo:null
  },
  {
    title:"Terp Tell All 🐢",subtitle:"RAG Student Assistant",
    description:"Retrieval-augmented question answering over student reviews of UMD Computer Science professors, making scattered feedback easier to explore.",
    emoji:"🐢",category:"ai",featured:true,
    tags:["LLMs","RAG","Python"],
    repo:"Terp-Tell-All",
    image:"https://raw.githubusercontent.com/kousalyaa13/Terp-Tell-All/main/images/mermaid-diagram-2026-06-07-194042.png"
  },
  {
    title:"FitFindr ✨",subtitle:"Secondhand Shopping Agent",
    description:"A Groq-powered agent that searches sample secondhand listings, styles an outfit using a sample wardrobe, and drafts a social caption.",
    emoji:"👗",category:"ai",featured:true,
    tags:["AI Agents","Groq","Python"],
    repo:"FitFinder-Groq_Agent"
  },
  {
    title:"College Clustering 🎓",subtitle:"Unsupervised Learning",
    description:"Exploring similarities among American colleges through K-means clustering, network analysis, and supervised machine learning.",
    emoji:"🎓",category:"data",featured:true,
    tags:["K-Means","Networks","Python"],
    repo:"College-Clustering-Analysis",medium:"https://medium.com/@kousalyapotti/what-clustering-reveals-about-colleges-that-rankings-dont-ad25e5a561fd",
    image:"https://raw.githubusercontent.com/kousalyaa13/College-Clustering-Analysis/main/kmeans_scatter.png"
  },
  {
    title:"Sephora Predictor 💄",subtitle:"Predictive Modeling",
    description:"Classifying customer-favorite beauty products using review signals and models including Random Forest and Gradient Boosting.",
    emoji:"💄",category:"data",featured:true,
    tags:["Scikit-learn","ML","Python"],
    repo:"Sephora-Popularity-Predictor",
    image:"https://raw.githubusercontent.com/kousalyaa13/Sephora-Popularity-Predictor/main/images/fig6_model_comparison.png"
  },
  {title:"PawPal+ 🐾",description:"An AI pet care planner that recommends tasks and organizes priority-based, conflict-free schedules.",emoji:"🐶",category:"apps",repo:"PawPal"},
  {title:"Manifest Fandom Classifier",description:"Reddit NLP classification comparing a fine-tuned DistilBERT model with a zero-shot Groq baseline.",emoji:"💬",category:"ai",repo:"Manifest-Fandom-Analysis"},
  {title:"Amazon Vine Review Analysis",description:"Comparing incentivized and non-incentivized reviews through text analytics.",emoji:"📝",category:"data",repo:"inst425_amazon_vine_review_analysis"},
  {title:"TV Show Cosine Similarity",description:"TF-IDF and cosine similarity over animated TV show summaries.",emoji:"📺",category:"ai",repo:"TV-Show-Cosine-Similarity",medium:"https://medium.com/@kousalyapotti/from-dora-to-batman-finding-similar-animated-tv-shows-with-nlp-a930ea117ae8"},
  {title:"Accutane Side Effects Analysis",description:"Exploratory analysis of FAERS-reported adverse events involving isotretinoin.",emoji:"🔬",category:"data",repo:"Accutane-Psychiatric-Side-Effects-Analysis"},
  {title:"Career Network Analysis",description:"Web scraping and network analysis of career advice for introverts and extroverts.",emoji:"🕸️",category:"data",repo:"Career-Network-Analysis",medium:"https://medium.com/@kousalyapotti/a-network-analysis-of-introvert-vs-extrovert-career-recommendations-5ec2e7f8751d"},
  {title:"MTA Transit Equity",description:"SQL-based transit equity analysis, database design, and data exploration.",emoji:"🚇",category:"data",repo:"mta_transit_sql_analysis"},
  {title:"SafeTravels",description:"A Figma prototype for safer travel planning and alerts.",emoji:"🧭",category:"apps",repo:"SafeTravels"},
  {title:"The Mane Box",description:"A Python-powered customized hair-care product recommender.",emoji:"🧴",category:"apps",repo:"the_mane_box"},
  {title:"Art Portfolio",description:"A handmade collection of my drawing, painting, and digital art.",emoji:"🎨",category:"apps",repo:"Kousalyart"}
];
const icons = {
  github:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.14c-3.13.68-3.79-1.33-3.79-1.33-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.75.1 2.18-.12.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.97 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.97.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.28-5.15 5.56.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>',
  medium:'<span class="medium-mark" aria-hidden="true">M</span>'
};
const repoUrl = name => name ? "https://github.com/" + owner + "/" + encodeURIComponent(name) : null;
const escapeHTML = text => String(text).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function featureCard(p) {
  const art = p.image
    ? '<img loading="lazy" src="' + escapeHTML(p.image) + '" alt="Screenshot or diagram from ' + escapeHTML(p.title) + ' project" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><span class="emoji" style="display:none">' + p.emoji + '</span>'
    : '<span class="emoji" aria-hidden="true">' + p.emoji + '</span>';
  const tags = (p.tags || []).map(t => '<span>' + escapeHTML(t) + '</span>').join("");
  const link = projectLinks(p);
  return '<article class="project-card"><div class="window-bar" aria-hidden="true"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="project-inner"><div class="project-art">' + art + '</div><h3>' + escapeHTML(p.title) + '</h3><div class="project-subtitle">' + escapeHTML(p.subtitle) + '</div><p>' + escapeHTML(p.description) + '</p><div class="project-tags">' + tags + '</div><div class="project-links">' + link + '</div></div></article>';
}
function projectLinks(p) {
  let links=[];
  if(p.repo) links.push('<a class="icon-link" href="'+repoUrl(p.repo)+'" target="_blank" rel="noopener noreferrer" title="GitHub repository" aria-label="GitHub repository for '+escapeHTML(p.title)+'">'+icons.github+'</a>');
  if(p.medium) links.push('<a class="icon-link" href="'+escapeHTML(p.medium)+'" target="_blank" rel="noopener noreferrer" title="Read Medium article" aria-label="Medium article for '+escapeHTML(p.title)+'">'+icons.medium+'</a>');
  return links.length ? links.join("") : '<span class="private-note">Internship project</span>';
}
function miniCard(p) {
  return '<article class="mini-card"><h4>'+p.emoji+' '+escapeHTML(p.title)+'</h4><p>'+escapeHTML(p.description)+'</p><div class="project-links">'+projectLinks(p)+'</div></article>';
}

document.getElementById("featured-projects").innerHTML = projects.filter(p => p.featured).map(featureCard).join("");
const other = document.getElementById("other-projects");
function renderOther(filter="all") {
  const matches=projects.filter(p=>!p.featured && (filter==="all" || p.category===filter));
  other.innerHTML = matches.length ? matches.map(miniCard).join("") : '<p class="empty-message">No projects here yet. Try another filter ✿</p>';
}
renderOther();
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => {
      const active=b===button;
      b.classList.toggle("active",active);
      b.setAttribute("aria-pressed",String(active));
    });
    renderOther(button.dataset.filter);
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
