const settings = {
  "name": "wc-sevilla",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "WordCamp Sevilla blog",
      "description": "Demo site for Creating a theme blog post"
    }
  },
  "packages": [
    {
      "name": "wc-sevilla-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "api": "https://test.frontity.io/wp-json"
          "api": "https://2019-developers.sevilla.wordcamp.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
