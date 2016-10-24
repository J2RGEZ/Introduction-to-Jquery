var agregarFecha = null;
//Dragging elements with Jquery UI

$(".columnas").sortable({
  connectWith: ".bloque",
  handle: ".titulo"
});

//Add task form
$("#agregarTarea").click(function(event) {
  $("header form#agregar").slideToggle("fast");
  $("header form#buscarTarea").slideToggle("fast");
});

//Calendar
$("#fecha1").datepicker({
  changeMonth=true,
  changeYear=true
});

$("#fecha2").datepicker({
  changeMonth=true,
  changeYear=true
});

//Save task
$("#guardar").click(function(event) {
  agregarFecha = $("#fecha1").val();
  $(.columnas).append('Some text')
});
