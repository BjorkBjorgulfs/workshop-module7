'use client';
import React, { useState } from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'submit'| 'button';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const ButtonStyle: React.CSSProperties = {
        backgroundColor: isHovered ? 'lightblue' : 'white',
        color: isHovered ? 'white' : 'black',
        padding: '10px 20px',
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <button
            onClick={onClick}
            type={type}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={"flex items-center justify-center rounded-2xl h-10 min-w-[178px] border-none px-7 text-lg bg-teal-500 cursor-pointer transition-colors duration-300"}
        >
            {label}
        </button>
    );
};

export default Button;