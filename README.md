# Robotic hoover

Helps navigate an imaginary robotic hoover through an equally imaginary room with dimensions as [X and Y coordinates](https://en.wikipedia.org/wiki/Cartesian_coordinate_system), identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.

NB! The `N`orth direction is the same _ordinate_ (y-axis) value increases, and `E`ast direction increases the _abscissa_ (X-axis).

## Usage

The hoover object can be instantiated given **arguments object** with properties defining:

- `room` - dimensions
- `dirty` - array of locations of patche of dirt, also defined by X and Y coordinates
- `location` - initial hoover position (X and Y coordinates like patches of dirt)

**Methods** provided to interface with the hoover:

- `.move()` - driving instructions (as [cardinal directions](https://en.wikipedia.org/wiki/Cardinal_direction) where e.g. N and E mean "go north" and "go east" respectively)
- `.getLocation()` - to find where the hoover is
- `.cleaned()` - returns how many dirty patches have been cleaned to date.

## Example

```js
import {Hoover} from "robotic-hoover";

// Constructing a room and initial location:
const settings = {
  room: [5, 5],
  location: [1, 2],
  dirty: [[1, 1], [2, 2], [3, 3]]
};
const roover = new Hoover(settings);
roover.move("E");
rover.getLocation(); // returns [2,2] and one dirty patch cleaned
rover.cleaned(); // 1
```

## Contributing

Just geting a copy of the repo and install the dependencies:

```sh
git clone https://github.com/laurinenas/robotic-hoover
cd robotic-hoover && npm i && npm t
```

There are hooks making sure that you can not commit breaking changes so you can start hacking with confidence.

⅓rd of this repo is just [gherkin](https://docs.cucumber.io/guides/overview/), I suggest before writing a line of code express it using BDD so you can get that shot of dopamine when tests gradually become pickle green.

If you spotted a mistake, a missed test case, or have suggestions: issues and PRs are very welcome. But most of all, there is no such thing as too much 🥒 gherkin.

## What this lib is not

Finding the shortest path cleaning all dirty nodes is not in scope of this lib.

Neither is dealing with hoover or dirty patches hoover beyond of the room limits. Should it be added?
