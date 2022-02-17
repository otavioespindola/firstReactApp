import React, { useEffect, useState } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLInk from "../../shared/descriptionWithLink";
import Form from "./form"

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellites(props.id).then( data => {
            setSatellites(data["satellites"])
        })
    },[])   

    const addSatellite = (newSatellite) => {
        setSatellites([...satellites, newSatellite])
    }

    return (
        <>
            <h2>{props.name}</h2>
            <DescriptionWithLInk description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
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