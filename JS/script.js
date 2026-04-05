// Galería dinámica
document.getElementById("btnMostrar").addEventListener("click", function() {
    const contenedor = document.getElementById("contenedorGaleria");
    
    const proyectos = [
        { nombre: "E-commerce Fashion", tecnologia: "HTML5, CSS3, JavaScript", año: 2024 },
        { nombre: "Blog de Viajes", tecnologia: "React + Firebase", año: 2024 },
        { nombre: "Dashboard Analytics", tecnologia: "Vue.js + D3.js", año: 2025 }
    ];

    let html = "<h3>📁 Proyectos recientes:</h3><ul>";
    proyectos.forEach(proyecto => {
        html += `<li><strong>${proyecto.nombre}</strong><br>🔧 ${proyecto.tecnologia}<br>📅 ${proyecto.año}</li>`;
    });
    html += "</ul>";
    contenedor.innerHTML = html;
});

// Formulario con validación
document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensajeDiv = document.getElementById("mensajeConfirmacion");
    
    if (nombre.trim() === "" || email.trim() === "") {
        mensajeDiv.innerHTML = "❌ Completa todos los campos";
        mensajeDiv.style.backgroundColor = "#f8d7da";
        mensajeDiv.style.color = "#721c24";
        return;
    }
    
    if (!email.includes("@")) {
        mensajeDiv.innerHTML = "❌ Ingresa un email válido";
        mensajeDiv.style.backgroundColor = "#f8d7da";
        mensajeDiv.style.color = "#721c24";
        return;
    }
    
    mensajeDiv.innerHTML = `✅ ¡Gracias ${nombre}! Te contactaremos a ${email}`;
    mensajeDiv.style.backgroundColor = "#d4edda";
    mensajeDiv.style.color = "#155724";
    
    document.getElementById("formContacto").reset();
});