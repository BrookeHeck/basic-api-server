# Basic API Practice

**Author**: Brooke Heck

**Version**: 1.0.0

## Overview
This is a REST api that takes requests from a client and queries a SQL database based on that request. The backend server is built with express and receives HTTP requests. See deployed server information for methods and routes.

## Deployed Server
[https://brookeh-basic-api-server.herokuapp.com](https://brookeh-basic-api-server.herokuapp.com/)

### Routes

GET : /food

GET : /food/:id

POST : /food (body {"foodName" : "food name"})

PUT : /food/:id (body {"foodName" : "updated food name"})

DELETE: /food/:id


## Architecture
This is only the backend server and is created using express. This is only a practice server so the database is a nonpersistent database created with sequalizer. Models for the database can be found in the src/models. All methods are tested with jest and those tests can be found in the test folder.

## Change Log
09-21-2022 2:25pm - Fully working REST api that uses SQL to get, create, update, and delete records in a database