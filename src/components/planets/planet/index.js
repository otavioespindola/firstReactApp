import React, { useEffect, useState } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLInk from "../../shared/descriptionWithLink";
import Form from "../../planet/form"
import {Link} from "react-router-dom"


async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data
}

const Planet = (props) => {

    return (
        <>
            <Link to={`/planet/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>             
            <DescriptionWithLInk description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            
            <hr/>            
        </>
    )
}

export default Planet