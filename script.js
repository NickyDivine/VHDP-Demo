function startApp() {
  document.querySelector(".hero").classList.add("hidden");
  document.getElementById("deviceGrid").classList.remove("hidden");
}

function showDetail(device) {
  const detailBox = document.getElementById("deviceDetail");
  let text = "";
  switch (device) {
    case "TV":
      text = "Covers screen damage, power issues, and more.";
      break;
    case "Xbox":
      text = "Gaming consoles like Xbox are covered with a $49 deductible.";
      break;
    case "Laptop":
      text = "Protection from accidental drops, spills, and breakdowns.";
      break;
    case "Tablet":
      text = "Broken screens? Covered. Malfunctions? Covered.";
      break;
  }
  detailBox.innerText = text;
  document.getElementById("comparison").classList.remove("hidden");
  document.getElementById("cta").classList.remove("hidden");
}
