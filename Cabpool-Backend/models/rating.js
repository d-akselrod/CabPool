class Rating {
  constructor(id, fromUser, toUser, rating) {
    this.id = id;
    this.fromUser = fromUser;
    this.toUser = toUser;
    this.rating = rating;
  }
}

module.exports = Rating;