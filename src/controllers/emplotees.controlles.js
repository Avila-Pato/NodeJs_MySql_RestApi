import { pool } from '../db.js';


//Obteneindo todos los employees
export const getEmployess = async (req, res) => {
    const [row] = await  pool.query('SELECT * FROM employee')
    res.json(row)
  };

  //Obteindo el employee por parametro id
  export const getEmploye = async (req, res) => {
    const [row] = await  pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    if (row.length <= 0) return res.status(404).json({
      message: "Employee not found"
    }
)
    res.json(row[0])
  };

  // creando employee
  export const createemployess = async (req, res) => {
    const {name, salary} = req.body;
   const [rows] = await  pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
   // se coloca entre llaves porque se recibira como json
    res.send({
        id: rows.insertId,
        name,
        salary,
    })
  };

  export const deleteemployess = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
      message: "Employee not found"
    })
    res.sendStatus(204)
  };

// actualizando employee que tengo en base de datos(Reemplaza datos)
  export const updateemployess = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body
    // IFNULL deja con el valor que estaba si el; valor esta vacio
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name),\
         salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
         if(result.affectedRows === 0) return res.status(404).json({
          message: "Employee not found"
        })
        const[rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0])
  };
