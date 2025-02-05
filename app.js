// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1. crear un array para almacenar los nombres
let amigos =[];

//2. Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
//Capturar la info
function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value;
    
    //Validar
    if(nombreAmigo.trim()=== ''){
        alert('Por favor, incerte un nombre');
        return;
    }
    //Actulizar el array
    amigos.push(nombreAmigo);
    //Limpiar campo
    document.getElementById('nombreAmigo').value='';
}
document.getElementById('button-add').addEventListener('click',agregarAmigo);