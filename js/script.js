const UNIVERSITIES = [
    {
        id: "adnsu", short: "ADNSU", name: "Azərbaycan Dövlət Neft və Sənaye Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["I"], specialties: "40+", score: "400+", tour: true, img: "images/adnsu.png",
        desc: "Mühəndislik, texnologiya və sənaye istiqamətləri üzrə kadr hazırlayan aparıcı texniki universitetlərdən biri."
    },
    {
        id: "unec", short: "UNEC", name: "Azərbaycan Dövlət İqtisad Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["II"], specialties: "35+", score: "450+", tour: true, img: "images/unec.png",
        desc: "İqtisadiyyat, biznes və idarəetmə istiqamətləri üzrə təhsil verən universitet."
    },
    {
        id: "bdu", short: "BDU", name: "Bakı Dövlət Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["III", "IV"], specialties: "60+", score: "480+", tour: true, img: "images/bdu.png",
        desc: "Elm, humanitar və sosial istiqamətlər üzrə ölkənin ən qədim klassik universiteti."
    },
    {
        id: "aztu", short: "AzTU", name: "Azərbaycan Texniki Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["I"], specialties: "", score: "", tour: true, img: "images/aztu.png",
        desc: "Texniki və mühəndislik ixtisasları üzrə təhsil verən universitet."
    },
    {
        id: "ada", short: "ADA", name: "Azərbaycan Diplomatik Akademiyası", country: "Azərbaycan", city: "Bakı", groups: [], specialties: "", score: "", tour: true, img: "images/ada.png",
        desc: "Diplomatiya, biznes, İT və mühəndislik üzrə ingilis dilində təhsil."
    },
    {
        id: "atu", short: "ATU", name: "Azərbaycan Tibb Universiteti", country: "Azərbaycan", city: "Bakı", groups: ["IV"], specialties: "", score: "", tour: true, img: "images/atu.png",
        desc: "Tibb və səhiyyə sahəsi üzrə mütəxəssis hazırlayan ali məktəb."
    },
    {
        id: "gdu", short: "GDU", name: "Gəncə Dövlət Universiteti", country: "Azərbaycan", city: "Gəncə", groups: ["III", "IV"], specialties: "", score: "", img: "images/gdu.png",
        desc: "Gəncə şəhərində pedaqoji, təbiət və humanitar elmlər üzrə təhsil verir."
    },
    {
        id: "sdu", short: "SDU", name: "Sumqayıt Dövlət Universiteti", country: "Azərbaycan", city: "Sumqayıt", groups: ["I", "II"], specialties: "", score: "", img: "images/sdu.png",
        desc: "Sumqayıtda texniki və iqtisadi istiqamətlər üzrə təhsil verən universitet."
    },
    {
        id: "boun", short: "Boğaziçi", name: "Boğaziçi Universiteti", country: "Türkiyə", city: "İstanbul", groups: [], specialties: "", score: "", img: "images/boun.png",
        desc: "İstanbulda yerləşən, ingilis dilində təhsil verən nüfuzlu dövlət universiteti."
    },
    {
        id: "metu", short: "ODTÜ", name: "Orta Doğu Texniki Universiteti", country: "Türkiyə", city: "Ankara", groups: [], specialties: "", score: "", img: "images/metu.png",
        desc: "Ankarada mühəndislik və təbiət elmləri üzrə güclü beynəlxalq universitet."
    },
    {
        id: "tsu", short: "TSU", name: "Tbilisi Dövlət Universiteti", country: "Gürcüstan", city: "Tbilisi", groups: [], specialties: "", score: "", img: "images/tsu.png",
        desc: "Gürcüstanın ən böyük və ən qədim dövlət universiteti."
    },
    {
        id: "tum", short: "TUM", name: "Münhen Texniki Universiteti", country: "Almaniya", city: "Münhen", groups: [], specialties: "", score: "", img: "images/tum.png",
        desc: "Mühəndislik və təbiət elmləri üzrə Avropanın aparıcı texniki universitetlərindən biri."
    },
    {
        id: "oxford", short: "Oxford", name: "Oksford Universiteti", country: "Böyük Britaniya", city: "Oksford", groups: [], specialties: "", score: "", img: "images/oxford.png",
        desc: "Dünyanın ən qədim və nüfuzlu universitetlərindən biri."
    },
    {
        id: "mit", short: "MIT", name: "Massaçusets Texnologiya İnstitutu", country: "ABŞ", city: "Keymbric", groups: [], specialties: "", score: "", img: "images/mit.png",
        desc: "Texnologiya, mühəndislik və elm sahələrində dünya səviyyəli tədqiqat universiteti."
    }
];

