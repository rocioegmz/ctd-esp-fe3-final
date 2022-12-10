import React from "react";
import { useState } from "react";


const Form = () => {

  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const name= user.name
    const email= user.email
    let message = document.createElement('p')

    let form = document.querySelector('form')
    if(name.length>3 && email.includes(".com")){
      message.innerHTML = `Gracias ${name}, te contactaremos cuanto antes vía mail.`
      form.after(message)
    } else {
      message.innerHTML = `Por favor verifique su información nuevamente.`
      form.after(message)
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e)=> setUser({...user, name: e.target.value})}/>
        <input type="email" placeholder="E-mail" onChange={(e)=> setUser({...user, email: e.target.value})}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
