const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (num, lis, size) => {
  try {
    let salida = "";

    for (let index = 1; index <= size; index++) {
      salida +=  `${colors.white(num)} ${'x'.blue} ${colors.white(index)} ${'='.green} ${colors.white(num * index)}\n`;
    }

    if (lis) {
      console.log("==============".green);
      console.log('Tabla del'.green,colors.blue(num));
      console.log("==============".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
    return console.log(`Tabla del ${num} creada correctamente`.rainbow);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
