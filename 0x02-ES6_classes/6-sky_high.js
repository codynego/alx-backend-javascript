import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof (sqft) !== 'number') {
      throw new TypeError('sqft must be a number');
    } else if (typeof (floors) !== 'number') {
      throw new TypeError('floor must be a number');
    }

    super(sqft);
    this._floors = floors;
  }

  get floors() {
    // return the floor attribute
    return this._floors;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;
