import React, {useState}  from "react";

const initialState = {
    name: '',
        description: '',
        link: '',
        img_url: '',
}

const Form = (props) => {
    const [fields, setFields] = useState({initialState})

    const handleFieldsChange = (e) => setFields(
        {
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value //atributo "name" do input deve corresponder com a chave do arquivo Json
        });

    const handleSubmit = (e) => {
        props.addPlanet(fields)
        e.preventDefault();
        setFields(initialState)
    }

    return (
        <>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="description">Descripton: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="link">Link: </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange} />
                </div>
                <div>
                    <label htmlFor="img_url">Endereço da Imagem: </label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} />
                </div>
                <br/>
                <input type="submit" value="Adicionar"/>
            </form>
        </>
    )
}

export default Form;