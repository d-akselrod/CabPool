class CarpoolRide {
  constructor(id, position, start, end, stops, riders, taxiID) {
    this.id = id;
    this.position = position;
    this.start = start;
    this.end = end;
    this.stops = stops;
    this.riders = riders;
    this.taxiID = taxiID;
  }
}

module.exports = CarpoolRide;