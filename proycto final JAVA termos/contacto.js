//pagina contacto

    let usuario = prompt("Ingrese su usuario");
    while( usuario != "Emiliano"){
    alert("Usuario ingresado incorrecto");
    usuario = prompt("ingrese nuevamente el usuario correcto");
    }
     alert("Bienvenido, Emiliano")

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if (username === 'Emiliano' && password === '123456');
      alert('Bienvenido Emiliano');
      const perfil = {
        nombre: 'Emiliano',
        apellido: 'Gonzalez',
        edad: 22,
        sexo: 'M',
        telefono: 123456789,
        direccion: 'Calle 123 # 45',
        email: 'ejeyd@example.com',
        password: '123456'
        };

 // Previene que el formulario se envíe automáticamente

const loginForm = document.querySelector('form');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

});

// funcion en orden 
function ordenar (lista) {
    lista.sort();
    return lista;
    }
    const lista = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
    const lista2 = ordenar(lista);
    console.log(lista2);





    




















