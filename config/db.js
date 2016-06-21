'use strict';

//  config/db.js  -  Database configuration

// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const dataPath = path.join(__dirname, '../data/data.db');

// const db = new sqlite3.Database(dataPath);

// module.exports = db;

const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'testdb'
});

db.connect();


// db.query('create database if not exists ')



module.exports = db;
