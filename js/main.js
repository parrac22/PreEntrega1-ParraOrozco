function calcularTiempoAhorro(ahorroMensual,precioCompra) {
    let ahorroAcumulado = 0
    let meses = 0
    while (ahorroAcumulado < precioCompra) {
        ahorroAcumulado += ahorroMensual
        meses +=1
    }
    let excedente = ahorroAcumulado - precioCompra
    if (excedente > 0 && meses === 1) {
    console.log("Luego de " + meses + " mes, tendrás $"+ ahorroAcumulado + ", suficiente para tu compra de $" +precioCompra+ " y aun te sobrarían $"+ excedente)
    } else if ((excedente > 0 && meses >= 1)){
        console.log("Luego de " + meses + " meses, tendrás $"+ ahorroAcumulado + ", suficiente para tu compra de $" +precioCompra+ " y aun te sobrarían $"+ excedente)    
    } else if (meses === 1) {
        console.log("Luego de " + meses + " mes, tendrás $"+ ahorroAcumulado + ", suficiente para tu compra de $" +precioCompra)   
    } else {
        console.log("Luego de " + meses + " meses, tendrás $"+ ahorroAcumulado + ", suficiente para tu compra de $" +precioCompra)
    }
}


function simularAhorro() {
    let ahorroMensual = parseFloat(prompt("Ingresa la cantidad de dinero promedio que puedes ahorrar a fin de cada mes:"))
    let precioCompra = parseFloat(prompt("Ingresa el precio de lo que deseas comprar:"))
    if(isNaN(ahorroMensual) || isNaN(precioCompra)){
        console.error("El valor ingresado no es válido, intente de nuevo")
        return
    } else {
        calcularTiempoAhorro(ahorroMensual,precioCompra)
    }
    
    repetirProceso()

    
}

function repetirProceso() {
    let deseaRepetir = confirm("¿Desea calcular meses de ahorro para otra compra?")
    if(deseaRepetir){
        simularAhorro()
    } else {
        alert("Gracias por usar nuestro servicio.")
    }

}