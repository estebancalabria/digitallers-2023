import { useSelector } from "react-redux";
import Tabla from "../components/Tabla";


const TablaLibros = () => {
    const listaLibros = useSelector(state => state.libros);
    return (<Tabla
        columnas={["nombre", "autor"]}
        items={listaLibros} />);
}


export default TablaLibros;