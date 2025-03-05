
window.onload = function () {
    document.getElementById("parejas").innerText = txtParejas;
    let arrayId = [0, 0, 1, 1, 2, 2, 3, 3];
    let arrayMezclado = mezclarCartas(arrayId);
    for (i = 0; i < arrayMezclado.length; i++) {
        let element = document.getElementById(i);  
        if (element) {
            element.setAttribute("data-id", arrayMezclado[i]);


            
            document.getElementById("contenedor").appendChild(element);
        }
    }
}
function mezclarCartas(array) {
    let nuevoArray = array.slice();
    for (let i = nuevoArray.length - 1; i > 0; i--) {

        
        let j = Math.floor(Math.random() * (i + 1));
        let k = nuevoArray[i];
        nuevoArray[i] = nuevoArray[j];
        nuevoArray[j] = k;

        


    }
    
    return nuevoArray;
}
let cartaSeleccionada = null;
let cartaData = null;
let cartaSeleccionada2 = null;
let cartaData2 = null;
let txtParejas = 0;
function voltearCarta(imagen) {


    if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
        return
    }
    if (cartaSeleccionada == null) {
        if (imagen.src.includes("reverso")) {
            imagen.src = "/images/card" + imagen.getAttribute("data-id") + ".png";
            cartaData = imagen.id;
            cartaSeleccionada = imagen.getAttribute("data-id");
        }
    }
    if (cartaSeleccionada != null) {
        if (imagen.src.includes("reverso")) {
            imagen.src = "/images/card" + imagen.getAttribute("data-id") + ".png";
            cartaData2 = imagen.id;
            cartaSeleccionada2 = imagen.getAttribute("data-id");
        }
        if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
            if (cartaSeleccionada == cartaSeleccionada2) {
                cartaSeleccionada = null;
                cartaSeleccionada2 = null;
                txtParejas++;
                document.getElementById("parejas").innerText = txtParejas;
                document.getElementById("Coincidencia").play();
                if (txtParejas == 4) {
                    document.getElementById("win").style.visibility = "visible";
                }

            } else {
                document.getElementById("Error").play();
                
                setTimeout(() => {
                    let carta1 = document.getElementById(cartaData);
                    let carta2 = document.getElementById(cartaData2);


                    if (carta1) carta1.src = "/images/reverso.png";
                    if (carta2) carta2.src = "/images/reverso.png";

                    // Resetear las variables
                    cartaSeleccionada = null;
                    cartaSeleccionada2 = null;
                }, 1000);
                
            }


        }
    }
   
}


