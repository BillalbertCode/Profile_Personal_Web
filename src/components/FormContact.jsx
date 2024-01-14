import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
const FormContact = () => {
    const [state, handleSubmit] = useForm("xayrnnql");
    const [alert, setalert] = useState(null);
    if (state.succeeded) {
        return <p>Proceso finalizado</p>;
    }
    const handleClick = () => {
        if (state.succeeded) {
            setalert(
                <div className="alert alert-success" role="alert">
                    Mensaje enviado exitosamente! 🥳
                </div>
            );
        } else {
            setalert(
                <div className="alert alert-danger" role="alert">
                    Error al enviar el mensaje 😓 <br />
                    Contacta por otro de los medios.
                </div>
            );
        }

        setTimeout(() => {
            setalert(null)
        }, 5000);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="name">Nombre o Empresa</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nombre"
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            error={state.errors} />
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Correo Electrónico"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            error={state.errors} />
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="message">Mensaje </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Mensaje // // No olvide enviar informacion clave para estar en contacto"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            error={state.errors} />
                    </div>
                </div>
                <br />
                <div id="success"></div>
                <div  className="form-group">
                    <button  className="btn btn-primary btn-xl" type="submit" disable={state.submitting} onClick={handleClick} >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
                    {alert}
        </>
    )
}

export default FormContact
