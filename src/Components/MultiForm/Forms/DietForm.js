import React, {useState} from 'react'
import './Forms.css'

export default function DietForm(props) {

  const [formData, setFormData] = useState({
    dietForm: 'nodiet'
  })

    const handleRadio = (e) => {
      setFormData({
        dietFor: e.target.value
      })
    }

    console.log(formData)
    const preventFunc = (e) => e.preventDefault();

  return (
    <form onSubmit={preventFunc} className="diet-form">
        <p>Quel est ton régime alimentaire ? </p>
        <label htmlFor="nodiet">Pas de régime alimentaire</label>
        <input onChange={handleRadio} type="radio" name='diet' id='nodiet' value='nodiet'/>

        <label htmlFor="homnivore">homnivore</label>
        <input onChange={handleRadio} type="radio" name='homnivore' id='nhomnivore' value='homnivore'/>

        <label htmlFor="vegan">Végan</label>
        <input onChange={handleRadio} type="radio" name='vegan' id='vegan' value='vegan'/>

        <label htmlFor="vegetarien">Végétarien</label>
        <input onChange={handleRadio} type="radio" name='vegetarien' id='vegetarien' value='vegetarien'/>

        <button onClick={() => props.modifyIndex(3, formData)} >Valider</button>
    </form>
  )
}
