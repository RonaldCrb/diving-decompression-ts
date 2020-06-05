"use strict";
exports.__esModule = true;
exports.createFile = void 0;
var fs = require("fs");
var usnavy_deco_rev7_1 = require("../tables/usnavy-deco-rev7");
var usnavy_nodeco_rev7_1 = require("../tables/usnavy-nodeco-rev7");
exports.createFile = function (filename, table) {
    fs.writeFile(filename, JSON.stringify(table), function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("File created!");
    });
};
exports.createFile('src/serializer/usnavy-air-deco-rev7.json', usnavy_deco_rev7_1["default"]);
exports.createFile('src/serializer/usnavy-air-nodeco-rev7.json', usnavy_nodeco_rev7_1["default"]);
//createFile('usnavy-air-repetgroup-rev7.json', privateusNavyRepetGroupLetter)
//createFile('usnavy-air-rnt-rev7.json', usNavyResidualNitrogenTime)
