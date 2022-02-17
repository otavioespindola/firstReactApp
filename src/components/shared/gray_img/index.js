import React from "react";
import "./style.css"

const GrayImg = (props) => {
    return (
        <>
            <img className = {props.gray ? "gray_img" : "color_img"} src={props.img_url} alt="Imagem de um Planeta" />
        </>
    )

}

export default GrayImg