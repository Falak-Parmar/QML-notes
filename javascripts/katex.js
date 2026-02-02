const renderMath = () => {
    const elements = document.querySelectorAll(".arithmatex");
    elements.forEach(el => {
        if (el.getAttribute("data-math-rendered")) return;

        // Always use textContent for math to avoid HTML entity issues
        let tex = el.textContent.trim();

        // Arithmatex usually wraps display math in \[ \] or $$ $$ and inline in \( \) or $
        const isDisplay = tex.startsWith("\\[") || tex.startsWith("$$");

        // Strip common delimiters if present (they are often duplicated or present in raw text)
        if (tex.startsWith("\\(")) tex = tex.slice(2, -2).trim();
        else if (tex.startsWith("\\[")) tex = tex.slice(2, -2).trim();
        else if (tex.startsWith("$$")) tex = tex.slice(2, -2).trim();
        else if (tex.startsWith("$")) tex = tex.slice(1, -1).trim();

        try {
            katex.render(tex, el, {
                displayMode: isDisplay,
                throwOnError: false,
                trust: true
            });
            el.setAttribute("data-math-rendered", "true");
        } catch (e) {
            console.error("KaTeX error:", e);
        }
    });
};

document.addEventListener("DOMContentLoaded", renderMath);

// Hook into Material for MkDocs instant loading
if (typeof document$ !== "undefined") {
    document$.subscribe(renderMath);
}