[
    ["adu", "ADU", "Azərbaycan Dillər Universiteti", "Bakı", ["III"], "Dillər, tərcümə və filologiya istiqamətləri üzrə təhsil verən universitet."],
    ["ndu", "NDU", "Naxçıvan Dövlət Universiteti", "Naxçıvan", [], "Naxçıvanda müxtəlif istiqamətlər üzrə təhsil verən dövlət universiteti."],
    ["au", "AU", "Azərbaycan Universiteti", "Bakı", [], "Universitet haqqında məlumat tezliklə əlavə olunacaq."],
    ["adpu", "ADPU", "Azərbaycan Dövlət Pedaqoji Universiteti", "Bakı", ["III"], "Müəllim hazırlığı və pedaqoji istiqamətlər üzrə təhsil verən universitet."],
    ["qku", "QKU", "Qərbi Kaspi Universiteti", "Bakı", [], "Xüsusi universitet. Təhsil bir neçə istiqamət üzrə aparılır."]
].forEach(([id, short, name, city, groups, desc]) => {
    UNIVERSITIES.push({ id, short, name, country: "Azərbaycan", city, groups, specialties: "", score: "", tour: true, img: `images/${id}.png`, desc });
});

function uniByShort(short) { return UNIVERSITIES.find(u => u.short === short); }
function uniById(id) { return UNIVERSITIES.find(u => u.id === id); }

Object.assign(uniById("unec"), { erasmus: true, exchange: true, reviews: 24 });
Object.assign(uniById("bdu"), { erasmus: true, exchange: true, reviews: 31 });

const SPECIALTIES = [
    { uni: "ADNSU", name: "Neft-qaz mühəndisliyi", group: "I", scores: [505, 512, 518] },
    { uni: "ADNSU", name: "Kompüter mühəndisliyi", group: "I", scores: [545, 552, 560] },
    { uni: "ADNSU", name: "Elektrik mühəndisliyi", group: "I", scores: [470, 476, 482] },
    { uni: "ADNSU", name: "Mexanika mühəndisliyi", group: "I", scores: [420, 428, 430] },
    { uni: "AzTU", name: "İnformasiya texnologiyaları", group: "I", scores: [500, 507, 514] },
    { uni: "AzTU", name: "Energetika", group: "I", scores: [430, 436, 442] },
    { uni: "SDU", name: "Kimya mühəndisliyi", group: "I", scores: [430, 436, 440] },

    { uni: "UNEC", name: "İqtisadiyyat", group: "II", scores: [470, 478, 485] },
    { uni: "UNEC", name: "Maliyyə", group: "II", scores: [490, 497, 505] },
    { uni: "UNEC", name: "Menecment", group: "II", scores: [440, 446, 452] },
    { uni: "UNEC", name: "Mühasibat uçotu", group: "II", scores: [415, 420, 426] },
    { uni: "SDU", name: "İqtisadiyyat", group: "II", scores: [420, 426, 431] },

    { uni: "BDU", name: "Hüquqşünaslıq", group: "III", scores: [560, 568, 575] },
    { uni: "BDU", name: "Beynəlxalq münasibətlər", group: "III", scores: [545, 552, 558] },
    { uni: "BDU", name: "Jurnalistika", group: "III", scores: [480, 486, 490] },
    { uni: "BDU", name: "Tarix", group: "III", scores: [400, 405, 410] },
    { uni: "GDU", name: "İbtidai sinif müəllimliyi", group: "III", scores: [420, 425, 430] },

    { uni: "BDU", name: "Biologiya", group: "IV", scores: [455, 460, 466] },
    { uni: "BDU", name: "Kimya", group: "IV", scores: [430, 436, 440] },
    { uni: "BDU", name: "Ekologiya", group: "IV", scores: [380, 384, 390] },
    { uni: "ATU", name: "Müalicə işi", group: "IV", scores: [610, 617, 624] },
    { uni: "ATU", name: "Stomatologiya", group: "IV", scores: [580, 587, 595] },
    { uni: "GDU", name: "Biologiya müəllimliyi", group: "IV", scores: [400, 404, 410] }
];

