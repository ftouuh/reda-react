import React from "react";
import { useSelector } from 'react-redux'
import Employee from './Employee'
export default function List() {

    const list = useSelector((state) => state.list.value)
    return (
        <>
            <div className="lista">
                {list.map(e => (
                    <Employee img={e.image} name={e.nom} />
                ))}
            </div>
        </>
    );
}
