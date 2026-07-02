// Functions for increments

let count1 = 0;
let count2 = 0;
let count11 = document.getElementById("count1");
let count22 = document.getElementById("count2");

// let inc1btn = document.getElementById("inc1-btn");
// let inc2btn = document.getElementById("inc2-btn");
// let inc3btn = document.getElementById("inc3-btn");

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

// GUESTS

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

function reset() {}