const PAID_RATIO = 0.72;

function expectedCutoff(s, type) {
    const base = s.scores[0] * 0.2 + s.scores[1] * 0.3 + s.scores[2] * 0.5;
    return Math.round(type === "paid" ? base * PAID_RATIO : base);
}

const TOUR_CATEGORIES = [
    { key: "korpus", label: "Korpuslar", title: "Əsas korpus" },
    { key: "auditoriya", label: "Auditoriyalar", title: "Mühazirə auditoriyası" },
    { key: "kitabxana", label: "Kitabxana", title: "Kitabxana" },
    { key: "xol", label: "Xollar", title: "Giriş xolu" },
    { key: "akt-zali", label: "Akt zalı", title: "Akt zalı" },
    { key: "kampus-heyeti", label: "İnfrastruktur", title: "Kampus həyəti" }
];

const MAIN_IDS = ["adu", "ada", "aztu", "ndu", "au", "atu", "adpu", "qku", "bdu", "unec"];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const unique = arr => [...new Set(arr)];
const detailUrl = id => `university.html?u=${encodeURIComponent(id)}`;
const pageOf = u => u.page || detailUrl(u.id);

function fillSelect(select, firstLabel, values) {
    select.innerHTML = `<option value="">${firstLabel}</option>` + values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function watchImages(root) {
    (root || document).querySelectorAll("img").forEach(img => {
        if (img.dataset.watched) return;
        img.dataset.watched = "1";
        const mark = () => {
            if (img.dataset.fallback && img.src.indexOf(img.dataset.fallback) === -1) {
                img.src = img.dataset.fallback;
                return;
            }
            img.classList.add("missing");
        };
        img.addEventListener("error", mark);
        img.addEventListener("load", () => img.classList.remove("missing"));
        if (img.complete && img.naturalWidth === 0) mark();
    });
}

function initMenu() {
    const mobileButton = document.getElementById("mobileButton");
    const navMenu = document.getElementById("navMenu");
    if (!mobileButton || !navMenu) return;

    function setIcon(open) {
        const icon = mobileButton.querySelector("i");
        if (!icon) return;
        icon.classList.toggle("fa-xmark", open);
        icon.classList.toggle("fa-bars", !open);
    }

    mobileButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        setIcon(navMenu.classList.contains("show"));
    });
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            setIcon(false);
        });
    });
}

function initLanguage() {
    const box = document.querySelector(".language");
    const button = document.querySelector(".language-button");
    if (!box || !button) return;
    const items = document.querySelectorAll(".language-menu button");

    function setOpen(open) {
        box.classList.toggle("open", open);
        button.setAttribute("aria-expanded", open ? "true" : "false");
    }

    button.addEventListener("click", e => {
        e.stopPropagation();
        setOpen(!box.classList.contains("open"));
    });
    items.forEach(item => {
        item.addEventListener("click", () => {
            const language = item.querySelector("b").textContent;
            button.innerHTML = `${language} <i class="fa-solid fa-chevron-down"></i>`;
            items.forEach(i => i.classList.remove("selected"));
            item.classList.add("selected");
            setOpen(false);
        });
    });
    document.addEventListener("click", e => {
        if (!box.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") setOpen(false);
    });
}

function initActiveNav() {
    const sections = document.querySelectorAll("main section[id]");
    const navItems = document.querySelectorAll(".nav-menu a");
    if (!sections.length || !navItems.length) return;

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 140) current = section.id;
        });
        navItems.forEach(item => {
            item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
        });
    });
}

