const fs = require("fs");
const path = require("path");

// Read package.json
const packageJson = require("../package.json");
const version = packageJson.version;

// Update manifest.json
const manifestPath = path.join(__dirname, "..", "manifest.json");
const manifest = require(manifestPath);
manifest.version = version;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

// Update theme.css
const themePath = path.join(__dirname, "..", "friend-activity-grid.theme.css");
let themeContent = fs.readFileSync(themePath, "utf8");
themeContent = themeContent.replace(/@version.*$/m, `@version ${version}`);
fs.writeFileSync(themePath, themeContent);
