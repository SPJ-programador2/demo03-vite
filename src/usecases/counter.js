export const contador = (element) =>{
    let suma = 0;
    element.innerHTML = `<h3>Hola esto es un boton ${suma}</h3>`;
    element.addEventListener('click', () => {
        suma + 1;
        element.innerHTML = `<h3>Hola esto es un boton ${suma}</h3>`;
    })
    
}