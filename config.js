module.exports = {
  STATIC_SOURCE_PATH:'src/static',
  ROUTE_PATH: 'src/routes',
  PORT: 3100,
  API_BASE_PATH: '/api/',
  STATIC_BASE_PATH:'/static',
  HEADER: {
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, UPDATE, OPTIONS',
    'Access-Control-Allow-Credentials': true,
    'Cache-Control': 'private, no-cache, no-store, must-revalidate',
    'Expires': -1,
    'Pragma': 'no-cache'
  },
  CORS_OPTIONS: {
    origin: true,
    credentials: true
  },
  RESPONSE_LATENCY: 1000,
  COOKIE_OPTIONS: {
    maxAge: 1000 * 60 * 60 * 24, // 24h
    httpOnly: true,
    signed: false,
    path: '/'
  },
  LOGGER_FORMAT: 'customFormat'
};
