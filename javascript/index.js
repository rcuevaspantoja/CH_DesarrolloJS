let productos = [];
let carroTotal = [];
let valorFinal = 0;

//REVISA SI HAY DATA GUARDADA EN LOCALHOST
if (localStorage.getItem("localCarroTotal")) {
  carroTotal = JSON.parse(localStorage.getItem("localCarroTotal"));
}

//ABRE EL MODAL
const handleClickCanasta = () => {
  const Modal = document.querySelector(".ModalContenedor");
  Modal.style.display = "flex";
};

//CIERRA MODAL
const handleClickCerrarCanasta = () => {
  const Modal = document.querySelector(".ModalContenedor");
  Modal.style.display = "none";
};

//AGREGA UN ARTICULO A LA CANASTA
const AgregarArticulo = (producto) => {
  const productoDetallado = productos.find((e) => e.id == producto);
  carroTotal.push(productoDetallado);
  localStorage.setItem("localCarroTotal", JSON.stringify(carroTotal));
  ActualizarCarro();
  MostrarCarro();
};

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
    text: `Se ha realizado una compra por $${valorFinal.toLocaleString(
      "en-US"
    )} CLP.`,
    icon: "success",
  }).then((result) => {
    if (result["isConfirmed"]) {
      location.reload();
    }
  });
  localStorage.clear();
};
