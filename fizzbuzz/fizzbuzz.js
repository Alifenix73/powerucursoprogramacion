console.log("mi primer js") 
const titulo ="fizzbuzz problem"
document.querySelector("#titulo").innerHTML = titulo

const reversa = (texto)=>{
    let text_revert = ""
    for (let index = texto.length - 1; index >= 0; index--) {
        text_revert += texto[index] 
        
    }
    return text_revert
}
console.log(reversa("Carolina")) 
const nombre = reversa("Carolina")
document.querySelector("#titulo").innerHTML = nombre