addEventListener("DOMContentLoaded", (e)=>{
    let pag = dovument.querySelector('#pago')
    let hora = document.querySelector("#myForm");
    let ventane = document.querySelector("dialog");
    let Close = document.querySelector("#close");
    let cont = 0

    
    hora.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dataInput = Object.fromEntries(new FormData(e.target));
        let preciohora = 5208.33
        let myhora = dataInput.hora
        myhora*=preciohora
        D = Math.round(myhora)
        pag.innerHTML = myhora
    })

    Close.addEventListener("click", (e)=>{
        ventane.close();
    })

})