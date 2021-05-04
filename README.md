# This Boilerplate

- Setup with eslint, helmet (SEO/metadata), gatsby-images, and prop-types (prop validation)
- npm i -> npm run start -> http://localhost:8000/

### Notes about gatsby and how they apply to this repo:

- We use scoped CSS for ALL pages and components through the module.css method; global CSS goes into ./src/assets/css/{.css file}
  - For module CSS files, use camelCase over hyphen-case for class name selectors (javascript object notation)
- Site-wide assets like data, global CSS, and images should be placed in ./src/assets/{appropriate_folder}
- Gatsby reccomends pulling images, data, and other assets from js (the src directory). The ./static/ folder is considered an escape hatch for edge cases
- One example edge case: favicon.ico is located in the static directory (which can be changed in config I think?)

Naming Conventions:

- ALL component and CSS file names start with a capital letter (Footer.js, Footer.module.js). This will make it easier to find/replace withought fighting capitaliaztion and improve consistency. The only exception to this rule is for page names - they must be lower case for routing purposes (about.js resolves to the url .../about)


# Setup ESLint

### Install in VSCode:

1) Extensions -> install ESLint extension
2) VSCode settings -> setup settings to format on save/work with javascript/handle indentation:

```
"editor.tabSize": 2,
"editor.insertSpaces": true,
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
"eslint.validate": [
    "javascript"
],
"[javascriptreact]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascript]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
```

3) Restart VSCode

### Setup ESLint in a Gatsby Project:

NOTE: REMOVE ALL INSTANCES OF PRETTIER IN THIS REPO! (Don't have to remove plugin or from other projects)

1) Install npm dependencies in order ->
  1) npm i --save-dev eslint babel-eslint
  2) npm i --save-dev eslint-config-react-app
  3) npx install-peerdep --dev eslint-config-react-app

2) Create .eslintrc.js file in root folder and add the following code (rules) ->

```
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
```

3) Restart VSCode


# Helpful snippets (up to date with this guide)

Open snippets: ctrl + shift + P -> search "snippets" and hit enter -> search "javascript" and hit enter -> paste the following code in the proficed object:

```
"Gatsby page": {
  "prefix": "gpage",
  "body": [
    "// Imports",
    "import React from \"react\";",
    "import { Link } from \"gatsby\";",
    "import { StaticImage } from \"gatsby-plugin-image\";",
    "",
    "// CSS",
    "import * as ${1:Replace}Styles from \"./css/${1:Replace}.module.css\";",
    "",
    "// Components",
    "import Layout from \"../components/Layout\";",
    "",
    "// ======== Component ========",
    "const ${1:Replace} = (props) => {",
    "\treturn (",
    "\t\t<Layout title=\"${1:Replace}\">",
    "\t\t\t<p className={${1:Replace}Styles.someCSSSelector}>Gatsby Page$0</p>",
    "\t\t</Layout>",
    "\t);",
    "};",
    "",
    "export default ${1:Replace};",
  ],
  "description": "Boilerplate Gatsby page"
},
"Gatsby component": {
  "prefix": "gcomp",
  "body": [
    "// Imports",
    "import React from \"react\";",
    "",
    "// CSS",
    "import * as ${1:Replace}Styles from \"./css/${1:Replace}.module.css\";",
    "",
    "// ======== Component ========",
    "const ${1:Replace} = (props) => {",
    "\treturn (",
    "\t\t<p className={${1:Replace}Styles.someCSSSelector}>Gatsby Functional Component</p>",
    "\t);",
    "};",
    "",
    "export default ${1:Replace};",
  ],
  "description": "Boilerplate Gatsby page"
}
```

To insert component or page snippets simply type "gcomp" or "gpage" respectively. They initilize with a multicursor to change all relevant names to your desired component name - don't forget the capital letter! Add or remove content as needed.


# Gatsby Notes

Images:
- gatsby-plugin-image -> https://www.gatsbyjs.com/plugins/gatsby-plugin-image/

SEO/meta attributes:
- gatsby-plugin-react-helmet -> https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/

Query local files with GraphQL:
- gatsby-source-filesystem -> https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/

Prop validation:
- prop-types -> https://www.npmjs.com/package/prop-types
