// function calculateTotalPrice(quantity=2, price=15000000) {
//   let totalSum = quantity * price;
//   totalSum = totalSum.toLocaleString("ru-RU");
//   alert("Стоимость покупки: " + totalSum + " рублей");
// }


function calculateTotalPrice(quantity=2, price=15000000) {
    let totalSum = quantity * price;
    totalSum = totalSum.toLocaleString("ru-RU");
    document.getElementById("text").innerHTML = "Стоимость покупки: " + totalSum + " рублей";
  }