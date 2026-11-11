/* Find My School — demo prototype. All school data below is fictional sample data. */

const SCHOOLS = [
  {
    id: "green-valley",
    name: "Green Valley School",
    type: "Private School",
    location: "Gulgasht Colony, Multan",
    distance: 2.1,
    monthlyFee: 12000,
    educationSystem: "Matric",
    classes: "Playgroup – Grade 10",
    programs: ["Early Years", "Primary", "Middle", "Secondary"],
    facilities: ["Library", "Sports Ground", "Outdoor Area", "Transport"],
    environment: "Quiet, green campus with large lawns and a gated entrance.",
    environmentScore: 9,
    teachingScore: 7,
    sportsScore: 7,
    image: "./images/green-valley.png",
    description: "An affordable neighbourhood school with a calm, green campus and a strong focus on the basics.",
    events: [
      { name: "Sports Day", date: "2026-12-05", text: "Races, relays and team games for all classes on the main lawn." },
      { name: "Science Exhibition", date: "2027-01-16", text: "Students present simple science projects to parents." },
      { name: "Parent-Teacher Meeting", date: "2027-02-06", text: "Meet class teachers to discuss progress and goals." }
    ],
    estimatedAdmissionFee: 15000,
    estimatedTransportFee: 3000
  },
  {
    id: "bright-future",
    name: "Bright Future Academy",
    type: "Private School",
    location: "Shah Rukn-e-Alam Colony, Multan",
    distance: 4.3,
    monthlyFee: 18500,
    educationSystem: "Cambridge (O Level)",
    classes: "Nursery – O Level",
    programs: ["Early Years", "Primary", "Middle", "Secondary"],
    facilities: ["Library", "Science Lab", "Transport", "Sports Ground"],
    environment: "Modern building with CCTV, trained guards and air-conditioned classrooms.",
    environmentScore: 8,
    teachingScore: 9,
    sportsScore: 6,
    image: "./images/bright-future.png",
    description: "Known for strong academics, small class sizes and well-equipped science labs.",
    events: [
      { name: "Science Exhibition", date: "2026-12-12", text: "Robotics and physics projects from Grade 5 to O Level." },
      { name: "Sports Day", date: "2027-01-23", text: "Annual athletics meet with house competitions." },
      { name: "Parent-Teacher Meeting", date: "2027-02-13", text: "Term report discussion with subject teachers." }
    ],
    estimatedAdmissionFee: 25000,
    estimatedTransportFee: 4000
  },
  {
    id: "city-grammar",
    name: "City Grammar School",
    type: "Private School",
    location: "Cantt Area, Multan",
    distance: 6.8,
    monthlyFee: 24000,
    educationSystem: "Matric",
    classes: "Grade 1 – Grade 10",
    programs: ["Primary", "Middle", "Secondary"],
    facilities: ["Library", "Science Lab", "Sports Ground"],
    environment: "Established, disciplined campus in a secure cantonment area.",
    environmentScore: 8,
    teachingScore: 8,
    sportsScore: 8,
    image: "./images/city-grammar.png",
    description: "A well-established school with a long tradition of board exam results and debating.",
    events: [
      { name: "Parent-Teacher Meeting", date: "2026-12-03", text: "Mid-year review of student performance." },
      { name: "Sports Day", date: "2027-01-09", text: "Cricket, football and athletics finals." },
      { name: "Science Exhibition", date: "2027-02-20", text: "Inter-house science and maths fair." }
    ],
    estimatedAdmissionFee: 30000,
    estimatedTransportFee: 0
  },
  {
    id: "beacon",
    name: "Beacon Learning Campus",
    type: "Private School",
    location: "DHA, Multan",
    distance: 9.2,
    monthlyFee: 35000,
    educationSystem: "Cambridge (O & A Level)",
    classes: "Playgroup – A Level",
    programs: ["Early Years", "Primary", "Middle", "Secondary"],
    facilities: ["Library", "Sports Ground", "Science Lab", "Transport", "Outdoor Area"],
    environment: "Large, secure campus with a swimming pool, sports fields and nurse on duty.",
    environmentScore: 9,
    teachingScore: 9,
    sportsScore: 10,
    image: "./images/beacon.png",
    description: "A premium campus with excellent sports, activities and modern learning facilities.",
    events: [
      { name: "Sports Day", date: "2026-11-28", text: "Swimming gala, athletics and football tournament." },
      { name: "Science Exhibition", date: "2027-01-30", text: "STEM showcase with coding and robotics." },
      { name: "Parent-Teacher Meeting", date: "2027-02-27", text: "One-to-one meetings with homeroom teachers." }
    ],
    estimatedAdmissionFee: 50000,
    estimatedTransportFee: 6000
  },
  {
    id: "horizon",
    name: "Horizon Public School",
    type: "Public School",
    location: "New Multan, Multan",
    distance: 1.4,
    monthlyFee: 9500,
    educationSystem: "Matric",
    classes: "Grade 1 – Grade 8",
    programs: ["Primary", "Middle"],
    facilities: ["Outdoor Area", "Library"],
    environment: "Simple, friendly community school inside a residential area.",
    environmentScore: 7,
    teachingScore: 6,
    sportsScore: 5,
    image: "./images/horizon.png",
    description: "A low-cost community school within walking distance for many families.",
    events: [
      { name: "Parent-Teacher Meeting", date: "2026-12-10", text: "Meet teachers and review monthly tests." },
      { name: "Sports Day", date: "2027-01-14", text: "Fun races and games in the school courtyard." },
      { name: "Science Exhibition", date: "2027-02-18", text: "Grade 6–8 students show simple experiments." }
    ],
    estimatedAdmissionFee: 5000,
    estimatedTransportFee: 0
  },
  {
    id: "willow-creek",
    name: "Willow Creek School",
    type: "Private School",
    location: "Model Town, Multan",
    distance: 3.4,
    monthlyFee: 14500,
    educationSystem: "Matric",
    classes: "Playgroup – Grade 8",
    programs: ["Early Years", "Primary", "Middle"],
    facilities: ["Library", "Outdoor Area", "Transport"],
    environment: "A small sample campus with a focus on primary learning and outdoor activities.",
    environmentScore: 8,
    teachingScore: 8,
    sportsScore: 7,
    image: "./images/classroom.png",
    description: "A fictional neighbourhood school with a modest fee range and a primary-to-middle programme.",
    events: [
      { name: "Reading Week", date: "2026-12-14", text: "A sample week of classroom reading activities." },
      { name: "Sports Day", date: "2027-01-22", text: "A fictional school event for students and families." },
      { name: "Parent Meeting", date: "2027-02-12", text: "A sample opportunity to discuss student progress." }
    ],
    estimatedAdmissionFee: 12000,
    estimatedTransportFee: 2500
  },
  {
    id: "cedar-hill",
    name: "Cedar Hill Academy",
    type: "Private School",
    location: "Mumtazabad, Multan",
    distance: 5.4,
    monthlyFee: 28000,
    educationSystem: "Cambridge (O Level)",
    classes: "Primary – O Level",
    programs: ["Primary", "Middle", "Secondary"],
    facilities: ["Library", "Science Lab", "Sports Ground", "Transport", "Outdoor Area"],
    environment: "A fictional sample campus with a broad programme and several listed facilities.",
    environmentScore: 9,
    teachingScore: 10,
    sportsScore: 8,
    image: "./images/library.png",
    description: "A fictional higher-fee option for families prioritising teaching and a wider range of facilities.",
    events: [
      { name: "Science Showcase", date: "2026-12-18", text: "A fictional student science presentation." },
      { name: "Arts Week", date: "2027-01-28", text: "Sample creative activities across several year groups." },
      { name: "Parent Meeting", date: "2027-02-19", text: "A sample meeting to discuss student progress." }
    ],
    estimatedAdmissionFee: 38000,
    estimatedTransportFee: 4500
  },
  {
    id: "meadowbrook-public",
    name: "Meadowbrook Public School",
    type: "Public School",
    location: "Shah Rukn-e-Alam, Multan",
    distance: 2.7,
    monthlyFee: 11000,
    educationSystem: "Matric",
    classes: "Grade 1 – Grade 8",
    programs: ["Primary", "Middle"],
    facilities: ["Library", "Outdoor Area", "Sports Ground"],
    environment: "A fictional local school record with a small set of sample facilities.",
    environmentScore: 7,
    teachingScore: 6,
    sportsScore: 6,
    image: "./images/playground.png",
    description: "A fictional lower-fee option with primary and middle classes in the sample dataset.",
    events: [
      { name: "Community Reading Day", date: "2026-12-09", text: "A fictional reading activity for students." },
      { name: "Games Day", date: "2027-01-19", text: "A sample set of outdoor games and team activities." },
      { name: "Parent Meeting", date: "2027-02-09", text: "A sample meeting to review class progress." }
    ],
    estimatedAdmissionFee: 6000,
    estimatedTransportFee: 0
  }
];

