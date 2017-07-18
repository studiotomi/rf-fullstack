'use strict';

/**
 * The following code is a simple ETL process, that takes a
 * path to a csv, runs through the file and inserts it into
 * a database.
 *
 * It works, but is sub-optimal. Your task is to fix/optimize
 * it in whatever fashion you see fit.
 **/

const fs = require('fs');
const parser = require('csv').parse;

const db = require('./fake-db').db;

let program = require('commander');
program
    .version('0.0.1')
    .option('-f, --file <path>', 'relative or absolute path to the file')
    .parse(process.argv);

console.log("Beginning ETL");

fs.createReadStream(program.file).pipe(parser({from:2}, function(err, data) {
    for (let row of data) {
        console.log(".");
        db.query(`INSERT INTO users (first_name, last_name, email) VALUES (${row[0]},${row[2]},${row[2]})`);
    }
    console.log("Finished ETL");
}));