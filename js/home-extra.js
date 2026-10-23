/* script.js-dən SONRA yüklənir: hero slayd, kampus turu, müqayisə */
const MAIN_IDS = ["adu", "asa", "aztu", "ndu", "au", "atu", "adpu", "qku", "bdu", "unec"];
const MAIN = MAIN_IDS.map(uniById).filter(Boolean);
const pageOf = u => u.page || `university.html?u=${encodeURIComponent(u.id)}`;

/* ---------- Kampus turu: 10 universitet bir yerdə, adlarla ---------- */
tourTabs.innerHTML = MAIN.map(u => `<a href="${pageOf(u)}">${u.short}</a>`).join("");
tourGrid.innerHTML = MAIN.map(u => `
    <a class="tour-item" href="${pageOf(u)}">
        <img src="${u.img}" alt="${u.short}" loading="lazy">
        <figcaption><strong>${u.short}</strong><span>${u.name}</span></figcaption>
    </a>`).join("");
watchImages(tourGrid);

/* ---------- Müqayisə ---------- */
(function () {
    const box = document.getElementById("compareBox");
    if (!box) return;
    const yes = '<i class="fa-solid fa-check"></i>';
    const rows = [
        ["Keçid balı", u => u.score || "—"],
        ["Erasmus+", u => u.erasmus ? yes : "—"],
        ["Exchange", u => u.exchange ? yes : "—"],
        ["Tələbə rəyləri", u => u.reviews ?? "—"],
        ["İxtisas sayı", u => u.specialties || "—"]
    ];
    const cols = `grid-template-columns:150px repeat(${MAIN.length},minmax(84px,1fr));min-width:${150 + MAIN.length * 84}px`;
    box.innerHTML =
        `<div class="comparison-head" style="${cols}"><div>Kriteriya</div>${MAIN.map(u => `<div>${u.short}</div>`).join("")}</div>` +
        rows.map(r => `<div class="comparison-row" style="${cols}"><div>${r[0]}</div>${MAIN.map(u => `<div>${r[1](u)}</div>`).join("")}</div>`).join("");
})();

/* ---------- Hero slayd ---------- */
(function () {
    const root = document.getElementById("heroSlider");
    if (!root) return;
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
    watchImages(root);

    const slides = root.querySelectorAll(".hs-slide");
    const dots = root.querySelectorAll(".hs-dots button");
    let cur = 0, timer;
    function go(n) {
        cur = (n + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("active", i === cur));
        dots.forEach((d, i) => d.classList.toggle("active", i === cur));
    }
    function play() { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(cur + 1), 6000); }
    root.querySelector(".prev").addEventListener("click", () => { go(cur - 1); play(); });
    root.querySelector(".next").addEventListener("click", () => { go(cur + 1); play(); });
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); play(); }));
    root.addEventListener("mouseenter", () => clearInterval(timer));
    root.addEventListener("mouseleave", play);
    play();
})();