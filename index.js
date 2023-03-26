
const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", (event) => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id) 

        const elem_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", (event) => {
        //console.log("He terminado de arrastar el parrafo: " + parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault()

        event.dataTransfer.dropEffect = "link"
    })

    seccion.addEventListener("drop", (event) => {
        console.log("Drop")

        const id_parrafo = event.dataTransfer.getData("id")

        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", (event) =>{
    event.preventDefault()
    event.dataTransfer.dropEffect = "link"
})

papelera.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)

    console.log(`Elemento ${parrafo.innerText} eliminado`)
    
    document.getElementById(id_parrafo).remove()
})