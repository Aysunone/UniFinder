/* Ana səhifə (index.html). data.js və common.js əvvəl yüklənməlidir. */

const detailUrl = id => `university.html?u=${encodeURIComponent(id)}`;

/* ---------- Kampus turu: başlıqlar universitet adlarıdır, basanda həmin səhifəyə keçir ---------- */
const tourTabs = document.getElementById("tourTabs");
const tourGrid = document.getElementById("tourGrid");

(function renderTour() {
    const list = UNIVERSITIES.filter(u => u.tour);
    tourTabs.innerHTML = list.map(u => `<a href="${detailUrl(u.id)}">${u.short}</a>`).join("");
    tourGrid.innerHTML = list.map(u => `
        <a class="tour-item" href="${detailUrl(u.id)}">
            <img src="${u.img}" alt="${u.name}" loading="lazy">
            <figcaption><strong>${u.short}</strong><span>Kampus turuna bax <i class="fa-solid fa-arrow-right"></i></span></figcaption>
        </a>`).join("");
    watchImages(tourGrid);
})();

/* ---------- Universitetlər: filtr + sağ/sol slayder ---------- */
const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");
const cityFilter = document.getElementById("cityFilter");
const groupFilter = document.getElementById("groupFilter");
const uniTrack = document.getElementById("uniTrack");
const emptyResult = document.getElementById("emptyResult");

function uniCard(u) {
    const tag = u.groups.length ? `${u.groups.join(", ")} qrup` : u.country;
    const count = u.specialties ? `<span>${u.specialties} ixtisas</span>` : "";
    return `
    <article class="university-card">
        <div class="university-image">
            <img src="${u.img}" alt="${u.short}" loading="lazy">
            <span class="group-tag">${tag}</span>
            <button class="save-button" type="button" aria-label="Yadda saxla"><i class="fa-regular fa-bookmark"></i></button>
        </div>
        <div class="university-body">
            <div class="uni-location"><span><i class="fa-solid fa-location-dot"></i> ${u.city}, ${u.country}</span>${count}</div>
            <h3>${u.name}</h3>
            <p>${u.desc}</p>
            <div class="uni-bottom">
                <div><small>Keçid balı</small><strong>${u.score || "—"}</strong></div>
                <a href="${detailUrl(u.id)}">Ətraflı <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </article>`;
}

