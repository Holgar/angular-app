import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    specPattern: 'cypress/api/**/*.cy.{js,jsx,ts,tsx}'
  },
});