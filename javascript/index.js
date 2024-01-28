/* const productos = [
  {
    id: 0,
    nombreProducto: "Mix de berries 400g",
    imagenRuta: "../assets/producto_imagen/item_berries.png",
    nombreMarca: "Frutos del Maipo",
    valor: 3799,
  },
  {
    id: 1,
    nombreProducto: "Bebida Coca-Cola sin Azúcar 1.5L",
    imagenRuta: "../assets/producto_imagen/item_cocacola.jpg",
    nombreMarca: "Coca-Cola",
    valor: 1499,
  },
  {
    id: 2,
    nombreProducto: "Bebida Isotónica Gatorade Blue 1L",
    imagenRuta: "../assets/producto_imagen/item_gatorade.png",
    nombreMarca: "Gatorade",
    valor: 1529,
  },
  {
    id: 3,
    nombreProducto: "Queso Mantecoso Quilque Laminado 500g",
    imagenRuta: "../assets/producto_imagen/item_queso.jpg",
    nombreMarca: "Soprole",
    valor: 5099,
  },
  {
    id: 4,
    nombreProducto: "Helado Papaya a la crema 1L",
    imagenRuta: "../assets/producto_imagen/item_helado.png",
    nombreMarca: "San Francisco de Loncomilla",
    valor: 4999,
  },
  {
    id: 5,
    nombreProducto: "Pechuga Deshuesada 850gr",
    imagenRuta: "../assets/producto_imagen/item_pechuga.png",
    nombreMarca: "Super Pollo",
    valor: 5499,
  },
  {
    id: 6,
    nombreProducto: "Leche Descremada 1L",
    imagenRuta: "../assets/producto_imagen/item_leche.png",
    nombreMarca: "Cuisine & Co",
    valor: 969,
  },
  {
    id: 7,
    nombreProducto: "Bizcocho Chocman Pack 8u. 33gr",
    imagenRuta: "../assets/producto_imagen/item_chocman.png",
    nombreMarca: "Costa",
    valor: 1999,
  },  {
    id: 8,
    nombreProducto: "Galletas limón & chocolate blanco 200 g",
    imagenRuta: "../assets/producto_imagen/imagen_lemonCookies.png",
    nombreMarca: "Merba",
    valor: 2699 ,
  },
   {
    id: 9,
    nombreProducto: "Shampoo Dove Men Sport Active Fresh 400 ml",
    imagenRuta: "../assets/producto_imagen/imagen_doveMen.png",
    nombreMarca: "Dove Men",
    valor: 2939,
  },
  {
    id: 10,
    nombreProducto: "Mini Turron 300 g",
    imagenRuta: "../assets/producto_imagen/imagen_turron.png",
    nombreMarca: "Ambrosoli",
    valor: 1749,
  },
  {
    id: 11,
    nombreProducto: "Pack 4 un. Cerveza Kunstmann Torobayo botella 330 cc",
    imagenRuta: "../assets/producto_imagen/imagen_torobayo.png",
    nombreMarca: "Kunstmann",
    valor: 4990,
  },
  {
    id: 12,
    nombreProducto: "Bebida Bilz Zero 1.5 L",
    imagenRuta: "../assets/producto_imagen/imagen_bilz.png",
    nombreMarca: "Bilz",
    valor: 1990,
  },
  {
    id: 13,
    nombreProducto: "Chocolate Bombónes Cerezas al Licor 120 g",
    imagenRuta: "../assets/producto_imagen/imagen_chocolate.png",
    nombreMarca: "Ambrosoli",
    valor: 2719,
  },
 
]; */

let carroTotal = [];
let valorFinal = 0;
//REVISA SI HAY DATA GUARDADA EN LOCALHOST
if (localStorage.getItem("localCarroTotal")) {
  carroTotal = JSON.parse(localStorage.getItem("localCarroTotal"));
}
//ABRE EL MODAL
const handleClickCanasta = ( ) =>{
  const Modal = document.querySelector(".ModalContenedor")
  Modal.style.display = "flex"

}

//CIERRA MODAL
const handleClickCerrarCanasta = () => {
  const Modal = document.querySelector(".ModalContenedor")
  Modal.style.display = "none"
}

//AGREGA UN ARTICULO A LA CANASTA
const AgregarArticulo = (producto) => {
  const productoDetallado = productos.find((e) => e.id == producto);
  carroTotal.push(productoDetallado);
  localStorage.setItem("localCarroTotal", JSON.stringify(carroTotal));
  ActualizarCarro();
  MostrarCarro();
};

//FETCH al JSON
const FetchDatos = async ()=>{
  try{
    const data = await fetch('../assets/productos.json')
    const EsperarDatos = await data.json()
    console.log(EsperarDatos)
  
  }
  catch(err){
    console.warn(err)
  }
}

//CREA LAS CARDS Y LAS MUESTRA EN EL DOM
const CrearCards = () => {
  FetchDatos

  /*
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
            <a class="btn btn-card btn-primary mt-auto" onClick="AgregarArticulo(${
              data.id
            })" >Agregar</a>
        </div>
        `;
    Articulos.appendChild(Card);
  });
  */
};
CrearCards();

//ACTUALIZA EL CANASTO EN LA NAVBAR
const ActualizarCarro = () => {
  let valor = 0;
  const Carro = document.querySelector(".canasta");
  Carro.innerHTML = `${Object.keys(carroTotal).length}`;

  const CarroValor = document.querySelector(".valorCarro");
  carroTotal.map((item) => {
    valor = valor + item.valor;
  });

  CarroValor.innerHTML = `$${Math.trunc(valor).toLocaleString("en-US")}`;
  valorFinal = valor;
};
ActualizarCarro();

//CREA LA INFORMACIÓN DENTRO DEL MODAL
const MostrarCarro = () => {
  const DetalleCompra = document.querySelector(".DetalleCompra");
  DetalleCompra.innerHTML = ``;
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

  const SubTotal = document.querySelector(".ValorTotalDetalleCompra");
  SubTotal.innerHTML = `Valor Total = $${valorFinal.toLocaleString("en-US")}`;
};
MostrarCarro();

//HANDLECLICK BOTON PAGAR
const PagarCarro = () => {
  Swal.fire({
    title: "Compra Exitosa!",
    text: `Se ha realizado una compra por $${valorFinal.toLocaleString("en-US")} CLP.`,
    icon: "success",
  }).then((result) =>{
    if(result['isConfirmed']){
      location.reload()
    }
  });
  localStorage.clear();
};

