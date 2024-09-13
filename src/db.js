//conexcion a la bse de datos
// Conexión a la base de datos
import mysql from 'mysql2/promise';
import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
} from './config.js';

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
