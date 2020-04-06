var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://swapi.co/api";
var util = require("util");

describe('returns luke', function(){
    it('returns luke', function(done){
        request.get({url:baseUrl + '/planets/1/'},
            function(error, response, body){
                var bodyObj = JSON.parse(body);
                expect(bodyObj.name).to.equal("Luke Skywalker");
                expect(bodyObj.hair_color).to.equal("blond");
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});


describe('planet have population', function () {
    it('should gave number', function () {
        request.get({baseUrl + '/planets/1/'}, function () {
            
        } )
    });
})

while (a = 1) {request.get(baseUrl)}