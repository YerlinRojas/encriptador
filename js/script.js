// CODE ENCRIPTAR OR DESENCRIPTAR

var textarea = document.getElementById('paso1');
var seccionMostrar = document.getElementById('seccionMostrar');
var seccionOculta = document.getElementById('seccionOculta');

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function mostrarTexto(isEncriptar) {
    var texto = textarea.value.trim().toLowerCase();

    if (texto !== '') {
        seccionMostrar.style.display = 'block'; // Mostrar la sección de texto
        seccionOculta.style.display = 'none'; // Ocultar la sección con la imagen y el mensaje inicial
        
        var parrafo = seccionMostrar.querySelector('p');
        parrafo.textContent = isEncriptar ? encriptarTexto(texto) : desencriptarTexto(texto);

        // Limpiar el contenido del textarea
        textarea.value = '';
    }
}

document.querySelector('.botonEncriptar').addEventListener('click', function() {
    mostrarTexto(true);
});

document.querySelector('.botonDesencriptar').addEventListener('click', function() {
    mostrarTexto(false);
});


function copiarTexto() {
    var texto = seccionMostrar.querySelector('p').textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado al portapapeles');
    }, function() {
        alert('Error al copiar el texto');
    });
}


//modo odscuro
// Función para cambiar el tema
function cambiarTema(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Función para alternar entre temas al hacer clic en el botón
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    cambiarTema(newTheme);
}

// Función para inicializar el tema al cargar la página
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    cambiarTema(savedTheme);
});
