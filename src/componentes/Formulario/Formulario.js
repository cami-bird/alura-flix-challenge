import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [link, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [categoria, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            link,
            foto,
            categoria
        }
        registrarColaborador(datosAEnviar)
        limpiarFormulario()
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
        limpiarFormularioEquipo()
    }

    const limpiarFormulario = () => {
        actualizarNombre("")
        actualizarPuesto("")
        actualizarFoto("")
        actualizarEquipo("")
    }

    const limpiarFormularioEquipo = () => {
        actualizarTitulo("")
        actualizarColor("")
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para agregar nuevo video:</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar título del video"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Video"
                placeholder="https://www.youtube.com/embed/PztCEdIJITY?si=_Y_wtNwbO0AEE2OX"
                required
                valor={link}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Imagen"
                placeholder="https://img.youtube.com/vi/PztCEdIJITY/hqdefault.jpg"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={categoria}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <div className="botones">
                <Boton>
                    Agregar
                </Boton>
                <Boton onClick={limpiarFormulario}>
                    Limpiar    
                </Boton> 
            </div>

        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Aqui puedes crear una nueva categoría:</h2>
            <Campo
                titulo="Categoría"
                placeholder="Ingresar categoría"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar categoría</Boton>
        </form>
    </section>
}

export default Formulario