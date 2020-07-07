function getInputValue(){
    var inputVal = document.getElementById("inputBox").value;
    var abusive= {word:"abusive", type:"ADJ", def:"abizan"}

    if(inputVal == "abusive"){
        document.getElementById("returned").innerHTML= abusive.def;
    }else{
        document.getElementById("returned").innerHTML = inputVal;
    }
}

