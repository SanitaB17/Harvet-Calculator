// List of mushroom products and hidden prices
const PRODUCTS = [
  { id: 1, name: "5lb Button Small", weight: 5, price: 1.12 },
  { id: 2, name: "5lb Cup", weight: 5, price: 1.06 },
  { id: 3, name: "5lb Brown Chestnut", weight: 5, price: 1.8 },
  { id: 4, name: "5lb Class 2", weight: 5, price: 0.51 },
  { id: 5, name: "3 kg Button", weight: 6.6, price: 1.48 },
  { id: 6, name: "1.5 Flat Chip Annaghmoore", weight: 3.3, price: 0.68 },
  { id: 7, name: "7kg Cup", weight: 15.432, price: 3.27 },
  { id: 8, name: "4lb Flat  Chip", weight: 4, price: 0.83 },
  { id: 9, name: "3lb Cup", weight: 3, price: 0.66 },
  { id: 10, name: "PPF Brown 250g Flat", weight: 0.551, price: 0.129 },
  { id: 11, name: "PPF Blue 250g Flat", weight: 0.551, price: 0.129 },
  { id: 12, name: "PPF Clear 250g Flat 3-6", weight: 0.55, price: 0.129 },
  { id: 13, name: "PPF Clear 250g Flat 4-5", weight: 0.55, price: 0.129 },
  { id: 14, name: "PPF Carboard 250g Flat 4-5", weight: 0.55, price: 0.13 },
  { id: 15, name: "Duraki 150g Flat", weight: 0.331, price: 0.113 },
  { id: 16, name: "Duraki 150g Flat Rpet x 16", weight: 0.33, price: 0.113 },
  { id: 17, name: "200g Button ", weight: 0.44, price: 0.22 },
  { id: 18, name: "150g Button", weight: 0.33, price: 0.175 },
  { id: 19, name: "200g Cup Small", weight: 0.44, price: 0.124 },
  { id: 20, name: "250g Sliced", weight: 0.44, price: 0.113 },
  { id: 21, name: "250g Cup Blue", weight: 0.55, price: 0.155 },
  { id: 22, name: "250g Cup Brown Punnet", weight: 0.55, price: 0.155 },
  { id: 23, name: "250g Cup Rpet", weight: 0.55, price: 0.155 },
  { id: 24, name: "300g Cups Rpet", weight: 0.66, price: 0.175 },
  { id: 25, name: "300g Cups Blue", weight: 0.66, price: 0.17 },
  { id: 26, name: "300g Cup Carboard", weight: 0.66, price: 0.17 },
  { id: 27, name: "400g Rpet Cup", weight: 0.88, price: 0.227 },
  { id: 28, name: "433g Mushroomst", weight: 0.95, price: 0.247 },
  { id: 29, name: "400g Brown Cup", weight: 0.88, price: 0.22 },
  { id: 30, name: "Hitchen (4lb Flats 85-96mm)", weight: 4, price: 0.896 },
  { id: 31, name: "OVP Sleepy(70-100x23-29)", weight: 4, price: 0.834 },
  { id: 32, name: "OVP Flats(80-100mm)", weight: 4, price: 0.6 },
  { id: 33, name: "Walsh 80-100 4lb Chip", weight: 4, price: 0.618 },
  { id: 34, name: "Walsh 70-90 4lb Chip", weight: 4, price: 0.618 },
  { id: 35, name: "OVP Flat 70-90mm", weight: 4, price: 0.618 },
  { id: 36, name: "Small Value Pack 400g", weight: 0.84, price: 0.11 },
  { id: 37, name: "Stalks 2.8kg/6lb", weight: 6, price: 0.247 },
  { id: 38, name: "150g Sliced", weight: 0.33, price: 0.196 },
  { id: 39, name: "650g Value Pack", weight: 1.43, price: 0.19 },
  { id: 40, name: "250g Value Pack", weight: 0.55, price: 0.08 },
  { id: 41, name: "2.5kg Cup Walsh", weight: 5.5, price: 1.03 },
  { id: 42, name: "2.5kg Button Walsh", weight: 5.51, price: 1.21 },
];

// Conversion functions
function lbToKg(lb) {
  return lb * 0.453592;
}
function kgToLb(kg) {
  return kg / 0.453592;
}

// Exchange rate EUR → THB
const EUR_TO_THB = 37.45;

// Render product inputs
const productList = document.getElementById("productList");

PRODUCTS.forEach((product) => {
  const row = document.createElement("div");
  row.className = "d-flex justify-content-between align-items-center mb-3";

  row.innerHTML = `
        <strong>${product.name}</strong>
        <input type="number" min="0" step="1" class="form-control" id="qty-${product.id}" style="max-width: 120px;">
    `;
  productList.appendChild(row);
});

// Calculate totals
function calculateTotals() {
  let totalLb = 0; // sum all products in lb
  let totalPriceEUR = 0;

  PRODUCTS.forEach((product) => {
    const qty = Number(document.getElementById(`qty-${product.id}`).value);
    if (qty > 0) {
      totalLb += qty * product.weight; // weight as lb
      totalPriceEUR += qty * product.price;
    }
  });

  const totalKg = lbToKg(totalLb); // convert total lb to kg
  const totalPriceTHB = totalPriceEUR * EUR_TO_THB;

  document.getElementById("totalWeight").textContent = `${totalKg.toFixed(
    2,
  )} kg / ${totalLb.toFixed(2)} lb`;
  document.getElementById("totalPrice").textContent = `${totalPriceEUR.toFixed(
    2,
  )} € / ${totalPriceTHB.toFixed(2)} THB`;
}

// Clear all inputs and totals
function clearAll() {
  PRODUCTS.forEach((product) => {
    document.getElementById(`qty-${product.id}`).value = "";
  });
  document.getElementById("totalWeight").textContent = "0 kg / 0 lb";
  document.getElementById("totalPrice").textContent = "0.00 € / 0.00 THB";
}
