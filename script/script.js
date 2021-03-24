
var fileVal=document.getElementById("files").files;
var x=document.getElementById("x");

//alert(fileVal.value);

x.addEventListener("click", ver );


function ver() {
  let contenido="";
  for(let i=0;i<fileVal.length;i++){
    contenido +=fileVal[i].name+"\n";

  }
  alert(contenido );

}