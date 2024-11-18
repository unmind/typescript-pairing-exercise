import Database from "better-sqlite3";

const db = new Database(":memory:");

// Defining the table
db.exec(`
  -- Create tables
`);

export default db;
