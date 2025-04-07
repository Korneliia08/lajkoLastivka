const { execSync } = require("child_process");
const { version } = require("./package.json");
const axios = require("axios");

const JENKINS_USER = "mateusz";
const JENKINS_TOKEN = "HasloAdmina";
const JENKINS_URL = `http://${JENKINS_USER}:${JENKINS_TOKEN}@195.136.14.31:9000/job/FeedMP/job/FeedMP%20website/build?token=feedMpWebsite`;

try {
  // Wykonanie operacji git w try-catch, aby obsłużyć błędy
  execSync("git add .", { stdio: "inherit" });
  execSync(`git commit -m "Auto commit version ${version}"`, {
    stdio: "inherit",
  });
  execSync("git push", { stdio: "inherit" });

  console.log(
    "✅ Git commit i push zakończone. Teraz uruchamiam Jenkins job...",
  );

  // Po zakończeniu operacji git wywołujemy Jenkins API2

  axios
    .get(JENKINS_URL)
    .then((response) => {
      console.log("✅ Jenkins job triggered successfully:", response.status);
    })
    .catch((error) => {
      console.error(
        "❌ Error triggering Jenkins job:",
        error.response ? error.response.data : error.message,
      );
    });
} catch (error) {
  console.error(
    "❌ Wystąpił błąd podczas wykonywania operacji Git:",
    error.message,
  );
}
