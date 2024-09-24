function adicionarCaractere(num)  {
   const ValueDisplay = document.querySelector(".display").value

   document.querySelector(".display").value = ValueDisplay + num
}

function limparTela() {
    document.querySelector(".display").value = ""
}

function calcular() {
    const ValueDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(ValueDisplay)
}

function inverterNumero() {
    const ValueDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = ValueDisplay * -1
}