const BUDGETS = [
  { label: "Rs. 10k–15k", min: 10000, max: 15000 },
  { label: "Rs. 15k–20k", min: 15000, max: 20000 },
  { label: "Rs. 20k–30k", min: 20000, max: 30000 },
  { label: "Rs. 30k+", min: 30000, max: Infinity }
];

const DISTANCES = [
  { label: "Within 2 km", max: 2 },
  { label: "Within 5 km", max: 5 },
  { label: "Within 10 km", max: 10 },
  { label: "Any distance", max: Infinity }
];

const PRIORITIES = {
  affordable: { label: "Affordable", score: s => clamp(1 - (s.monthlyFee - 9000) / 28000) },
  close: { label: "Close to home", score: s => clamp(1 - s.distance / 12) },
  teaching: { label: "Good teaching", score: s => s.teachingScore / 10 },
  safe: { label: "Safe environment", score: s => s.environmentScore / 10 },
  sports: { label: "Activities & sports", score: s => s.sportsScore / 10 },
  facilities: { label: "Good facilities", score: s => s.facilities.length / 5 }
};

const ALL_FACILITIES = [
  { name: "Library", icon: "📚" },
  { name: "Sports Ground", icon: "⚽" },
  { name: "Science Lab", icon: "🔬" },
  { name: "Transport", icon: "🚌" },
  { name: "Outdoor Area", icon: "🌳" }
];

