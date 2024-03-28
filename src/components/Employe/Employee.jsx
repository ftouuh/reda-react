import React from "react";
import './Employee.css'
import { Link } from 'react-router-dom';
export default function Employee(props) {


    return (
        <>
            <Link to={`/${props.name}`}>
                <div className="employee">
                    <div className="ima5i">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="nami">
                        <p>{props.name}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}