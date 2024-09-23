// import { config } from "dotenv";
// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';

// config({ path: ".env" }); // or .env.local

// const sql = neon(process.env.DATABASE_URL!);

// export const db = drizzle(sql);

// Postgres below

import { config } from "dotenv";
import { Pool } from 'pg'; // Import pg module
import { drizzle } from 'drizzle-orm/node-postgres'; 

config({ path: ".env" }); // Load .env variables

// Create a new Pool instance to connect to the local database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Use drizzle with the local Postgres connection
export const db = drizzle(pool); // Pass the pool instance

// import { config } from "dotenv";
// import mysql from 'mysql2/promise'; // Import MySQL client
// import { drizzle } from 'drizzle-orm/mysql2'; // Import drizzle ORM for MySQL

// config({ path: ".env" }); // Load environment variables from .env

// // Create a connection pool for MySQL
// const pool = mysql.createPool({
//   uri: process.env.DATABASE_URL, // Use the connection string from .env
// });

// // Use drizzle ORM with MySQL connection
// export const db = drizzle(pool); // Pass the MySQL connection pool to drizzle

