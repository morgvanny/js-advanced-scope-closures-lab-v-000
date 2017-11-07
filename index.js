function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    const start = parseInt(startingBlock);
    const end = parseInt(endingBlock);
    const distance = Math.abs(end - start);
    const diff = blockRange - distance;

    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(rideFare) {
    return rideFare*percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}