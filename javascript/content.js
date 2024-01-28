//REALIZE FETCH, CREA LAS CARDS Y LAS MUESTRA EN EL DOM
const CrearCards = async () => {
    const ArticulosEnVenta = document.querySelector("#ArticulosEnVenta");
    const Cards = document.createElement("div");
    Cards.classList.add("cards");
    ArticulosEnVenta.appendChild(Cards);
    const Articulos = document.querySelector(".cards");
try {
  
  const data = await fetch("./../assets/productos.json");
  const EsperarDatos = await data.json();
  productos = EsperarDatos;
  console.log(productos);

  productos.map((data) => {
    const Card = document.createElement("div");
    Card.classList.add("card");
    Card.innerHTML = `                
      <img class="card-img-top" src=${data.imagenRuta} alt="Imagen Producto">
      <div class="card-body d-flex flex-column">
          <h5 class="card-title">$${data.valor.toLocaleString("en-US")}</h5>
          <p class="card-brand"> ${data.nombreMarca}</p>
          <p class="card-text mb-auto">${data.nombreProducto}</p>
          <a class="btn btn-card btn-primary mt-auto" onClick="AgregarArticulo(${
            data.id
          })" >Agregar</a>
      </div>`;

    Articulos.appendChild(Card);
  });
} catch (err) {

  const CardError = document.createElement("div");
  CardError.classList.add("errorCard");
  CardError.innerHTML = `
    <div>
    ERROR AL BUSCAR LOS DATOS<br/> 
    PONERSE EN CONTACTO CON EL SOPORTE.
    </div>`
  
    Articulos.appendChild(CardError)
}
};
CrearCards();