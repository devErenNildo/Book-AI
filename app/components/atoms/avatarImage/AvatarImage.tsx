import { PropsImage } from "@/app/types/interface/interfaces";
import Image from "next/image";

export default function AvatarImage({ src, alt, width, height }: PropsImage) {
    return (
        <img src={src} alt={alt} width={width} height={height} className="rounded-full"/>
    );
}