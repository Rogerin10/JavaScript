const http = require("http");
const readlineSync = require("readline-sync");
const url = require("url");
const readline = require('readline');

let usuario = []
let largo = 0

function Menu(){
    console.log("1. Ver usuarios")
    console.log("2. Ingresar usuarios")
    console.log("3. Salir")
}

function Usuario(){
    const Nombre = readlineSync.question('Nombre: ');
    const RUT = readlineSync.question('RUT: ');
    const Fecha_Nac = readlineSync.question('Fecha de Nacimiento: ');
    const Correo = readlineSync.question('Correo: ');
    const Fono = readlineSync.question('Numero de Telefono: ');

    const salir = readlineSync.question("Desea seguir ingresando datos? s/n: ")
    if(salir === "n"){
        usuario.push(Nombre, RUT, Fecha_Nac, Correo, Fono);
        largo++;
        Operaciones();
        
    } else if (salir == "s"){
        Usuario();
    }

}

function verUsuario(){
    console.log(usuario);

}

function Operaciones(){
    Menu()
    const opc = readlineSync.question("Ingrese el numero de la operacion que desee realizar: ")
    switch (opc) {
        case "1":
            verUsuario();
            break;
        case "2":
            Usuario();
            break;
        case "3":
            console.log('Finalizando....');
            break;
        default:
            console.log('La opcion ingresada no es valida, ingrese un nuevo valor...');
            Menu();
            break;
    }
}

Operaciones()

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const texto = queryObject.texto || 'invitado';

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-User-Name', texto);
    res.writeHead(200);
    res.end("Nombre : "+usuario[0]+" RUT: "+usuario[1]+" Fecha de Nacimiento: "+usuario[2]+" Correo: "+usuario[3]+" Numero de telefono :"+usuario[4]);
});

const PORT = 3000;
        server.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
});