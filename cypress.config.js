const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://todo.qacart.com/",
    viewportWidth : 1440,
    viewportHeight : 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
 
});
