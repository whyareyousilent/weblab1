let numbersSet = new Set(); 

function inputNumbers() {
    let input = document.getElementById('input-number');
    let number = parseInt(input.value);
    input.value = '';
    let result = '';
    if(!numbersSet.has(number)){
        result = 'this is a new number';
    }else{
        result = 'we already have this';
    }
    numbersSet.add(number);
    let outputLabel = document.getElementById('output');
    outputLabel.innerHTML = result;
}


// inputNumbers();