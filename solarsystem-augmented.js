// 1. getter/setter for closest stars to the sun
// 2. getter/setter for age of solar system
// 3. getter/setter for known dwarf planets

var SolarSystem = (function(newSolarSystem) {
    var closestStars = ["Alpha Centauri"];
    var ageOfSolarSystem = 0;
    var dwarfPlanets = ["Pluto"];

    newSolarSystem.getClosestStars = function() {
        return closestStars;
    }

    newSolarSystem.setClosestStars = function(newClosestStar) {
        closestStars.push(newClosestStar);
    }

    newSolarSystem.getAgeOfSolarSystem = function() {
        return ageOfSolarSystem;
    }

    newSolarSystem.setAgeOfSolarSystem = function(newAge) {
        ageOfSolarSystem = newAge;
    }

    newSolarSystem.getDwarfPlanets = function() {
        return dwarfPlanets;
    }

    newSolarSystem.setDwarfPlanets = function(newDwarfPlanet) {
        dwarfPlanets.push(newDwarfPlanet);
    }

    newSolarSystem.greeting = "bite me";

    return newSolarSystem;
})(SolarSystem || {});
