const productos = [ 
    {id: 1, nombre: "Suscripción Mensual" , img: "", categoria: "suscripcion", precio: 20},
    {id: 2, nombre: "Suscripción Semestral", img: "", categoria: "suscripcion", precio: 18},
    {id: 3, nombre: "Suscripción Anual", img: "", categoria:"suscripcion", precio: 16},
    {id: 4, nombre: "Paquete 3 Clases", img: "", categoria: "clase", precio: 10},
    {id: 5, nombre: "Paquete 5 Clases", img: "", categoria: "clase", precio: 16},
    {id: 6, nombre: "Paquete 7 Clases", img: "", categoria: "clase", precio: 24},
    {id: 7, nombre: "Paquete 9 Clases", img: "", categoria: "clase", precio: 30},
    {id: 8, nombre: 'Remera', img: "", categoria: "indumentaria", precio: 5000},
    {id: 9, nombre: 'Calsa', img: "", categoria: "indumentaria", precio: 10000},
    {id: 10, nombre: 'Gorra', img: "", categoria: "indumentaria", precio: 4500},
    {id: 11, nombre: 'Sweater', img: "", categoria: "indumentaria", precio: 12000},
    {id: 12, nombre: 'Campera', img: "", categoria: "indumentaria", precio: 20000}
]

// DECLARO FUNCIONES DE VALIDACIÓN 

const validarSeleccion = (selec) => {
    let validar = false;
    if((selec >= 1) && (selec <= 14)) validar = true;
    return validar;
}

let carrito = [];

const listar = (arrayProd) => {
    let listado =  "ID - Nombre\n";
    arrayProd.forEach(element => {
        listado = listado + element.id + " | " + element.nombre + "\n";
    });
    alert(listado);
}

function listarClases(miArray){
    let listadoClas = "";
    miArray.forEach(producto => {
        if(producto.categoria === "clase") {
            listadoClas = listadoClas + " - " + producto.nombre + " - " + producto.precio + "\n";
        };
    })
    alert(listadoClas);
}

function listarSuscripciones(miArrayDos){
    let listadoSus = "";
    miArrayDos.forEach(producto => {
        if(producto.categoria === "suscripcion") {
            listadoSus = listadoSus + " - " + producto.nombre + " - " + producto.precio + "\n";
        };
    })
    alert(listadoSus);
}

function listarIndumentaria(miArrayTres){
    let listadoIndumentaria = "";
    miArrayTres.forEach(producto => {
        if(producto.categoria === "indumentaria") {
            listadoIndumentaria = listadoIndumentaria + producto.id + " - " + producto.nombre + " - " + producto.precio + "\n";
        };
    })
    alert(listadoIndumentaria);
}

// BEGIN

let mensaje = "Gracias por elegir Melina Foster - Saber en Movimiento: \n1 - Productos \n2 - Agregar al carrito \n3 - Ver carrito \n4 - Suscripciones \n5 - Clases \n6 - Indumentaria \n7 - Ver total | Finalizar"  ;

let opcion; 

do{
    opcion = Number(prompt(mensaje));

    if(opcion === 1){
        alert(listar(productos));

    }else if(opcion === 2){
        let id = Number(prompt("Seleccione el ID del producto a comprar\n" + listar(productos)));
        let productoBuscado = productos.find(prod => prod.id === id);
        let posicionProductoEnCarrito = carrito.findIndex(prod => prod.id === productoBuscado.id);
        if(posicionProductoEnCarrito === -1){
            carrito.push({
                id: productoBuscado.id,
                nombre: productoBuscado.nombre,
                precioUnitario: productoBuscado.precio, 
                unidades: 1,
                subtotal: productoBuscado.precio
            })
        } else {
            carrito[posicionProductoEnCarrito].unidades++;
            carrito[posicionProductoEnCarrito].subtotal = carrito[posicionProductoEnCarrito].precioUnitario * carrito[posicionProductoEnCarrito].unidades;
        };
       console.log(carrito);
    }else if(opcion === 3) {
        alert(listar(carrito));
                
    }else if(opcion === 4){
        listarSuscripciones(productos);

      }else if(opcion === 5){
       listarClases(productos);

      }else if(opcion === 6){
        listarIndumentaria(productos);
      }
}while(opcion !== 0);

