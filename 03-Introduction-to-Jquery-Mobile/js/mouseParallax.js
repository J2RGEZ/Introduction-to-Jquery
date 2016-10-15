$(document).mousemove(function(e){

	var posX = e.clientX/100;

	$("#cristiano").css({"left": 38 + posX/3 + "%"})
	$("#hazard").css({"left": 5 - posX/5 + "%"})
	$("#suarez").css({"right": 5 - posX/5 + "%"})
	$("#messi").css({"right": 13 + posX/6 + "%"})
	$("#zlatan").css({"right": 20 + posX/3 + "%"})
	$("#totti").css({"right": 30 - posX/2 + "%"})
	$("#ozil").css({"left": 34 - posX/5 + "%"})
	$("#james").css({"left": 28 + posX/2 + "%"})
	$("#iniesta").css({"left": 20 - posX/2 + "%"})

});