const {crearArchivo} = require("/home/pablo/Escritorio/Node/03-Bases-Node/helpers/multiplicar.js");
const argv = require("./conf/yargs");


console.clear();
//const num = 8;

crearArchivo(argv.b,argv.l,argv.h)
  .then(
    (nombreArchivo = () =>
      console.log(`Archivo tabla-${argv.b} creado correctamente`.rainbow))
  )
  .catch((err) => console.log(err));
