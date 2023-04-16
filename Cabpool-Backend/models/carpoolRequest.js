class CarpoolRequest {
    constructor(id, destination, requesting_user) {
      this.id = id;
      this.destination = destination;
      this.requestingUser = requestingUser;
    }
  }
  
  module.exports = CarpoolRequest;