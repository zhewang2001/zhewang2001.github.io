// Types the site title one character at a time.
//
// A CSS `width` animation can't do this with a proportional font: steps()
// advances a fixed number of pixels per step, so a step lands mid-letter on
// anything wider or narrower than average. Appending real characters means
// each step is exactly one letter, whatever the font.
(function () {
    var el = document.querySelector('[data-typewriter]');
    if (!el) return;

    // Leave the finished name in place for anyone who asked for less motion.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var text = el.textContent;
    var TYPE_MS = 230;      // between characters
    var HOLD_MS = 4500;     // once the name is complete
    var RESTART_MS = 800;   // blank before typing again
    var ZERO_WIDTH = '​';  // keeps the caret's line box when empty

    var i = 0;
    el.textContent = ZERO_WIDTH;

    function step() {
        if (i < text.length) {
            i += 1;
            el.textContent = text.slice(0, i);
            setTimeout(step, TYPE_MS);
        } else {
            setTimeout(function () {
                el.textContent = ZERO_WIDTH;
                i = 0;
                setTimeout(step, RESTART_MS);
            }, HOLD_MS);
        }
    }

    setTimeout(step, 600);
})();
