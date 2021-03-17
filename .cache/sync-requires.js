
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jamesvanderburg/src/jameslvdb/test-pages/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jamesvanderburg/src/jameslvdb/test-pages/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jamesvanderburg/src/jameslvdb/test-pages/src/pages/index.js")),
  "component---src-templates-blog-template-js": preferDefault(require("/Users/jamesvanderburg/src/jameslvdb/test-pages/src/templates/blogTemplate.js"))
}

