const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var cursos = ["1°a", "2°a", "3°a", "4°a", "5°a", "1°b", "2°b", "3°b", "4°b", "5°b", "1°c", "2°c", "3°c", "4°c", "5°c"];
let promedios = [];
let largo = 0;

function leerNotas(){
    if (largo < 15){
rl.question('Introduce la primera nota: ', (nota1) => {
    rl.question('Introduce la segunda nota: ', (nota2) => {
        rl.question('Introduce la tercera nota: ', (nota3) => {
            rl.question('Introduce la cuarta nota: ', (nota4) => {
                rl.question('Introduce la quinta nota: ', (nota5) => {
                    rl.question('Introduce la sexta nota: ', (nota6) => {

        resultado = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6);
        promfinal = resultado/6;
        
        promedios.push(promfinal);
        largo++;
        leerNotas();

                    });
                });
            });
        });
    });
});}else{
    mostrarDatos();
}
}

function mostrarDatos(){
    console.log(cursos);
    console.log("Notas: ", promedios);
}

leerNotas();