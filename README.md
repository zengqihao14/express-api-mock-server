# Express API Mock Server
> Mock API Server based on Express

## Requirements
* Node.js v11.13.0
* Yarn v1.15.2

## Installation
``` bash
$ yarn install
```

## Build and Setup
``` bash
# serve with hot reload at localhost:3100
$ yarn start
```

## Examples
#### Mock Data
`./src/data/user/getUser.json`
``` json
{
  "id": 12,
  "name": "john",
  "gender": "male",
  "age": 34,
  "tel": 12345678901
}
``` 

#### Route
Add rule in `./src/routes/index.js` like:
``` js
app.get(URI('users'), (req, res) => res.send(require('../data/user/getUsers')));
```

### Configuration
`./config.js`
```
{
  STATIC_SOURCE_PATH:'src/static',
  ROUTE_PATH: 'src/routes',
  PORT: 3100,
  API_BASE_PATH: '/api/',
  STATIC_BASE_PATH:'/static',
  HEADER: {
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    'Expires': '-1',
    'Pragma': 'no-cache'
  },
  RESPONSE_LATENCY: 1000,
  LOGGER_FORMAT: 'customFormat'
}
``` 

## Construct
```
- middleware
- src
 |___ data
 |___ routes 
 |___ static
- config.js
- package.json
- README.md
- server.js
- yarn.lock
```

