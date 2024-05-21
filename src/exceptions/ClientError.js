/*

Client Error adalah file yang akan berisi penanganan error secara umum dan terjadi dari sisi klien. 

*/

class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ClientError";
  }
}

module.exports = ClientError;
