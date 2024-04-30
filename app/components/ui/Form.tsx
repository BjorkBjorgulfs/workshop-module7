'use client';
import { cn } from "@/utils/cn";
import Button from "./Button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

interface SearchBoxProps {
    className?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    initialCity?: string;
    //onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function SearchBox( { value, onChange, className, initialCity }: SearchBoxProps ) {
    const [text, setText] = useState('');

    /*
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Reset from field after submission
        setText('');
    };
*/

    return (
        <form action="/weather-server"
            method="get"
            className={cn("flex relative items-center justify-center h-10")}>
            <input 
                type="text" 
                placeholder="Search a location" 
                defaultValue={initialCity}
                className={`px-4 py-2 w-[230px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-full ${className}`}
                
            />
            <Button label="Get Weather" type="submit" />
        </form>
    );
}