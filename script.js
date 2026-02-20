document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        alert("Bienvenido Administrador");
        window.location.href = "dashboard.html"; // Puedes crear esta página después
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
