var value=100; //Tambien puede ser declarado como window.value=100; y es global

function msg(){
    alert("Hello World");
    document.write("GG");
    window.value2=200; //Tambien se puede definir como global dentro de una funcion
}
function a(){
    alert(value2);//Accedo variable global de la funcion msg
}

