
//korrutab
function calculate(val, currency){
    return (val* currency).toFixed(3);
    //toFixed(3) -? 3 märki peale komat


}

function radioChange(event) {
    var vastus=document.getElementById("vastus");
    var kogus=document.getElementById("kogus");
    var vastus2=document.getElementById("vastus2");
    var kogus2=document.getElementById("kogus2");



    const dollar=1.16;
    const rub=84.20;
    const frank=1.077;
    const kroon=10.65;

    function validateForm() {
        let x = document.forms["var1"]["kogus"].value;
        if (x == "") {
            alert("Sisesta kogus");
            return false;
        }
    }


    var inputValue=kogus.value;
    if (event.target.id == "dollar") {
        vastus.innerHTML = calculate(inputValue, dollar) + "$";
        pilt.src="img/doolar.jpg"
    } else if (event.target.id == "rub") {
        vastus.innerHTML = calculate(inputValue, rub) + "rub";
        pilt.src="img/rub.jpg"

    } else if (event.target.id == "kroon") {
        vastus.innerHTML = calculate(inputValue, kroon) + "sek";
        pilt.src="img/kroon.jpg"

    } else if (event.target.id == "frank") {
        vastus.innerHTML = calculate(inputValue, rub) + "frank";
        pilt.src="img/frank.jpg"


    }

}
function selectOptionChange(event){


    var inputValue=kogus2.value;

    const dollar=1.16;
    const rub=84.20;
    const frank=1.077;
    const kroon=10.65;

    if (event.target.value === "dollar") {
        vastus2.innerHTML = calculate(inputValue, dollar) + "$";
        pilt.src="img/dollar.png"

    } else if (event.target.value === "rub") {
        vastus2.innerHTML = calculate(inputValue, rub) + "rub";
        pilt.src="img/rub.png"

    } else if (event.target.value === "kroon") {
        vastus2.innerHTML = calculate(inputValue, kroon) + "sek";
        pilt.src="img/kroon.png"

    } else if (event.target.value === "frank") {
        vastus2.innerHTML = calculate(inputValue, rub) + "frank";
        pilt.src="img/frank.png"


    }


}
function inputCurrencyText(){
    const dollar=1.16;
    const rub=84.20;
    const frank=1.077;
    const kroon=10.65;


    var inputValue=document.getElementById("kogus3").value;
    var inputText=document.getElementById("valuutanimi").value;
    var vastus3=document.getElementById("vastus3");
    if(inputText=="dollar"){
        vastus3.innerHTML=calculate(inputValue,dollar) + "$";


    }




}