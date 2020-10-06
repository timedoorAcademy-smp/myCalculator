function calculator() {

    //variable angka satu
    var firstNumber= parseInt(document.getElementById("number1").value);

    //variable angka dua
    var secondNumber = parseInt(document.getElementById("number2").value);

    //variable operasi aritmatik
    var op = document.getElementById("op").value;

    //variable angka hasil
    var result = document.getElementById("result");

    //variable untuk total angka satu dan angka dua
    var total;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Fill the form with number!')

    } else {

        if (op == "+") {
            total = firstNumber + secondNumber;
        } else if (op == "-") {
            total = firstNumber - secondNumber;
        } else if (op == "x") {
            total = firstNumber*secondNumber;
        } else if( op =="/" ){
            total = firstNumber / secondNumber;
        }
    }

    result.value = total;
}