const items = [
  // $99 fee items
  { id: "99-1", name: "Smartphone", fee: 99, icon: "📱" },
  { id: "99-2", name: "Laptop", fee: 99, icon: "💻" },
  { id: "99-3", name: "Tablet", fee: 99, icon: "📲" },
  { id: "99-4", name: "Smartwatch", fee: 99, icon: "⌚" },
  { id: "99-5", name: "Home Phone", fee: 99, icon: "☎️" },
  { id: "99-6", name: "Other Smartphone", fee: 99, icon: "📞" },

  // $49 fee items
  { id: "49-1", name: "Router", fee: 49, icon: "📡" },
  { id: "49-2", name: "Smart TV", fee: 49, icon: "📺" },
  { id: "49-3", name: "Gaming Console", fee: 49, icon: "🎮" },
  { id: "49-4", name: "Laptop Charger", fee: 49, icon: "🔌" },
  { id: "49-5", name: "Smart Home Device", fee: 49, icon: "🏠" },

  // No fee items
  { id: "0-1", name: "Headphones", fee: 0, icon: "🎧" },
  { id: "0-2", name: "Camera", fee: 0, icon: "📷" },
  { id: "0-3", name: "Printer", fee: 0, icon: "🖨️" },
  { id: "0-4", name: "Video Doorbell", fee: 0, icon: "🔔" },
  { id: "0-5", name: "Security System", fee: 0, icon: "🛡️" },
];

function createTile(item) {
  const div = document.createElement("div");
  div.className = "tile";
  div.dataset.fee = item.fee;
  div.dataset.id = item.id;
  div.title = item.name;
  div.tabIndex = 0;

  // Using emoji icons inline because we don't have images
  // You can replace this with <img src="icon_url" /> if you have icons
  const iconSpan = document.createElement("span");
  iconSpan.textContent = item.icon;
  iconSpan.style.fontSize = "36px";
  iconSpan.style.display = "block";
  iconSpan.style.marginBottom = "8px";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = item.name;

  div.appendChild(iconSpan);
  div.appendChild(nameSpan);

  div.addEventListener("click", () => {
    div.classList.toggle("selected");
    updateTotal();
  });
  div.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      div.classList.toggle("selected");
      updateTotal();
    }
  });

  return div;
}

function updateTotal() {
  const selected = document.querySelectorAll(".tile.selected");
  let total = 0;
  selected.forEach((tile) => {
    total += parseInt(tile.dataset.fee);
  });
  document.getElementById("grand-total").textContent = "$" + total;
}

function init() {
  const fee99Container = document.getElementById("fee-99");
  const fee49Container = document.getElementById("fee-49");
  const fee0Container = document.getElementById("fee-0");

  items.forEach((item) => {
    const tile = createTile(item);
    if (item.fee === 99) fee99Container.appendChild(tile);
    else if (item.fee === 49) fee49Container.appendChild(tile);
    else fee0Container.appendChild(tile);
  });
}

window.onload = init;
