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

}