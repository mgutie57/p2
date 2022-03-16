console.log(window);

//toggle first page text
function toggleText() {
    var text = document.getElementById("instructions");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  
  function clearReload(){
    sessionStorage.removeItem("object");
    window.location.href = '../index.html'
}