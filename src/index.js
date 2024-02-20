export default class ErrorRepository {
  constructor() {
    this.repository = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [405, 'Method Not Allowed'],
      [406, 'Not Acceptable'],
      [407, 'Proxy Authentication Required'],
      [408, 'Request Timeout'],
      [409, 'Conflict'],
      [410, 'Gone'],
      [411, 'Length Required'],
      [412, 'Precondition Failed'],
      [413, 'Payload Too Large'],
      [414, 'URI Too Long'],
      [415, 'Unsupported Media Type'],
      [416, 'Requested Range Not Satisfiable'],
      [417, 'Expectation Failed'],
      [418, 'I`m a teapot'],
      [421, 'Misdirected Request'],
      [422, 'Unprocessable Content'],
    ]);
  }

  translate(code) {
    const result = this.repository.get(code);
    if (!result) {
      return 'Unknown error';
    }
    return result;
  }
}
