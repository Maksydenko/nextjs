const path = require("path");
const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@src": resolvePath("./src"),
      "@assets": resolvePath("./src/assets"),
      "@components": resolvePath("./src/components"),
      "@pages": resolvePath("./src/pages"),
    },
  },
};
