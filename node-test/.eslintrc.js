module.exports = {
  "env": {
    "node": true
  },
  "globals": {
    "describe": true,
    "it": true,
    "beforeEach": true,
    "afterEach": true,
    "before": true,
    "after": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-constant-condition": 0 // TODO:
  }
};
