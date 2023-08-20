function myFuntion(){
    alert("Hello CSMJU");
    
    console.log("Hello Monday");

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML = "change.....";
    document.getElementById("header1").style.color = "#FF0000";

    var x =8;
    var y =20;
    var z =3;

    //หาค่าเฉลี่ย -->header2

document.getElementById("header2").innerHTML = 
        ((x + y + z) / 3).toFixed(2);
}


// JavaScript code defining the functions
function likeFunction() {
    
    var resultElement = document.getElementById("result");
    var currentLikes = parseInt(resultElement.textContent);
    resultElement.textContent = currentLikes + 1;
    // เพิ่ม counter 1
    counter++;
    document.getElementById("result").innerText = counter;
    //ปรับขนาดตัวอักษรเพิ่มขึ้น1
    document.getElementById("result").style.fontSize=10+counter+"px";
}

function loveFunction() {
   
    var resultElement = document.getElementById("result");
    var currentLikes = parseInt(resultElement.textContent);
    resultElement.textContent = currentLikes + 1;
}