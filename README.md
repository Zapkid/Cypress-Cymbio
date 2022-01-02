# Cypress-Cymbio

Description:
Using Cypress to test Cymbio website GUI
1. Asserts Header menu & sub-menu navigation links presence.
2. Asserts Footer social links & icons presence.
3. Asserts Chat button opens & closes the chat box.

Dependencies:
[cypress-iframe](https://npm.io/package/cypress-iframe)

Configurations:
If you are using your own project, you must Set "chromeWebSecurity": false in cypress.json

Run steps:
1. Download the project as a zip file & extract to your chosen directory.
2. Open a CLI on the extracted project path and install cypress-iframe with - 'npm install -D cypress-iframe'
3. Run the tests with - 'npx cypress run --browser chrome --headed'


