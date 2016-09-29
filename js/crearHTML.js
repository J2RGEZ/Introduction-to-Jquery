//creating HTML with Jquery

$("#boton3").click(function(event) {
  //$("#contenedor").html('<div id="c1">Adios</div>');
  //Adding content
  $("#contenedor").append('<div id="c2">Adios</div>');
  //Adding html before c1
  $("#c1").before('<h1>Titulo</h1>');
  //Adding html after c1
  $("#c1").after('<h3>Parrafo</h3>');
  //Adding new text before c1
  $("#c1").prepend('Bienvenidos ');
  //Changing text in c2
  $("#c2").text('Cualquier cosa');
});
