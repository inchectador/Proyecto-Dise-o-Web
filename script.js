'use strict'



// boton Scroll


let botonScroll = document.getElementById('scrollTop');

function agregarEventos() {
    botonScroll.addEventListener('click', subirArriba);

}

function subirArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// Hasta aquí podemos decir que hemos seleccionado el elemento con el id 'scrollTop' y dentro de la función agregarEventos le hemos
// dicho que cada vez que reciba un click, se active la función subirArriba, que por su lado lo que hace es subirnos arriba del body

function funcionScroll() {
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        botonScroll.style.display = 'block';
    }else {
        botonScroll.style.display = 'none';
    }
}

// Aquí lo que hacemos es que cada vez que bajemos dentro del document más de 20 píxeles nos hará display block el botón, si no es así
// permanecerá oculto

function todo() {
    agregarEventos();
    funcionScroll();
};

// Aquí llamamos a las dos funciones dentro de una misma


window.onscroll = funcionScroll;



// window.onload = todo;







// menu off canvas

function anadirEvento() {
    let boton = document.getElementById('b1')
    boton.addEventListener('click', toggleMenu);
}

// se me ha complicado un poco el menú off canvas, por lo que he tenido que hacer un camino más extraño para alcanzar el mismo resultado

function toggleMenu() {
    let lista = document.getElementById('lista');
    let estilo = window.getComputedStyle(lista);

    // .getComputedStyle representa el valor final de los elementos CSS, por lo que esta propiedad nos permitirá comparar con valores
    // css

    let displayActual = estilo.getPropertyValue('display')

    // en la variable displayActual, guardamos el valor display como una propiedad de css para después poder compararla con none o flex

    lista.style.display = (displayActual === 'none') ? 'block' : 'none';

    // aquí usamos el operador ternario, es una forma abreviada de escribir if else, el signo de interrogación nos indica qué se
    // hace en caso de que la condición sea cierta, y los dos puntos en caso de que no (sería el equivalente al else)
}


// window.onload = anadirEvento();




// carrusel

let diapositivaIndex = 1;

muestraDiapositiva(diapositivaIndex);

function muestraDiapositiva(numero) {
    let diapositivas = document.getElementsByClassName('slideshowContainer__diapositiva')
    let puntos = document.getElementsByClassName('puntos__punto');
    if(numero > diapositivas.length){
        diapositivaIndex = 1;
    }

    // aquí estamos tomando el valor cuantitativo de todas las diapositivas, y estamos diciendo que si se supera este la diapositiva que
    // se muestre será otra vez la primera

    if(numero < 1){
        diapositivaIndex = diapositivas.length;
    }

    // aquí hacemos lo contrario; si el valor de numero es inferior a 1, empieza por el final de las diapositivas

    for(let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }

    // aquí le aplicamos display none a todas

    for(let i = 0; i < puntos.length; i++) {
        puntos[i].classList.remove('activo');
    }

    // y les quitamos la clase activo


    diapositivas[diapositivaIndex-1].style.display = "block";
    puntos[diapositivaIndex-1].classList.add('activo');

    // para mostrar en un principio solo la primera de estas diapositivas, que sería diapositivas[0], y le añadimos la clase activo
}



function agregarEventos() {
    let siguiente = document.getElementById('botonSiguiente');
    let previo = document.getElementById('botonAtras');
    siguiente.addEventListener('click', siguienteDiapositiva);
    previo.addEventListener('click', anteriorDiapositiva);
    let puntos = document.getElementsByClassName('puntos__punto');
    for(let i = 0; i < puntos.length; i++) {
        puntos[i].addEventListener('click', saltaDiapositiva);
    }
}

// aquí hacemos que todas las funciones de unan. Por un lado seleccionamos los botones del carrusel para añadirles el evento click y
// las funciones "siguienteDiapositiva" y "anteriorDiapositiva" respectivamente, y después seleccionamos los "puntos" con el mismo fin,
// cuando se pulsen que se mueva hacia la diapositiva deseada con la función "saltaDiapositiva"

function saltaDiapositiva(e) {
    let numero = parseInt(e.target.innerText);
    diapositivaIndex = numero;
    muestraDiapositiva(diapositivaIndex);
}

// esta función que nos permite pasar a integer el número que seleccionemos, lo introducimos como valor dentro de la función muestraDiapositiva
// una vez allí, la función dinamiza el carrusel

