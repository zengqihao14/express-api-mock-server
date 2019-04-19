function Utils() {
  this.getRandomIntNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
  this.getRandomFromArray = (items) => items[Math.floor(Math.random() * items.length)];
}

module.exports = new Utils();

