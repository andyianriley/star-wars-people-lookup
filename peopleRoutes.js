module.exports = function(app) {
    var peopleList = require('./peopleController');
  
    // peopleList Routes
    app.route('/people')
      .get(peopleList.list_all_people);
  
  
    app.route('/people/:name')
      .get(peopleList.read_a_person);
  };