function initHeroSlider() {
    const root = document.getElementById("heroSlider") || document.getElementById("mainHero");
    if (!root) return;

    if (!root.querySelector(".hs-slide")) {
        const SLIDES = [
            {
                img: "images/qku.png", title: "Universiteti yalnız bala görə yox, real şəraitinə görə seç.",
                text: "Kampusu əvvəlcədən gör, tələbə rəylərini oxu və balına görə qəbul ehtimalını öyrən.",
                a: ["Universitetləri araşdır", "#universities"], b: ["Qəbul ehtimalını hesabla", "#advisor"]
            },
            {
                img: "images/bdu.png", title: "Oxuyacağın mühiti əvvəlcədən gör.",
                text: "Korpuslar, auditoriyalar, kitabxanalar və akt zalları universitet səhifələrində.",
                a: ["Kampus turuna bax", "#tour"]
            },
            {
                img: "images/beynelxalq.png", title: "Universitetin dünyaya çıxışı nə qədər genişdir?",
                text: "Erasmus+, mübadilə və xarici əməkdaşlıq imkanlarını seçimdən əvvəl müqayisə et.",
                a: ["Beynəlxalq imkanlar", "#international"], b: ["Müqayisə et", "#compare"]
            },
            {
                img: "images/unec.png", title: "Balını daxil et, qəbul ehtimalını gör.",
                text: "Əvvəlki illərin keçid ballarına əsasən hər ixtisas üzrə ehtimal faizlə göstərilir.",
                a: ["Ehtimalı hesabla", "#advisor"]
            }
        ];

        root.innerHTML =
            SLIDES.map((s, i) => `
            <div class="hs-slide${i ? "" : " active"}">
                <img src="${s.img}" alt="">
                <div class="container hs-text">
                    <h1>${s.title}</h1>
                    <p>${s.text}</p>
                    <div class="hs-actions">
                        <a class="hs-btn" href="${s.a[1]}">${s.a[0]}</a>
                        ${s.b ? `<a class="hs-btn ghost" href="${s.b[1]}">${s.b[0]}</a>` : ""}
                    </div>
                </div>
            </div>`).join("") +
            `<button class="hs-arrow prev" type="button" aria-label="Əvvəlki"><i class="fa-solid fa-chevron-left"></i></button>
             <button class="hs-arrow next" type="button" aria-label="Növbəti"><i class="fa-solid fa-chevron-right"></i></button>
             <div class="hs-dots">${SLIDES.map((_, i) => `<button type="button" aria-label="Slayd ${i + 1}"${i ? "" : ' class="active"'}></button>`).join("")}</div>`;
    }
    watchImages(root);

    const slides = root.querySelectorAll(".hs-slide");
    const dots = root.querySelectorAll(".hs-dots button");
    let cur = 0, timer;

    function go(n) {
        cur = (n + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("active", i === cur));
        dots.forEach((d, i) => d.classList.toggle("active", i === cur));
    }
    function play() {
        clearInterval(timer);
        if (!reduceMotion) timer = setInterval(() => go(cur + 1), 6000);
    }

    root.querySelector(".prev").addEventListener("click", () => { go(cur - 1); play(); });
    root.querySelector(".next").addEventListener("click", () => { go(cur + 1); play(); });
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); play(); }));
    root.addEventListener("mouseenter", () => clearInterval(timer));
    root.addEventListener("mouseleave", play);
    play();
}

function initHomeTour() {
    const tabs = document.getElementById("tourTabs");
    const grid = document.getElementById("tourGrid");
    if (!tabs || !grid || document.getElementById("uniHero")) return;

    const main = MAIN_IDS.map(uniById).filter(Boolean);
    tabs.innerHTML = main.map(u => `<a href="${pageOf(u)}">${u.short}</a>`).join("");
    grid.innerHTML = main.map(u => `
        <a class="tour-item" href="${pageOf(u)}">
            <img src="${u.img}" alt="${u.short}" loading="lazy">
            <figcaption><strong>${u.short}</strong><span>${u.name}</span></figcaption>
        </a>`).join("");
    watchImages(grid);
}

function initCompare() {
    const box = document.getElementById("compareBox");
    if (!box) return;

    const main = MAIN_IDS.map(uniById).filter(Boolean);
    const yes = '<i class="fa-solid fa-check"></i>';
    const rows = [
        ["Keçid balı", u => u.score || "—"],
        ["Erasmus+", u => u.erasmus ? yes : "—"],
        ["Exchange", u => u.exchange ? yes : "—"],
        ["Tələbə rəyləri", u => u.reviews ?? "—"],
        ["İxtisas sayı", u => u.specialties || "—"]
    ];
    const cols = `grid-template-columns:150px repeat(${main.length},minmax(84px,1fr));min-width:${150 + main.length * 84}px`;

    box.innerHTML =
        `<div class="comparison-head" style="${cols}"><div>Kriteriya</div>${main.map(u => `<div>${u.short}</div>`).join("")}</div>` +
        rows.map(r => `<div class="comparison-row" style="${cols}"><div>${r[0]}</div>${main.map(u => `<div>${r[1](u)}</div>`).join("")}</div>`).join("");
}

