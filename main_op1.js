
const calcButton = document.getElementById('botonCalcular');
calcButton.addEventListener('click', convert);

function convert() {

    let unit= document.getElementById('unidad').value;
    let temp = document.getElementById('temperatura').value;
    let result = document.getElementById('resultado');

    if (unit=='Celcius') {
        
        result.innerHTML = `${temp} °C, son equivalente a ${convertCelcius(temp).toFixed(2)} °F`; 

    } else {

        result.innerHTML = `${temp} °F, son equivalente a ${convertFar(temp).toFixed(2)} °C`;

    }

}

function convertCelcius(temp) {

    return (temp * (9 / 5)) + 32
    
} 

function convertFar(temp) {

    return (temp - 32) * (5 / 9)

}


