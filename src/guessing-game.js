class GuessingGame {
    constructor() {
        this.arr = [];
        this.midpoint = 0;
    }

    setRange(min, max) {
        this.max = max;
        for (var i = 0; i < this.max; i++) {
             this.arr.push(i);
        }
    }

    guess() {
        this.midpoint = Math.round(this.arr.length / 2);
        return this.arr[this.midpoint];
    }

    lower() {
        this.arr.splice(this.midpoint, this.arr.length);
    }

    greater() {
        this.arr.splice(0, this.midpoint);

    }
}

module.exports = GuessingGame;
