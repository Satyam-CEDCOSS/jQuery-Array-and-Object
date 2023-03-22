// Main Data 
var products = [
  { id: 101, name: "Football", image: "football.png", price: 150 },
  { id: 102, name: "Tennis", image: "tennis.png", price: 120 },
  { id: 103, name: "Basket Ball", image: "basketball.png", price: 90 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 110 },
  { id: 105, name: "Soccer", image: "soccer.png", price: 80 },
];

// Display Function 
let arr = [];
function display() {
  $("#table_foot").show();
  let word = "";
  let tab_foot = "";
  let cnt = 0;
  let total_money = 0;
  let total_product = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].value * products[arr[i].id].price;
    total_money += sum;
    total_product += arr[i].value;
    word += `<tr><td><img src="./images/${
      products[arr[i].id].image
    }"></td><td>${
      products[arr[i].id].name
    }</td><td><button class="plus" id="${cnt}">+</button>${
      arr[i].value
    }<button class="minus" id="${cnt}">-</button></td><td>$${sum}</td><td><button class="delete" id="${cnt++}">Delete</button></td></tr>`;
  }
  tab_foot = `<tr><td></td><td></td><td>${total_product}</td><td>$${total_money}</td><td><button id="clear">Empty Cart</button></td></tr>`;
  $("#table_body").html(word);
  $("#table_foot").html(tab_foot);
  if (arr.length == 0) {
    $("#table_foot").hide();
  }
}

// Add to Cart Function 
$(document).ready(function () {
  $(".add-to-cart").click(function () {
    let ids = $(this).attr("id");
    if (arr.length == 0) {
      arr.push({ id: ids, value: 1 });
    } else {
      const found1 = arr.find((element) => element.id == ids);
      if (found1) {
        found1.value += 1;
      } else {
        arr.push({ id: ids, value: 1 });
      }
    }
    display();
  });
});

// Plus Button Function 
$(document).on("click", ".plus", function () {
  let plus_id = $(this).attr("id");
  const found2 = arr.find((element) => element.id == plus_id);
  found2.value += 1;
  display();
});

// Minus Button Function 
$(document).on("click", ".minus", function () {
  let minus_id = $(this).attr("id");
  const found3 = arr.find((element) => element.id == minus_id);
  if (found3.value > 1) {
    found3.value -= 1;
  } else {
    arr.splice(minus_id, 1);
  }
  display();
});

// Delete Button Function 
$(document).on("click", ".delete", function () {
  let delete_id = $(this).attr("id");
  arr.splice(delete_id, 1);
  display();
});

// Empty Cart Button Function 
$(document).on("click", "#clear", function () {
  arr = [];
  display();
});