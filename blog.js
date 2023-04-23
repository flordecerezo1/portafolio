function iniciar(){
    var boton=document.getElementById('guardar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    }
    function nuevoitem(){
    var clave=document.getElementById('anime').value;
    var valor=document.getElementById('opinion').value;
    localStorage.setItem(clave,valor);
    mostrar();
    document.getElementById('anime').value='';
    document.getElementById('oponion').value='';
    }
    function mostrar(){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='';
    for(var f=0;f<localStorage.length;f++){
    var clave=localStorage.key(f);
    var valor=localStorage.getItem(clave);
    cajadatos.innerHTML+='<div>'+clave+' - '+valor+'</div>';
    }
    }
    window.addEventListener('load', iniciar, false);
    function elimina()
    {
    
        if(confirm('Estas Seguro?')){
            localStorage.clear();
            mostrar();
            }
    }