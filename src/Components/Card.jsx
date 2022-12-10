import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const {favs, setFavs} = useContext(ContextGlobal)
  
  
const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs(favs)
    let isFav = false 
        // Obtiene favoritos del localStorage
        favs.forEach(element => {
            if (element.id === id) {
                isFav = true
                favs.splice(favs.indexOf(element),1)
            }
        })
        if (isFav === false) {
            favs.push({"name": name, "username": username,"id": id})
            localStorage.setItem("favs", JSON.stringify(favs))
            alert(`${name} se agregó a favs`)
        } else {
            localStorage.setItem("favs", JSON.stringify(favs))
            alert(`${name} se eliminó de favs`)
        }
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <img src="/images/doctor.jpg" alt="doctor"/>
      <Link to={`/${id}`}>
        <p>{name}</p>
      </Link>
      <p>{username}</p>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
    
  );
};

export default Card;
