/* Javascript File */
document.getElementById("btn1").addEventListener("click", login);
document.getElementById("btn2").addEventListener("click", remove);
document.getElementById("btn3").addEventListener("click", message);

function login() {
  document.getElementById("btn1").innerHTML = "Logout";
}
function remove() {
  document.getElementById("btn2").style.display="none";
}
function message() {
  alert("Ninja was liked");
}