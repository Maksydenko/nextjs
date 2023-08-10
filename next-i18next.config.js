const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "uk"],
    defaultLocale: "en",
  },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/public/locales",
  ns: ["translation"],
};

console.log(this.localePath);
