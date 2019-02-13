export enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W"
}
const isValid = input => {
  if (!Array.isArray(input) || input.length !== 2) {
    throw new Error(
      `Coodinates should be given in an array of two integers, like this: [x,y]. Got: ${input}`
    );
  }

  input.forEach(coord => {
    if (!Number.isInteger(coord)) {
      throw new Error(
        `Only decimal numbers are valid coordinates, got: ${JSON.stringify(
          input
        )}`
      );
    }

    if (coord < 0) {
      throw new Error(
        `Coordinates should only be positive, got: ${JSON.stringify(input)}`
      );
    }
  });
};

interface Coordinates {
  x: number;
  y: number;
}

type Pair = [number, number];

function Point(pair: Pair) {
  isValid(pair);
  this.x = pair[0];
  this.y = pair[1];
  this.toString = function() {
    return `${this.x},${this.y}`;
  };
}

export class Hoover {
  private location: Coordinates;
  private pristine = [];
  private dirty;
  private room: Coordinates;

  /**
   * Creates a robotic hoover taking arguments object:
   * room - dimensions
   * location - initial position of hoover in the room
   * [dirty] - Array of coordinates of dirty patches in the room
   */
  constructor({ room, location, dirty }) {
    if (!room || !location || !dirty) {
      throw new Error("Can not initialize a hoover: insufficient data.");
    }
    this.room = new Point(room);
    this.location = new Point(location);
    this.dirty = dirty.map(coord => coord.toString());
    this.clean(); // Clean the starting position
  }

  /**
   * Takes a cardinal direction, meaning N-S is the y-axis and E-W is the x-axis, and NE being the positive direction, i.e. we always stay in the I quadrant of Cartesian_coordinate_system
   * And moves the hoover a distance of 1 in that direction
   * @param direction - encoded as:
   * 'N' for 'North', 'E' for 'East', 'W' for 'West', 'S' for South
   */
  public move(direction: "N" | "E" | "S" | "W") {
    switch (direction) {
      case Direction.North:
        this.moveNorth();
        break;
      case Direction.East:
        this.moveEast();
        break;
      case Direction.South:
        this.moveSouth();
        break;
      case Direction.West:
        this.moveWest();
        break;
      default:
        throw new Error(
          `Hoover can not move in direction of ${direction}, try "N" | "E" | "S" | "W"`
        );
    }
    this.clean();
  }

  /**
   * Returns total number of cleaned dirty patches
   */
  public cleaned(): number {
    return this.pristine.length;
  }

  /**
   * Returns current location of robotic hoover
   */
  public getLocation(): number[] {
    return [this.location.x, this.location.y];
  }

  private moveNorth() {
    if (this.location.y === this.room.y) {
      // Guard for walls, skidding
      return this.location + "";
    }
    return this.location.y++;
  }
  private moveEast() {
    if (this.location.x === this.room.x) {
      // Guard for walls, skidding
      return this.location.x;
    }
    return this.location.x++;
  }
  private moveSouth() {
    if (this.location.y === 0) {
      // In our coordinate system negative coordinate means outside the room, skidding
      return this.location.y;
    }
    return this.location.y--;
  }
  private moveWest() {
    if (this.location.x === 0) {
      // In our coordinate system negative coordinate means outside the room, skidding
      return this.location.x;
    }
    return this.location.x--;
  }

  private clean() {
    const newCoordinate = this.location.toString();
    const elem = this.dirty.indexOf(newCoordinate);
    if (elem === -1) {
      return;
    }
    this.dirty.splice(elem, 1);
    this.pristine.push(newCoordinate);
  }
}
