# About
RESTful API for user authentication.

[![GitHub issues](https://img.shields.io/github/issues/onildoaguiar/hapi-user-api.svg "GitHub issues")](https://github.com/onildoaguiar/hapi-user-api)
[![GitHub stars](https://img.shields.io/github/stars/onildoaguiar/hapi-user-api.svg "GitHub stars")](https://github.com/onildoaguiar/hapi-user-api)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
<img src="https://img.shields.io/badge/Language-%20JavaScript%20-f9e229.svg">

# Endpoints
* POST `api/v1/user/signUp`
* POST `api/v1/user/signIn`
* GET `api/v1/user/{id}`
* PUT `api/v1/user/{id}`
* DELETE `api/v1/user/{id}`

# Stack
## Dependencies

* node 8.9.4 (LTS)
* yarn
* hapi 17
* boom
* mongoose
* jsonwebtoken
* crypto-js
* dotenv

## Dev dependencies

* jest
* eslint
* eslint-config-standard
* nodemon
* supertest

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
