import React, { useState } from "react";
import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart, AiFillEdit } from "react-icons/ai";
import Modal from "../Modal";

const Colaborador = (props) => {
    const { nombre, link, foto, categoria, id, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like, editarCardVideo, equipos } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nombreNuevo, setNombreNuevo] = useState(nombre);
    const [linkNuevo, setLinkNuevo] = useState(link);
    const [fotoNueva, setFotoNueva] = useState(foto);
    const [categoriaNueva, setCategoriaNueva] = useState(categoria);

    const manejarEdicion = (e) => {
        e.preventDefault();
        editarCardVideo({ id, nombre: nombreNuevo, link: linkNuevo, foto: fotoNueva, categoria: categoriaNueva, fav });
        setIsModalOpen(false);
    };

    const manejarLimpiar = () => {
        setNombreNuevo("");
        setLinkNuevo("");
        setFotoNueva("");
        setCategoriaNueva("");
    };
    
    return (
        <div className="colaborador">
            <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
            <AiFillEdit onClick={() => setIsModalOpen(true)} className="editar" />
            <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
                <img src={foto} alt={nombre} />
            </div>

            <div className="info">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h4>{nombre}</h4>
                </a>
                {fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form className="form-group" onSubmit={manejarEdicion}>
                    <h2>Editar Card Video:</h2>

                    <label>Nombre:</label>
                    <input type="text" value={nombreNuevo} onChange={(e) => setNombreNuevo(e.target.value)} required />

                    <label>Video:</label>
                    <input type="url" value={linkNuevo} onChange={(e) => setLinkNuevo(e.target.value)} required />

                    <label>Imagen:</label>
                    <input type="url" value={fotoNueva} onChange={(e) => setFotoNueva(e.target.value)} required />

                    <label>Categoría:</label>
                    <input type="text" value={categoriaNueva} onChange={(e) => setCategoriaNueva(e.target.value)} required /> 

                    <div className="modal-botones">
                        <button className="modal-guardar" type="submit">Guardar</button>
                        <button className="modal-limpiar" type="button" onClick={manejarLimpiar}>Limpiar</button>         
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Colaborador;