function siguienteDiapositiva() {
    diapositivaIndex += 1;
    muestraDiapositiva(diapositivaIndex);
}

// esta función hace que el valor de diapositivaIndex se vea añadido en 1, y consecuentemente dinamizará la función muestraDiapositiva

function anteriorDiapositiva() {
    diapositivaIndex -= 1;
    muestraDiapositiva(diapositivaIndex);
}

// esta función es igual que siguienteDiapositiva, excepto porque le quita 1 al vamor de diapositivaIndex







//  menú modal



const modal = document.querySelectorAll('.tarot__contenidoModal');
const btnsCierraModal = document.querySelectorAll('.tarot__cardBoton');
const btnsAbreModal = document.querySelectorAll('.tarot__boton');


const AbrirModal = function(e) {
    const modal = e.target.nextElementSibling;
    modal.classList.remove('hidden')
}

// en esta función quitamos al elemento seleccionado como modal la clase hidden para que se abra
// e.target.nextElementSibling nos permite acceder al hermano desencadenado por el evento, y es a ese hermano a quien le quitamos la clase
// hidden

const cierraModal = function(e) {
    const modal = e.target.closest('.tarot__contenidoModal');
    modal.classList.add('hidden');
}
// en esta función hacemos el proceso inverso, de manera que el método closest busca el ancestro más cercano a e con la clase
// ".tarot__contenidoModal" y le añade la clase hidden


for(let i = 0; i < btnsAbreModal.length; i++){
    btnsAbreModal[i].addEventListener('click', AbrirModal)
}

for(let i = 0; i < btnsCierraModal.length; i++){
    btnsCierraModal[i].addEventListener('click', cierraModal)
}

// aquí se les aplica a los botones ambas funciones




// menu acordeon




function handleEvents () {
    let botonAcordeon = document.getElementsByClassName('acordeon')
  
    for(let i = 0; i < botonAcordeon.length; i++){
        botonAcordeon[i].addEventListener('click', abreModal)
    }

}

// aquí se le añade a los elementos con la clase acordeon la función abreModal


function abreModal(e) {
let boton = e.target;
boton.classList.toggle('activo');

let panel = boton.nextElementSibling;

if(panel.style.maxHeight) {
    panel.style.maxHeight = null;
} else{
    panel.style.maxHeight = '20rem';
}

}

// por un lado se dice declara la variable boton que está determinada por el target, y se le aplica la clase activo en función de si
// la tiene o no (toggle).
// por otro lado, se declara panel, que es el el hermano generado del target, y se le aplica un maxheight en caso de no tenerlo, si
// lo tuviese se le quita



window.onload = handleEvents(), agregarEventos(), todo(), anadirEvento();


// aquí acciono todas las funciones que necesitan window.onload











// Actividades


let tiempo = new Date();
let actividades = tiempo.getDay();

// aquí genero un objeto de tipo Date para determinar los días de la semana con .getDay()

let lunes = document.getElementById("case0");
let martes = document.getElementById("case1");
let miercoles = document.getElementById("case2");
let jueves = document.getElementById("case3");
let viernes = document.getElementById("case4");
let sabado = document.getElementById("case5");
let domingo = document.getElementById("case6");

// selecciono cada actividad de la semana por su id

let indiceDia = (actividades + 6) % 7

// esta fórmula nos permite calcular el índice del día actual, que está dentro de un rango de 0 a 6

let dias = [domingo, lunes, martes, miercoles, jueves, viernes, sabado];

for(let i = 0; i < dias.length; i++){
    if(i === indiceDia){
        dias[i].style.display = "flex";
    }else{
        dias[i].style.display = "none";
    }
}

// este loop último nos hará display flex para aquella actividad que coincidad con el índice del día indicado










// lista de la compra

const input = document.querySelector('.peticiones__input');
const button = document.querySelector('.peticiones__button');
const ul = document.querySelector('.peticiones__ul');
const divVacio = document.querySelector('.peticiones__vacio');

