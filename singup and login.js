document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    
    const usuario = { password: password };

    
    localStorage.setItem(email, JSON.stringify(usuario));

    alert('Registro exitoso!');
    document.getElementById('signupForm').reset(); 
});


document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    
    const usuarioGuardado = JSON.parse(localStorage.getItem(email));

   
    if (usuarioGuardado && usuarioGuardado.password === password) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        alert('Correo o contrasena incorrectos.');
    }
});
