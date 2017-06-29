# Business Registries OpenAPI Specification

[![Build Status](https://travis-ci.org/ato-team/business-registries-rest-api-specification.svg?branch=master)](https://travis-ci.org/ato-team/business-registries-rest-api-specification)

![screenshot](https://github.com/ato-team/business-registries-rest-api-specification/blob/master/redoc.png)

* [Introduction](#introduction)
* [License](#license)

## Introduction

This document ...

## License

This work is licensed under the Creative Commons Attribution 3.0 Australia (CC BY 3.0 AU) License. To view a copy of 
this license, visit https://creativecommons.org/licenses/by/3.0/au/.

## Links

- Documentation(ReDoc): https://ato-team.github.io/business-registries-rest-api-specification/
- SwaggerUI: https://ato-team.github.io/business-registries-rest-api-specification/swagger-ui/
- Look full spec:
    + JSON https://ato-team.github.io/business-registries-rest-api-specification/swagger.json
    + YAML https://ato-team.github.io/business-registries-rest-api-specification/swagger.yaml
- Preview spec version for branch `[branch]`: https://ato-team.github.io/business-registries-rest-api-specification/preview/[branch]

**Warning:** All above links are updated only after Travis CI finishes deployment

## Working on specification

### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and `cd`
    + Run `npm install`

### Usage

1. Run `npm start`
2. Checkout console output to see where local server is started. You can use all [links](#links) (except `preview`) by replacing https://ato-team.github.io/business-registries-rest-api-specification/ with url from the message: `Server started <url>`
3. Make changes using your favorite editor or `swagger-editor` (look for URL in console output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automagically refreshed in a browser after each change
**TIP:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel
5. Once you finish with the changes you can run tests using: `npm test`
6. Share you changes with the rest of the world by pushing to GitHub :smile:
