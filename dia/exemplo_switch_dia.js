const prompt = require('prompt-sync')()

dia = parseInt(prompt("\nDigite um número e eu te direi o dia da semana: "));

switch (dia) {
    case 1:
        console.log("\nDomingo\n");
        break;

    case 2:
        console.log("\nSegunda-feira\n");
        break;

    case 3:
        console.log("\nTerça-feira\n");
        break;

    case 4:
        console.log("\nQuarta-feira\n");
        break;

    case 5:
        console.log("\nQuinta-feira\n");
        break;

    case 6:
        console.log("\nSexta-feira\n");
        break;

    case 7:
        console.log("\nSábado\n");
        break;

    default:
        console.log("\nNúmero inválido\n");
}