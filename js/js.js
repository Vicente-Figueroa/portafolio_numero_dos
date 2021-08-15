//Funcion de menu de hamburguesa

function menu() {
  var boton = document.getElementById("menu");
  boton.style.display = "none";
}

function boton() {
  var x = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
