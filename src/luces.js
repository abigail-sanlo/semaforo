import React from 'react';
const lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contadorDeLuz = 0;

const mostrarLuz = () =>{
    lucesDelCirculo[contadorDeLuz].className = 'luces-circulo';
    contadorDeLuz++;

    if(contadorDeLuz > 2) contadorDeLuz = 0;

    const luzActual = lucesDelCirculo[contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'))
}
setInterval(mostrarLuz,2000)

function LuceSem(){
    return(
        <div className="container">
            <div className="stick"></div>
        <div className="semaforo">
            <span className="luces-circulo red" color = "red"></span>
            <span className="luces-circulo" color="yellow"></span>
            <span className="luces-circulo" color="green"></span>
        </div>
        <div class="car"></div> 
        {/* <div className="floor"></div> */}
    </div>     
    )   
}
export default LuceSem