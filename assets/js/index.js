function somar(n1,n2)
{
    return n1 + n2;
}

function subtrair(n1,n2)
{
    return n1 - n2;
}

function  multiplicar(n1,n2)
{
    return n1 * n2;
}

function  dividir(n1,n2)
{
    if (n2 == 0)
    {
        return "Erro! Não é possível dividir por zero.";
    } 
    else 
    {
        return n1/n2;
    }
}

function calcular()
{
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let op = parseFloat(document.getElementById('operacao').value);

    let resultado = 'Resultado: ';

    switch (op) {
        case 1:
            resultado= resultado + somar(num1,num2);
            break;
        case 2:
            resultado= resultado + subtrair(num1,num2);
            break;
        case 3:
            resultado= resultado + multiplicar(num1,num2);
            break;
        case 4:
            resultado= resultado + dividir(num1,num2);
            break;
        default:
            resultado = resultado |+ "Operação Inválida!";
            break;
    }

    document.getElementById('resultado').innerHTML = resultado;
}