// setupDatabase.js

import { config } from 'dotenv';
import { sql } from "@vercel/postgres";

// Load environment variables from .env file
config();

async function setupDatabase() {
  // Create Users table
  await sql`
    CREATE TABLE IF NOT EXISTS Users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;

  // Drop the existing reset_user_ids function if it exists
  await sql`
    DROP FUNCTION IF EXISTS reset_user_ids();
  `;

  // Create reset_user_ids function
  await sql`
    CREATE OR REPLACE FUNCTION reset_user_ids() RETURNS TRIGGER AS $$
    DECLARE
        rec RECORD;
        new_id INT := 1;
    BEGIN
        FOR rec IN SELECT id FROM Users ORDER BY id LOOP
            UPDATE Users SET id = new_id WHERE id = rec.id;
            new_id := new_id + 1;
        END LOOP;

        -- Reset the sequence to the current max id
        PERFORM setval('users_id_seq', new_id - 1);

        RETURN NULL; -- Required for trigger functions
    END;
    $$ LANGUAGE plpgsql;
  `;

  // Create trigger to call reset_user_ids function before delete
  await sql`
    CREATE TRIGGER reset_ids_before_delete
    BEFORE DELETE ON Users
    FOR EACH ROW
    EXECUTE FUNCTION reset_user_ids();
  `;

  console.log("Database setup complete.");
}

setupDatabase().catch(err => console.error("Error setting up database:", err));
