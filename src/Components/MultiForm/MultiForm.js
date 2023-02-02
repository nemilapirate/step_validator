import React, {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'
import CardBegin from './Card/CardBegin'
import CardEnd from './Card/CardEnd'
import DietForm from './Forms/DietForm'

export default function MultiForm() {

    const [formIndex, setFormIndex] = useState(1)
    const [allFormData, setAllFormData] = useState({
        dietForm: "",
        fooodStyle: [],
        allergies: [],
        prefs: {}
    })
    const modifyIndex = (index, data) => {
      setFormIndex(index)

      if (data) {
        // On copie notre objet
        const newData = {...allFormData}
        // On récupère la première propriété
        const firstPropNewData = Object.keys(data)[0];
        // NewData devien ce qu'on recupère dans notre objet (diet ...ce que l'utilisateur valide)
        newData[firstPropNewData] = data[firstPropNewData];
        setAllFormData(newData);
      }
    }
  return (
    <div className='container-multiform'>
      <Indicator />
      { formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} />
       : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} /> 
       : ""}
    </div>
  )
}
