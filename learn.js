alert("what You need?");
alert("A tool ?");
alert("Select One of them using Numbers");
alert("Remember, It will appares Only Once");

// tool selector

let tool = prompt(`1. Calculator\n2. Multi message genarator`);

if (tool == 1) {
    // Calculator

    let fNumber = prompt("Enter first number");
    let Oparetor = prompt("enter oparation select from '+, -, /, *' ");
    let sNumber = prompt("Enter Secend number");

    fNumber = Number(fNumber);
    sNumber = Number(sNumber);

    if (Oparetor == "+") {
        let sum = fNumber + sNumber;
        console.log("Result:", sum);
        console.log(typeof sNumber);
        console.log(typeof fNumber);
        console.log(typeof Oparetor);
        alert("your result: " + sum);
    } else if (Oparetor == "-") {
        let sum = fNumber - sNumber;
        console.log("Result:", sum);
        console.log(typeof sNumber);
        console.log(typeof fNumber);
        console.log(typeof Oparetor);
        alert("your result: " + sum);
    } else if (Oparetor == "/") {
        let sum = fNumber / sNumber;
        console.log("Result:", sum);
        console.log(typeof sNumber);
        console.log(typeof fNumber);
        console.log(typeof Oparetor);
        alert("your result: " + sum);
    } else if (Oparetor == "*") {
        let sum = fNumber * sNumber;
        console.log("Result:", sum);
        console.log(typeof sNumber);
        console.log(typeof fNumber);
        console.log(typeof Oparetor);
        alert("your result: " + sum);
    } else {
        console.log("an error occur");
    }
} else if (tool == 2) {
    // multiple message genarator

    let msg = prompt("Enter Your Full Message That Want to Multiply.");
    let multi = prompt("How many Time It Should Go 'Only in Numbers'?");

    let allMessages = "";
    for (let i = 1; i <= multi; i++) {
        // alert(msg);
        allMessages += i + " " + msg + "\n";
    }
    alert(allMessages);
} else {
    alert("Select option Carefully");
}