const ALL_PROGRAMS = [
  { name: "Early Years", text: "Playgroup, Nursery & Prep" },
  { name: "Primary", text: "Grades 1 – 5" },
  { name: "Middle", text: "Grades 6 – 8" },
  { name: "Secondary", text: "Grades 9 – 10 / O & A Level" }
];

function clamp(n, min = 0, max = 1) { return Math.min(max, Math.max(min, n)); }
const rs = n => "Rs. " + n.toLocaleString("en-PK");
const byId = id => SCHOOLS.find(s => s.id === id);

/* ---------- Matching (demo scoring, not AI) ---------- */
function budgetMatch(school, budget) {
  if (school.monthlyFee <= budget.max && school.monthlyFee >= budget.min) return 1;
  if (school.monthlyFee < budget.min) return 0.9;
  return clamp(1 - ((school.monthlyFee - budget.max) / budget.max) * 2.5);
}

function distanceMatch(school, distance) {
  if (school.distance <= distance.max) return 1;
  return clamp(1 - (school.distance - distance.max) / distance.max);
}

function priorityMatch(school, priorities) {
  if (!priorities.length) return 0.75;
  const total = priorities.reduce((sum, key) => sum + PRIORITIES[key].score(school), 0);
  return total / priorities.length;
}

function matchSchool(school, prefs) {
  const raw = budgetMatch(school, prefs.budget) * 35 +
              distanceMatch(school, prefs.distance) * 30 +
              priorityMatch(school, prefs.priorities) * 35;
  return Math.min(99, Math.round(raw));
}

