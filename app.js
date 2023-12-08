//Aplicacion de simulación para una lista de compras formato CRUD

//variables y funciones Globales
const lista = ["huevos", "leche", "cereales"];
mostrarLista = () => {
  let cadenaDeLista = `Lista de Supermercado (${lista.length})\n`;

  if (lista.length == 0) {
    cadenaDeLista = cadenaDeLista + "Lista se encuentra vacía! :( \n";
  } else
    lista.map(
      (e) =>
        (cadenaDeLista = cadenaDeLista + `${lista.indexOf(e) + 1}. ${e} \n`)
    );

  return cadenaDeLista;
};

//agregarItem
function agregarItem() {
  validarNombreItem = (nombreItem) => {

    let validacion = true
    if( lista.includes(nombreItem) ){
      alert("Item duplicado. Porfavor intente nuevamente")
      validacion = false
    }

    if( nombreItem.length == 0){
      alert("No ha ingresado nada. Porfavor intente nuevamente")
      validacion = false
    }

    return validacion
  };

  // bol para ciclar la inserción de items en caso de ser necesaria
  let agregarItem = true;
  while(agregarItem){
    let nombreItem = prompt("Ingresar nuevo Item").toLowerCase();

    if( validarNombreItem(nombreItem) ){
      lista.push(nombreItem);
      agregarItem = confirm("¿Desea agregar otro item?")
    } 
  }
}

//eliminarLista
function eliminarItem(){
    let eliminarItem = true;
    while(eliminarItem){
      let eleccionEliminar = prompt(`${ mostrarLista() } \n Indicar el número de item a eliminar`).toLowerCase();
        if( lista[eleccionEliminar -1] ){alert(`Se ha eliminado el item ${ eleccionEliminar } exitosamente! `)
        lista.splice(eleccionEliminar - 1, 1)
        eliminarItem = confirm("¿Desea eliminar otro item?")
      }else{
        alert("Error. Vuelvelo a intentar")
      }
    }
}

//display de opciones
const seleccionarOpcion = () => {
  let eleccion = prompt(
    `${ mostrarLista() } \n Qué desea hacer? \n 1) Ingresar Item \n 2) Eliminar Item`
  );
  return parseInt(eleccion);
};

const menuPrincipal = (opcion) => {
  switch (opcion) {
    case 1:
      agregarItem();
      break;
    case 2:
      eliminarItem();
      break;
    case 3:
      vaciarLista();
      break;
    default:
      alert("Operacion inválida. Intente denuevo.");
  }
};

//menu principal
const inicio = () => {
  let loop = true;
  do {
    menuPrincipal(seleccionarOpcion());
    loop = confirm("Desea hacer otra operacion?");
  } while (loop);
};

inicio();
