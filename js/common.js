/* Bütün səhifələrdə işləyən hissə: menyu, dil seçimi, şəkil xətası */

const mobileButton = document.getElementById("mobileButton");
const navMenu = document.getElementById("navMenu");

function setMenuIcon(open) {
    const icon = mobileButton && mobileButton.querySelector("i");
    if (!icon) return;
    icon.classList.toggle("fa-xmark", open);
    icon.classList.toggle("fa-bars", !open);
}

if (mobileButton && navMenu) {
    mobileButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        setMenuIcon(navMenu.classList.contains("show"));
    });
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            setMenuIcon(false);
        });
    });
}

const languageBox = document.querySelector(".language");
const languageButton = document.querySelector(".language-button");
const languageButtons = document.querySelectorAll(".language-menu button");

function setLanguageMenu(open) {
    languageBox.classList.toggle("open", open);
    languageButton.setAttribute("aria-expanded", open ? "true" : "false");
}

if (languageBox && languageButton) {
    languageButton.addEventListener("click", e => {
        e.stopPropagation();
        setLanguageMenu(!languageBox.classList.contains("open"));
    });
    languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            const language = button.querySelector("b").textContent;
            languageButton.innerHTML = `${language} <i class="fa-solid fa-chevron-down"></i>`;
            languageButtons.forEach(item => item.classList.remove("selected"));
            button.classList.add("selected");
            setLanguageMenu(false);
        });
    });
    document.addEventListener("click", e => {
        if (!languageBox.contains(e.target)) setLanguageMenu(false);
    });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") setLanguageMenu(false);
    });
}

/* Şəkil tapılmayanda gizlət. fallback varsa əvvəlcə onu yoxla. Dinamik yaranan şəkillər üçün də çağırılır. */
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
watchImages();