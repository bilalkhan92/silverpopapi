const soapRequest = require('easy-soap-request');
const fs = require('fs');

// Use this module to parse to an from xml
// const xml2js = require('xml2js');

// example data
const url = 'http://api3.ibmmarketingcloud.com/SoapApi';
const headers = {
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'SilverpopApi:Engageservice.Login',
};
const xml = fs.readFileSync('./login.xml', 'utf-8');

// usage of module
(async () => {
  const { response } = await soapRequest(url, headers, xml);
  const { body, statusCode } = response;
  console.log(body);
  console.log(statusCode);
})();