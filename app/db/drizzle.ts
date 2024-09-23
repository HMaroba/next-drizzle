// import { config } from "dotenv";
// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-http';

// config({ path: ".env" }); // or .env.local

// const sql = neon(process.env.DATABASE_URL!);

// export const db = drizzle(sql);

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
