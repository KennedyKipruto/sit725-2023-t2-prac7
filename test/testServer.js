const { expect, assert } = require("chai");
const request = require("request");

let url = "http://localhost:3000/api/cat";
let cat = {
    title: "A Test Cat",
    subTitle: "Testing Cat",
    path: "images/burmese.png",
    description: "Burmese Testing Cat"

}

describe("Testing API", function () {
    describe('test GET cat', function () {
        it('returns statuscode of 200', function (done) {
            request('http://localhost:3000/api/cats', function (error, response, bodyString) {
                let bodyObj = JSON.parse(bodyString);
                expect(bodyObj.message).to.equal('success');
                done();
            });
        });
    });

    describe('test POST cat', function () {
        it('adds cat to database', function (done) {
            request.post(url, { form: cat }, function (error, b, c) {
                let bodyObj = JSON.parse(c);
                expect(bodyObj.message).to.equal('success');
                done();
            });
        });
    });


    describe('test DELETE cat', function () {
        it('deletes cat from database', function (done) {
            request.delete(url, { form: cat }, function (error, b, c) {
                let bodyObj = JSON.parse(c);
                assert.equal("success", bodyObj.message)
                done();
            });
        });
    });
})