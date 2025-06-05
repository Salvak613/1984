import "dotenv/config";
import mysql from "mysql2/promise";

const { MYSQL_DB_HOST, MYSQL_DB_USER, MYSQL_DB_PASSWORD, MYSQL_DB_NAME } =
  process.env;

const schema = `
  DROP DATABASE IF EXISTS \`dynastie1984\`;
  CREATE DATABASE IF NOT EXISTS \`${MYSQL_DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
  USE \`${MYSQL_DB_NAME}\`;

  CREATE TABLE IF NOT EXISTS citoyens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 0),
    profession VARCHAR(100),
    origine VARCHAR(50),
    affiliation VARCHAR(50),
    passeport BOOLEAN,
    numeroPasseport VARCHAR(20),
    slogan VARCHAR(100),
    image VARCHAR(100),
    notes TEXT,
    valide BOOLEAN
  );
`;

const migrate = async () => {
  try {
    const connection = await mysql.createConnection({
      host: MYSQL_DB_HOST,
      user: MYSQL_DB_USER,
      password: MYSQL_DB_PASSWORD,
      multipleStatements: true,
    });

    await connection.query(schema);
    await connection.end();

    console.log("✅ Database schema created successfully");
  } catch (err) {
    console.error("❌ Error during migration:", err);
  }
};

migrate();
