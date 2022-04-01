import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {
	const { alerta, letra, cargando } = useLetras()

	return (
		<>
			<header>Búesqueda de Letras de Canciones</header>
			<Formulario />
			<main>
				{alerta ? (
					<Alerta>{alerta}</Alerta>
				) : letra ? (
					<Letra />
				) : cargando ? (
					<p>Cargando</p>
				) : (
					<p className="text-center">
						Busca letras de tus artistas favoritos
					</p>
				)}
			</main>
		</>
	)
}

export default AppLetras
