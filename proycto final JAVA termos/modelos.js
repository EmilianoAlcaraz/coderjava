//bienvenida

let respuesta = prompt("Bienvenido a Importados Norte, a realizado compras en esta pagina?")
if(respuesta === "si") 
alert("Perfecto, avisanos cualquier duda!!")

else{
    if(respuesta === "no")
    alert("Genial, eres nuevo aqui, ojala disfrutes los produtos!!")
}


//metodo de busqueda 
const productos = ["termo stanley rosa", "termo stanley rojo", "termo stanley verde", "termo stanley azul"];
let nombres=  prompt("ingrese el producto que desee");
let posicion= productos.indexOf(nombres);
// Array de productos en el carrito de compras
let carrito = [
  { id: 1, nombre: 'termo stanley rosa', precio: 15000},
  { id: 2, nombre: 'termo stanley rojo', precio: 20000},
  { id: 3, nombre: 'termo stanley verde', precio: 17000},
  { id: 4, nombre: 'termo stanley azul', precio: 10000},
];

// Función para eliminar un producto del carrito de compras
function eliminarDelCarrito(idProducto) {

  // Encontrar el índice del producto en el carrito

  let indiceProducto = carrito.findIndex(function(producto) {
    return producto.id === idProducto;
  });

  if (indiceProducto !== -1) {
    // Si se encontró el producto, eliminarlo del carrito
    carrito.splice(indiceProducto, 1);
    console.log('El producto se eliminó del carrito.');
  } else {
    console.log('El producto no se encontró en el carrito.');
  }
}

//funcion de eliminar del carrito de compras

eliminarDelCarrito(2); // El producto se eliminó del carrito.
eliminarDelCarrito(4); // El producto no se encontró en el carrito.


console.log(carrito);
// Resultado: [{ id: 1, nombre: 'termo stanley rosa', precio: 15000 }, { id: 3, nombre: 'termo stanley verde', precio: 17000}]



// Función para filtrar productos por rango de precios
function filtrarPorPrecio(minPrecio, maxPrecio) {
  let productosFiltrados = productos.filter(function(productos){
    return productos.precio >= minPrecio && productos.precio <= maxPrecio;
  });

  return productosFiltrados;
}

let productosEnRango = filtrarPorPrecio(10000, 20000);
console.log(productosEnRango);
// Resultado: [{ nombre: 'termo stanley rosa', precio: 15000 }, { nombre: 'termo stanley rojo', precio: 20000 }, { nombre: 'termo stanley azul', precio: 10000}]


// Creación de un objeto JSON
let productosJSON = JSON.stringify(productos);
console.log(productosJSON);
// Resultado: "[{"id":1,"nombre":"termo stanley rosa","precio":15000},{"id":2,"nombre":"termo stanley rojo","precio":20000},{"id":3,"nombre":"termo stanley verde","precio":17000},
[{"id": 4,"nombre":"termo stanley azul","precio":10000}]


//stock JSON

const traerStock = async () => {
  try{
    const response = await fetch ("stock.json");
    const stock = await response.json();
    return stock ;
  
  }catch(error){
    console.log(error);
  }
}
stock= traerStock();

















