function mostrar(){
    var ima=src="imagen.jpg";
    document.getElementById("imagen").value=ima;
}

function promocion(){
    var fecha=document.getElementById("fecha").value;
    var mes=fecha.substring(5,7);

    if(mes==05){
        document.getElementById("resultado").value="Felicidades Obtuviste un 2x1";
    }else{
        document.getElementById("resultado").value="Lo sentimos, no tienes descuento, suerte para la otra";
    }
    

}