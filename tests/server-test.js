var test = require("tape");
var request = require("supertest");
var cheerio = require("cheerio");

var server = require("../server");

test("server is returning the repo page", function (t) {
  var expected = "Repository List";
  request(server)
    .get("/")
    .end(function (err, res) {
      var $ = cheerio.load(res.text);
      var actual = $("h1").text();
      t.equal(actual, expected, "found header");
      t.end();
    });
});
