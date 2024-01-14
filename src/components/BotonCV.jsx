import { useState } from "react";
const BotonCV = () => {
    const [alert, setAlert] = useState(null);
    const handleClick = () => {
        setAlert(
            <div class="alert alert-success" role="alert">
                Curriculum Descargado!
            </div>
        );
        setTimeout(() => {
            setAlert(null)
        }, 1000);
    }


    const rutaCV = "https://bill.caribito.com/bill/src/Vill%20Curriculum%20Programador.pdf"
    return (
        <>
            <a href={rutaCV} onClick={handleClick} download="Curriculum-Billalbert.pdf" className='ButtonLink' id="CV">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-person-fill" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
                </svg>
                CV
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-bar-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6" />
                </svg>
                {alert}
            </a>
        </>
    )
}

export default BotonCV
