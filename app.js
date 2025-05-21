
// Ejemplo 1
$("#botonColor").on("click", function() {
  $("#caja1").css("background-color", "lightblue");
});

// Ejemplo 2
$("#zona").on("mouseover", function() {
  $("#mensajeMouse").text("¡Estás sobre la caja!");
}).on("mouseout", function() {
  $("#mensajeMouse").text("Pasa el mouse por la caja");
});

// Ejemplo 3
$("#textoInput").on("input", function() {
  $("#contador").text($(this).val().length);
});

// Ejemplo 4
$("#selector").on("change", function() {
  $("#opcionElegida").text("Elegiste: " + $(this).val());
});

// Ejemplo 5
let agrandada = false;
$("#cajaDoble").on("dblclick", function() {
  $(this).css({
    width: agrandada ? "100px" : "200px",
    height: agrandada ? "100px" : "200px"
  });
  agrandada = !agrandada;
});

// Ejercicio 1
$("#campoTecla").on("keydown", function(e) {
  $("#tecla").text(e.key);
});

// Ejercicio 2
$("#campoEstilo").on("focus", function() {
  $(this).css("border", "2px solid red");
}).on("blur", function() {
  $(this).css("border", "2px solid gray");
});

// Ejercicio 3
$("#noDerecho").on("contextmenu", function(e) {
  e.preventDefault();
  alert("Clic derecho deshabilitado.");
});

// Ejercicio 4
$("#cajaColor").on("mouseenter", function() {
  $(this).css("background-color", "pink");
}).on("mouseleave", function() {
  $(this).css("background-color", "gray");
});

// Ejercicio 5
$("#validaTexto").on("keyup", function() {
  const texto = $(this).val().toLowerCase();
  if (texto === "javascript") {
    $("#mensajeValidacion").text("✅ ¡Palabra correcta!");
  } else {
    $("#mensajeValidacion").text("❌ Intenta con otra palabra");
  }
});
