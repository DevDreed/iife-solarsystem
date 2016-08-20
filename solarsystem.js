// 1. public property for holding last modified date
// 2. getter/setter for planets
// 3. getter/setter for activeSpacecraft
// 4. getter/setter for planetsLandedOn
var SolarSystem = (function () {
var planets = ["mercury"];
var activeSpacecraft = ["Voyager I"];
var planetsLandedOn = 0;

return {
  modified_date: new Date(),
  getPlanets: function () {
    return planets;
  },
  setPlanets: function (newPlanet) {
    planets.push(newPlanet);
  },
  getActiveSpacecraft: function () {
    return activeSpacecraft;
  },
  setActiveSpacecraft: function (newActiveSpacecraft) {
    activeSpacecraft.push(newActiveSpacecraft);
  },
  getPlanetsLandedOn: function () {
    return planetsLandedOn;
  },
  setPlanetsLandedOn: function (newPlanetsLandedOn) {
    planetsLandedOn = newPlanetsLandedOn;
  }
}
})();
