# Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

# 0 + 1 = 1
# 1 + 1 = 2
# 2 + 1 = 3

def fibonnaci(n, numeroParaEncontrar):
    if(n <= 0):
        return []
    elif(n == 1):
        return [0]
    elif(n == 2):
        return [0,1]
   
    sequencia = [0,1]
    for i in range(2, n):
        valor = sequencia[-1] + sequencia[-2]
        sequencia.append(valor)

        if(valor == numeroParaEncontrar):
            print("O número ", valor, "existe na lista.")
    
    print(sequencia)
    

fibonnaci(20, 14)