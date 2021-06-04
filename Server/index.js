const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'storesystem',
});

app.post('/create', (req,res) => {
    const nombre = req.body.nombre
    const precio = req.body.precio
    const riotpoints = req.body.riotpoints

    db.query('INSERT INTO productos (nombre,precio,riotpoints) VALUES (?,?,?)',
     [nombre,precio,riotpoints], 
     (err,result) =>{
         if (err) {
             console.log(err)
         } else {
             res.send('Valores insertados')
         }

     }
     )
})

app.get("/productos", (req, res) => {
    db.query("SELECT * FROM productos", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.delete("/borrar/:id", (req,res) =>{
  const id = req.params.id
  db.query("DELETE FROM productos WHERE id = ? ", id, (err,result) => {
    if (err){
      console.log(err)
    } else{
      res.send(result)
    }
  })
})

app.put("/update", (req,res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const riotpoints = req.body.riotpoints;
  db.query('UPDATE productos SET nombre = ? , precio = ? , riotpoints = ? WHERE id = ?',
  [nombre,precio,riotpoints,id], (err,result) => {
      if (err){
          console.log(err);
      } else {
          res.send(result);
      }
  });
});

app.listen(3001, () => {

});