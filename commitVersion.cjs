const { execSync } = require("child_process");
const { version } = require("./package.json");

execSync("git add .", { stdio: "inherit" });
execSync(`git commit -m "Auto commit version ${version}"`, {
  stdio: "inherit",
});
execSync("git push", { stdio: "inherit" });
