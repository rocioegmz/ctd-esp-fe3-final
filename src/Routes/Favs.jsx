import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {Theme} = useContext(ContextGlobal)
  const {favs} = useContext(ContextGlobal)

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid" style={{background:Theme.background, color:Theme.color}}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id}/>)}
        

      </div>
    </>
  );
};

export default Favs;
