//pagina contacto

let usuario = prompt("Ingrese su usuario");
while( usuario != "emiliano"){
alert("Usuario ingresado incorrecto");
usuario = prompt("ingrese nuevamente el usuario correcto");
}
alert("Bienvenido, emiliano")

//metodo de busqueda
const numeros = [
    {id: 1, nombre: "termo rosa",precio: 17.000},
    {id: 2, nombre: "termo verde", precio: 13.000},
    {id: 3, nombre: "termo negro", precio: 20.000},
    {id: 4, nombre: "vaso termico", precio: 6500},
];
productos. array.forEach(item =>{
    console.log(item); - console.log((item.precio));
});


//pagina modelos

let respuesta = prompt("Bienvenido a Importados Norte, a realizado compras en esta pagina?")
if(respuesta === "si") 
alert("Perfecto, avisanos cualquier duda!!")

else{
    if(respuesta === "no")
    alert("Genial, eres nuevo aqui, ojala disfrutes los produtos!!")
}

  let nombre = prompt("ingrese el nombre del producto");
const encontrado = productos.find(item.nombre===("termo rosa"))
console.log(encontrado);

if(encontrado){
    let mensaje =
    `El producto ${nombre} fue encontrado en la lista de productos.`
    alert(mensaje);
    }else{
        let mensaje =
        `El producto ${nombre} no fue encontrado en la lista de productos.`
        alert(mensaje);
        }


function saludar (saludo, nombre){
  let mensaje = `${hola} ${emiliano}`;
     console.log(mensaje);
}
     saludar(hola, bienvenido)

 // Previene que el formulario se envíe automáticamente

const loginForm = document.querySelector('form');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', (event) => {
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
console.log(persona1);
console.log(perosna2);
console.log(persona3);

//arreglos

const productos = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
let nombres=  prompt("ingrese el producto que desee");
let posicion= productos.indexOf(nombres);

//if(posicion 1= -1){
   // alert("el producto ${nombre} esta en el puesto ${posicion}");
//}
   
// funcion en orden 

function ordenar (lista) {
    lista.sort();
    return lista;
    }
    const lista = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
    const lista2 = ordenar(lista);
    console.log(lista2);




















