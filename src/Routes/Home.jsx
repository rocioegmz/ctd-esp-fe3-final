import React, { useContext } from 'react'
import Card from '../Components/Card'

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {Theme} = useContext(ContextGlobal)

  const [list, setList] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
      axios(url)
      .then(res => setList(res.data))
      //.then(res => console.log(res.data))
  }, [])

  return (
    <main className="" style={{background:Theme.background, color:Theme.color}}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

          {list.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id} />)}
        
      </div>
    </main>
  )
}

export default Home