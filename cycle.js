/**
 *
 * @namespace faker.cycle
 */
var cycle = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * cycle
   *
   * @method faker.cycle.cycle
   */
  self.cycle = function () {
    return fake('{{cycle.manufacturer}} {{cycle.model}}');
  };

  self.cycle.schema = {
    "description": "Generates a random cycle.",
    "sampleResults": ["Atlas Power", "Hero Unique", "BSA Warriors"]
  };

  /**
   * manufacturer
   *
   * @method faker.cycle.manufacturer
   */
  self.manufacturer = function () {
    return faker.random.arrayElement(faker.definitions.cycle.manufacturer);
  };

  self.manufacturer.schema = {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Ranger", "Regular", "Mountain Cycle"]
  };


  /**
   * model
   *
   * @method faker.cycle.model
   */
  self.model = function () {
    return faker.random.arrayElement(faker.definitions.cycle.model);
  };

  self.model.schema = {
    "description": "Generates a cycle model.",
    "sampleResults": ["power", "unique", "warrior"]
  };

  /**
   * type
   *
   * @method faker.cycle.type
   */
  self.type = function () {
    return faker.random.arrayElement(faker.definitions.cycle.type);
  };

  self.type.schema = {
    "description": "Generates a cycle type.",
    "sampleResults": ["Small ", "Convertable", "Regular Big", "Ranger Tall"]
  };

  /**
   * fuel
   *
//    * @method faker.cycle.fuel
//    */
//   self.fuel = function () {
//     return faker.random.arrayElement(faker.definitions.cycle.fuel);
//   };

//   self.fuel.schema = {
//     "description": "Generates a fuel type.",
//     "sampleResults": ["Electric", "Gasoline", "Diesel"]
//   };

  /**
   * vin
   *
   * @method faker.cycle.vin
   */
  self.vin = function () {
    return (
      faker.random.alphaNumeric(10) +
      faker.random.alpha({ count: 1, upcase: true }) +
      faker.random.alphaNumeric(1) +
      faker.random.number({ min: 10000, max: 100000}) // return five digit #
    ).toUpperCase();
  };

  self.vin.schema = {
    "description": "Generates a valid VIN number.",
    "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
  };

  /**
   * color
   *
   * @method faker.cycle.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "golden", "black"]
  };
};

module["exports"] = cycle;
