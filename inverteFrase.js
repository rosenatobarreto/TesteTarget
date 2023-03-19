function inverterString() {
  const stringOriginal = document.getElementById("stringInput").value;
  let novaString = "";
  for (let i = stringOriginal.length - 1; i >= 0; i--) {
    novaString += stringOriginal[i];
  }
  document.getElementById("stringInvertida").textContent = novaString;
}