addEventListener("DOMContentLoaded", (e)=>{
    let pag = document.querySelector('#pago')
    let hora = document.querySelector("#myForm");
    let ventane = document.querySelector("dialog");
    let Close = document.querySelector("#close");
    let cont = 0


    
    hora.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        let preciohora = 5208.33
        let mihora = dataInput.hora
        mihora*=preciohora
        tot = Math.round(mihora)
        pag.innerHTML = mihora

        ventane.showModal();
        if(cont < 50) {
            let mytabla = document.querySelector('tbody');
            mytabla.insertAdjacentHTML('beforeend',`
            <tr>
                <td>${dataInput.nombre}</td>
                <td>${dataInput.hora}</td>
                <td>${tot}</td>
                <td>${tot*30}</td>
            </tr>
            `)
            cont++;
        }
    })

    Close.addEventListener("click", (e)=>{
        ventane.close();
    })



})