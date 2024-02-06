# Data pipeline testing

Sample project to demonstrate an analytics project for a fictitious bank called Banco Vitória.

### Looker Studio dashboard

https://lookerstudio.google.com/reporting/b55fcf16-afad-4f37-9756-18cb40b9a330 

### 

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.43.0` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v20.10.0` while writing this doc)
- npm (I've used version `10.2.3` while writing this doc)
- [Stitch sign up](https://app.stitchdata.com/signup)
- [Big Query sign up](https://cloud.google.com/bigquery)

**Note:** When installing Node.js, npm is automatically installed. 🚀

## Installation for testing the pipeline

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** The `cypress.env.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

In this project, you can run tests in interactive and headless modes, both on desktop and tablet viewports.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.


### Interactive mode

Run `npm run cy:open` to open the __Cypress App__ to run tests in interactive mode using a desktop viewport.


___

Made with ❤️ by [Peri](https://github.com/peribarros).

