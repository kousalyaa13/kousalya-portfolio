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
