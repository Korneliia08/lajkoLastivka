const fs = require("fs");
const path = require("path");

// 1. Update package.json
const packageJsonPath = path.join(__dirname, "package.json");
const packageData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

if (!packageData.version) {
  console.error("Missing 'version' field in package.json.");
  process.exit(1);
}

const versionParts = packageData.version.split(".");
if (versionParts.length !== 3) {
  console.error("Version format is not in X.Y.Z.");
  process.exit(1);
}

// Increase the patch number (third part)
versionParts[2] = (parseInt(versionParts[2], 10) + 1).toString();
const newVersion = versionParts.join(".");
packageData.version = newVersion;

// Overwrite package.json with the new version
fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(packageData, null, 2) + "\n",
  "utf8",
);
console.log(`package.json version updated to: ${newVersion}`);

// 2. Update the version variable in src/app.service.ts
const appServicePath = path.join(__dirname, "src", "version.js");

if (!fs.existsSync(appServicePath)) {
  console.error(`File ${appServicePath} does not exist.`);
  process.exit(1);
}

let appServiceContent = fs.readFileSync(appServicePath, "utf8");

// Assuming the version line has the format: version = "x.y.z"
// Use a regular expression to replace the old version with the new one
appServiceContent = appServiceContent.replace(
  /version\s*=\s*["']([\d.]+)["']/,
  `version = "${newVersion}"`,
);

fs.writeFileSync(appServicePath, appServiceContent, "utf8");
console.log(`File app.service.ts updated to version: ${newVersion}`);
