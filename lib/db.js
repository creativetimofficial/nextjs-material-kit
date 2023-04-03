import mysql from "mysql2/promise";

// const dbHost = "localhost";
// const dbUser = "beta2ope_n";
// const dbPass = "QQR5X5JqsnIX";
// const dbName = "beta2ope_db";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "beta2ope_db",
    port: 3306,
    user: "root",
    password: "rock11city",

    //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
