# Business Registries REST API

[![Build Status](https://travis-ci.org/ato-team/business-registries-rest-api-specification.svg?branch=master)](https://travis-ci.org/ato-team/business-registries-rest-api-specification)

* [Introduction](#introduction)
* [License](#license)
* [Links](#links)
* [Install](#install)
* [Usage](#usage)
* [Additional Resources](#additional-resources)

## Introduction

This is the repository for the Business Registries REST API.

![screenshot](https://github.com/Robinyo/business-registries-rest-api-specification/blob/master/registry-rest-api.png)

## License

This work is licensed under the Creative Commons Attribution 3.0 Australia (CC BY 3.0 AU) License. To view a copy of 
this license, visit https://creativecommons.org/licenses/by/3.0/au/.

## Links

- Documentation: https://ato-team.github.io/business-registries-rest-api-specification/

- The OpenAPI Specification:
    + JSON https://ato-team.github.io/business-registries-rest-api-specification/swagger.json
    + YAML https://ato-team.github.io/business-registries-rest-api-specification/swagger.yaml

## To work on the API specification

### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone the repo, `cd` then run `npm install` (or `yarn install`)

### Usage

1. Run `npm start`
2. Check the console output to see where the local server was started:
    ```
    [08:24:32] Starting 'build'...
    [08:24:32] Starting 'watch'...
    [08:24:32] Finished 'watch' after 77 ms
    [08:24:32] Starting 'edit'...
    [08:24:32] Finished 'edit' after 1.92 ms
    [08:24:32] swagger-editor started http://localhost:5000
    [08:24:36] Finished 'build' after 3.73 s
    [08:24:36] Starting 'serve'...
    [08:24:36] Finished 'serve' after 73 μs
    [08:24:36] Server started http://localhost:3000
    [08:24:36] LiveReload started on port 35729
    ```   
3. Make changes using your favorite editor (in the `/spec` folder) or use the bundled `swagger-editor` (look for the URL in the console's output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automagically refreshed in the browser after each change
5. Once you finish with the changes you can run tests using: `npm test`

**Note:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel

## Additional Resources
* [Digital Transformation Agency Digital Service Standard](https://www.dta.gov.au/standard/)
* [A Guide to Open Source Software for Australian Government Agencies](http://www.finance.gov.au/files/2012/04/AGuidetoOpenSourceSoftware.pdf)
* [ATO RESTful API Design Guidelines](https://github.com/ato-team/restful-api-design-guidelines)
* [ReDoc](https://github.com/Rebilly/ReDoc)
* [json-server](https://github.com/typicode/json-server) - Get a full fake REST API with zero coding in less than 30 seconds (seriously).
* [faker.js](https://github.com/marak/Faker.js/) - Generate massive amounts of fake data in Node.js and the browser.
* [Postman](https://www.getpostman.com/) - Developing APIs is hard. Postman makes it easy.
* [Sahat's Excellent Hackathon Starter](https://github.com/sahat/hackathon-starter) - A kickstarter for Node.js applications.
* [Microsoft's TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter) - A starter template for TypeScript and Node with a detailed README describing how to use the two together.
* [Gery Hirschfeld's Express-TypeScript-Starter](https://github.com/w3tecch/express-typescript-boilerplate) - A starter template for Express and TypeScript.
* [Gery Hirschfeld's Express-GraphQL-TypeScript-Starter](https://github.com/w3tecch/express-graphql-typescript-boilerplate) - A starter template for Express, GraphQL and TypeScript.