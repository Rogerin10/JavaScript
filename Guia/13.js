const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const empleados = new Array(4);
const sueldos = new Array(4);

let nombreMayor; 
let mayorSueldo; 
let sumaSueldos = 0; 

let i = 0;

console.log("Lectura de nombres y sueldos de empleados: ");
rl.question(`Empleado ${i + 1}: `, (nombre) => {
    empleados[i] = nombre;
    rl.question("Sueldo: ", (sueldo) => {
        sueldos[i] = parseFloat(sueldo);
        
        mayorSueldo = sueldos[i];
        nombreMayor = empleados[i];
        sumaSueldos += sueldos[i];

        const readNextEmployee = (index) => {
            if (index < empleados.length) {
                rl.question(`Empleado ${index + 1}: `, (nombre) => {
                    empleados[index] = nombre;
                    rl.question("Sueldo: ", (sueldo) => {
                        sueldos[index] = parseFloat(sueldo);
                        if (sueldos[index] > mayorSueldo) {
                            mayorSueldo = sueldos[index];
                            nombreMayor = empleados[index];
                        }
                        sumaSueldos += sueldos[index];
                        readNextEmployee(index + 1);
                    });
                });
            } else {
                const promedioSueldos = sumaSueldos / empleados.length;

                console.log("Empleado con mayor sueldo: " + nombreMayor);
                console.log("Sueldo: " + mayorSueldo);
                console.log("El promedio de los sueldos es: " + promedioSueldos);
                rl.close();
            }
        };

        readNextEmployee(1);
    });
});

