import React, { useState, useEffect } from 'react';
const ImageLoader = ({ src, className }) => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null);

    useEffect(() => {
        setLoading(true);
        setImage(null);
        const img = new Image();

        img.src = src;
        img.onload = () => {
            setLoading(false);
            setImage(src);
        };
        img.onerror = () => {
            setLoading(false);
            setImage(null);
        };
    }, [src]);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <img src={image} alt="loading" className={className} /> 
            )}
        </>
    );
}


export default ImageLoader;