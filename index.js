


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
 
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const query = document.getElementById('search-input').value.toLowerCase();
    const content = document.getElementById('intros').innerText.toLowerCase();
    const resultsDiv = document.getElementById('results');

    // Limpiar resultados anteriores
    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'none';

    if (query) {
        const paragraphs = document.getElementById('intros').getElementsByTagName('p');
        let found = false;

        for (let i = 0; i < paragraphs.length; i++) {
            const paragraphText = paragraphs[i].innerText.toLowerCase();
            if (paragraphText.includes(query)) {
                found = true;
                const highlightedText = paragraphs[i].innerHTML.replace(new RegExp(query, 'gi'), (match) => `<span class="highlight">${match}</span>`);
                resultsDiv.innerHTML += `<p>${highlightedText}</p>`;
            }
        }

        if (found) {
            resultsDiv.style.display = 'block';
        } else {
            resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
            resultsDiv.style.display = 'block';
        }
    }
});


