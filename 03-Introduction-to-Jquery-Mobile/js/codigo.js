$(window).load(function(){

	$("#preload").delay(350).fadeOut("slow");
	$("body").delay(350).css({"overflow-y":"scroll"})

});

var cargaObj = $("img");
var numCarga = 0;
var porcionPorcentaje = 0;


for(var i = 0; i < cargaObj.length; i++){

	$(cargaObj[i]).load(function(){

		numCarga++;

		porcionPorcentaje = 100 / cargaObj.length;

		$("#porcentajeCarga").html(parseInt(porcionPorcentaje*numCarga) + " %")
		$("#rellenoCarga").css({"width": porcionPorcentaje*numCarga + "%"})
	
	})
}

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

$(window).scroll(function(){

	var posY = window.pageYOffset;

	$("#bloque2").css({"top": -180 - posY/3 + "px"})
	$("#cristiano").css({"top": -250 + posY/5 + "px"})
	$("#grupos").css({"margin-left": -100 + posY/3.3 + "%"})

	if(posY > $("#bloque2").offset().top){

		$("#grupos").css({"margin":"auto"})

	}

	$("#estadios").css({"margin-left": 200 - posY/5.7 + "%"})

	if(posY > $("#bloque3").offset().top){

		$("#estadios").css({"margin":"auto"})

	}

})

$("nav#botonera ul li a").click(function(e){

	e.preventDefault();

	var href = $(this).attr("href");

	$(href).animatescroll({

		easing: "easeOutBounce",
		scrollSpeed:2000

	});

})

$.scrollUp({

	scrollText:"",
	scrollSpeed: 2000,
	 easingType: "easeOutBounce"

});

$("nav#botonesGrupo ul li").click(function(){

	$("#grupos").animate({height:0}, 500, "easeInBack")
	$("#grupos").animate({width:0}, 500, "easeInBack")
	$("#grupos").animate({height:400}, 800, "easeOutBounce")
	$("#grupos").animate({width:770}, 800, "easeOutBounce")

	var enlace = $(this).attr("enlace");

	$("#grupos img").hide(300);
	$(enlace).delay(1000).show(100);
	
});

$('.flexslider').flexslider({

	randomize: true,
	slideshowSpeed: 3000,
	animation: "slide"

});

$("ul#galeria li a").fancybox({

	openEffect  : 'elastic',
	closeEffect  : 'elastic',
	openSpeed: 150,
	closeSpeed: 150,
	helpers: {title: {type: "inside"}}

});

var consulta = $("table").DataTable();

$("input[type='search']").keyup(function(){

	consulta.search($(this).val()).draw();

})

$("#bloque5 button").click(function(){

	$("#bloque5 form").slideToggle("fast");

})