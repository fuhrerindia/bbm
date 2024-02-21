import express, { Request, Response, Express } from "express";
import { ConnectOptions, MongoClient } from "mongodb";
import { config } from "dotenv";
config();

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
