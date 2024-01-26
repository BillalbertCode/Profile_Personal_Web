import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
const FormContact = () => {
    const [state, handleSubmit] = useForm("xayrnnql");

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation')
        console.log(forms)
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    }, [])
    
    if (state.succeeded) {
        return <p>Proceso finalizado</p>;
    }

    return (
        <>
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="control-group " >
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="name">Usuario:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Usuario (Nombre)"
                            name="name"
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            error={state.errors} />
                        <div className="invalid-feedback">
                            Este Campo es requerido.
                        </div>
                    </div>
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="empresa">Empresa:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="empresa"
                            placeholder="Nombre de la Empresa o Personal"
                            name="empresa"
                            required
                        />
                        <ValidationError
                            prefix="Empresa"
                            field="empresa"
                            error={state.errors} />

                        <div className="invalid-feedback">
                            Este Campo es requerido.
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Correo Electrónico (name@ejemp.com)"
                            name="email"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            error={state.errors} />
                        <div className="invalid-feedback">
                            Ingrese un Correo Electronico valido.
                        </div>
                        <div className="valid-feedback">
                            Se ve bien!
                        </div>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label htmlFor="message">Asunto: </label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            error={state.errors} />
                        <div className="invalid-feedback">
                            Este Campo es requerido.
                        </div>
                    </div>
                </div>
                <br />
                <div id="success"></div>
                <div className="form-group button-form">
                    <button className="btn btn-primary btn-xl" type="submit" disable={state.submitting}>
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </>

    )
}

export default FormContact
