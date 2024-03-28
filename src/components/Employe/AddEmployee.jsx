import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from './actions/employeeActions'

export default function AddEmployee() {

    const [emp, setEmp] = useState(
        {
            image: '',
            nom: '',
            prenom: '',
            fonction: '',
        })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmp(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee(emp));
        setEmp({
            image: '',
            nom: '',
            prenom: '',
            fonction: '',
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name='image' value={emp.image} onChange={handleChange} placeholder="Image URL" />
                <input type="text" name='nom' value={emp.nom} onChange={handleChange} placeholder="Nom" />
                <input type="text" name='prenom' value={emp.prenom} onChange={handleChange} placeholder="Prénom" />
                <input type="text" name='fonction' value={emp.fonction} onChange={handleChange} placeholder="Fonction" />
                <button type="submit">Ajouter</button>
            </form>
        </>
    )
}
