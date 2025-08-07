import React from "react";

type FormNavBtnsProps = {
    svgSrc: string; // Path to SVG file with embedded icon+text
    alt: string;    // Accessible label
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
};

const FormNavBtns: React.FC<FormNavBtnsProps> = ({
                                                     svgSrc,
                                                     alt,
                                                     onClick,
                                                     type = "button",
                                                     className = "",
                                                 }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            aria-label={alt}
            className={`form-nav-btn ${className}`}
        >
            <img src={svgSrc} alt={alt} style={{ width: '100%', height: 'auto' }} />
        </button>
    );
};

export default FormNavBtns;
