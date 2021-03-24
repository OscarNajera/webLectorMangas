
var fileVal=document.getElementById("files").files; //lectura de ficheros
var btn=document.getElementById("btn");  //etiqueta boton
var contenedor=document.getElementById("contenedor");//contenedor donde se mostraran las imagenes


 
btn.addEventListener("click", ver );  //al precionar el boton se mostraran las imagenes


function ver() {  //funcion que recorrera las imagenes y las mostrara
  let contenido="";

  for(let i=0;i<fileVal.length;i++){
      let imgtemporal=fileVal[i].name;
      insetar(imgtemporal);
  
  }

}

function insetar(ximg) {
  //alert(ximg);
  let img= document.createElement("img");
  img.setAttribute("src", "img/"+ximg)
  contenedor.appendChild(img);

}
 