// Get the selected weight unit
const unitArray = ['pounds', 'grams', 'kilograms', 'ounces']

const solve = e => {
    // get the selected unit from the dropdown
    let selectedUnit = e.target.value.toLowerCase();

    // get the input, and listen for an input event
    document.getElementById('figureInput').addEventListener('input', event => {
        // pass the input into the convertWeight function
        let convertedObject = convertWeight(selectedUnit, event.target.value)

        // remove the 'hide' class for any elements that has it before re-adding the values
        document.querySelectorAll('.card').forEach(el => el.classList.contains('hide') ? el.classList.remove('hide') : console.log(el.classList.length))

        // hide the selected value and display all remaining cards
        document.getElementById(selectedUnit).parentElement.parentElement.classList.add('hide');
        setVisibility('output', true);

        // populate all fields except the '----' part
        if (selectedUnit != '-----') {
            document.getElementById('pounds').innerHTML = convertedObject.pounds
            document.getElementById('ounces').innerHTML = convertedObject.ounces
            document.getElementById('grams').innerHTML = convertedObject.grams
            document.getElementById('kilograms').innerHTML = convertedObject.kg   
        }
    })

}

const convertWeight = (unit, value) => {
    let kg;
    let grams;
    let ounces;
    let pounds;

    let convertedArray = {}

    if (unit === 'pounds') {
        kg = value / 2.2046
        grams = value / 0.0022046
        ounces = value * 16

        convertedArray.kg = kg
        convertedArray.grams = grams
        convertedArray.ounces = ounces

    } else if (unit === 'grams') {
        kg = value / 1000
        ounces = value / 28.35
        pounds = value / 454

        convertedArray.kg = kg
        convertedArray.ounces = ounces
        convertedArray.pounds = pounds

    } else if (unit === 'ounces') {
        kg = value / 35.274
        grams = value * 28.35
        pounds = value / 16

        convertedArray.kg = kg
        convertedArray.grams = grams
        convertedArray.pounds = pounds

    } else if (unit === 'kilograms') {
        grams = value * 1000
        ounces = value * 35.274
        pounds = value * 2.2046

        convertedArray.grams = grams
        convertedArray.ounces = ounces
        convertedArray.pounds = pounds

    }
    return convertedArray
}

function setVisibility(id, bool) {
    if (bool) {
        document.getElementById(id).style.visibility = 'visible'
    } else {
        document.getElementById(id).style.visibility = 'hidden'
    }
}

document.getElementById('unit-select').addEventListener('click', e => {
    // hide the output
    setVisibility('output', false);

    // clear the input form
    document.getElementById('figureInput').value = '';
    // solve
    solve(e);
})

// hide the output on load
setVisibility('output', false);



