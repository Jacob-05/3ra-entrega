function cambiarContrasena() {
    var contrasenaActual = document.getElementById("contrasenaActual").value;
    var nuevaContrasena = document.getElementById("nuevaContrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    
    var usuarioGuardado = JSON.parse(localStorage.getItem(document.getElementById("email").value));

    
    if (!usuarioGuardado || usuarioGuardado.password !== contrasenaActual) {
        alert("La contrasena actual es incorrecta.");
        return false; 
    }

    
    if (nuevaContrasena === contrasenaActual) {
        alert("La nueva contrasena no puede ser igual a la contraseña actual.");
        return false; 
    }

    
    if (nuevaContrasena !== confirmarContrasena) {
        alert("La nueva contraseña y la confirmación no coinciden.");
        return false; 
    }

    
    usuarioGuardado.password = nuevaContrasena;
    localStorage.setItem(document.getElementById("email").value, JSON.stringify(usuarioGuardado));

    
    mostrarMensajeExito();
    return true; 
}

function mostrarMensajeExito() {
    const contenedor = document.createElement('div');
    contenedor.style.textAlign = 'center';
    contenedor.innerHTML = `
        <p>Contrasena cambiada exitosamente.</p>
        <p><a href="login.html" style="color: #f09300; text-decoration: underline;">Haz clic aquí para ir al Login</a></p>
    `;
    document.body.innerHTML = ''; 
    document.body.appendChild(contenedor); 
}
