import type { UserConfig } from "@commitlint/types";

const ERROR = 2;

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "header-max-length": [2, "always", 72],
    "subject-case": [ERROR, "always", "sentence-case"],
    "subject-empty": [ERROR, "never"],
    "type-case": [ERROR, "always", "pascal-case"],
    "type-empty": [ERROR, "never"],
    "type-enum": [
      2,
      "always",
      [
        // Modules
        "Init",
        "Release",
        "Housekeeping",
        "Config",
        "Blog",
        "About",
        "Home",
        "Workflow",
        "Test",
        "Readme",
        "General",
        "Docker",
      ],
    ],
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [(commit) => commit === ""],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};

module.exports = Configuration;
