import React from "react";
import image from "../SA.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="San Antonio Downtown" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold lg:leading-snug home-name">Hello, I'm Joshua</h1>
            </section>
        </main>
    )
}