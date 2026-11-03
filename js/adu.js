
(function () {
    function init() {

        document.querySelectorAll("[data-gallery]").forEach(function (box) {
            var tabs = box.querySelector(".tour-tabs");
            var items = box.querySelectorAll(".tour-item");
            if (!tabs) return;

            tabs.addEventListener("click", function (e) {
                var btn = e.target.closest("button");
                if (!btn) return;
                tabs.querySelectorAll("button").forEach(function (b) {
                    b.classList.toggle("active", b === btn);
                });
                items.forEach(function (item) {
                    var hide = btn.dataset.cat !== "all" && item.dataset.cat !== btn.dataset.cat;
                    item.classList.toggle("hide", hide);
                });
            });
        });


        document.querySelectorAll(".adu-photo img, .adu-gallery img").forEach(function (img) {
            function mark() { img.classList.add("missing"); }
            img.addEventListener("error", mark);
            img.addEventListener("load", function () { img.classList.remove("missing"); });
            if (img.complete && img.naturalWidth === 0) mark();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();