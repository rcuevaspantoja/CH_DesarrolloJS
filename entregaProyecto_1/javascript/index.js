const productos = [
  {
    id: 0,
    nombreProducto: "Mix de berries 400g",
    imagenRuta: "../assets/productos/item_berries.png",
    nombreMarca: "Frutos del Maipo",
    valor: 3799,
  },
  {
    id: 1,
    nombreProducto: "Bebida Coca-Cola sin Azúcar 1.5L",
    imagenRuta: "../assets/productos/item_cocacola.jpg",
    nombreMarca: "Coca-Cola",
    valor: 1499,
  },
  {
    id: 2,
    nombreProducto: "Bebida Isotónica Gatorade Blue 1L",
    imagenRuta: "../assets/productos/item_gatorade.png",
    nombreMarca: "Gatorade",
    valor: 1529,
  },
  {
    id: 3,
    nombreProducto: "Queso Mantecoso Quilque Laminado 500g",
    imagenRuta: "../assets/productos/item_queso.jpg",
    nombreMarca: "Soprole",
    valor: 5099,
  },
  {
    id: 4,
    nombreProducto: "Helado Papaya a la crema 1L",
    imagenRuta: "../assets/productos/item_helado.png",
    nombreMarca: "San Francisco de Loncomilla",
    valor: 4999,
  },
  {
    id: 5,
    nombreProducto: "Pechuga Deshuesada 850gr",
    imagenRuta: "../assets/productos/item_pechuga.png",
    nombreMarca: "Super Pollo",
    valor: 5499,
  },
  {
    id: 6,
    nombreProducto: "Leche Descremada 1L",
    imagenRuta: "../assets/productos/item_leche.png",
    nombreMarca: "Cuisine & Co",
    valor: 969,
  },
  {
    id: 7,
    nombreProducto: "Bizcocho Chocman Pack 8u. 33gr",
    imagenRuta: "../assets/productos/item_chocman.png",
    nombreMarca: "Costa",
    valor: 1999,
  },
];

let carroTotal = [];
let valorFinal = 0;

if (localStorage.getItem("localCarroTotal")) {
  carroTotal = JSON.parse(localStorage.getItem("localCarroTotal"));
}

const AgregarArticulo = (producto) => {
  const productoDetallado = productos.find((e) => e.id == producto);
  carroTotal.push(productoDetallado);
  localStorage.setItem("localCarroTotal", JSON.stringify(carroTotal));
  ActualizarCarro();
  MostrarCarro();
};

const CrearCard = () => {
  //parent
  const ArticulosEnVenta = document.querySelector("#ArticulosEnVenta");
  const Cards = document.createElement("div");
  Cards.classList.add("cards");
  ArticulosEnVenta.appendChild(Cards);
  //child
  const Articulos = document.querySelector(".cards");
  productos.map((data) => {
    const Card = document.createElement("div");
    Card.classList.add("card");
    Card.innerHTML = `                
        <img class="card-img-top" src=${data.imagenRuta} alt="Imagen Producto">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">$${data.valor.toLocaleString("en-US")}</h5>
            <p class="card-brand"> ${data.nombreMarca}</p>
            <p class="card-text mb-auto">${data.nombreProducto}</p>
            <a href="#" class="btn btn-card btn-primary mt-auto" onClick="AgregarArticulo(${
              data.id
            })" >Agregar</a>
        </div>
        `;
    Articulos.appendChild(Card);
  });
};
CrearCard();

const ActualizarCarro = () => {
  let valor = 0;
  const Carro = document.querySelector(".canasta");
  Carro.innerHTML = `${Object.keys(carroTotal).length}`;

  const CarroValor = document.querySelector(".valorCarro");
  carroTotal.map((item) => {
    valor = valor + item.valor;
    console.log(valor, parseFloat(item.valor), item.valor);
  });

  CarroValor.innerHTML = `$${Math.trunc(valor)}`;
  valorFinal = valor;
};
ActualizarCarro();

const MostrarCarro = () => {
  const Modal = document.querySelector(".Modal");
  const DivDetalleCompra =document.createElement("div")
  DivDetalleCompra.classList.add("DetalleCompra")
  const DetalleCompra = document.querySelector(".DetalleCompra");
  Modal.appendChild(DivDetalleCompra)

  carroTotal.map((data) => {
    const Item = document.createElement("spam");
    Item.classList.add("ItemDetalleCompra");
    Item.innerHTML = `${
      data.nombreProducto
    } <spam class="ValorDetalleCompra">$${data.valor.toLocaleString(
      "en-US"
    )}</spam>`;
    DetalleCompra.appendChild(Item);
  });

  const SubTotal = document.createElement("div");
  SubTotal.classList.add("subTotal");
  SubTotal.innerHTML = `
  <spam class="ValorTotalDetalleCompra">TOTAL : $${valorFinal.toLocaleString("en-US")}</spam>        
  <button class="btn btn-warning">CANCELAR</button>
  <button class="btn btn-pagar">PAGAR</button>
  `;

  Modal.append(SubTotal);
};
MostrarCarro();

localStorage.clear();
