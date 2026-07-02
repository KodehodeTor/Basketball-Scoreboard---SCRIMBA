// Functions for increments

let count1 = 0;
let count2 = 0;
let count11 = document.getElementById("count1");
let count22 = document.getElementById("count2");

// HOME

function inc11(count) {
  count1 += 1;
  count11.textContent = count1;
}

function inc21() {
  count1 += 2;
  count11.textContent = count1;
}

function inc31() {
  count1 += 3;
  count11.textContent = count1;
}

// GUEST

function inc12() {
  count2 += 1;
  count22.textContent = count2;
}

function inc22() {
  count2 += 2;
  count22.textContent = count2;
}

function inc32() {
  count2 += 3;
  count22.textContent = count2;
}

function reset() {
  count1 = 0;
  count2 = 0;
  count11.textContent = "0";
  count22.textContent = "0";
}
