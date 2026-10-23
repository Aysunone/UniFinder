/* Ətraflı universitet səhifəsi: university.html?u=<id> */
const params = new URLSearchParams(location.search);
const uni = uniById(params.get("u"));

if (!uni) {
    document.getElementById("uniHero").innerHTML =
        '<div class="container"><h1>Universitet tapılmadı</h1><p><a class="text-button" href="index.html#universities"><i class="fa-solid fa-arrow-left"></i> Universitetlər siyahısına qayıt</a></p></div>';
    document.querySelectorAll("main > section:not(#uniHero)").forEach(s => s.remove());
} else {
    document.title = `${uni.name} — UniFinder`;
    document.getElementById("uCountry").textContent = `${uni.city}, ${uni.country}`;
    document.getElementById("uName").textContent = uni.name;
    document.getElementById("uDesc").textContent = uni.desc;
    const hero = document.getElementById("uImg");
    hero.src = uni.img; hero.alt = uni.name;

    const facts = [
        ["Ölkə", uni.country],
        ["Şəhər", uni.city],
        ["Qrup", uni.groups.length ? uni.groups.join(", ") : "—"],
        ["Keçid balı", uni.score || "—"],
        ["İxtisas", uni.specialties || "—"]
    ];
    document.getElementById("uFacts").innerHTML =
        facts.map(f => `<div><small>${f[0]}</small><strong>${f[1]}</strong></div>`).join("");

    /* Kampus turu: kateqoriyalar üzrə filtr */
    const tabs = document.getElementById("tourTabs");
    const grid = document.getElementById("tourGrid");
    tabs.innerHTML = '<button type="button" class="active" data-cat="all">Hamısı</button>' +
        TOUR_CATEGORIES.map(c => `<button type="button" data-cat="${c.key}">${c.label}</button>`).join("");
    grid.innerHTML = TOUR_CATEGORIES.map(c => `
        <figure class="tour-item" data-cat="${c.key}">
            <img src="images/universities/${uni.id}/${c.key}.png" data-fallback="images/${c.key === "akt-zali" ? "akt-zali" : c.key}.png" alt="${uni.short} — ${c.title}" loading="lazy">
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

    /* İxtisaslar */
    const specs = SPECIALTIES.filter(s => s.uni === uni.short);
    const wrap = document.getElementById("specWrap");
    wrap.innerHTML = specs.length
        ? `<div class="comparison-box"><div class="comparison-head spec-row"><div>İxtisas</div><div>Qrup</div><div>Dövlət sifarişi</div><div>Pullu</div></div>` +
        specs.map(s => `<div class="comparison-row spec-row"><div>${s.name}</div><div>${s.group}</div><div>≈ ${expectedCutoff(s, "state")}</div><div>≈ ${expectedCutoff(s, "paid")}</div></div>`).join("") + "</div>"
        : '<p class="feed-empty">Bu universitet üçün ixtisas siyahısı tezliklə əlavə olunacaq.</p>';
}