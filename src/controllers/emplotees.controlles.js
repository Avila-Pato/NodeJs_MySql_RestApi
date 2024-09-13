// import { pool } from '../db.js';

// Obteniendo todos los empleados
export const getEmployess = async (req, res) => {
    try {
      const [row] = await pool.query('SELECT * FROM employee');
      res.json(row);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving employees", error });
    }
  };
  
  // Obteniendo el empleado por parámetro id
  export const getEmploye = async (req, res) => {
    try {
      const [row] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);
      if (row.length <= 0) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.json(row[0]);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving employee", error });
    }
  };
  
  // Creando empleado
  export const createemployess = async (req, res) => {
    try {
      const { name, salary } = req.body;
      const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]);
      res.send({
        id: rows.insertId,
        name,
        salary,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating employee", error });
    }
  };
  
  // Eliminando empleado
  export const deleteemployess = async (req, res) => {
    try {
      const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
      if (result.affectedRows <= 0) {
        return res.status(404).json({ message: "Employee not found" });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ message: "Error deleting employee", error });
    }
  };
  
  // Actualizando empleado
  export const updateemployess = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, salary } = req.body;
      const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Employee not found" });
      }
      const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Error updating employee", error });
    }
  };
  