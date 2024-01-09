const convertButton = document.querySelector("#button")
const currencySelect = document.querySelector("#currency-select")

function convertValues() {
  const inputcurrencyValue = document.querySelector("#input-currency").value
  const dolarToday = 4.8
  const euroToday = 5.3
  const libraToday = 6.2

  if (currencySelect.value == "dolar") {
    document.querySelector("#dolar").innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
      }).format(inputcurrencyValue / dolarToday)
  }

  if (currencySelect.value == "euro") {
    document.querySelector("#dolar").innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR",
      }).format(inputcurrencyValue / euroToday)
  }

  if (currencySelect.value == "libra") {
    document.querySelector("#dolar").innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "GBP",
      }).format(inputcurrencyValue / libraToday)
  }

  document.querySelector("#real").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputcurrencyValue)
}

function changeCurrency (){
  const currencyName = document.querySelector("#currency-name")
  const currencyImage = document.querySelector(".currency-img")
 
   if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar Americano"
      currencyImage.src = './assets/estados-unidos (1) 1.png'
   }
 
   if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src= 'assets/euroo.png'
   }

   if (currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra"
      currencyImage.src= 'assets/libra 1.png'
   }

   convertValues()
} 

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)
