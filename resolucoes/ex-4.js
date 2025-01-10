// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const dados = {
    estados: [
        {
            "estado": "SP",
            "valor": "67.836,43"
        },

        {
            "estado": "RJ",
            "valor": "36.678,66"
        },

        {
            "estado": "MG",
            "valor": "36.678,66"
        },


        {
            "estado": "ES",
            "valor": "27.165,48"
        },
        
        {
            "estado": "Outros",
            "valor": "19.849,53"
        },

    ]
}


class Percentual{

    totalMensal(){
        let total = 0;

        for(let i = 0; i < dados.estados.length; i++){
            const valorComoDouble = parseFloat(dados.estados[i].valor);
            total += valorComoDouble;
        }

        return total.toFixed(1);
    }

    percentualMes(){
        for(let i = 0; i < dados.estados.length; i++){
            const valorComoDouble = parseFloat(dados.estados[i].valor);
            const percentual = (valorComoDouble / this.totalMensal()) * 100;
            dados.estados[i]["percentual"] = parseFloat(percentual.toFixed(2));
        }
    }

    exibirPercentual(){
        for(let i = 0; i < dados.estados.length; i++){
           console.log(dados.estados[i])
        }
    }
}

const percentual = new Percentual();
percentual.percentualMes();
percentual.exibirPercentual();