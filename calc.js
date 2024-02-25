function afterClick(val){

    document.getElementById('result').value += val
}

function del() {
    let resultElement = document.getElementById('result');
    let currentValue = resultElement.value;
    if (currentValue.length > 0) {
        let newValue = currentValue.substring(0, currentValue.length - 1);
        resultElement.value = newValue;
    }
}

function reset(){
    document.getElementById('result').value = " "
}

function calculate(){
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById('result').value = y
}

