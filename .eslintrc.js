module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "react-app",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "arrow-body-style": ["error", "always"],
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",

    // React props per line formatting
    "react/jsx-max-props-per-line": ["error", { "maxiumum": 1, "when": "multiline" }],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"]
  }
};