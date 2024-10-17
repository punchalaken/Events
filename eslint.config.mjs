import globals from "globals";
import pluginJest from "eslint-plugin-jest";
import pluginJs from "@eslint/js";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginPrettierRecommended,
  { rules: { "no-unused-vars": "warn" } },
  { ignores: ["dist/*"] },
  { files: ["**/*.test.js"], ...pluginJest.configs["flat/recommended"] },
];
