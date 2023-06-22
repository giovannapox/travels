import pg from "pg";

const { Pool } = pg;
const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1206",
  database: "travels"
});

export default db;