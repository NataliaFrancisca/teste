# 1. 
# int INDICE = 13, SOMA = 0, K = 0;
# Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
# Imprimir(SOMA);

def resolucao():
    indice = 13
    soma = 0 
    k = 0 

    while(k < indice):
        k = k + 1
        soma = soma + k
     
    print(soma) # 91

resolucao()