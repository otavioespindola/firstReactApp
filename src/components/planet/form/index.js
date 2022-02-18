import React, {useState, useEffect } from "react";

const initialState = {
    name: ''
}

const Form = (props) => {

    const [fields, setFields] = useState (initialState)

    const handleFieldsChange = (e) => setFields(
        {
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value 
        });
    
    const handleSubmit = (e) => {
        props.addSatellite(fields);
        e.preventDefault();
        setFields(initialState);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    {/* atributo "name" do input deve corresponder com a chave do arquivo Json */}
                    <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange} />
                </div>
                <br/>
                <input type="submit" value='Adcionar Satelite' />
            </form>
        </>
    )
}

export default Form