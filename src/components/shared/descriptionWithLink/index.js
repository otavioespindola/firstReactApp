import React from "react";

const DescriptionWithLInk = (props) => {
    
    if (!props.description) return null;

    if (props.link) {
       return (
        <>
            <p>{props.description}</p>
            <p>
                <a href={props.link}> {props.link} </a>
            </p>            
        </>
    )  
    } else {
        return (
            <>
                <p><u>{props.description}</u></p>
            </>
        ) 
    }   
}

export default DescriptionWithLInk