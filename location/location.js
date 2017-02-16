//location library
var config = require("config")

var location = {};

location.getLocation = function getLocation(locationId)
{
    //do actual library type work here
    var l = new Object();
    l.Stage = config.stage;
    l.LocationId = locationId;
    l.Name = "Location 1";
    l.Address = "777 Somewhere, Corona, CA 92881 --- 1.0.2";
    var json = JSON.stringify(l);

    return json;
}

location.getLocationByClientId = function getLocationByClientId(clientId)
{
    var l = new Object();
    l.ClientId = clientId;
    l.Name = "Location 1";
    l.Address = "777 Somewhere, Corona, CA 92881"
    var json = JSON.stringify(l);

    return json;
}

location.getLocationsByGeoCode = function getLocationsByGeoCode(lat, lng)
{
    var locations = new Array();
    var l = new Object();
    l.Name = "Location 1";
    l.Address = "777 Somewhere, Corona, CA 92881"
    l.push(location);
    
    l = new Object();
    l.Name = "Location 2";
    l.Address = "888 Here, Corona, CA 92881";
    l.push(location);

    var json = JSON.stringify(l);

    return json;
}

location.getLocationsByAddress = function getLocationsByAddress(address)
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