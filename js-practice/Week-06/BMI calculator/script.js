const form = document.querySelector("form")

const bmiFormula = function (weight, height) {
    return (weight / ((height * weight) / 10000)).toFixed(2)
}

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = document.querySelector("#height").value
    const weight = document.querySelector("#weight").value
    const result = document.querySelector("#results")

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`
    } else {
        const bmi = bmiFormula(weight, height)
        let guideResult;
        if (bmi < 18.6) {
            guideResult += "Underweight"      
        } else if (bmi > 18.6 && bmi < 24.9) {
            guideResult += "Normal Range"
        } else {
            guideResult +="Overweight"
        }
        result.innerHTML = `<span>BMI weight is ${bmi} and you are ${guideResult}</span>`
    }
})