function filterBudget() {
  const value = document.getElementById("budgetSelect").value;
  const cards = document.querySelectorAll(".budget-card");

  cards.forEach(card => {
    if (value === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(value) ? "block" : "none";
    }
  });
}




const slider = document.getElementById("budgetSlider");
const output = document.getElementById("budgetValue");

output.innerHTML = "₹" + (slider.value/100000).toFixed(1) + " Lakhs";

slider.oninput = function() {
  output.innerHTML = "₹" + (this.value/100000).toFixed(1) + " Lakhs";
}