function tagsFor(school, priorities) {
  const keys = priorities.length ? priorities : Object.keys(PRIORITIES);
  const tags = keys
    .map(key => ({ key, value: PRIORITIES[key].score(school) }))
    .filter(t => t.value >= 0.7)
    .sort((a, b) => b.value - a.value)
    .map(t => PRIORITIES[t.key].label);
  if (tags.length < 2) tags.push(school.educationSystem.split(" ")[0]);
  return tags.slice(0, 3);
}

/* ---------- Card rendering ---------- */
function schoolCard(school, { match, tags, rank } = {}) {
  const matchBadge = match != null ? `<span class="badge-match">${match}% Match</span>` : "";
  const topBadge = rank === 0 ? `<span class="badge-top">Best match</span>` : "";
  const tagList = tags ? `<ul class="tags" aria-label="Why it matches">${tags.map(t => `<li class="tag">${t}</li>`).join("")}</ul>` : "";
  const extra = match == null
    ? `<li>🎓 <strong>${school.educationSystem}</strong></li>`
    : "";
  const desc = match == null ? `<p class="card-desc">${school.description}</p>` : "";

  return `
    <article class="school-card">
      <div class="card-img">
        <img src="${school.image}" alt="Campus of ${school.name}" loading="lazy">
        ${matchBadge}${topBadge}
      </div>
      <div class="card-body">
        <h3>${school.name}</h3>
        <ul class="card-meta">
          <li>📍 ${school.location} · <strong>${school.distance} km away</strong></li>
          <li>💰 <strong>${rs(school.monthlyFee)}/month</strong></li>
          ${extra}
        </ul>
        ${desc}
        ${tagList}
        <button type="button" class="btn btn-primary" data-view="${school.id}">View School</button>
      </div>
    </article>`;
}

/* ---------- Finder ---------- */
const finderForm = document.getElementById("finder-form");
const finderError = document.getElementById("finder-error");
const resultsSection = document.getElementById("recommended");
const resultsGrid = document.getElementById("results-grid");
const resultsSummary = document.getElementById("results-summary");
const searchLoading = document.getElementById("search-loading");