function fillSelect(select, firstLabel, values) {
    select.innerHTML = `<option value="">${firstLabel}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join("");
}
const unique = arr => [...new Set(arr)];

fillSelect(countryFilter, "Ölkə — Hamısı", unique(UNIVERSITIES.map(u => u.country)));
function fillCities() {
    const c = countryFilter.value;
    fillSelect(cityFilter, "Şəhər — Hamısı", unique(UNIVERSITIES.filter(u => !c || u.country === c).map(u => u.city)));
}
fillCities();

function filterUniversities() {
    const q = searchInput.value.toLowerCase().trim();
    const list = UNIVERSITIES.filter(u =>
        (u.name + " " + u.short).toLowerCase().includes(q) &&
        (!countryFilter.value || u.country === countryFilter.value) &&
        (!cityFilter.value || u.city === cityFilter.value) &&
        (!groupFilter.value || u.groups.includes(groupFilter.value))
    );
    uniTrack.innerHTML = list.map(uniCard).join("");
    uniTrack.scrollLeft = 0;
    watchImages(uniTrack);
    emptyResult.style.display = list.length ? "none" : "block";
    document.querySelector(".slider-controls").style.display = list.length ? "flex" : "none";
}

searchInput.addEventListener("input", filterUniversities);
countryFilter.addEventListener("change", () => { fillCities(); filterUniversities(); });
cityFilter.addEventListener("change", filterUniversities);
groupFilter.addEventListener("change", filterUniversities);
filterUniversities();

document.querySelectorAll(".slider-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const dir = btn.dataset.dir === "next" ? 1 : -1;
        uniTrack.scrollBy({ left: dir * uniTrack.clientWidth * 0.85, behavior: "smooth" });
    });
});

uniTrack.addEventListener("click", e => {
    const button = e.target.closest(".save-button");
    if (!button) return;
    const saved = button.classList.toggle("saved");
    const icon = button.querySelector("i");
    icon.classList.toggle("fa-solid", saved);
    icon.classList.toggle("fa-regular", !saved);
});

/* ---------- Sayğac (rəqəmlər sürətlə artır) ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function runCounter(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const duration = 1800;
    const start = performance.now();
    (function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
    })(start);
}

const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { runCounter(entry.target); obs.unobserve(entry.target); }
    });
}, { threshold: 0.4 });
document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));

/* ---------- Video modal ---------- */
const modal = document.getElementById("videoModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function closeModal() {
    modal.classList.remove("open");
    modalContent.innerHTML = "";
}

document.querySelectorAll(".play-button").forEach(button => {
    button.addEventListener("click", () => {
        const src = button.dataset.video;
        modalContent.innerHTML = src
            ? `<video src="${src}" controls autoplay></video>`
            : `<div class="modal-empty"><i class="fa-solid fa-video"></i><h3>Video tezliklə əlavə olunacaq</h3><p>Bu tələbənin rəyi hazırlanma mərhələsindədir.</p></div>`;
        modal.classList.add("open");
    });
});
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ---------- AI məsləhətçi ---------- */
function admissionChance(score, cutoff) {
    const p = 1 / (1 + Math.exp(-(score - cutoff) / 12));
    return Math.min(99, Math.max(1, Math.round(p * 100)));
}

const chatBody = document.getElementById("chatBody");
const advisorForm = document.getElementById("advisorForm");
const scoreInput = document.getElementById("scoreInput");
const scoreGroup = document.getElementById("scoreGroup");
const scoreType = document.getElementById("scoreType");
const scoreCity = document.getElementById("scoreCity");

fillSelect(scoreCity, "Bütün şəhərlər", unique(UNIVERSITIES.filter(u => u.country === "Azərbaycan").map(u => u.city)));

function addMessage(html, type) {
    const div = document.createElement("div");
    div.className = `msg ${type}`;
    div.innerHTML = html;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

const level = p => p >= 70 ? "high" : p >= 35 ? "mid" : "low";
const TYPE_LABEL = { state: "Dövlət sifarişi", paid: "Pullu" };

advisorForm.addEventListener("submit", e => {
    e.preventDefault();

    const score = Number(scoreInput.value);
    const group = scoreGroup.value;
    const type = scoreType.value;   // "", "state", "paid"
    const city = scoreCity.value;   // "" = hamısı

    if (!group || scoreInput.value === "" || isNaN(score) || score < 0 || score > 700) {
        addMessage("Zəhmət olmasa 0 ilə 700 arasında bal və ixtisas qrupunu seç.", "bot");
        return;
    }

    const typeText = type ? TYPE_LABEL[type] : "Dövlət sifarişi və pullu";
    addMessage(`Balım: <b>${score}</b>, qrup: <b>${group}</b>, ${city ? `şəhər: <b>${city}</b>` : "bütün şəhərlər"}, <b>${typeText}</b>`, "user");

    const types = type ? [type] : ["state", "paid"];
    const results = [];
    SPECIALTIES.filter(s => s.group === group).forEach(s => {
        const uni = uniByShort(s.uni);
        if (city && (!uni || uni.city !== city)) return;
        types.forEach(t => {
            const cutoff = expectedCutoff(s, t);
            results.push({ ...s, type: t, city: uni ? uni.city : "", cutoff, chance: admissionChance(score, cutoff) });
        });
    });
    results.sort((a, b) => b.chance - a.chance);

    if (!results.length) {
        addMessage("Bu qrup və şəhər üzrə hələ məlumat yoxdur. Başqa şəhər və ya qrup seçməyi yoxla.", "bot");
        return;
    }

    const best = results.filter(r => r.chance >= 35).slice(0, 6);
    const list = best.length ? best : results.slice(0, 3);
    const where = city ? `${city} üzrə ` : "";
    const intro = best.length
        ? `${score} balla ${where}${group} qrupu üzrə ən yüksək qəbul ehtimalı olan ixtisaslar:`
        : `${score} balla ${where}${group} qrupunda qəbul ehtimalı aşağıdır. Ən yaxın ixtisaslar:`;

    const items = list.map(r => `
        <div class="result-item">
            <div class="result-top"><strong>${r.name}</strong><b>${r.chance}%</b></div>
            <div class="result-sub">${r.uni} · ${r.city} · ${TYPE_LABEL[r.type]} · proqnoz keçid balı ≈ ${r.cutoff}</div>
            <div class="bar"><span class="${level(r.chance)}" style="width:${r.chance}%"></span></div>
        </div>`).join("");

    addMessage(`${intro}<div class="result-list">${items}</div>`, "bot");
});

/* ---------- Menyuda aktiv bölmə ---------- */
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
    });
});