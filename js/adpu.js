/* =========================================================
   adpu.js — yalnız adpu.html üçün.
   Heç bir qlobal dəyişən yaratmır (IIFE), digər JS fayllarla toqquşmur.
   Hero və mətnlər HTML-dədir, burada yalnız şəkil yolu qoruması və qalereya filtri var.
========================================================= */
(function () {
    function flip(path) {
        return path.indexOf("../") === 0 ? path.slice(3) : "../" + path;
    }

    /* Şəkil açılmasa ardıcıl yoxlayır:
       1) öz yolu  2) ../ əlavə/silinmiş yol  3) data-alt  4) onun ../ variantı
       Hamısı uğursuzdursa "missing" (boş yer yazısı) qoyur. */
    function protectImage(img) {
        var list = [img.getAttribute("src")];
        list.push(flip(list[0]));
        var alt = img.getAttribute("data-alt");
        if (alt) { list.push(alt); list.push(flip(alt)); }
        var idx = 0;

        img.addEventListener("error", function () {
            idx++;
            if (idx < list.length) img.src = list[idx];
            else img.classList.add("missing");
        });
        img.addEventListener("load", function () { img.classList.remove("missing"); });
        if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
    }

    function initGallery() {
        document.querySelectorAll("[data-gallery]").forEach(function (box) {
            var tabs = box.querySelector(".tour-tabs");
            var items = box.querySelectorAll(".tour-item");
            if (!tabs) return;
            tabs.addEventListener("click", function (e) {
                var btn = e.target.closest("button");
                if (!btn) return;
                tabs.querySelectorAll("button").forEach(function (b) { b.classList.toggle("active", b === btn); });
                items.forEach(function (item) {
                    item.classList.toggle("hide", btn.dataset.cat !== "all" && item.dataset.cat !== btn.dataset.cat);
                });
            });
        });
    }

    function init() {
        document.querySelectorAll(".adpu-hero img, .adpu-gallery img").forEach(protectImage);
        initGallery();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();