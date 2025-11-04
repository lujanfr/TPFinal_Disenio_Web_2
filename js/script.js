//      
//  PERSONAJES (index.html)
//      
document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("personajes");
  if (contenedor) { // Solo corre en index.html
    try {
      const resp = await fetch("https://thronesapi.com/api/v2/Characters");
      const data = await resp.json();

      contenedor.innerHTML = data.slice(0, 12).map(p => `
        <div class="personaje">
          <img src="${p.imageUrl}" alt="${p.fullName}">
          <h3>${p.fullName}</h3>
          <p>${p.title || "Sin título"}</p>
        </div>
      `).join('');
    } catch (error) {
      contenedor.innerHTML = "<p>Error al cargar los personajes.</p>";
    }
  }
});

//     
// FORMULARIO CONTACTO
//     
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return; // Solo corre en contacto.html

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value.trim();
    const contacto = document.querySelector('input[name="contacto"]:checked');

    if (!nombre || !email || !asunto || !mensaje || !contacto) {
      alert("⚠️ Por favor, completá todos los campos antes de enviar.");
      return;
    }

    alert(`Gracias por contactarnos, ${nombre}! Responderemos pronto.`);
    form.reset();
  });
});
