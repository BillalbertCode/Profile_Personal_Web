import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import RepeatSvg from '../assets/icons/RepeatSvg';
const FormContact = () => {
    const [state, handleSubmit, reset] = useForm("xayrnnql");

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation')
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
    const handleReset = () => {
        reset()
    }
    
    if (state.succeeded) {
        return (
            <div className="contact-section">
                <div className="containerForm">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading text-uppercase">¡Gracias por ponerte en contacto con nosotros!</h2>
                            <p className="message-pregunta" >Su Mensaje ha sido enviado exitosamente.</p>
                            <hr />
                            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible. Mientras tanto, te invitamos a explorar más sobre nuestro trabajo y proyectos en nuestras redes sociales y GitHub.</p>
                            <a style={{ border: '1px solid currentcolor', cursor: 'pointer' }} className='ButtonLink' onClick={handleReset}>
                                Nuevo Mensaje
                                <RepeatSvg />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="contact-section">
                <div className="containerForm">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading text-uppercase">Contacto</h2>
                            <p className="message-pregunta" >¿Quieres enviar un Mensaje Directo?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="containerForm2 mx-auto">
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
                                        minLength={8}
                                        maxLength={25}
                                        required
                                    />
                                    <ValidationError
                                        prefix="Name"
                                        field="name"
                                        error={state.errors} />
                                    <div className="invalid-feedback">
                                        Este Campo es requerido, mínimo 8 caracteres.
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
                                        minLength={8}
                                        maxLength={40}
                                        required
                                    />
                                    <ValidationError
                                        prefix="Empresa"
                                        field="empresa"
                                        error={state.errors} />

                                    <div className="invalid-feedback">
                                        Este Campo es requerido. mínimo 8 caracteres
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
                                        minLength={16}
                                        maxLength={40}
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
                                        style={{
                                            height: "100px",
                                            width: "100%",
                                            resize: "none"
                                        }}
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        minLength={10}
                                        maxLength={140}
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        error={state.errors} />
                                    <div className="invalid-feedback">
                                        Este Campo es requerido, mínimo 10 caracteres.
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormContact
