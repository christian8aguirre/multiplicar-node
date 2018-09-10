const argv = require('./config/yargs').argv
const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');

let comando = argv._[0];
console.log(argv);
switch (comando) {
  case 'listar':
    console.log('listar')
    listarTabla(argv.base, argv.limite)
      .then(data => console.log(data))
    break;

  case 'crear':
    console.log('crear')
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${ archivo }`));

    break;

  default:
    console.log('Comando no reconocido')
    break;
}

// let base = 5;
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
