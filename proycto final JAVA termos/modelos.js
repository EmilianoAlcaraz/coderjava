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

/** EVENTOS EN EL DOM **/
const termosContainer = document.getElementById('termos_container');
//** Creacion de los productos en el dom de shop segun el stock que haya *

stock.then((stock) => {
  
  stock.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML=`
      <h3 class="producto_marca">${item.marca}</h3>
      <h3 class="producto_color" ${item.color}</h3>
      <p class="producto_precio">$${item.precio}</p>
      <button type="button" class="producto_btn">Añadir al carrito</button>
      `
      termosContainer.appendChild(div);
  });

  const botonAgregar = document.querySelectorAll(".producto_btn");
  
  const ArraydeBontones = Array.from(botonAgregar);

  ArraydeBontones.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      alert('Producto agregado al carrito correctamente');
    })
  })
  
})




