function mitportfolio() {
  alert("Hej, verden!");
}
// viser h2 med mouseover
document
  .querySelector("#grundlæggendeweb")
  .addEventListener("mouseover", showh21);
document
  .querySelector("#grundlæggendeUI")
  .addEventListener("mouseover", showh22);
document.querySelector("#animation").addEventListener("mouseover", showh23);
document
  .querySelector("#grundlæggendeIndhold")
  .addEventListener("mouseover", showh24);

// fjerner h2 med mouseout
document
  .querySelector("#grundlæggendeweb")
  .addEventListener("mouseout", removeh21);
document
  .querySelector("#grundlæggendeUI")
  .addEventListener("mouseout", removeh22);
document.querySelector("#animation").addEventListener("mouseout", removeh23);
document
  .querySelector("#grundlæggendeIndhold")
  .addEventListener("mouseout", removeh24);

// funktioner som fjerner og viser h2
function showh21() {
  document.querySelector("#h2_1").style.display = "block";
}
function removeh21() {
  document.querySelector("#h2_1").style.display = "none";
}
function showh22() {
  document.querySelector("#h2_2").style.display = "block";
}
function removeh22() {
  document.querySelector("#h2_2").style.display = "none";
}
function showh23() {
  document.querySelector("#h2_3").style.display = "block";
}
function removeh23() {
  document.querySelector("#h2_3").style.display = "none";
}
function showh24() {
  document.querySelector("#h2_4").style.display = "block";
}
function removeh24() {
  document.querySelector("#h2_4").style.display = "none";
}
