const formulario = document.getElementById("FormInventario");

formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    // Cal los imputs
    const inputProducto = document.getElementById("producto")
    const inputCantidad = document.getElementById("cantidad")
    const inputPrecio = document.getElementById("precio")

    //ext val (parsear a num los campos tipo num)
    const valorCantidad = parseInt(inputCantidad.value);
    const valorPrecio = parseInt(inputPrecio.value);
    const valorProducto =inputCantidad.value.trim();
 
    //Cap los errores
    const errorProducto = document.getElementById("errorProducto");
    const errorCantidad = document.getElementById("errorCantidad");
    const errorPrecio = document.getElementById("errorPrecios");
    const mensajeExito = document.getElementById("mensajeExito");

    let formularioValido = true;

    //Limpieza
    errorProducto.textContent = "";
    errorCantidad.textContent = "";
    errorPrecio.textContent = "";
    mensajeExito.textContent = "";

    inputProducto.classList.remove("input-error","input-valido");
    inputCantidad.classList.remove("input-error","input-valido");
    inputPrecio.classList.remove("input-error","input-valido");

    //Lógica de validación

    //Validad si producto = (texto vacio)
    if(valorProducto ===""){
        errorProducto.textContent = "El nombre del producto es obligatorio";
        inputProducto.classList.add("input-error");
        formularioValido = false;
    } else {
        inputProducto.classList.add("input-valido");
    }
        // Debe ser un núm valido
        if(isNaN(valorCantidad) || valorCantidad <=0){
        errorCantidad.textContent = "La cantidad debe ser mayor a 0";
        inputCantidad.classList.add("input-error");
        formularioValido = false;
    } else {
        inputCantidad.classList.add("input-valido");
    }
        if(isNaN(valorPrecio) || valorPrecio < 100){
        errorPrecio.textContent = "El valor debe ser al menos de $100";
        inputPrecio.classList.add("input-error");
        formularioValido = false;
    } else {
        inputPrecio.classList.add("input-valido");
    }

    // Desición final

    if(formularioValido === true){
        mensajeExito.textContent = "Producto guardado correctamente";

        // Reset boxes
        formulario.reset();
        inputProducto.classList.remove("input-valido");
        inputCantidad.classList.remove("input-valido");
        inputPrecio.classList.remove("input-valido");

    }
    
});