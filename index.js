const data = ['manzana', 'banana', 'naranja', 'uva', 'fresa'];


function redireccionar2(){
    window.location.href = "https://wa.me/+573023288529?text=Hola"; 
}

function redireccionar() {
    window.location.href = "https://www.threads.net/@juliangomez9105?xmt=AQGzvRncQhV9zRKxvAYiUm33RB1Zr4sqsyZatTpEG9jvR7s"; // Cambia esta URL a la que desees
}
function redireccionar3 (){
    window.location.href = " https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BqsyBTxF0QTKh%2F05i1GIgtw%3D%3D" ;
}





document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    performSearch(query);
});

function performSearch(query) {
    const results = data.filter(item => item.includes(query));
    // Aquí puedes implementar la lógica de búsqueda
    // Por ejemplo, filtrar una lista de elementos
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

    // Simulación de búsqueda en un array de datos
    
    if (results.length > 0) {
        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = result;
            resultsDiv.appendChild(div);
        });
    } else {
        resultsDiv.textContent = 'No se encontraron resultados.';
    } 
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
  }

  function closePopup(){
     document.getElementById("emergente").style.display = "none"

  }


