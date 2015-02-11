System.config({
  "baseURL": "/",
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "bt/*": "src/js/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "dist/js/main"
    ]
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@1.1.2",
    "backbone.localstorage": "npm:backbone.localstorage@1.1.16",
    "jquery": "github:components/jquery@2.1.3",
    "lodash": "npm:lodash@3.1.0",
    "underscore": "npm:underscore@1.7.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:backbone.localstorage@1.1.16": {
      "backbone": "npm:backbone@1.1.2"
    },
    "npm:backbone@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "underscore": "npm:underscore@1.7.0"
    },
    "npm:lodash@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

