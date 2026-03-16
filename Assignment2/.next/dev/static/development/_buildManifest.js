self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/about": [
    "static/chunks/pages/about.js"
  ],
  "/books": [
    "static/chunks/pages/books.js"
  ],
  "/favourites": [
    "static/chunks/pages/favourites.js"
  ],
  "/works/[workId]": [
    "static/chunks/pages/works/[workId].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/api/hello",
    "/books",
    "/favourites",
    "/works/[workId]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()