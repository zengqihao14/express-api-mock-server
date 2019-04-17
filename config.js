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
  LOGGER_FORMAT: 'customFormat'
};
