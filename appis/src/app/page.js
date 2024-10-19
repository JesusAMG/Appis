import ComponentePokemon from "./components/pokemon";
import ComponentePerro from "./components/perros";
import ComponenteGato from './components/gatos'
import './globals.css'

export default function Inicio() {
  return (
    <main>
      <h1>Showcase de API's</h1>
      <div className="contenedor-api">
        <div className="componente-api">
          <ComponentePokemon />
        </div>
        <div className="componente-api">
          <ComponentePerro />
        </div>
        <div className="componente-api">
          <ComponenteGato />
        </div>
      </div>
    </main>
  )
}