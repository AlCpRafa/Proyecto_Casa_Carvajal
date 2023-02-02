//Elementos de la galeria exteriores
const extmaingallery = document.querySelector("#extmaingal");
const extcontainergallery = document.querySelector("#extgalcont");
//Elementos de la galeria interiores
const intmaingallery = document.querySelector("#intmaingal");
const intcontainergallery = document.querySelector("#intgalcont");

//Listeners
extcontainergallery.addEventListener("mousedown", (event) => {
    //Se verifica que el target sea una imagen
    if (event.target.nodeName === "IMG") {
        //Se pasa el src de la imagen en la que se ha pinchado a la imagen principal de la galeria
        extmaingallery.setAttribute('src', event.target.src)
        checkOpacity(extcontainergallery, extmaingallery);
    }
})

intcontainergallery.addEventListener("mousedown", (event) => {
    if (event.target.nodeName === "IMG") {
        intmaingallery.setAttribute('src', event.target.src)
        checkOpacity(intcontainergallery, intmaingallery);
    }
})

//Funcion que quita la clase de opacidad al nodo en el que se ha pinchado y se lo pone al resto de nodos que no lo tengan
const checkOpacity = (container, main) => {
    for (const img of container.children) {
        if (img.nodeName === "IMG") {
            if (!img.classList.contains("opacity-75")) {
                img.classList.add("opacity-75")
            }
            if (img.src === main.src) {
                img.classList.remove("opacity-75")
            }
        }
    }
}