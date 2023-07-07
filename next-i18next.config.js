const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "uk"],
    defaultLocale: "en",
  },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
