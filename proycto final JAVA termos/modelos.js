//bienvenida

let respuesta = prompt("Bienvenido a Importados Norte, a realizado compras en esta pagina?")
if(respuesta === "si") 
alert("Perfecto, avisanos cualquier duda!!")

else{
    if(respuesta === "no")
    alert("Genial, eres nuevo aqui, ojala disfrutes los produtos!!")
}


function saludar (saludo, nombre){
  let mensaje = `${hola} ${emiliano}`;
     console.log(mensaje);
}
     saludar(hola, bienvenido)


//metodo de busqueda 

const numeros = [
    {id: 1, nombre: "termo rosa",precio: 17.000},
    {id: 2, nombre: "termo verde", precio: 13.000},
    {id: 3, nombre: "termo negro", precio: 20.000},
    {id: 4, nombre: "vaso termico", precio: 6500},
];
numeros. array.forEach(item =>{
    console.log(item); - console.log((item.precio));
});

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

        //arreglos

const productos = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
let nombres=  prompt("ingrese el producto que desee");
let posicion= productos.indexOf(nombres);

if(posicion == -1){
   alert("el producto ${nombre} esta en el puesto ${posicion}");
}

