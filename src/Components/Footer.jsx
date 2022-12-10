import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {Theme} = useContext(ContextGlobal)
  return (
    <footer style={{background:Theme.background, color:Theme.color}}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
