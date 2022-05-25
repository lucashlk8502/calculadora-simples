function insert(num){


var numero = document.querySelector('.visor').innerHTML

document.querySelector(".visor").innerHTML = numero + num


}



function clean(){

document.querySelector(".visor").innerHTML = ""


}



function calcular() {

    var visor = document.querySelector(".visor").innerHTML


    if(visor){

        document.querySelector(".visor").innerHTML = eval(visor)

    }


}

