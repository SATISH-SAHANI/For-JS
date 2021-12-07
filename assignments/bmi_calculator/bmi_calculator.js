// This function should return the BMI for a person 
function BMICalculator(mass, height) {

    if (height <= 0 || mass <= 0) {
        return `INVALID INPUT`;
    }
    else {
        const bmi = (mass) / (height * height);
        return bmi;
    }

}

module.exports = BMICalculator;
