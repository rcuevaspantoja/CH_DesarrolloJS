const productos = [
  {
    id: 0,
    nombreProducto: "Mix de berries 400g",
    imagenRuta: "../assets/productos/item_berries.png",
    nombreMarca: "Frutos del Maipo",
    valor: "3.790",
  },
  {
    id: 1,
    nombreProducto: "Bebida Coca-Cola sin Azúcar 1.5L",
    imagenRuta: "../assets/productos/item_cocacola.jpg",
    nombreMarca: "Coca-Cola",
    valor: "1.490",
  },
  {
    id: 2,
    nombreProducto: "Bebida Isotónica Gatorade Blue 1L",
    imagenRuta: "../assets/productos/item_gatorade.png",
    nombreMarca: "Gatorade",
    valor: "1.520",
  },
  {
    id: 3,
    nombreProducto: "Queso Mantecoso Quilque Laminado 500g",
    imagenRuta: "../assets/productos/item_queso.jpg",
    nombreMarca: "Soprole",
    valor: "5.099",
  },
  {
    id: 4,
    nombreProducto: "Helado Papaya a la crema 1L",
    imagenRuta: "../assets/productos/item_helado.png",
    nombreMarca: "San Francisco de Loncomilla",
    valor: "4.999",
  },
  {
    id: 5,
    nombreProducto: "Pechuga Deshuesada 850gr",
    imagenRuta: "../assets/productos/item_pechuga.png",
    nombreMarca: "Super Pollo",
    valor: "5.490",
  },
  {
    id: 6,
    nombreProducto: "Leche Descremada 1L",
    imagenRuta: "../assets/productos/item_leche.png",
    nombreMarca: "Cuisine & Co",
    valor: "969",
  },
  {
    id: 7,
    nombreProducto: "Bizcocho Chocman Pack 8u. 33gr",
    imagenRuta: "../assets/productos/item_chocman.png",
    nombreMarca: "Costa",
    valor: "1999",
  },
];

let carroTotal = [];
const AgregarArticulo = (producto) => {
  const productoDetalle = productos.find((e) => e.id == producto);
  carroTotal.push(productoDetalle);
  console.log(carroTotal);
  ActualizarBadge();
};

const CrearCard = () => {
  //parent
  const ArticulosEnVenta = document.querySelector("#ArticulosEnVenta")
  const Cards = document.createElement("div")
  Cards.classList.add("cards")
  ArticulosEnVenta.appendChild(Cards)

  //child
  const Articulos = document.querySelector(".cards");
  productos.map((data) => {
    const Card = document.createElement("div");
    Card.classList.add("card");
    Card.innerHTML = `                
        <img class="card-img-top" src=${data.imagenRuta} alt="Imagen Producto">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">$${data.valor}</h5>
            <p class="card-brand"> ${data.nombreMarca}</p>
            <p class="card-text mb-auto">${data.nombreProducto}</p>
            <a href="#" class="btn btn-card btn-primary mt-auto" onClick="AgregarArticulo(${data.id})" >Agregar</a>
        </div>
        `;
    Articulos.appendChild(Card);
  });
};
CrearCard();

console.log("carroTotal:" + carroTotal);

const ActualizarBadge = () => {
  const Carro = document.querySelector(".canasta");
  Carro.innerHTML = `${Object.keys(carroTotal).length}`;
};
ActualizarBadge();
