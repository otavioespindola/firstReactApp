import React, { useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form"

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect( ()=> {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, []) 

    const addPlanet = (newPlanet) => {
        setPlanets([...planets, newPlanet])
    }

    // const removeLast = () => {
    //     let newPlanets = [...planets];
    //     newPlanets.pop();
    //     setPLanets(newPlanets);
    // }

    // const duplicateLastPlanet = () => {
    //     let lastPlanet = planets[planets.length - 1];
    //     setPLanets([...planets, lastPlanet]);
    // }

    return (
        <>
            <h1>Planetas</h1>
            <hr/>
            <Form addPlanet={addPlanet} />       
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index}
                />
            )}
        </>
    )
}



export default Planets