import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fragments/InformacionCalamaFragment'
import InformacionCalamaFragment from "./fragments/InformacionCalamaFragment";
import ColorFavoritoFragment from "./fragments/ColorFavoritoFragment";

function App() {
    const [platoFavorito, setPlatoFavorito] = useState("Lasaña") // estado
//  const [count, setCount] = useState(0)
    const [color,setColor] = useState('Perú')
    const handleClick = () => { //funciones flecha
        // platoFavorito = 'Cazuela'
        //se hacen de esta forma
        setPlatoFavorito('Cazuela')
    }

  return (
    <>
        {/*dentro de estos parentesis se pueden incluir: expresiones, estados y otras*/}
        {2*2} <br />
        {platoFavorito} <br />
        <hr />

        <button className={"btn btn-primary"} type="button" onClick={handleClick}>
            Presionar para cambiar Lasaña por Cazuela
        </button>
        <hr className={"mb-4"}/>
        <InformacionCalamaFragment />
        <ColorFavoritoFragment color={color} datos={"123"} />
    </>
  )
}

export default App
