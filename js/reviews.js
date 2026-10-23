/* =========================================
   TƏLƏBƏ RƏYLƏRİ
   Öz serverin və ya verilənlər bazan lazım deyil.

   Rəylərin HAMIYA görünməsi üçün onlar saytdan kənarda saxlanmalıdır.
   Ən asan yol: Google Form + Google Cədvəl (pulsuz, server yoxdur).
   Aşağıdakı 3 yeri doldurmasan sayt TEST REJİMİNDƏ işləyir:
   rəy yalnız yazan şəxsin öz brauzerində görünür.
========================================= */
const GOOGLE_CONFIG = {
    // Formun göndərmə ünvanı: https://docs.google.com/forms/d/e/XXXX/formResponse
    formAction: "",
    // Formdakı 5 sualın entry nömrələri: "entry.1234567890"
    fields: { name: "", university: "", course: "", rating: "", text: "" },
    // Cədvəlin "Web-də dərc et" CSV linki: https://docs.google.com/spreadsheets/d/e/XXXX/pub?output=csv
    csvUrl: ""
};
const REFRESH_MS = 60 * 1000;
const COOLDOWN_MS = 60 * 1000;

const form = document.getElementById("reviewForm");
const listEl = document.getElementById("reviewList");
const countEl = document.getElementById("reviewCount");
const noticeEl = document.getElementById("reviewNotice");
const msgEl = document.getElementById("rvMsg");
const submitBtn = document.getElementById("rvSubmit");
const textEl = document.getElementById("rvText");
const counterEl = document.getElementById("rvCount");
const uniSelect = document.getElementById("rvUni");

/* Universitet siyahısı data.js-dən gəlir */
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
    if (text !== undefined) node.textContent = text; // textContent: XSS yoxdur
    return node;
}
function showMessage(text, type) {
    msgEl.textContent = text;
    msgEl.className = "form-msg " + (type || "");
}
function showLoadError() {
    listEl.innerHTML = "";
    listEl.appendChild(el("p", "feed-empty", "Rəyləri yükləmək mümkün olmadı. Bir az sonra yenidən cəhd et."));
}

function render(reviews) {
    listEl.innerHTML = "";
    countEl.textContent = reviews.length;
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

/* ---------- Test rejimi: yalnız bu brauzer ---------- */
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

/* ---------- Google Form + Cədvəl: hamıya görünür ---------- */
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

/* Sütunlar: 0 vaxt, 1 ad, 2 universitet, 3 kurs, 4 qiymət, 5 rəy, 6 (istəyə görə) "Təsdiq".
   6-cı sütun başlığı varsa, yalnız orada nəsə yazılmış sətirlər göstərilir (moderasiya). */
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
            pending.unshift({ ...review, createdAt: Date.now() }); // cədvəl gec yenilənə bilər, dərhal göstəririk
            merge();
        }
    };
}

/* ---------- Başlatma ---------- */
const backend = useSheets ? createSheetsBackend() : createLocalBackend();
backend.subscribe(render);
if (!useSheets) {
    noticeEl.hidden = false;
    noticeEl.textContent = "Test rejimi: rəylər hələlik yalnız bu brauzerdə saxlanır. Hamıya görünməsi üçün js/reviews.js faylında Google Form məlumatları doldurulmalıdır.";
}

textEl.addEventListener("input", () => { counterEl.textContent = textEl.value.length; });

form.addEventListener("submit", async e => {
    e.preventDefault();
    showMessage("", "");
    if (document.getElementById("rvWebsite").value) return; // bot tələsi

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

    submitBtn.disabled = true;
    try {
        await backend.add({ name: name.slice(0, 40), university, course, rating: Number(checked.value), text: text.slice(0, 600) });
        try { localStorage.setItem("unifinder_review_last", String(Date.now())); } catch (err) { }
        form.reset();
        counterEl.textContent = "0";
        showMessage("Təşəkkürlər! Rəyin əlavə olundu.", "ok");
    } catch (err) {
        showMessage("Rəyi göndərmək mümkün olmadı. Bir az sonra yenidən cəhd et.", "err");
    } finally {
        submitBtn.disabled = false;
    }
});