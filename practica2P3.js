function suma(){
    var num1, num2, resul;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resul=parseInt(num1)+parseInt(num2);
    document.getElementById("resul").innerHTML=resul;
}

function resta(){
    var num1, num2, resul;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resul=parseInt(num1)-parseInt(num2);
    document.getElementById("resul").innerHTML=resul;
}

function multiplica(){
    var num1, num2, resul;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resul=parseInt(num1)*parseInt(num2);
    document.getElementById("resul").innerHTML=resul;
}

function divide(){
    var num1, num2, resul;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    resul=parseInt(num1)/parseInt(num2);
    document.getElementById("resul").innerHTML=resul;
}