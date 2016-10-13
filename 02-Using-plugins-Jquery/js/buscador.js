var consulta = $("table").DataTable();

$("input[type='search']").keyup(function(event) {
  consulta.search($(this).val()).draw();
});
