const readline = require('readline-sync');

function main() {
    let mes, año, numDias = 0, estacion = "";
    mes = leerEntero("Introduce el mes (1-12): ");
    año = leerEntero("Introduce el año: ");

    if (mes < 1 || mes > 12) {
        console.log("\nEl mes " + mes + " es incorrecto.");
        return;
    }

    switch (mes) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            numDias = 31;
            break;
        case 4: case 6: case 9: case 11:
            numDias = 30;
            break;
        case 2:
            if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
                numDias = 29;
            } else {
                numDias = 28;
            }
            break;
    }

    // Determinar la estación del año
    estacion = obtenerEstacion(mes);

    console.log("\nEl mes " + mes + " del año " + año + " tiene " + numDias + " días.");
    console.log("La estación del año es: " + estacion + ".");
}

function leerEntero(s) {
    return readline.questionInt(s);
}

function obtenerEstacion(mes) {
    switch (mes) {
        case 12: case 1: case 2:
            return "Verano";      // Diciembre, Enero, Febrero (Verano)
        case 3: case 4: case 5:
            return "Otoño";       // Marzo, Abril, Mayo (Otoño)
        case 6: case 7: case 8:
            return "Invierno";    // Junio, Julio, Agosto (Invierno)
        case 9: case 10: case 11:
            return "Primavera";   // Septiembre, Octubre, Noviembre (Primavera)
        default:
            return "Desconocida"; // En caso de error 
    }
}

main();
