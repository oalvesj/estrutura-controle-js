/**
* JS - Controle de uma lâmpada
* @author Osni Alves Junior
*/

function on(){
document.getElementById("lamp").src = "on.jpg";
}

function off(){
document.getElementById("lamp").src = "off.jpg";
}

function blink(){
	var intervalo = 0;
	var contador = 0;
	while(contador < 10){
		intervalo += 300;
		setTimeout(function(){
		document.getElementById("lamp").src = "on.jpg";
		}, intervalo);
		setTimeout(function(){
		document.getElementById("lamp").src = "off.jpg";
		}, intervalo + 150); // Adiciona um atraso para o "off" após "on"
		contador++
	}
}
