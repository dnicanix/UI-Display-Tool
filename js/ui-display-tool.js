var input = document.getElementById("inputFile");
var output = document.getElementById("inputContent");

input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      output.textContent = e.target.result;
      output.value = output.textContent;
      sessionStorage.setItem("inputContent", output.value);
    });
    reader.readAsBinaryString(myFile);
  }
});