finderForm.addEventListener("submit", async event => {
  event.preventDefault();
  const data = new FormData(finderForm);
  const budgetIdx = data.get("budget");
  const distanceIdx = data.get("distance");

  if (budgetIdx === null || distanceIdx === null) {
    const missing = [budgetIdx === null && "a monthly budget", distanceIdx === null && "a travel distance"].filter(Boolean).join(" and ");
    finderError.textContent = `Please choose ${missing} to see your matches.`;
    finderError.hidden = false;
    finderError.focus();
    return;
  }
  finderError.hidden = true;

  const prefs = {
    budget: BUDGETS[budgetIdx],
    distance: DISTANCES[distanceIdx],
    priorities: data.getAll("priority")
  };

  const submitButton = finderForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  finderForm.setAttribute("aria-busy", "true");
  resultsSection.hidden = false;
  resultsSection.setAttribute("aria-busy", "true");
  searchLoading.hidden = false;

  await new Promise(resolve => setTimeout(resolve, 1400));

  const ranked = SCHOOLS
    .map(school => ({ school, match: matchSchool(school, prefs) }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);

  resultsGrid.innerHTML = ranked
    .map((r, i) => schoolCard(r.school, { match: r.match, tags: tagsFor(r.school, prefs.priorities), rank: i }))
    .join("");

  const priorityText = prefs.priorities.length
    ? prefs.priorities.map(k => PRIORITIES[k].label).join(", ")
    : "no specific priorities";
  resultsSummary.textContent = `Based on: ${prefs.budget.label} · ${prefs.distance.label} · ${priorityText}`;

  searchLoading.hidden = true;
  resultsSection.removeAttribute("aria-busy");
  finderForm.removeAttribute("aria-busy");
  submitButton.disabled = false;
  resultsSection.classList.remove("reveal");
  void resultsSection.offsetWidth;
  resultsSection.classList.add("reveal");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("recommended-title").focus({ preventScroll: true });
});

/* ---------- Explore ---------- */
const exploreGrid = document.getElementById("explore-grid");
const exploreCount = document.getElementById("explore-count");
const searchInput = document.getElementById("school-search");
const filters = { budget: "all", distance: "all", system: "all" };

const FILTER_TESTS = {
  budget: {
    all: () => true,
    low: s => s.monthlyFee < 15000,
    mid: s => s.monthlyFee >= 15000 && s.monthlyFee <= 25000,
    high: s => s.monthlyFee > 25000
  },
  distance: {
    all: () => true,
    near: s => s.distance <= 3,
    medium: s => s.distance <= 7
  },
  system: {
    all: () => true,
    matric: s => s.educationSystem.startsWith("Matric"),
    cambridge: s => s.educationSystem.startsWith("Cambridge")
  }
};

function renderExplore() {
  const query = searchInput.value.trim().toLowerCase();
  const list = SCHOOLS.filter(s =>
    (s.name.toLowerCase().includes(query) || s.location.toLowerCase().includes(query)) &&
    FILTER_TESTS.budget[filters.budget](s) &&
    FILTER_TESTS.distance[filters.distance](s) &&
    FILTER_TESTS.system[filters.system](s)
  );

  exploreCount.textContent = `Showing ${list.length} of ${SCHOOLS.length} schools`;
  exploreGrid.innerHTML = list.length
    ? list.map(s => schoolCard(s)).join("")
    : `<div class="empty-state"><p><strong>No schools match these filters.</strong></p><p>Try a different search or choose “All”.</p></div>`;
}

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const group = chip.dataset.filter;
    filters[group] = chip.dataset.value;
    document.querySelectorAll(`.chip[data-filter="${group}"]`).forEach(c =>
      c.setAttribute("aria-pressed", String(c === chip))
    );
    renderExplore();
  });
});
searchInput.addEventListener("input", renderExplore);

/* ---------- School details ---------- */
const detailsContent = document.getElementById("details-content");

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return {
    day: d.getDate(),
    month: d.toLocaleString("en-US", { month: "short" }),
    full: d.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  };
}

