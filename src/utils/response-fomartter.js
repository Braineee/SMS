const HTTPStatus = require("./http-status.util");

class Response {

  static OK = (message, data) => {
    return {
      headers: {'Content-Type': 'application/json', 'Last-Modified': new Date().toUTCString()},
      statusCode: HTTPStatus.OK,
      body: { data, status: 'SUCCESS', message: message }
    }
  }

  static CREATED = (message, data) => {
    return {
      headers: {'Content-Type': 'application/json', 'Last-Modified': new Date().toUTCString()},
      statusCode: HTTPStatus.CREATED,
      body: { data, status: 'SUCCESS', message: message }
    }
  }

  static UNPROCESSABLE_ENTITY = (error_message) => {
    return {
      headers: {'Content-Type': 'application/json'},
      statusCode: HTTPStatus.UNPROCESSABLE_ENTITY,
      body: { status: 'FAILED', message: 'Request failed', error: error_message,  }
    }
  }
  
}

module.exports = Response