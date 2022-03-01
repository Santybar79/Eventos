class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
    }
}

let formPersona = document.getElementById('formPersona')
let botonPersonas = document.getElementById('botonPersonas')
let divPersonas = document.getElementById('divPersonas')

let personas = []

// Evento

formPersona.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let edad = document.getElementById('edad').value
    let altura = document.getElementById('altura').value

    const persona = new Persona(nombre, apellido, edad, altura)
    personas.push(persona)

    console.log(personas)
    formPersona.reset()
})

botonPersonas.addEventListener('click', () => {
    if (personas.length !== 0) {
        divPersonas.innerHTML = ""
        personas.forEach((persona, indice) => {
            divPersonas.innerHTML += `
                <div class="card" id="persona${indice}" style="width: 18rem;">
                    <div class="card-body">
                        <h4 class="card-title">${persona.nombre}</h4>
                        <p class="card-text">Apellido: ${persona.apellido}</p>
                        <p class="card-text">Edad: ${persona.edad}</p>
                        <p class="card-text">Altura: ${persona.altura} cm.</p>
                        <button class="btn btn-secondary">Eliminar</button>
                    </div>
                </div>
            
            `
        })
    } else {
        divPersonas.innerHTML = "No se agrego ningun persona"
    }

})