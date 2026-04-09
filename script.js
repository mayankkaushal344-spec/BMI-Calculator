const form = document.querySelector('form');
const result = document.querySelector('#results');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const heightInput = document.querySelector('#height').value.trim();
    const weightInput = document.querySelector('#weight').value.trim();

    const height = Number(heightInput);
    const weight = Number(weightInput);

    
    if (!height || height <= 0 || isNaN(height)) {
        showResult("⚠️ Please enter a valid height", "red");
        return;
    }

    if (!weight || weight <= 0 || isNaN(weight)) {
        showResult("Please enter a valid weight", "red");
        return;
    }

    
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    
    let category = "";
    let color = "";

    if (bmi < 18.6) {
        category = "Underweight";
        color = "blue";
    } else if (bmi <= 24.9) {
        category = "Normal";
        color = "green";
    } else {
        category = "Overweight";
        color = "red";
    }

    showResult(`Your BMI is ${bmi} (${category})`, color);
});


function showResult(message, color) {
    results.innerHTML = `<span>${message}</span>`;
    results.style.color = color;
}