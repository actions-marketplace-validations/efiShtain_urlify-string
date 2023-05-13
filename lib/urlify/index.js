module.exports = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .slice(0, 62)
    .replace(/(\A-+|-+\z)/g, "");
