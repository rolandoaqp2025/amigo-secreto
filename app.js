// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombre de los amigos
let amigos =[];

//Funcion para agregar amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    //Ver que no este vacio
    if (nombreAmigo === "" ) {
        alert("Por favor, inserte un nombre");
        return;
    }

    //Ver que no este duplicado el nombre
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya esta en la lista`);
        return;
    }

    //Agregar nombre a la lista de amigos
    amigos.push(nombreAmigo);

    //Limpiar entrada
    inputAmigo.value = "";

    //Actualizar lista
    actualizarLista();
}

//Funcion actualizar lista de amigos

function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar contenido de la lista
    listaAmigos.innerHTML="";

    //Buscar array
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent=amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion Sorteo aleatorio

function sortearAmigo(){
    //Ver que no este vacio
    if (amigos.length=== 0){
        alert("La lista esta vacia 1");
        return;
    }

    //Generar aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Ver nombre aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar en HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

