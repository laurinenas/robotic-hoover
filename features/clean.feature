
Feature: Robotic hoover cleaning

	This feature uses [5,5] room and [[1, 1], [2, 2], [3, 3], [1, 2], [1, 4], [0, 2]] dirty array for simplicity

	Scenario: Cleans a dirty patch
		Given hoover initial location [1,0]
		When it moves "North"
		Then new location is [1,1]
		And dirty patch removed

	Scenario: Cleans multiple dirty patches
		Given hoover initial location [0,1]
		When it moves "East"
		Then new location is [1,1]
		And dirty patch removed
		When it moves "East"
		When it moves "North"
		Then new location is [2,2]
		And total cleaned 2 spots

	Scenario: Does not clean same patch twice
		Given hoover initial location [1,0]
		When it moves "North"
		Then new location is [1,1]
		And dirty patch removed
		When it moves "South"
		When it moves "North"
		Then new location is [1,1]
		And total cleaned 1 spots

	Scenario: Cleans a dirty patch in starting position
		Given hoover initial location [1,2]
		And dirty patch removed
