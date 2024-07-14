import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    categoria: "Front End",
    nombre: "¿Cuándo usar let, var y const?",
    foto: "https://img.youtube.com/vi/PztCEdIJITY/hqdefault.jpg",
    link: "https://www.youtube.com/embed/PztCEdIJITY?si=_Y_wtNwbO0AEE2OX",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Front End",
    nombre: "Cómo volverse un desarrollador Front End",
    foto: "https://img.youtube.com/vi/-Ou5c3A225k/hqdefault.jpg",
    link: "https://www.youtube.com/embed/-Ou5c3A225k?si=WaNRTxSFZnosRuaQ",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Back End",
    nombre: "Inmersión Java: Tus primeros pasos con Java",
    foto: "https://img.youtube.com/vi/C6ohBxRSVj4/hqdefault.jpg",
    link: "https://www.youtube.com/embed/C6ohBxRSVj4?si=RfWaP1ItF6qr7jw3",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Back End",
    nombre: "Desmistificando el Back-End",
    foto: "https://img.youtube.com/vi/LLt7FreeHfQ/hqdefault.jpg",
    link: "https://www.youtube.com/embed/LLt7FreeHfQ?si=c_4ZGcA4oKHDaG6m",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Innovación y Gestión",
    nombre: "¿Qué son las Soft Skills?",
    foto: "https://img.youtube.com/vi/vhwspfvI52k/hqdefault.jpg",
    link: "https://www.youtube.com/embed/vhwspfvI52k?si=T9hKU7Xn_I82Wo5Q",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Innovación y Gestión",
    nombre: "Técnicas para mejorar tu aprendizaje",
    foto: "https://img.youtube.com/vi/KSyqCUAr2CU/hqdefault.jpg",
    link: "https://www.youtube.com/embed/KSyqCUAr2CU?si=kN_seC5Ivxz7kkNW",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Data Science",
    nombre: "Python para Data Science",
    foto: "https://img.youtube.com/vi/JMKZMa0tMhQ/hqdefault.jpg",
    link: "https://www.youtube.com/embed/JMKZMa0tMhQ?si=X_pzYB9duVBHhRfv",
    fav: false
  },
  {
    id: uuid(),
    categoria: "Data Science",
    nombre: "¿Por qué estudiar Data Science?",
    foto: "https://img.youtube.com/vi/7_UXo-aqAeM/hqdefault.jpg",
    link: "https://www.youtube.com/embed/7_UXo-aqAeM?si=IWjIXHKLavaNp2Z5",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

    //Editar card del video
    const editarCardVideo = (colaboradorActualizado) => {
      console.log("Editar card video", colaboradorActualizado)
      const nuevosColaboradores = colaboradores.map((colaborador) => {
        if (colaborador.id === colaboradorActualizado.id) {
          return colaboradorActualizado
        }
        return colaborador
      })
      actualizarColaboradores(nuevosColaboradores)
    }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((categoria) => categoria.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((categoria) => <Equipo
          datos={categoria}
          key={categoria.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.categoria === categoria.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          editarCardVideo={editarCardVideo}
          equipos={equipos}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
