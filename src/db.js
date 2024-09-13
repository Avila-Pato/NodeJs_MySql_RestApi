//conexcion a la bse de datos
// Conexión a la base de datos
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: '3306',
  database: 'companydb',
});
