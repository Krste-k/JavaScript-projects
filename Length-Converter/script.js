let input = document.getElementById('input');
let result = document.getElementById('result')
let inputType = document.getElementById('inputType')
let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
input.addEventListener("change", myResult);
resultTypeValue.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.Value;

function myResult () {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

}

 //This is Meter to kiloMeter formula./////////
 //////////////////////////////////////////

if (inputTypeValue === "Meter" && resultTypeValue === "KiloMeter") {
result.value = Number(input.value) * 0.001;

}
else if (inputTipeValue === "Meter" && resultTypeValue === "Centimeter") {
    result.value =Number(input.value) * 100;

}
else if ( inputTypeValue === "Meter" && resultTypeValue === "Meter"){
    result.value = input.value
}



if (inputTypeValue === "KiloMeter" && resultTypeValue === "Meter") {
    result.value = Number(input.value) * 1000;
    
    }
    else if (inputTipeValue === "KiloMeter" && resultTypeValue === "Centimeter") {
        result.value =Number(input.value) * 100000;
    
    }
    else if ( inputTypeValue === "KiloMeter" && resultTypeValue === "KiloMeter"){
        result.value = input.value
    }



    if (inputTypeValue === "Centimeter" && resultTypeValue === "KiloMeter") {
        result.value = Number(input.value) * 0.00001;
        
        }
        else if (inputTipeValue === "Centimeter" && resultTypeValue === "Meter") {
            result.value =Number(input.value) * 0.01;
        
        }
        else if ( inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter"){
            result.value = input.value
        }
    

    

