import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

const {Theme, handleClick} = useContext(ContextGlobal)

  return (
    <nav style={{background:Theme.background, color:Theme.color}}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={"/"}> <h1><span>D</span>H Odonto</h1> </Link>

      <div>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
        <Link to="/favs"><h3>Favs</h3></Link>
        
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleClick }>🌙</button>
      </div>

    </nav>
  )
}

export default Navbar