let displayvalue="";

function appendDisplay(value) {
    if (displayvalue === "Infinity" || displayvalue === "Error") {
    
        displayvalue = value;
    } else {
      
        displayvalue += value;
    }
    
  
    document.querySelector(".display").value = displayvalue; 
}

function cleardisplay() {
    displayvalue = "";
    document.querySelector(".display").value = displayvalue;
}

function deletedisplay() {
    displayvalue = displayvalue.slice(0, -1);
    document.querySelector(".display").value = displayvalue;
}


function Result() {
    try {
        const result = eval(displayvalue);
        displayvalue = result.toString();
        document.querySelector(".display").value = displayvalue;
    } catch (error) {
        displayvalue = "Error";
        document.querySelector(".display").value = displayvalue;
    }
}