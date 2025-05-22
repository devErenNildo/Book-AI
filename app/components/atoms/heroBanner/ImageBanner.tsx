"use client"
import Image, { StaticImageData } from "next/image";

export default function ImageBanner({ image }: { image:StaticImageData }) {
    return (
        <Image
            src={image}
            alt="Logo de um livro com recursos de inteligencia artificial"
            width={400}
        />
    );
}
