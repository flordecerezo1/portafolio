function generarfc()
{
    var nom=document.getElementById("nombre").value;
    var ap=document.getElementById("paterno").value;
    var am=document.getElementById("materno").value;
    var a=document.getElementById("año").value;
    var m=document.getElementById("mes").value;
    var d=document.getElementById("dia").value;
    var resul;

    ap=ap.substring(0, 2);
    am=am.charAt(0);
    nom=nom.charAt(0);
    a=a.substring(2,4);

    resul=ap.concat(am);
    resul=resul.concat(nom);
    resul=resul.toUpperCase();
    resul=resul.concat(a);
    resul=resul.concat(m);
    resul=resul.concat(d);
    document.getElementById("rfc").value=resul;
}