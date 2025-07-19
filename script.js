document.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
  checkbox.addEventListener("change", updateTotal);
});

function updateTotal() {
  let total = 0;
  document.querySelectorAll("input[type=checkbox]:checked").forEach(cb => {
    total += parseInt(cb.getAttribute("data-price"));
  });
  document.getElementById("total").textContent = "$" + total.toLocaleString();

  const offer = document.getElementById("verizon-offer");
  if (total > 0) {
    offer.classList.remove("hidden");
    offer.textContent = `Verizon will cover up to $5,000 worth of tech for just $25/month.`;
  } else {
    offer.classList.add("hidden");
    offer.textContent = "";
  }
}