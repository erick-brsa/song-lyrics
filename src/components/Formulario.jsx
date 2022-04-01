import { useState } from "react"
import useLetras from "../hooks/useLetras"

const Formulario = () => {
	const { setAlerta, busquedaLetra } = useLetras()

	const [busqueda, setbusqueda] = useState({
		artista: "",
		cancion: ""
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		if (Object.values(busqueda).includes("")) {
			setAlerta("Coloca nombre del artista y canción")
		}
        setbusqueda(busqueda)
        busquedaLetra(busqueda)
		// setAlerta("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<legend>Busca por Artistas y Canción</legend>
			<div className="form-grid">
				<div className="">
					<label htmlFor="artista">Artista</label>
					<input
						type="text"
						name="artista"
						placeholder="Nombre de Artista"
						value={busquedaLetra.artista}
						onChange={(e) =>
							setbusqueda({
                                ...busqueda,
								[e.target.name]: e.target.value
							})
						}
					/>
				</div>
				<div className="">
					<label htmlFor="cancion">Canción</label>
					<input
						type="text"
						name="cancion"
						placeholder="Nombre de la canción"
						value={busquedaLetra.cancion}
						onChange={(e) => setbusqueda({
                                ...busqueda,
								[e.target.name]: e.target.value
							})
						}
					/>
				</div>
				<input type="submit" value="Buscar" />
			</div>
		</form>
	)
}

export default Formulario
