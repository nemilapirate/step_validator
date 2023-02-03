import React, {useState} from 'react'
import './MultiForm.css'
import Indicator from './Indicator/Indicator'
import CardBegin from './Card/CardBegin'
import CardEnd from './Card/CardEnd'
import DietForm from './Forms/DietForm'
import FoodStyle from './Forms/FoodStyle'
import AllergiesForm from './Forms/AllergiesForm'
import Preferences from './Forms/Preferences'

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

  console.log(FormData);

  const elements = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <AllergiesForm modifyIndex={modifyIndex} />,
    <Preferences modifyIndex={modifyIndex} />,
    <CardEnd modifyIndex={modifyIndex} />,
] 


  return (
    <div className='container-multiform'>
      <Indicator formIndex={formIndex} />
      {elements.map((item, index) => {
                if((index + 1) === formIndex){
                    return elements[index]
                }
            })}
    </div>
  )
}
