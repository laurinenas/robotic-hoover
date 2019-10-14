export declare enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W"
}
export declare class Hoover {
  private location;
  private pristine;
  private dirty;
  private room;
  /**
   * Creates a robotic hoover taking arguments object:
   * room - dimensions
   * location - initial position of hoover in the room
   * [dirty] - Array of coordinates of dirty patches in the room
   */
  constructor({
    room,
    location,
    dirty
  }: {
    room: any;
    location: any;
    dirty: any;
  });
  /**
   * Takes a cardinal direction, meaning N-S is the y-axis and E-W is the x-axis, and NE being the positive direction, i.e. we always stay in the I quadrant of Cartesian_coordinate_system
   * And moves the hoover a distance of 1 in that direction
   * @param direction - encoded as:
   * 'N' for 'North', 'E' for 'East', 'W' for 'West', 'S' for South
   */
  move(direction: "N" | "E" | "S" | "W"): void;
  /**
   * Returns total number of cleaned dirty patches
   */
  cleaned(): number;
  /**
   * Returns current location of robotic hoover
   */
  getLocation(): number[];
  private moveNorth;
  private moveEast;
  private moveSouth;
  private moveWest;
  private clean;
}
