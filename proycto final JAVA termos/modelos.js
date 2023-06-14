//stock JSON

const traerStock = async () => {
  try{
    const response = await fetch ("./stock.json");
    const stock = await response.json();
    return stock ;

  }catch(error){
    console.log(error);
  }
}
stock= traerStock();

/** EVENTOS EN EL DOM **/
const termosContainer = document.getElementById('termos_container');
//** Creacion de los productos en el dom de shop segun el stock que haya *

stock.then((stock) => {
  stock.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
      <h3 class="producto_marca">${item.marca}</h3>
      <h3 class="producto_color">${item.color}</h3>
      <p class="producto_precio">$${item.precio}</p>
      <button type="button" class="producto_btn">Añadir al carrito</button>
    `;
    termosContainer.appendChild(div);
  });

  const botonAgregar = document.querySelectorAll(".producto_btn");
  const ArraydeBontones = Array.from(botonAgregar);

  ArraydeBontones.forEach(btn => {
    btn.addEventListener('click', () => {
      const producto = btn.parentElement;
      const marca = producto.querySelector('.producto_marca').textContent;
      const color = producto.querySelector('.producto_color').textContent;
      const precio = producto.querySelector('.producto_precio').textContent;

      // Crear un objeto para representar el producto agregado al carrito
      const productoAgregado = {
        marca: marca,
        color: color,
        precio: precio
      };

      // Obtener los productos del carrito del almacenamiento local
      let productosCarrito = localStorage.getItem('productosCarrito');
      if (productosCarrito) {
        // Si ya hay productos en el carrito, convertirlos a un array
        productosCarrito = JSON.parse(productosCarrito);
      } else {
        // Si no hay productos en el carrito, crear un array vacío
        productosCarrito = [];
      }

      // Agregar el producto actual al array de productos del carrito
      productosCarrito.push(productoAgregado);

      // Guardar los productos del carrito actualizados en el almacenamiento local
      localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));

      // Mostrar el nombre del producto agregado en la alerta
      alert('Producto ' + marca + ' agregado al carrito correctamente');
    });
  });
});






