
function generateNumber () {
  const min = Math.ceil (document.querySelector("#startNumber").value)
  const max = Math.floor (document.querySelector("#endNumber").value)
  
  const result =  Math.floor(Math.random() * (max - min + 1)) + min;

 
  
  const resultadoElement = document.getElementById("resultado")
  resultadoElement.innerText = "Número sorteado: " + result
}