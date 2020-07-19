document.getElementById("Name_on_Card_Input").addEventListener("keyup",function(){
    var a = this.value;
    document.getElementById("Name_on_Card").innerHTML = a;
});

document.getElementById("Card_Number_Input").addEventListener("keyup",function(){
    var a = this.value;
    document.getElementById("Card_Number_Fill_Out").innerHTML = a;
});

document.getElementById("Valid_Through_Input").addEventListener("keyup",function(){
    var a = this.value;
    document.getElementById("Valid_Through").innerHTML = a;
});

