
window.onload = function () {
    let txtParejas = 0;
    document.getElementById("parejas").innerText = txtParejas;
    let arrayId = [0, 0, 1, 1, 2, 2, 3, 3];
    let arrayMezclado = mezclarCartas(arrayId);
    let contenedorCartas = document.querySelector(".cartas");
    for (let i = 0; i < arrayMezclado.length; i++) {
        let element = document.createElement("img");

        element.src = "/images/reverso.png"
        element.setAttribute("data-id", arrayMezclado[i]);
        element.setAttribute("id", i);
        element.style.visibility = "visible";



        contenedorCartas.appendChild(element);

    }
    let cartaSeleccionada = null;
    let cartaData = null;
    let cartaSeleccionada2 = null;
    let cartaData2 = null;
   
    contenedorCartas.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            let carta = event.target;



            if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
                return
            }
            if (cartaSeleccionada == null) {
                if (carta.src.includes("reverso")) {
                    carta.src = "/images/card" + carta.getAttribute("data-id") + ".png";
                    cartaData = carta.id;
                    cartaSeleccionada = carta.getAttribute("data-id");
                }
            }
            if (cartaSeleccionada != null) {
                if (carta.src.includes("reverso")) {
                    carta.src = "/images/card" + carta.getAttribute("data-id") + ".png";
                    cartaData2 = carta.id;
                    cartaSeleccionada2 = carta.getAttribute("data-id");
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
})
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
// let cartaSeleccionada = null;
// let cartaData = null;
// let cartaSeleccionada2 = null;
// let cartaData2 = null;
// let txtParejas = 0;
// let voltearCartas = document.querySelectorAll(".cartas img");
// voltearCartas.forEach(carta => {
//     carta.addEventListener("click", function () {

//         if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
//             return
//         }
//         if (cartaSeleccionada == null) {
//             if (carta.src.includes("reverso.png")) {
//                 carta.src = "/images/card" + carta.getAttribute("data-id") + ".png";
//                 cartaData = carta.id;
//                 cartaSeleccionada = carta.getAttribute("data-id");
//             }
//         }
//         if (cartaSeleccionada != null) {
//             if (carta.src.includes("reverso")) {
//                 carta.src = "/images/card" + carta.getAttribute("data-id") + ".png";
//                 cartaData2 = carta.id;
//                 cartaSeleccionada2 = carta.getAttribute("data-id");
//             }
//             if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
//                 if (cartaSeleccionada == cartaSeleccionada2) {
//                     cartaSeleccionada = null;
//                     cartaSeleccionada2 = null;
//                     txtParejas++;
//                     document.getElementById("parejas").innerText = txtParejas;
//                     document.getElementById("Coincidencia").play();
//                     if (txtParejas == 4) {
//                         document.getElementById("win").style.visibility = "visible";
//                     }

//                 } else {
//                     document.getElementById("Error").play();

//                     setTimeout(() => {
//                         let carta1 = document.getElementById(cartaData);
//                         let carta2 = document.getElementById(cartaData2);


//                         if (carta1) carta1.src = "/images/reverso.png";
//                         if (carta2) carta2.src = "/images/reverso.png";

//                         // Resetear las variables
//                         cartaSeleccionada = null;
//                         cartaSeleccionada2 = null;
//                     }, 1000);

//                 }


//             }
//         }
//     })
// })

// function voltearCarta(carta) {


//     if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
//         return
//     }
//     if (cartaSeleccionada == null) {
//         if (carta.src.includes("reverso")) {
//             carta.src = "/images/card" + carta.getAttribute("data-id") + ".png";
//             cartaData = carta.id;
//             cartaSeleccionada = carta.getAttribute("data-id");
//         }
//     }
//     if (cartaSeleccionada != null) {
//         if (carta.src.includes("reverso")) {
//             carta.src = "/images/card" + carta.getAttribute("data-id") + ".png";
//             cartaData2 = carta.id;
//             cartaSeleccionada2 = carta.getAttribute("data-id");
//         }
//         if (cartaSeleccionada != null && cartaSeleccionada2 != null) {
//             if (cartaSeleccionada == cartaSeleccionada2) {
//                 cartaSeleccionada = null;
//                 cartaSeleccionada2 = null;
//                 txtParejas++;
//                 document.getElementById("parejas").innerText = txtParejas;
//                 document.getElementById("Coincidencia").play();
//                 if (txtParejas == 4) {
//                     document.getElementById("win").style.visibility = "visible";
//                 }

//             } else {
//                 document.getElementById("Error").play();

//                 setTimeout(() => {
//                     let carta1 = document.getElementById(cartaData);
//                     let carta2 = document.getElementById(cartaData2);


//                     if (carta1) carta1.src = "/images/reverso.png";
//                     if (carta2) carta2.src = "/images/reverso.png";

//                     // Resetear las variables
//                     cartaSeleccionada = null;
//                     cartaSeleccionada2 = null;
//                 }, 1000);

//             }


//         }
//     }

// }


