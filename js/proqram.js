(function () {
    "use strict";

    const UNIS = [
        { s: "BDU", n: "Bakı Dövlət Universiteti", erasmus: true, mevlana: true, dual: true, note: "2013-dən Mevlana iştirakçısı. 10 ikili diplom proqramı (Yerusəlim İbrani, Linkoln, Halle-Vittenberq və s.). Erasmus Mundus Alrakis konsorsiumunda tərəfdaş." },
        { s: "UNEC", n: "Azərbaycan Dövlət İqtisad Universiteti", erasmus: true, mevlana: true, dual: true, note: "Mevlana 2013/2014-dən. Linkoln, Montpellier, Mikolas Romeris, Daşkənd ilə ikili diplom. Dunaújváros Universitetinin Erasmus+ ICM tərəfdaşıdır." },
        { s: "ADU", n: "Azərbaycan Dillər Universiteti", erasmus: true, mevlana: true, dual: true, note: "2014-dən Erasmus+ ilə 243 tələbə Avropada bir semestr oxuyub, 40-dan çox əməkdaş dərs və təlim keçib." },
        { s: "AU", n: "Azərbaycan Universiteti", erasmus: true, mevlana: true, dual: true, note: "Anadolu Universiteti ilə Erasmus+ müqaviləsi. Tuscia (İtaliya) ilə MBA, Xarkov Radioelektronika ilə kompüter mühəndisliyi üzrə ikili diplom." },
        { s: "AzTU", n: "Azərbaycan Texniki Universiteti", erasmus: true, mevlana: true, dual: true, note: "Mevlana 2013-dən. Orta Doğu Texniki Universiteti ilə ikili diplom barədə köhnə məlumat var, aktivliyi yoxla." },
        { s: "ADA", n: "ADA Universiteti", dual: true, note: "George Washington Universiteti ilə magistr proqramları. İtaliya-Azərbaycan Universiteti Turin Politexnik ilə ikili diplom təklif edir." },
        { s: "ADPU", n: "Azərbaycan Dövlət Pedaqoji Universiteti", erasmus: true, mevlana: true, dual: true, note: "George Washington Universiteti ilə “Təhsil və insan kapitalının inkişafı” magistr proqramı." },
        { s: "QKU", n: "Qərbi Kaspi Universiteti", erasmus: true, mevlana: true, note: "Erasmus Mundus EFFORT və IANUS 2 layihələrində tərəfdaş. Vidzeme, Nicolaus Copernicus, Mendel universitetləri ilə əməkdaşlıq." },
        { s: "NDU", n: "Naxçıvan Dövlət Universiteti", erasmus: true, mevlana: true, note: "Çankırı Karatekin Universiteti ilə ikili diplom proqramında iştirak planlaşdırılıb (təsdiqlənməyib). Erasmus Mundus Alrakis-də assosiasiya olunmuş tərəfdaş." },
        { s: "ATU", n: "Azərbaycan Tibb Universiteti", erasmus: true, mevlana: true },
        { s: "GDU", n: "Gəncə Dövlət Universiteti", erasmus: true, dual: true, note: "Erasmus Mundus (Saloniki konsorsiumu) tərəfdaşı. Dokuz Eylül Universiteti ilə ikili diplom barədə məlumat var." },
        { s: "ATMU", n: "Azərbaycan Turizm və Menecment Universiteti", erasmus: true, mevlana: true, note: "Erasmus Mundus (Saloniki konsorsiumu) tərəfdaşı." },
        { s: "Xəzər", n: "Xəzər Universiteti", erasmus: true, note: "Erasmus Mundus (Saloniki konsorsiumu) tərəfdaşı." },
        { s: "Qafqaz", n: "Qafqaz Universiteti", erasmus: true, note: "Erasmus Mundus Alrakis konsorsiumunda tərəfdaş." },
        { s: "ADAU", n: "Azərbaycan Dövlət Aqrar Universiteti", mevlana: true, note: "Ege Universiteti ilə ikili diplom üzrə danışıqlar aparılırdı (təsdiqlənməyib)." },
        { s: "SDU", n: "Sumqayıt Dövlət Universiteti", mevlana: true },
        { s: "ASA", n: "Azərbaycan İdman Akademiyası" }
    ];

    const count = document.getElementById("pgUniCount");
    if (count) count.textContent = UNIS.length;

    const filter = document.getElementById("pgFilter");
    const cards = document.querySelectorAll("#pgGrid .pg-card");
    if (filter) {
        filter.addEventListener("click", e => {
            const btn = e.target.closest("button");
            if (!btn) return;
            filter.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
            cards.forEach(c => c.classList.toggle("hide", btn.dataset.f !== "all" && c.dataset.t !== btn.dataset.f));
        });
    }

    const box = document.getElementById("pgMatrix");
    if (box) {
        const yes = '<i class="fa-solid fa-check" style="color:var(--ok)" aria-label="Var"></i>';
        const na = '<span class="cmp-na" style="color:var(--muted);font-size:11.5px;font-weight:500">Təsdiqlənməyib</span>';
        const cols = "grid-template-columns:190px repeat(3,minmax(100px,.7fr)) minmax(280px,2.2fr);min-width:900px";
        const rows = UNIS.map(u =>
            `<div class="comparison-row" style="${cols}"><div>${u.s}<small>${u.n}</small></div>` +
            `<div>${u.erasmus ? yes : na}</div><div>${u.mevlana ? yes : na}</div><div>${u.dual ? yes : na}</div>` +
            `<div>${u.note || "—"}</div></div>`
        ).join("");
        box.innerHTML =
            `<div class="comparison-head" style="${cols}"><div>Universitet</div><div>Erasmus</div><div>Mevlana</div><div>İkili diplom</div><div>Təsdiqlənmiş detallar</div></div>` + rows;
    }
})();