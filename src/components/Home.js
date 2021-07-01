import React from "react";
import image from "../SA.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="San Antonio River" className="absolute object-cover w-full h-full"/>
            <section>
                <h1>Hello, I'm Joshua Talltree</h1>
            </section>
        </main>
    )
}