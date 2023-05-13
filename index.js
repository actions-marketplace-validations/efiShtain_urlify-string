const core = require("@actions/core");
const lib = require("./lib");

try {
  const string = core.getInput("string");
  console.log(`Urlifing ${string}!`);
  const urlifiedString = lib.urlify(string);
  core.setOutput("urlified-string", urlifiedString);
} catch (error) {
  core.setFailed(error.message);
}
