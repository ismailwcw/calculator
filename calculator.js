$(document).ready(function () {
  let display = $(".display-text");
  let input = "";

  $(".numbers").on("click", function () {
    let btnvalue = $(this).text();
    console.log("Button clicked:", btnvalue);

    // Clear (AC)
    if (btnvalue === "AC") {
      input = "";
      display.text("0");
      console.log("Cleared input");
      return;
    }

    // Backspace
    if ($(this).find(".material-icons").length > 0) {
      input = input.slice(0, -1);
      console.log("Backspace pressed. Current input:", input);
      if (input === "") {
        display.text("0");
      } else {
        display.text(input);
      }
      return;
    }

    // Decimal point
    if (btnvalue === ".") {
      // Only allow one decimal point in the current number
      let parts = input.split(/[\+\-\*\/]/); // split by operator
      let lastPart = parts[parts.length - 1];
      if (!lastPart.includes(".")) {
        input += btnvalue;
        console.log("Added decimal point. Current input:", input);
        display.text(input);
      } else {
        console.log("Decimal already exists in current number.");
      }
      return;
    }

    if (input === "0") {
      input = btnvalue;
    } else {
      input += btnvalue;
    }

    console.log("Updated input:", input);
    display.text(input);
  });

  $(".sym").on("click", function () {
    let btnvalue = $(this).html();
    console.log("Symbol clicked:", btnvalue);

    // Convert symbols to JS-friendly ones
    if (btnvalue === "&times;") {
      btnvalue = "*";
    } else if (btnvalue === "&divide;") {
      btnvalue = "/";
    }

    // Equals button
    if (btnvalue === "=") {
      try {
        console.log("Evaluating input:", input);
        let result = eval(input).toString();
        display.text(result);
        input = result;
        console.log("Result:", result);
      } catch (error) {
        console.log("Evaluation error:", error);
        display.text("Error");
        input = "";
      }
      return;
    }

    // Append symbol to input
    input += btnvalue;
    console.log("Appended operator. Current input:", input);
    display.text(input);
  });
});
