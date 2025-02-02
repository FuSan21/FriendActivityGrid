const fs = require("fs");
const path = require("path");

function wrapResponsiveCSS() {
  const responsivePath = path.join(__dirname, "../dist/responsive.css");
  const css = fs.readFileSync(responsivePath, "utf8");

  // Skip if the CSS is empty or already wrapped
  if (!css.trim() || css.trim().startsWith("@media")) {
    return;
  }

  // Add 2 space indentation to each line
  const indentedCss = css
    .split("\n")
    .map((line) => (line.trim() ? "  " + line : line))
    .join("\n");

  const wrappedCSS = `@media (max-width: 1200px) {
${indentedCss}
}`;

  fs.writeFileSync(responsivePath, wrappedCSS);
}

wrapResponsiveCSS();
