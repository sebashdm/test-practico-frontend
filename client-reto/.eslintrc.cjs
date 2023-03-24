/* eslint-disable no-undef */
module.exports = {
    "overrides": [
        {
          files: ["*.test.js"],
    
          rules: {
            "jest/valid-expect": 0
          }
        }
      ],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    
};
