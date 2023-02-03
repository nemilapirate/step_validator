import React, {useState} from 'react'

export default function Preferences(props) {

    const[formData, setFormData] = useState({
        prefs: {
           preferences: "",
           unliked: "", 
        },
    });

    const handleTxtArea = (e, pref) => {
        if(pref === "preferences") {
            setFormData({
                prefs: {
                    ...formData.prefs, preferences: e.target.value
                }
            })
        } else if (pref ==="unliked") {
            setFormData({
                prefs : {
                    ...formData.prefs, unliked: e.target.value
                }
            })
        }
    }

    const preventFunc = (e) => {
        e.preventDefault();
        props.modifyIndex(6, formData)
        }


    const handleReturn = () => {
        props.modifyIndex(4);
      };
  return (
    <form onSubmit={preventFunc} className="preferences-form">
        <p>Quels sont tes préférences alimentaires.</p>
        <label htmlFor="prefered">Tes aliments préférés, séparés par une virgule : </label>
        <textarea onChange={(e) => handleTxtArea(e, "preferences")} id="prefered" placeholder='Tous ceux que tu aimes'></textarea>
        <label htmlFor="unliked">Tes aliments détestés, séparés par une virgule : </label>
        <textarea onChange={(e) => handleTxtArea(e, "unliked")} id="unliked" placeholder="Tous ceux que tu n'aimes pas"></textarea>

        <div className="container-nav-btns">
            <button type='button' onClick={handleReturn} className='prev'>Précédent</button>
            <button>Valider</button>
        </div>
    </form>
  )
}
