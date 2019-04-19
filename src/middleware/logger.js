const logger = require('morgan');

const headersSent = (res) => {
  return typeof res.headersSent !== 'boolean'
    ? Boolean(res._header)
    : res.headersSent
};

logger.token('customFormat', function developmentFormatLine (tokens, req, res) {
  const status = headersSent(res) ? res.statusCode : undefined;
  const color = status >= 500 ? 31 // red
    : status >= 400 ? 33 // yellow
      : status >= 300 ? 36 // cyan
        : status >= 200 ? 32 // green
          : 0; // no color

  // get colored function
  let fn = developmentFormatLine[color];

  if (!fn) {
    // compile
    fn = developmentFormatLine[color] = logger.compile(':date[iso] [:remote-addr\::remote-user] \x1b[0m:method \x1b[37m:url \x1b[' +
      color + 'm:status\x1b[0m - :response-time ms')
  }

  return fn(tokens, req, res);
});

module.exports = logger;
