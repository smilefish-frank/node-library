//location library
var config = require("config")

module.exports = function getLocation(locationId)
{
    //do actual library type work here
    var location = new Object();
    location.Stage = config.stage;
    location.LocationId = locationId;
    location.Name = "Location 1";
    location.Address = "777 Somewhere, Corona, CA 92881 --- 1.0.2";
    var json = JSON.stringify(location);

    return json;
}

function getLocationByClientId(clientId)
{
    var location = new Object();
    location.ClientId = clientId;
    location.Name = "Location 1";
    location.Address = "777 Somewhere, Corona, CA 92881"
    var json = JSON.stringify(location);

    return json;
}

function getLocationsByGeoCode(lat, lng)
{
    var locations = new Array();
    var location = new Object();
    location.Name = "Location 1";
    location.Address = "777 Somewhere, Corona, CA 92881"
    locations.push(location);
    
    location = new Object();
    location.Name = "Location 2";
    location.Address = "888 Here, Corona, CA 92881";
    location.push(location);

    var json = JSON.stringify(location);

    return json;
}

function getLocationsByAddress(address)
{
    var locations = new Array();
    var location = new Object();
    location.Name = "Location 1";
    location.Address = "777 Somewhere, Corona, CA 92881"
    locations.push(location);
    
    location = new Object();
    location.Name = "Location 2";
    location.Address = "888 Here, Corona, CA 92881";
    location.push(location);

    var json = JSON.stringify(location);
    
    return json;
}