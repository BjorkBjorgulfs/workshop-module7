'use client';
import React, { useState } from 'react';

interface InputProps {
    placeholder: string;
    type: string;
    value: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, value }) => {
    const [text, setText] = useState('');
/*
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setText(newText);
        onTextChange(newText);
    };
*/
    return (
        <input type={type} value={value} onChange={(e) => setText(e.target.value)} placeholder={placeholder} />
    );
};

export default Input;