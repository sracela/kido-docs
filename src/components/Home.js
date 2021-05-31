import React from 'react';
import image from '../bg.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="hd pattern wallpaper" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl font-bold leading-none lg:leading-snug">Bienvenido a la Documentación de KIDO.</h1>
            </section>
        </main>
    )
}