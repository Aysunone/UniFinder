
(function () {
    function flip(path) {
        return path.indexOf("../") === 0 ? path.slice(3) : "../" + path;
    }


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
        document.querySelectorAll(".atu-hero img, .atu-gallery img").forEach(protectImage);
        initGallery();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();