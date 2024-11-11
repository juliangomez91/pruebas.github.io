


function redireccionar2(){
    window.location.href = "https://wa.me/+573023288529?text=Hola"; 
}

function redireccionar() {
    window.location.href = "https://www.threads.net/@juliangomez9105?xmt=AQGzvRncQhV9zRKxvAYiUm33RB1Zr4sqsyZatTpEG9jvR7s"; // Cambia esta URL a la que desees
}
function redireccionar3 (){
    window.location.href = " https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BqsyBTxF0QTKh%2F05i1GIgtw%3D%3D" ;
}







  const nombre = prompt("¿Cuál es tu nombre?");

  // Verificar si el usuario ingresó un nombre
  if (nombre) {
      // Crear un saludo personalizado
      const mensaje = "¡Hola, " + nombre + "! Bienvenid@ a mi pagina.";
      // Mostrar el saludo en la consola
      console.log(mensaje);
      // Insertar el saludo en el HTML
      document.getElementById('saludo').innerText = mensaje;
      const saludo = document.getElementById("saludo");
     saludo.style.color="#9d6913";
  } else {
      // Mensaje si no se ingresó un nombre
      document.getElementById('saludo').innerText = "¡Hola Bienvenid@ a mi pagina.";
      saludo.style.color="#9d6913";
  }

  function closePopup(){
     document.getElementById("emergente").style.display = "none"

  }
 
 


const busquedaInput = document.getElementById('search-input');
const resultadosDiv = document.getElementById('results');
const listaResultados = document.getElementById('listaResultados');
buscarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    realizarBusqueda();
});
const cerrarBtn = document.getElementById('cerrar');


busquedaInput.addEventListener('input', function() {
    if (busquedaInput.value.trim() === '') {
        resultadosDiv.style.display = 'none'; // Ocultar el div de resultados si el input está vacío
    } else {
        realizarBusqueda();
    }
});
cerrarBtn.addEventListener('click', function() {
    resultadosDiv.style.display = 'none'; // Ocultar el div de resultados
    busquedaInput.value = ''; // Limpiar el campo de búsqueda
});

function realizarBusqueda() {
    const query = busquedaInput.value.toLowerCase();
    listaResultados.innerHTML = ''; // Limpiar resultados anteriores

    if (query) {
        resultadosDiv.style.display = 'block'; // Mostrar el div de resultados

        // Buscar en el contenido
        const contenido = document.getElementById('intros').innerText;
        const lineas = contenido.split('\n');


        lineas.forEach((linea) => {
            const palabras = linea.split(' '); // Dividir la línea en palabras
            const coincidencias = palabras.filter(palabra => palabra.toLowerCase().includes(query)); // Filtrar palabras que coinciden

            if (coincidencias.length > 0) {
                const li = document.createElement('li');
                // Resaltar las palabras coincidentes
                const lineaResaltada = palabras.map(palabra => {
                    if (palabra.toLowerCase().includes(query)) {
                        return `<span class="resaltado">${palabra}</span>`;
                    }
                    return palabra;
                }).join(' ');

                li.innerHTML = lineaResaltada; // Usar innerHTML para mostrar las palabras resaltadas
                listaResultados.appendChild(li);
            }
        });
    }
}

       
        
    

