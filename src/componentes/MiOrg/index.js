import { MdOutlineLibraryAdd } from "react-icons/md";
import "./MiOrg.css"

const MiOrg = (props) => {
    console.log(props)
    return <section className="orgSection">
        <h3 className="title">Nuevo Video</h3>
        <MdOutlineLibraryAdd className="iconoAgregar" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg