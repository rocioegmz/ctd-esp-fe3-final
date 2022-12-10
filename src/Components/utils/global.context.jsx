import { useState } from "react";
import { createContext } from "react";

export const initialState = {theme: {
  light: {
    color: 'black',
    background: 'white'
  },
  dark: {
    color: 'white',
    background: '#504949'
  }
}, 
data: [], 
fav:JSON.parse(localStorage.getItem("favs"))
}


export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favs, setFavs] = useState(initialState.fav)

  const [Theme, setTheme] = useState(initialState.theme.light)

  const handleClick = () => {
    
    if (Theme === initialState.theme.dark) setTheme(initialState.theme.light)
    if (Theme === initialState.theme.light) setTheme(initialState.theme.dark)
  }


  return (
    <ContextGlobal.Provider value={{favs, setFavs, Theme, handleClick}}>
      {children}
    </ContextGlobal.Provider>
  );
};




