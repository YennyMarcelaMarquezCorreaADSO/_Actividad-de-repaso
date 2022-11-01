addEventListener("DOMContentLoaded", (e)=>{

let ventas  = document.querySelector("#ventas")
let res = document.querySelector("#resultado")
let vent1 = document.querySelector("#venta1")
let vent2 = document.querySelector("#venta2")
let vent3 = document.querySelector("#venta3")
let ventane = document.querySelector("dialog")
let Close = document.querySelector("#close")
let sueldoBase = 475800


ventas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let dataInput = Object.fromEntries(new FormData(e.target))
    let comision1 = Number(dataInput.vent1)*0.10
    let comision2 = Number(dataInput.vent2)*0.10
    let comision3 = Number(dataInput.vent3)*0.10
    let comision = comision1 + comision2 + comision3
    let totalcomision = sueldoBase + comision
    res.innerHTML = totalcomision

        ventane.showModal();
        let mytabla = document.querySelector('tbody');
        mytabla.innerHTML = ""
        mytabla.insertAdjacentHTML('beforeend',`
        <tr>
            <td>${dataInput.venta1}</td>
            <td>${dataInput.venta2}</td>
            <td>${dataInput.venta3}</td>
            <td>${sueldoBase}</td>
            <td>${totalcomision}</td>
        </tr>
        `)

    })

    Close.addEventListener("click", (e)=>{
        ventane.close();
    })


})