function renderDetails(school) {
  const transportAvailable = school.facilities.includes("Transport");
  const transportFee = transportAvailable ? school.estimatedTransportFee : 0;
  const firstYear = school.estimatedAdmissionFee + school.monthlyFee * 12 + transportFee * 12;

  const gallery = [
    { src: school.image, label: "Campus" },
    { src: "./images/classroom.png", label: "Classrooms" },
    { src: "./images/playground.png", label: "Playground" },
    { src: "./images/library.png", label: "Library" }
  ];

  detailsContent.innerHTML = `
    <div class="profile-head reveal">
      <div>
        <p class="demo-note">Demo profile · sample information</p>
        <h2 id="profile-name" tabindex="-1">${school.name}</h2>
        <ul class="profile-facts">
          <li>📍 ${school.distance} km away</li>
          <li>💰 ${rs(school.monthlyFee)}/month</li>
          <li>🏫 ${school.type}</li>
        </ul>
        <p class="profile-desc">${school.description}</p>
      </div>
      <div class="profile-img"><img src="${school.image}" alt="Main campus of ${school.name}"></div>
    </div>

    <div class="profile-grid">
      <section class="panel" aria-labelledby="quick-info">
        <h3 id="quick-info">Quick Information</h3>
        <div class="info-list">
          <div class="info-item"><span>Classes</span><strong>${school.classes}</strong></div>
          <div class="info-item"><span>Education System</span><strong>${school.educationSystem}</strong></div>
          <div class="info-item"><span>Transport</span><strong>${transportAvailable ? "Available" : "Not available"}</strong></div>
          <div class="info-item"><span>Location</span><strong>${school.location}</strong></div>
          <div class="info-item" style="grid-column: 1 / -1"><span>Environment</span><strong>${school.environment}</strong></div>
        </div>
      </section>

      <section class="panel" aria-labelledby="est-cost">
        <h3 id="est-cost">Estimated Cost</h3>
        <ul class="cost-list">
          <li><span>Admission Fee</span><strong>${rs(school.estimatedAdmissionFee)}</strong></li>
          <li><span>Monthly Tuition</span><strong>${rs(school.monthlyFee)}</strong></li>
          <li><span>Transport (monthly)</span><strong>${transportAvailable ? rs(transportFee) : "Not offered"}</strong></li>
          <li class="total"><span>Estimated First Year Cost</span><span>${rs(firstYear)}</span></li>
        </ul>
        <p class="cost-note">Estimated information — please verify final fees with the school.</p>
      </section>
    </div>

    <section class="profile-block" aria-labelledby="gallery-h">
      <h3 id="gallery-h">School Gallery</h3>
      <div class="gallery">
        ${gallery.map(g => `
          <figure>
            <img src="${g.src}" alt="${g.label} at ${school.name}" loading="lazy">
            <figcaption>${g.label}</figcaption>
          </figure>`).join("")}
      </div>
    </section>

    <section class="profile-block" aria-labelledby="facilities-h">
      <h3 id="facilities-h">Facilities</h3>
      <ul class="icon-cards" role="list">
        ${ALL_FACILITIES.map(f => {
          const has = school.facilities.includes(f.name);
          return `<li class="icon-card ${has ? "" : "is-no"}">
            <span class="ic" aria-hidden="true">${f.icon}</span>
            <strong>${f.name}</strong>
            <span class="status ${has ? "status-yes" : "status-no"}">${has ? "✓ Available" : "✕ Not available"}</span>
          </li>`;
        }).join("")}
      </ul>
    </section>

    <section class="profile-block" aria-labelledby="programs-h">
      <h3 id="programs-h">Classes / Programs</h3>
      <ul class="program-cards" role="list">
        ${ALL_PROGRAMS.map(p => {
          const has = school.programs.includes(p.name);
          return `<li class="program-card ${has ? "" : "is-no"}">
            <h4>${p.name}</h4>
            <p>${p.text}</p>
            <span class="status ${has ? "status-yes" : "status-no"}">${has ? "✓ Offered" : "✕ Not offered"}</span>
          </li>`;
        }).join("")}
      </ul>
    </section>

    <section class="profile-block" aria-labelledby="events-h">
      <h3 id="events-h">Upcoming Events</h3>
      <ul class="event-cards" role="list">
        ${school.events.map(e => {
          const d = formatDate(e.date);
          return `<li class="event-card">
            <div class="event-date" aria-hidden="true"><div><b>${d.day}</b><small>${d.month}</small></div></div>
            <div>
              <h4>${e.name}</h4>
              <p><span class="sr-only">Date: </span>${d.full}</p>
              <p>${e.text}</p>
            </div>
          </li>`;
        }).join("")}
      </ul>
    </section>

    <div class="profile-actions">
      <a href="#recommended" class="btn btn-outline" id="back-to-results" ${resultsSection.hidden ? "hidden" : ""}>← Back to my matches</a>
      <a href="#explore" class="btn btn-outline">Explore other schools</a>
      <a href="${location.pathname.endsWith('find-school.html') ? '#finder' : 'find-school.html'}" class="btn btn-primary">Change my preferences</a>
    </div>
  `;

  document.getElementById("details").scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("profile-name").focus({ preventScroll: true });
}

document.addEventListener("click", event => {
  const btn = event.target.closest("[data-view]");
  if (!btn) return;
  const school = byId(btn.dataset.view);
  if (school) renderDetails(school);
});

/* ---------- Navigation ---------- */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.textContent = open ? "✕ Close" : "☰ Menu";
});

navMenu.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "☰ Menu";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
renderExplore();
