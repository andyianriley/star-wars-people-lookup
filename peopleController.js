const People = [{ 'vehicle_vrm': 'XW1NG', 'name':'Luke Skywalker', 'force' : 'jedi'},
{ 'vehicle_vrm': 'DR34D0', 'name':'Darth Vader', 'force' : 'sith'}]

exports.list_all_people = function(req, res) {
    res.json(People)
};

exports.read_a_person = function(req, res) {
    res.json(People.find(person => person.name == req.params.name))
};
