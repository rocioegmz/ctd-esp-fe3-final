import { useParams } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {Theme} = useContext(ContextGlobal)
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams()

  const [list, setList] = useState({})

  useEffect(() => {
    const fetchData = async () => {
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(res => setList(res.data))
    }
    fetchData()
})



  return (
    <div style={{background:Theme.background, color:Theme.color}}>
      <h1>Detail Dentist {list.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Telephone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{list.name}</td>
            <td>{list.email}</td>
            <td>{list.phone}</td>
            <td>{list.website}</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default Detail