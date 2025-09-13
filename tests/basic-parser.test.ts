import { parseCSV } from "../src/basic-parser";
import * as path from "path";
import { z } from 'zod';

//Part A CSVs
const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const GREEK_CSV_PATH = path.join(__dirname, "../data/ancient-greece.csv");
const WICKED_CSV_PATH = path.join(__dirname, "../data/artist-song.csv");
const EMPTY_FIELD_CSV_PATH = path.join(__dirname, "../data/empty-fields.csv")
const EXTRA_ROW_CSV_PATH = path.join(__dirname, "../data/extra-row.csv")

//Part C CSVs
const STUDENTS_CSV_PATH = path.join(__dirname, "../data/students.csv");


//Part A Tests
test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV incorrectly splits field with commas", async() => {
  const results = await parseCSV(GREEK_CSV_PATH)
  expect(results[0]).toEqual(["Caesar", "Julius", "veni, vidi, vici"]);
});

test("parseCSV incorrectly handling multiple quotes", async() => {
  const results = await parseCSV(WICKED_CSV_PATH)
  expect(results[1]).toEqual(["Cynthia Revo", 'I sang: "Its meeeeeeee, so if you care to find me..."']);
})

test("parseCSV turns empty fields into an empty string", async() => {
  const results = await parseCSV(EMPTY_FIELD_CSV_PATH)
  expect(results[1]).toEqual(["Erika", "", "black"]);
})

test("parseCSV skips extra blank lines", async() => {
  const results = await parseCSV(EXTRA_ROW_CSV_PATH)
  expect(results).toContainEqual([]);
})


//Pact C Tests
test("returns string[][] when no schema is provided", async () => {
  const results = await parseCSV(STUDENTS_CSV_PATH)
  
  expect(Array.isArray(results)).toBe(true);
  expect(results[0]).toEqual(["Annie", "13", "annie@gmail.com"]);
});

test("validates rows with schema (success cases)", async () => {
  const schema = z.tuple([z.string(), z.coerce.number(), z.string().email()]);
  const results = await parseCSV(STUDENTS_CSV_PATH, schema);

  if ("success" in results[0]){
    expect(results[0].success).toBe(true);
    expect(results[0].data).toEqual(["Annie", 13, "annie@gmail.com"])
  }
})

test("validates rows with schema (failure cases)", async () => {
  const schema = z.tuple([z.string(), z.coerce.number(), z.string().email()]);
  const results = await parseCSV(STUDENTS_CSV_PATH, schema);

  if ("success" in results[2]){
    expect(results[2].success).toBe(false);
    expect(results[2].error).toBeDefined();
  }
})