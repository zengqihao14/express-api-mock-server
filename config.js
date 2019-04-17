module.exports = {
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
  COOKIE_OPTIONS: {
    maxAge: 1000 * 60 * 60 * 24, // 24h
    httpOnly: true,
    signed: false
  },
  LOGGER_FORMAT: 'customFormat'
};