button.addEventListener("click", (e) =>{
    e.preventDefault();

    // aquí hacemos que el formulario no se llegue a enviar

    const text = input.value;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    // Aquí hacemos que el p creado sea igual al input.value, es decir, cuando creamos un elemento de lista hacemos que ese elemento
    // sea igual al valor introducido por el input

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    // aquí introducimos el li en el ul y el p en el li, además de la función addDeleteBtn() que ahora explicaremos

    input.value = "";
    divVacio.style.display = "none";

    // aquí reseteamos el valor del input y quitamos el div que teníamos puesto por defecto
})

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    // establecemos un boton que nos servirá para quitar el elemento de la lista, con una clase y una x dentro

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        ul.removeChild(item);
        // el elemento padre li se elimina
        const items = document.querySelectorAll("li");

        if(items.length === 0) {
            divVacio.style.display = "block";
        }
        // esto termina confirmando que si no hay más elementos en la lista, see volverá a mostrarel div que teníamos por defecto
    })

    return deleteBtn;
}





// comentar



const comments = [];

const inputContainer = document.createElement("div");
const input1 = document.createElement("input");
input.classList.add("input");
const commentsContainer = document.querySelector("#comments-container");

commentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input1);
// aquí metemos dentro del div otro div y un input


input1.addEventListener("keydown", (e) => {
  handleEnter(e, null);
});

// aquí decimos que cada vez que pulsemos una tecla, se activa la function handleEnter con las variables e y null 


// aquí abajo hacemos una función con e y current, donde current es el comentario de respuesta y e son los comentarios
function handleEnter(e, current) {
  if (e.key === "Enter" && e.target.value != "") {
    const newComment = {
      text: e.target.value,
      likes: 0,
      responses: [],
    };
    // aquí lo que estamos haciendo es que si la tecla que presionamos es enter y el valor de dentro del input no es "", entonces generamos un object newComment
    // que será nuestro nuevo comentario.
    if (current === null) {
      comments.unshift(newComment);
    } else {
      current.responses.unshift(newComment);
    }
    // aquí estamos diciendo que, si no hay comentarios (es decir, si current es null), entonces ese nuevo comentario se mete en el array de comments, y si sí
    // existe, se introduce pero como una respuesta a un comentario


    e.target.value = "";
    commentsContainer.innerHTML = "";
    // aquí volvemos los valores a strings vacíos para resetearlos

    commentsContainer.appendChild(inputContainer);
    // esto vuelve a generar otra caja de comentarios

    renderComments(comments, commentsContainer);
    // la función renderComments nos permitirá replicar los comentarios, sus likes y todo el sistema que se genera

  }
}

function renderComments(arr, parent) {
  arr.forEach((element) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");
    // aquí creamos el contenedor de los comentarios

    const responsesContainer = document.createElement("div");
    responsesContainer.classList.add("responses-container");
    // aquí creamos el contenedor de las respuestas

    const replyButton = document.createElement("button");
    const likeButton = document.createElement("button");
    // estos los los botones de like y de respuesta

    replyButton.textContent = "Reply";
    likeButton.textContent = "Like";
    // aquí generamos su texto

    replyButton.addEventListener("click", (e) => {
      const newInput = inputContainer.cloneNode(true); 
      newInput.value = "";
      newInput.focus();
      newInput.addEventListener("keydown", (e) => {
        handleEnter(e, element);
      });
      commentContainer.insertBefore(newInput, responsesContainer);
    });
    //esta función lo que va a hacer es clonar inputContainer con cloneNode, lo reseteará con .value = ""; le dará el foco con .focus(); y después llamará a la función 
    // handleEnter, con e y element como parámetros
    // Por último lo que hacemos es insertar el div de respuestas donde el div de comentarios

    likeButton.addEventListener("click", (e) => {
      element.likes++;
      likeButton.textContent = `${
        element.likes > 0 ? element.likes : ""
      } Likes`;
    });

    // aquí simplemente determinamos que se le sume uno al valor element.likes y que se muestre en el textContent del likeButton

    
    const divContent = document.createElement("div");
    divContent.textContent = element.text;
    const divActions = document.createElement("div");
    //commentContainer.appendChild(document.createTextNode(element.text));



    commentContainer.appendChild(divContent);
    commentContainer.appendChild(divActions);
    // introducimos los dos divs creados

    divActions.appendChild(replyButton);
    divActions.appendChild(likeButton);
    // en divActions introducimos los botones

    commentContainer.appendChild(responsesContainer);
    // introducimos el responsesContainer en el commentContainer


    if (element.responses.length > 0) {
      renderComments(element.responses, responsesContainer);
    }
    // Esta línea de código nos permite llamar otra vez a toda la función en caso de que existan respuestas. Esto se llama recursión, cuando llamas dentro de una
    // función a la función misma
    
    parent.appendChild(commentContainer);
  });
}


