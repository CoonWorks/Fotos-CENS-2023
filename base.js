function modalopen(n){
  var modal = document.getElementById("modal-"+n);
  modal.style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function modalclose(n){
  var modal = document.getElementById("modal-"+n);
  modal.style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
}
