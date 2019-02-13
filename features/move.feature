Feature: Robotic hoover movement

	Scenario Outline: Moves around
		Given hoover initial location [1,2]
		When it moves "<direction>"
		Then new location is <coordinates>

		Examples:
			| direction | coordinates |
			| North     | [1,3]       |
			| East      | [2,2]       |
			| West      | [0,2]       |
			| South     | [1,1]       |

	Scenario Outline: Understands one letter cardinal directions
		Given hoover initial location [1,1]
		When it moves "<direction>"
		Then new location is <coordinates>

		Examples:
			| direction | coordinates |
			| N         | [1,2]       |
			| E         | [2,1]       |
			| W         | [0,1]       |
			| S         | [1,0]       |

	Scenario Outline: Skids when reaching wall SW
		Given hoover initial location [0,0]
		When it moves "<direction>"
		Then new location is <coordinates>

		Examples:
			| direction | coordinates |
			| W         | [0,0]       |
			| S         | [0,0]       |

	Scenario Outline: Skids when reaching wall NE
		Given hoover initial location [5,5]
		When it moves "<direction>"
		Then new location is <coordinates>

		Examples:
			| direction | coordinates |
			| E         | [5,5]       |
			| N         | [5,5]       |
