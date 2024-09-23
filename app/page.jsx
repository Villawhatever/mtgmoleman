"use client";

import { useState, useEffect } from "react";
import { Card } from "components/card";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    const queryString = useSearchParams();

    useEffect(() => {
        const tag = queryString.get("tag");

        fetch("/api/rulings" + `${tag ? `?tag=${tag}` : ""}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [queryString])

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!data) {
        return <p>No rulings</p>
    }
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                {data.map((ruling, index) => (
                        <Card ruling={ruling} key={index}/>
                ))}
            </section>
        </main>
    );
}
