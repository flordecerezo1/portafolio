function suma()
{
    /*parseInt(); parseFloat();*/
    var  num1, num2, resul;
    num1=parseInt(prompt("Escribe un numero", ""));
    num2=prompt("Escribe el segundo numero", "");
    resul=parseInt(num1)+parseInt(num2);
    alert("La suma es " +resul);
}

function resta()
{
    var num1, num2, resul;
    num1=parseInt(prompt("Escribe un numero", ""));
    num2=prompt("Escribe el segundo numero", "");
    resul=num1-num2;
    alert("La resta es " +resul);
}

function multiplica()
{
    var num1, num2, resul;
    num1=parseInt(prompt("Escribe un numero", ""));
    num2=prompt("Escribe el segundo numero", "");
    resul=num1*num2;
    alert("La multiplicación es " +resul);
}

function divide()
{
    var num1, num2, resul;
    num1=parseInt(prompt("Escribe un numero", ""));
    num2=prompt("Escribe el segundo numero", "");
    resul=num1/num2;
    alert("EL resultado de la división es " +resul);
}
function signo()
{
    var num1;
    num1=parseInt(prompt("Escribe un numero", ""));
    if(num1>=0)
        alert("El numero " +num1+" es positivo");
    else
    alert("El numero " +num1+" es negativo");
}