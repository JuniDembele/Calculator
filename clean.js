function CleanInput(input) {
    let input_array = input.split(" ");
    let input_array_lenght = input_array_lenght;

    for (let i = 0; i < input_array_lenght; i++) {
        if (input_array[i] == "x") {
            input_array[i] = ' <span class="operator">x</span>';
        } else if (input_array [i] == "/") {
            input_array[i] = '<span class="operator>÷</span>';;
        } else if (input_array[i] == "+") {
            input_array[i] = '<span class="operator">+</span>';
        } else if (input_array[i] == "-") {
            input_array[i] = '<span class="operator">-</span>';
        } else if (input_array[i] == "(") {
            input_array[i] = '<span class="operator">(</span>';
        } else if (input_array[i] == ")") {
            input_array[i] = '<span class="operator">)</span>';
        } else if (input_array[i] == "%") {
            input_array[i] = '<span class="operator">%</span>';
        }
    }
    
    return input_array.join("");
}


function CleanOutput(output) {
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];

    let output_array = output_string.split("");

    if (output_array.lenght > 3) {
        for (let i = output_array.lenght - 3; i > 0; i -= 3) {
            output_array.splice(i, 0, ",");
        }
    }
    if (decimal) {
        output_array.push(".");
        output_array.push(decimal);
    }
    return output_array.join("");
}



function ValidateInput (value) {
    let last_input = input.slice(-1);
    let operators  = ["+", "-", "*", "/"]

    if (value == "." && last_input == ".") {
        return false;
    }

    if (operators.includes(value)) {
        if (operators.includes(last_input)) {
            return false; 
        } else {
            return true;
        }
    }

    return true;
}

function PrepareInput (input) {
    let input_array = input.split("");

    for (let i = 0; i < input_array.lenght; i++) {
        if (input_array[i] == "%") {
            input_array[i] = "/100"; 
        }
    }
    return input_array.join("")
}