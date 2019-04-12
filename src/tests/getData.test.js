const test = require("tape");
const runDbBuild = require("../db_build_test.js"); // <- change this please (henry)
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");

test("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
  });