let ok = document.getElementById("ok");

ok.addEventListener("click",(e)=>{

    e.preventDefault();

    //getting the number
    let number = document.getElementById('number').value;
    let from = document.getElementById("from").value; 
    let to = document.getElementById("to").value; 

    if(from == "decimal" && to == "binary")
    {
        let a = decimalToBinary(number);
        document.getElementById("ans").innerHTML = a;
    }
    else if (from == "decimal" && to == "hexa"){
        let a = decimalToHexa(number);
        document.getElementById("ans").innerHTML = a;
    }
    else if (from == "decimal" && to == "octal"){
        let a = decimalToOctol(number);
        document.getElementById("ans").innerHTML = a;
    }
 // satrting of binary
    else if (from == "binary" && to == "decimal"){
        let a = binaryToDecimal(number);
        document.getElementById("ans").innerHTML = a;
    }

    else if (from == "binary" && to == "hexa"){
        var digit = parseInt(number, 2).toString(16);
        document.getElementById("ans").innerHTML =  "Decimal is : " +digit;
    }

    
    else if (from == "binary" && to == "octal"){
        var digit = parseInt(number, 2).toString(8);
        document.getElementById("ans").innerHTML =  "Decimal is : " +digit;
    }
// starting hexcode 
    else if(from == "hexa" && to == "decimal")
    {
        var digit = parseInt(number,16);
        document.getElementById("ans").innerHTML =  "Decimal is : " +digit;
    }
    else if(from == "hexa" && to == "binary")
    {
        var digit = hex2bin(number)
        document.getElementById("ans").innerHTML =  "Binary is : " +digit;
    }

    else if(from == "hexa" && to == "octal")
    {
        yourNumber = parseInt(number, 16);
        yourNumber = yourNumber.toString(8)
        document.getElementById("ans").innerHTML =  "Octol is : " +yourNumber;
    }

// octal

    else if(from == "octal" && to == "decimal")
    {
        yourNumber = parseInt(number, 8);
        document.getElementById("ans").innerHTML =  "Decimal is : " +yourNumber;
    }
    
    else if(from == "octal" && to == "binary")
    {
        yourNumber = parseInt(number, 8);
        yourNumber = yourNumber.toString(2);
        document.getElementById("ans").innerHTML =  "Binary is : " +yourNumber;
    }
    else if(from == "octal" && to == "hexa")
    {
        yourNumber = parseInt(number, 8);
        yourNumber = yourNumber.toString(16);
        document.getElementById("ans").innerHTML =  "Hexa is : " +yourNumber;
    }

    else{
        document.getElementById("ans").innerHTML =  "Fill correct information"
    }

})

function decimalToBinary(a)
{
    let x = Number(a);
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) 
    {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }

    return "Binary digits are : " +bin;
}

function decimalToHexa(a)
{
    a = Number(a)
    let hexStr = a.toString(16);
    return "Hexa decimal digits are : "+hexStr;
}

function decimalToOctol(a)
{
    a = Number(a)
    let octol = a.toString(8);
    return "Octol code is : " +octol
}

function binaryToDecimal(a)
{
    var digit = parseInt(a, 2);
    return "Decimal is : " +digit
}

function hex2bin(hex){
    return ("00000000" + (parseInt(hex, 16)).toString(2).substring(-8));
}