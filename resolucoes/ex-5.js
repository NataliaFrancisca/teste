// 5. Escreva um programa que inverta os caracteres de um string.

function inverterString(string){
    string = string.split("");

    let ponteiroUm = 0
    let ponteiroDois = string.length - 1;

    let acoes = Math.round(string.length / 2);

    while(acoes > 0){
        let ponteiroUmAnterior = string[ponteiroUm];
        let ponteiroDoisAnterior = string[ponteiroDois];

        string[ponteiroUm] = ponteiroDoisAnterior;
        string[ponteiroDois] = ponteiroUmAnterior;

        ponteiroUm+=1;
        ponteiroDois-=1;

        acoes-=1;
    }

    return string.join("");
}

let casa = inverterString("casa");
let pamonha = inverterString("pamonha");

console.log(casa);
console.log(pamonha);

