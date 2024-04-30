'use client';
import { useState, useEffect } from "react";
import { DataType } from "../path/to/aboutMe"; 

export default function Page() {
    const [awesomeData, setAwesomeData] = useState<DataType[]>([]);

    useEffect(() => {
        async function getAwesomeData() { 
                const response = await fetch('../api/weather');
                const data = await response.json();
                setAwesomeData(data);
        }
        getAwesomeData();
    }, []);

    return (
        <div>
            {awesomeData && (
                <div>
                    {awesomeData.map((data) => (
                        <div key={data.id}>
                            <h2>{data.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


