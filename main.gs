function myFunction() {

//obfuscated values (username, password, tenantcode and url). 
var USERNAME = 'corp\XXXXXX';
var PASSWORD = 'XXXXXXXXX';
var tenantcode = 'XXXXXXXXXX';
var url = "https://XXXX.awmdm.com/API/mdm/devices/12345";

var url1 = "https://XXXXX.awmdm.com/API/mdm/devices/search?user=XXXXX";
//uuid is the ID of the Organization group
var uuid ="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

var contenttype = 'application/json';
var authy = "Basic " + 'XXXXXXXXXXXXXXXXXXXXXXXXX';
Logger.log(authy);

//Base64 encoding of username and password for HTTP header
var authHeader = "Basic " + Utilities.base64Encode(USERNAME + ':' + PASSWORD);

//var options = authHeader + 'aw-tenant-code='+ tenantcode;
// Include 'options' object in every request 

var headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic "+ 'XXXXXXXXXXXXXXXXXXXXXXXXXX',
        "aw-tenant-code": tenantcode
     
}; 
//var headers = { "Authorization" : authy };
//Adding the query parameters
var options = {"method": "Get",
                 "headers": headers
                };
                 
Logger.log(options);

//Testing the response. 
var response = UrlFetchApp.fetch(url1,options);
//var response = UrlFetchApp.fetch(url, options);
 //var response = UrlFetchAppfetchAll() //var response = UrlFetchApp.fetchAll(headers1)
Logger.log(response); 

var content = response.getContentText();
var json = JSON.parse(content);

//Logger.log(json["PageSize"])
Logger.log(json.Total)
Logger.log(json.Devices[0].SerialNumber)
Logger.log(json.Devices[1].SerialNumber)
Logger.log(json.Devices[2].SerialNumber)
Logger.log(json.Devices[0].TimeZone)
Logger.log(json.Devices[0].UserEmailAddress)
 //var response = UrlFetchApp.fetch(url);
 
//Adding a Loop
for (var counter = 0; counter <(json.Total); counter = counter + 1) {
Logger.log(json.Devices[counter].SerialNumber);

//return json.Devices[counter].SerialNumber

}

}