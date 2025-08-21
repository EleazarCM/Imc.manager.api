const express = require("express"); 
const cors = require("cors")
const puerto = 3001;   // IMPORTACIONES express es el servidor
const server = express();
server.use(express.json());
server.use (cors());


server.post("/imc", (req, res) => {
  const { altura, peso } = req.body; //constantes para parametros
  const imc = peso / altura ** 2;

  let mensaje = "";

  if (imc <= 18.5) {
    mensaje = "Se encuenta en el rango bajo";
  }
  if (imc >= 25) {
    mensaje = "Se en cuantra en el rango de sobrepeso";
  }
  if (imc >= 30) {
    mensaje = "Se en cuantra en el rango de obesidad";
  } else {
    mensaje = "Se encuentra en el rango normal";
  }

  res.json({
    altura: altura,
    peso: peso,
    imc: imc,
    mensaje: mensaje,
  });
});

server.listen(puerto, () => {
  console.log("escuchando el puerto " + puerto);
});
