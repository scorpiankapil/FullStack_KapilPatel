function runTask14() {
  const numbers = [12, 25, 40, 55, 60];

  let mapped = numbers.map(n => n * 2);
  let filtered = numbers.filter(n => n > 30);
  let reduced = numbers.reduce((a, b) => a + b, 0);

  document.getElementById("output").innerHTML = `
    <h2>Array Outputs</h2>
    <p>Original Array: ${numbers}</p>
    <p>Mapped (×2): ${mapped}</p>
    <p>Filtered (>30): ${filtered}</p>
    <p>Sum (reduce): ${reduced}</p>
  `;
}
