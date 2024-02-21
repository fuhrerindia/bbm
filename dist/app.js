"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const URL = process.env.DB_HOST;
// console.log(process.env)
// const URL: string = process.env.DB_HOST || "/";
// const client: MongoClient = new MongoClient(URL);
// const DATABASE: string = "test";
// async function getData() {
//   let result = await client.connect();
//   const DB = result.db(DATABASE);
//   let collection = DB.collection("sample");
//   let respons = await collection.find({}).toArray();
//   console.log(respons);
// }
// getData();
// console.log(URL);
