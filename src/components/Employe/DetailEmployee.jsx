import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
export default function Detail() {

    const list = useSelector((state) => state.list.value)
    const name = useParams();
  return (
    <>
        {list.map(e => (
            e.nom === name ? 
            <div>
                <img src={e.image} alt="" />
                <p>Nom : {e.nom}</p>
                <p>Prenom : {e.prenom}</p>
                <p>Fonction : {e.fonction}</p>
            </div> : <></>
        ))}
    </>
  )
}
