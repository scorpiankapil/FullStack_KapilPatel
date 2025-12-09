function runTask13() {
  let age = prompt("Enter your age:");
  age = Number(age);

  let eligibility = age >= 18 ? "Eligible" : "Not Eligible";

  document.getElementById("result").innerHTML =
    `<h2>Your Age: ${age}</h2><p>Status: ${eligibility}</p>`;
}
