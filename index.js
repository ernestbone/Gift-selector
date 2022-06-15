document.getElementById("btn").addEventListener("click", calculate)
const costEl = document.getElementById("cost-el")
const food = document.getElementById("food-select")
const transport = document.getElementById("transport-select")
 

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
    const totalCost = (Number(food.value) + Number(transport.value))
    costEl.innerHTML = totalCost
    if (food.value === ""){
        costEl.innerHTML = "Please select a food option"
    }
    if (transport.value === ""){
          costEl.innerHTML = "Please select a transport option"
    }
    if (food.value === "" && transport.value === ""){
        costEl.innerHTML = "You have not selected any option"
    }
    
}

 