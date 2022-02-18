import React, { useEffect, useState } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLInk from "../shared/descriptionWithLink";
import Form from "./form"
import {useParams, useHistory, Redirect} from "react-router-dom"



async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({})
    const [redirect, setRedirect] = useState(false)
    let {id} = useParams();
    let history = useHistory()


    useEffect(() => {
        getPlanet(id).then( data => {
            setSatellites(data["satellites"])
            setPlanet(data["data"])
        }, error => {
            setRedirect(true);
        })
    },[])   

    const goToPlanets = () => {
        history.push('/');        
    }

    const addSatellite = (newSatellite) => {
        setSatellites([...satellites, newSatellite])
    }

    if (redirect) return <Redirect to="/" /> 

    return (
        <>
            <button type="button" onClick={goToPlanets}> Botão de Voltar </button>
            <h2>{planet.name}</h2>
            <DescriptionWithLInk description={planet.description} link={planet.link} />
            <GrayImg img_url={planet.img_url} gray={planet.gray} />
            <h4>Satelites</h4>
            <hr/>
             <Form addSatellite={addSatellite} />
            <hr/>
            
            <ul>
                {
                    satellites.map((satellite, index) =>
                        <li key={index} >{satellite.name}</li>
                    )
                }
            </ul>
            <hr />
        </>
    )
}

export default Planet
