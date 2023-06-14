//pagina contacto

function iniciarSesion() {
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  
  // Aquí puedes realizar la lógica de autenticación con los datos ingresados
  // por ejemplo, puedes enviar los datos a un servidor para verificar la autenticidad
}


    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    (username === 'Emiliano' && password === '123456') &&
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

  const usernameInput = document.querySelector('#username');
  const passwordInput = document.querySelector('#password');

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Aquí puedes realizar la lógica de autenticación con los datos ingresados
  // por ejemplo, puedes verificar los datos en una base de datos simulada

  // Supongamos que tenemos una base de datos simulada llamada "usersDB" en el almacenamiento local
  let usersDB = localStorage.getItem('usersDB');
  if (!usersDB) {
    // Si no hay datos en la base de datos simulada, creamos un objeto vacío
    usersDB = {};
  } else {
    // Si hay datos en la base de datos simulada, lo convertimos a objeto utilizando JSON.parse
    usersDB = JSON.parse(usersDB);
  }

  // Verificar si el usuario existe en la base de datos simulada
  if (usersDB[username]) {
    // Verificar si la contraseña es correcta
    if (usersDB[username] === password) {
      // La autenticación es exitosa
      alert('Inicio de sesión exitoso');
      // Redirigir a otra página, mostrar contenido protegido, etc.
    } else {
      // La contraseña es incorrecta
      alert('Contraseña incorrecta');
    }
  } else {
    // El usuario no existe en la base de datos simulada
    alert('Usuario no encontrado');
  }

  // Limpiar los campos de entrada después de procesar los datos
  usernameInput.value = '';
  passwordInput.value = '';
});


// funcion en orden 
function ordenar (lista) {
    lista.sort();
    return lista;
    }
    const lista = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
    const lista2 = ordenar(lista);
    console.log(lista2);














