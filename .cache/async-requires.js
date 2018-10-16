// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/rashmi/Github/personal-website-react/src/pages/404.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/Users/rashmi/Github/personal-website-react/src/pages/contact.js"),
  "component---src-pages-experience-js": require("gatsby-module-loader?name=component---src-pages-experience-js!/Users/rashmi/Github/personal-website-react/src/pages/experience.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/rashmi/Github/personal-website-react/src/pages/index.js"),
  "component---src-pages-projects-js": require("gatsby-module-loader?name=component---src-pages-projects-js!/Users/rashmi/Github/personal-website-react/src/pages/projects.js"),
  "component---src-pages-recommendation-js": require("gatsby-module-loader?name=component---src-pages-recommendation-js!/Users/rashmi/Github/personal-website-react/src/pages/recommendation.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/rashmi/Github/personal-website-react/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/rashmi/Github/personal-website-react/.cache/json/404.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/Users/rashmi/Github/personal-website-react/.cache/json/contact.json"),
  "experience.json": require("gatsby-module-loader?name=path---experience!/Users/rashmi/Github/personal-website-react/.cache/json/experience.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/rashmi/Github/personal-website-react/.cache/json/index.json"),
  "projects.json": require("gatsby-module-loader?name=path---projects!/Users/rashmi/Github/personal-website-react/.cache/json/projects.json"),
  "recommendation.json": require("gatsby-module-loader?name=path---recommendation!/Users/rashmi/Github/personal-website-react/.cache/json/recommendation.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/rashmi/Github/personal-website-react/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/rashmi/Github/personal-website-react/.cache/layouts/index.js")
}