function initUniversityList() {
    const searchInput = document.getElementById("searchInput");
    const countryFilter = document.getElementById("countryFilter");
    const cityFilter = document.getElementById("cityFilter");
    const groupFilter = document.getElementById("groupFilter");
    const uniTrack = document.getElementById("uniTrack");
    const emptyResult = document.getElementById("emptyResult");
    if (!uniTrack || !searchInput || !countryFilter || !cityFilter || !groupFilter) return;

    function uniCard(u) {
        const tag = u.groups.length ? `${u.groups.join(", ")} qrup` : u.country;
        const count = u.specialties ? `<span>${u.specialties} ixtisas</span>` : "";
        return `
        <article class="university-card">
            <div class="university-image">
                <img src="${u.img}" alt="${u.short}" loading="lazy" draggable="false">
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

    function fillCities() {
        const c = countryFilter.value;
        fillSelect(cityFilter, "Şəhər — Hamısı", unique(UNIVERSITIES.filter(u => !c || u.country === c).map(u => u.city)));
    }

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
        if (emptyResult) emptyResult.style.display = list.length ? "none" : "block";
        const controls = document.querySelector(".slider-controls");
        if (controls) controls.style.display = list.length ? "flex" : "none";
    }

    fillSelect(countryFilter, "Ölkə — Hamısı", unique(UNIVERSITIES.map(u => u.country)));
    fillCities();

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

    let down = false, startX = 0, startLeft = 0, moved = false;

    uniTrack.addEventListener("pointerdown", e => {
        if (e.pointerType === "touch") return;
        down = true;
        moved = false;
        startX = e.clientX;
        startLeft = uniTrack.scrollLeft;
    });
    window.addEventListener("pointermove", e => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 5) {
            moved = true;
            uniTrack.classList.add("dragging");
        }
        uniTrack.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", () => {
        down = false;
        uniTrack.classList.remove("dragging");
    });
    uniTrack.addEventListener("click", e => {
        if (moved) {
            e.preventDefault();
            e.stopPropagation();
            moved = false;
        }
    }, true);

    uniTrack.addEventListener("click", e => {
        const button = e.target.closest(".save-button");
        if (!button) return;
        const saved = button.classList.toggle("saved");
        const icon = button.querySelector("i");
        icon.classList.toggle("fa-solid", saved);
        icon.classList.toggle("fa-regular", !saved);
    });
}

function initCounters() {
    const items = document.querySelectorAll("[data-count]");
    if (!items.length) return;

    function runCounter(node) {
        const target = Number(node.dataset.count);
        const suffix = node.dataset.suffix || "";
        if (reduceMotion) { node.textContent = target + suffix; return; }
        const duration = 1800;
        const start = performance.now();
        (function tick(now) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            node.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(tick);
        })(start);
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { runCounter(entry.target); obs.unobserve(entry.target); }
        });
    }, { threshold: 0.4 });
    items.forEach(node => observer.observe(node));
}

function initVideoModal() {
    const modal = document.getElementById("videoModal");
    const modalContent = document.getElementById("modalContent");
    const modalClose = document.getElementById("modalClose");
    if (!modal || !modalContent) return;

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
    if (modalClose) modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

function initAdvisor() {
    const chatBody = document.getElementById("chatBody");
    const form = document.getElementById("advisorForm");
    const scoreInput = document.getElementById("scoreInput");
    const scoreGroup = document.getElementById("scoreGroup");
    const scoreType = document.getElementById("scoreType");
    const scoreCity = document.getElementById("scoreCity");
    if (!chatBody || !form || !scoreInput || !scoreGroup || !scoreType || !scoreCity) return;

    const TYPE_LABEL = { state: "Dövlət sifarişi", paid: "Pullu" };
    const level = p => p >= 70 ? "high" : p >= 35 ? "mid" : "low";

    function admissionChance(score, cutoff) {
        const p = 1 / (1 + Math.exp(-(score - cutoff) / 12));
        return Math.min(99, Math.max(1, Math.round(p * 100)));
    }

    function addMessage(html, type) {
        const div = document.createElement("div");
        div.className = `msg ${type}`;
        div.innerHTML = html;
        chatBody.appendChild(div);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    fillSelect(scoreCity, "Bütün şəhərlər", unique(UNIVERSITIES.filter(u => u.country === "Azərbaycan").map(u => u.city)));

    form.addEventListener("submit", e => {
        e.preventDefault();

        const score = Number(scoreInput.value);
        const group = scoreGroup.value;
        const type = scoreType.value;
        const city = scoreCity.value;

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
}

const GOOGLE_CONFIG = {
    formAction: "",
    fields: { name: "", university: "", course: "", rating: "", text: "" },
    csvUrl: ""
};
const REFRESH_MS = 60 * 1000;
const COOLDOWN_MS = 60 * 1000;

function initReviews() {
    const form = document.getElementById("reviewForm");
    const listEl = document.getElementById("reviewList");
    const countEl = document.getElementById("reviewCount");
    const noticeEl = document.getElementById("reviewNotice");
    const msgEl = document.getElementById("rvMsg");
    const submitBtn = document.getElementById("rvSubmit");
    const textEl = document.getElementById("rvText");
    const counterEl = document.getElementById("rvCount");
    const uniSelect = document.getElementById("rvUni");
    if (!form || !listEl || !uniSelect || !textEl) return;

    uniSelect.innerHTML = '<option value="">Seç</option>' +
        UNIVERSITIES.map(u => `<option>${u.short}</option>`).join("") + "<option>Digər</option>";

    const useSheets = Boolean(
        GOOGLE_CONFIG.formAction && GOOGLE_CONFIG.csvUrl &&
        Object.values(GOOGLE_CONFIG.fields).every(Boolean)
    );

    function initials(name) {
        const parts = name.trim().split(/\s+/).filter(Boolean);
        return ((parts[0] || "?")[0] + (parts[1] ? parts[1][0] : "")).toUpperCase();
    }
    function formatDate(ms) {
        return ms ? new Date(ms).toLocaleDateString("az-AZ", { year: "numeric", month: "long", day: "numeric" }) : "";
    }
    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }
    function showMessage(text, type) {
        if (!msgEl) return;
        msgEl.textContent = text;
        msgEl.className = "form-msg " + (type || "");
    }
    function showLoadError() {
        listEl.innerHTML = "";
        listEl.appendChild(el("p", "feed-empty", "Rəyləri yükləmək mümkün olmadı. Bir az sonra yenidən cəhd et."));
    }

    function render(reviews) {
        listEl.innerHTML = "";
        if (countEl) countEl.textContent = reviews.length;
        if (!reviews.length) {
            listEl.appendChild(el("p", "feed-empty", "Hələ rəy yoxdur. İlk rəyi sən yaz!"));
            return;
        }
        reviews.forEach(r => {
            const card = el("article", "review-card");
            const top = el("div", "review-top");
            top.appendChild(el("div", "review-avatar", initials(r.name)));
            const who = el("div", "review-who");
            who.appendChild(el("strong", "", r.name));
            who.appendChild(el("span", "", `${r.university} · ${r.course}`));
            top.appendChild(who);
            const stars = el("div", "review-stars");
            stars.setAttribute("aria-label", `${r.rating} / 5`);
            for (let i = 1; i <= 5; i++) {
                const s = document.createElement("i");
                s.className = "fa-solid fa-star" + (i <= r.rating ? "" : " off");
                stars.appendChild(s);
            }
            top.appendChild(stars);
            card.appendChild(top);
            card.appendChild(el("p", "review-text", r.text));
            card.appendChild(el("div", "review-date", formatDate(r.createdAt)));
            listEl.appendChild(card);
        });
    }

    function createLocalBackend() {
        const KEY = "unifinder_reviews_local";
        const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } };
        const sorted = () => read().sort((a, b) => b.createdAt - a.createdAt);
        return {
            subscribe(cb) { this.cb = cb; cb(sorted()); },
            async add(review) {
                const all = read();
                all.push({ ...review, createdAt: Date.now() });
                localStorage.setItem(KEY, JSON.stringify(all));
                this.cb(sorted());
            }
        };
    }

    function parseCSV(text) {
        const rows = []; let row = [], cur = "", q = false;
        for (let i = 0; i < text.length; i++) {
            const c = text[i];
            if (q) {
                if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
                else cur += c;
            } else if (c === '"') q = true;
            else if (c === ",") { row.push(cur); cur = ""; }
            else if (c === "\n" || c === "\r") {
                if (c === "\r" && text[i + 1] === "\n") i++;
                row.push(cur); cur = ""; rows.push(row); row = [];
            } else cur += c;
        }
        if (cur !== "" || row.length) { row.push(cur); rows.push(row); }
        return rows;
    }

    function parseStamp(s) {
        const t = Date.parse(s);
        if (!isNaN(t)) return t;
        const m = (s || "").match(/(\d{1,2})[./](\d{1,2})[./](\d{4})(?:\s+(\d{1,2}):(\d{2}))?/);
        return m ? new Date(+m[3], +m[2] - 1, +m[1], +(m[4] || 0), +(m[5] || 0)).getTime() : 0;
    }

    function rowsToReviews(rows) {
        if (rows.length < 2) return [];
        const moderated = Boolean((rows[0][6] || "").trim());
        return rows.slice(1)
            .filter(r => r[1] && r[5] && (!moderated || (r[6] || "").trim()))
            .map(r => ({
                name: r[1].trim().slice(0, 40),
                university: r[2] || "",
                course: r[3] || "",
                rating: Math.min(5, Math.max(1, parseInt(r[4], 10) || 5)),
                text: r[5].trim().slice(0, 600),
                createdAt: parseStamp(r[0])
            }))
            .reverse();
    }

    function createSheetsBackend() {
        let pending = [], current = [], renderCb = () => { };
        function merge() {
            const seen = new Set(current.map(r => r.name + "|" + r.text));
            pending = pending.filter(p => !seen.has(p.name + "|" + p.text));
            renderCb([...pending, ...current]);
        }
        async function load() {
            try {
                const sep = GOOGLE_CONFIG.csvUrl.includes("?") ? "&" : "?";
                const res = await fetch(GOOGLE_CONFIG.csvUrl + sep + "t=" + Date.now());
                if (!res.ok) throw new Error("http " + res.status);
                current = rowsToReviews(parseCSV(await res.text()));
                merge();
            } catch (e) {
                if (!current.length && !pending.length) showLoadError();
            }
        }
        return {
            subscribe(cb) { renderCb = cb; load(); setInterval(load, REFRESH_MS); },
            async add(review) {
                const f = GOOGLE_CONFIG.fields;
                const body = new URLSearchParams();
                body.append(f.name, review.name);
                body.append(f.university, review.university);
                body.append(f.course, review.course);
                body.append(f.rating, String(review.rating));
                body.append(f.text, review.text);
                await fetch(GOOGLE_CONFIG.formAction, { method: "POST", mode: "no-cors", body });
                pending.unshift({ ...review, createdAt: Date.now() });
                merge();
            }
        };
    }

    const backend = useSheets ? createSheetsBackend() : createLocalBackend();
    backend.subscribe(render);
    if (!useSheets && noticeEl) {
        noticeEl.hidden = false;
        noticeEl.textContent = "Test rejimi: rəylər hələlik yalnız bu brauzerdə saxlanır. Hamıya görünməsi üçün js/app.js faylında GOOGLE_CONFIG doldurulmalıdır.";
    }

    textEl.addEventListener("input", () => { if (counterEl) counterEl.textContent = textEl.value.length; });

    form.addEventListener("submit", async e => {
        e.preventDefault();
        showMessage("", "");
        const trap = document.getElementById("rvWebsite");
        if (trap && trap.value) return;

        const name = document.getElementById("rvName").value.trim();
        const university = uniSelect.value;
        const course = document.getElementById("rvCourse").value;
        const checked = form.querySelector('input[name="rvRating"]:checked');
        const text = textEl.value.trim();

        if (name.length < 2) return showMessage("Zəhmət olmasa adını yaz.", "err");
        if (!university || !course) return showMessage("Universiteti və kursu seç.", "err");
        if (!checked) return showMessage("Qiymət ver (1–5 ulduz).", "err");
        if (text.length < 20) return showMessage("Rəy ən azı 20 simvol olmalıdır.", "err");

        let last = 0;
        try { last = Number(localStorage.getItem("unifinder_review_last") || 0); } catch (err) { }
        if (Date.now() - last < COOLDOWN_MS) return showMessage("Zəhmət olmasa bir az gözləyib yenidən cəhd et.", "err");

        if (submitBtn) submitBtn.disabled = true;
        try {
            await backend.add({ name: name.slice(0, 40), university, course, rating: Number(checked.value), text: text.slice(0, 600) });
            try { localStorage.setItem("unifinder_review_last", String(Date.now())); } catch (err) { }
            form.reset();
            if (counterEl) counterEl.textContent = "0";
            showMessage("Təşəkkürlər! Rəyin əlavə olundu.", "ok");
        } catch (err) {
            showMessage("Rəyi göndərmək mümkün olmadı. Bir az sonra yenidən cəhd et.", "err");
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    });
}

function initUniversityPage() {
    const heroBox = document.getElementById("uniHero");
    if (!heroBox) return;

    const params = new URLSearchParams(location.search);
    const uni = uniById(params.get("u"));

    if (!uni) {
        heroBox.innerHTML =
            '<div class="container"><h1>Universitet tapılmadı</h1><p><a class="text-button" href="index.html#universities"><i class="fa-solid fa-arrow-left"></i> Universitetlər siyahısına qayıt</a></p></div>';
        document.querySelectorAll("main > section:not(#uniHero)").forEach(s => s.remove());
        return;
    }

    document.title = `${uni.name} — UniFinder`;
    document.getElementById("uCountry").textContent = `${uni.city}, ${uni.country}`;
    document.getElementById("uName").textContent = uni.name;
    document.getElementById("uDesc").textContent = uni.desc;
    const hero = document.getElementById("uImg");
    hero.src = uni.img;
    hero.alt = uni.name;

    const facts = [
        ["Ölkə", uni.country],
        ["Şəhər", uni.city],
        ["Qrup", uni.groups.length ? uni.groups.join(", ") : "—"],
        ["Keçid balı", uni.score || "—"],
        ["İxtisas", uni.specialties || "—"]
    ];
    document.getElementById("uFacts").innerHTML =
        facts.map(f => `<div><small>${f[0]}</small><strong>${f[1]}</strong></div>`).join("");

    const tabs = document.getElementById("tourTabs");
    const grid = document.getElementById("tourGrid");
    tabs.innerHTML = '<button type="button" class="active" data-cat="all">Hamısı</button>' +
        TOUR_CATEGORIES.map(c => `<button type="button" data-cat="${c.key}">${c.label}</button>`).join("");
    grid.innerHTML = TOUR_CATEGORIES.map(c => `
        <figure class="tour-item" data-cat="${c.key}">
            <img src="images/universities/${uni.id}/${c.key}.png" data-fallback="images/${c.key}.png" alt="${uni.short} — ${c.title}" loading="lazy">
            <figcaption><strong>${c.title}</strong><span>${c.label}</span></figcaption>
        </figure>`).join("");
    watchImages(grid);

    tabs.addEventListener("click", e => {
        const btn = e.target.closest("button");
        if (!btn) return;
        tabs.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        grid.querySelectorAll(".tour-item").forEach(item => {
            item.classList.toggle("hide", btn.dataset.cat !== "all" && item.dataset.cat !== btn.dataset.cat);
        });
    });

    const specs = SPECIALTIES.filter(s => s.uni === uni.short);
    const wrap = document.getElementById("specWrap");
    wrap.innerHTML = specs.length
        ? `<div class="comparison-box"><div class="comparison-head spec-row"><div>İxtisas</div><div>Qrup</div><div>Dövlət sifarişi</div><div>Pullu</div></div>` +
        specs.map(s => `<div class="comparison-row spec-row"><div>${s.name}</div><div>${s.group}</div><div>≈ ${expectedCutoff(s, "state")}</div><div>≈ ${expectedCutoff(s, "paid")}</div></div>`).join("") + "</div>"
        : '<p class="feed-empty">Bu universitet üçün ixtisas siyahısı tezliklə əlavə olunacaq.</p>';
}

function initApp() {
    initMenu();
    initLanguage();
    initActiveNav();

    initHeroSlider();
    initHomeTour();
    initCompare();
    initUniversityList();
    initCounters();
    initVideoModal();
    initAdvisor();

    initReviews();
    initUniversityPage();

    watchImages();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}