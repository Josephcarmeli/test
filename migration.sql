  CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
  );
  
  CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    content TEXT
  );