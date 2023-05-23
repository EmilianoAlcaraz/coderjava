//pagina contacto

let usuario = prompt("Ingrese su usuario");
while( usuario != "emiliano"){
alert("Usuario ingresado incorrecto");
usuario = prompt("ingrese nuevamente el usuario correcto");
}
alert("Bienvenido, emiliano")

 // Previene que el formulario se envíe automáticamente

const loginForm = document.querySelector('form');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

});

//creador de perfil del cliente para pagina con objetos

function persona (nombrePersona, edadPersona, direccionPersona){
    this.nombrePersona = nombrePersona;
    this.edadPersona = edadPersona;
    this.direccionPersona = direccionPersona;
} 
const emiliano = new persona ("Emiliano", 22, "Ciudad Juarez");
const emiliano2 = new persona ("Emiliano", 22, "Ciudad Juarez");
const emiliano3 = new persona ("Emiliano", 22, "Ciudad Juarez");
console.log(emiliano);
console.log(emiliano2);
console.log(emiliano3);


// funcion en orden 

function ordenar (lista) {
    lista.sort();
    return lista;
    }
    const lista = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
    const lista2 = ordenar(lista);
    console.log(lista2);




















