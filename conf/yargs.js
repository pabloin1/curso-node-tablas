const { describe } = require('yargs');

const argv = require('yargs')
.option('b',{
  alias:'base',
  type:'number',
  demandOption:true,
  describe: 'Es la base del la tabla'
})
.option('l',{
  alias:'listar',
  type:'boolean',
  default:false,
  describe:'Lista la tabla'
})
.option("h",{
  alias:'limit',
  type:'number',
  default:10,
  describe:'Permite limitar o extender la tabla'
})
.check((argv,options)=>{
    if (isNaN((argv.b))) {
      throw 'La base tiene que ser un numero'
    } 
    return true;
})                     
.argv;


module.exports= argv;